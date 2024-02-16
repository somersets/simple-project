import { createApi } from "@reduxjs/toolkit/dist/query/react";
import baseQueryWithReAuth from "@/shared/api/base-query/base-query-with-reauth";
import { IUser, IUserPhoto } from "@/shared/types/user";
import { API_ROUTES } from "@/shared/enums/api-routes";
import { IUserCreatePhoto, IUserDeletePhoto, IUserSortOrderPhoto, IUserUpdatePhoto } from "./types";

const userPhotoApi = createApi({
  reducerPath: "userPhoto",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["UserPhoto"],
  endpoints: (build) => ({
    createUserPhoto: build.mutation<IUser, IUserCreatePhoto>({
      query: ({ image, order }) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("orderImage", order.toString());
        return {
          url: API_ROUTES.USER_UPDATE_PHOTOS,
          method: "POST",
          body: formData,
        };
      },
    }),
    updateUserPhoto: build.mutation<IUserPhoto, IUserUpdatePhoto>({
      query: ({ image, image_id }) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("imageID", image_id.toString());
        return {
          url: API_ROUTES.USER_UPDATE_PHOTOS,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteUserPhoto: build.mutation<IUserPhoto, IUserDeletePhoto>({
      query: (body) => {
        return {
          url: API_ROUTES.USER_UPDATE_PHOTOS,
          method: "DELETE",
          body,
        };
      },
    }),
    sortOrderUserPhoto: build.mutation<IUserPhoto, IUserSortOrderPhoto[]>({
      query: (body) => {
        return {
          url: API_ROUTES.USER_SORT_PHOTOS,
          method: "PATCH",
          body,
        };
      },
    }),
  }),
});

export const {
  useCreateUserPhotoMutation,
  useUpdateUserPhotoMutation,
  useDeleteUserPhotoMutation,
  useSortOrderUserPhotoMutation,
} = userPhotoApi;
export default userPhotoApi;
