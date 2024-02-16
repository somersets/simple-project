import * as S from "../../style.styled";
import Icon from "@/shared/components/icon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BASE_URL } from "@/shared/api/base-query/base-query";
import { API_ROUTES } from "@/shared/enums/api-routes";
import theme from "@/theme/theme";

export default function PhotoItem({
  item,
  onChangePhoto,
  onRemovePhoto,
  onUpdatePhoto,
  isSortable,
}) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: item.id,
      disabled: !isSortable,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return !item.format && !item.photo ? (
    <S.AddPhotoSlot for={item.id}>
      <input
        onChange={onChangePhoto}
        hidden
        id={item.id.toString()}
        name={item.id.toString()}
        accept="image/png, image/jpeg"
        type="file"
      />
      <Icon size="4x" icon="faPlus" />
    </S.AddPhotoSlot>
  ) : (
    <S.Photo style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <S.PhotoImageEditLayer>
        <S.EditBtn for={item.id}>
          <Icon size="2x" color="white" icon="faArrowUpFromBracket" />
          <input
            onChange={onUpdatePhoto}
            hidden
            id={item.id.toString()}
            name={item.id.toString()}
            accept="image/png, image/jpeg"
            type="file"
          />
        </S.EditBtn>
        <S.RemoveBtn onClick={() => onRemovePhoto(item)}>
          <Icon size="2x" color={theme.colors.red} icon="faTrash" />
        </S.RemoveBtn>
      </S.PhotoImageEditLayer>
      <S.PhotoImage
        width={300}
        height={300}
        alt="personal photo"
        src={
          !item.format
            ? item.photo
            : BASE_URL +
              API_ROUTES.USER_PHOTOS_STATIC +
              item.photo +
              item.format
        }
      />
    </S.Photo>
  );
}
