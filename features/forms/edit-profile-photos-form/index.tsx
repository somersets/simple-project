import * as S from "./style.styled";
import { useAppSelector } from "@/shared/redux/store";
import { selectUserData } from "@/shared/redux/user-slice/selectors";
import { useEffect, useState } from "react";
import { IUserPhoto } from "@/shared/types/user";
import { useTranslations } from "next-intl";
import { Button, Typography } from "@/shared/components";
import toast from "react-hot-toast";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import PhotoItem from "@/features/forms/edit-profile-photos-form/components/photo-item";
import {
  useCreateUserPhotoMutation,
  useDeleteUserPhotoMutation,
  useSortOrderUserPhotoMutation,
  useUpdateUserPhotoMutation,
} from "@/shared/api/userPhoto";
import { callToastFromError } from "@/shared/components/toast/utils";

export default function EditProfilePhotosForm() {
  const t = useTranslations("editProfilePhotos");
  const [userPhotos, setUserPhotos] = useState<IUserPhoto[]>([]);
  const [createPhoto] = useCreateUserPhotoMutation();
  const [updatePhoto] = useUpdateUserPhotoMutation();
  const [deletePhoto] = useDeleteUserPhotoMutation();
  const [sortPhotoOrder] = useSortOrderUserPhotoMutation();
  const userData = useAppSelector(selectUserData);

  useEffect(() => {
    const arr = [...(userData?.photos || [])];
    for (let i = 0; arr.length < 6; i++) {
      arr.push({ photo: "", id: i + 1 });
    }
    setUserPhotos(arr);
  }, [userData?.photos]);
  const onUpdatePhoto = (event) => {
    if (event.target.files.length) {
      try {
        updatePhoto({ image: event.target.files[0], image_id: event.target.id })
          .unwrap()
          .then((response) => {
            setUserPhotos((prevState) =>
              prevState.map((item) =>
                item.id === response.id ? response : item,
              ),
            );
          });
      } catch (e) {
        callToastFromError(e);
      }
    }
  };

  const onChangePhoto = async (event: any) => {
    if (
      event.target.files.length +
        userPhotos.filter((item) => item.photo.length).length >
      6
    ) {
      toast.error("maximum 6 photos");
      return;
    }

    setUserPhotos((prevState) => {
      const slotForFile = prevState.find((item) => item.photo.length === 0);
      const orderIndex = slotForFile ? prevState.indexOf(slotForFile) : null;
      if (slotForFile) {
        slotForFile.photo = window.URL.createObjectURL(event.target.files[0]);
      }
      const slotsWithPhotos = prevState.filter(
        (item) => item.photo?.length > 0,
      );
      const slots = prevState.filter((item) => item.photo?.length === 0);
      const result = [...slotsWithPhotos, ...slots];
      if (event.target.files.length && orderIndex) {
        const formData = new FormData();
        formData.append("image", event.target.files[0]);
        formData.append("orderImage", (orderIndex + 1).toString());
      }
      return result;
    });

    const slotsWithPhotos = userPhotos.filter((item) => item.photo.length > 0);
    try {
      await createPhoto({
        order: slotsWithPhotos.length + 1,
        image: event.target.files[0],
      })
        .unwrap()
        .then((response) => {
          console.log(response);
        })
        .finally(() => {});
    } catch (err) {
      callToastFromError(err);
    }
  };

  const onRemovePhoto = (removedPhoto) => {
    console.log(removedPhoto);
    try {
      deletePhoto({ image_id: removedPhoto.id })
        .unwrap()
        .then((response) => {
          setUserPhotos((prevState) =>
            prevState.map((item) =>
              item.id === response.id
                ? { ...item, photo: "", format: "" }
                : item,
            ),
          );
        });
    } catch (err) {
      callToastFromError(err);
    }
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      setUserPhotos((items) => {
        const oldItem = items.find((item) => item.id === active.id);
        const newItem = items.find((item) => item.id === over.id);
        const oldIndex = items.indexOf(oldItem);
        const newIndex = items.indexOf(newItem);
        const arrayMoved = arrayMove(items, oldIndex, newIndex).map(
          (item, index) => ({ ...item, order: index + 1 }),
        );

        sortPhotoOrder(
          arrayMoved.map((item) => ({ order: item.order, image_id: item.id })),
        )
          .unwrap()
          .then((response) => {
            console.log(response);
          });

        return arrayMoved;
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );
  return (
    <S.Container>
      <Typography type="h2">{t("title")}</Typography>
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <S.PhotosContainer>
          <SortableContext items={userPhotos}>
            {userPhotos.map((item, index) => {
              return (
                <PhotoItem
                  onUpdatePhoto={onUpdatePhoto}
                  onRemovePhoto={onRemovePhoto}
                  isSortable={
                    userPhotos.filter((photo) => Boolean(photo.photo.length))
                      .length > 1
                  }
                  onChangePhoto={onChangePhoto}
                  key={item.id}
                  item={item}
                />
              );
            })}
          </SortableContext>
        </S.PhotosContainer>
      </DndContext>
    </S.Container>
  );
}
