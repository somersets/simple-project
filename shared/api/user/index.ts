import { createApi } from "@reduxjs/toolkit/dist/query/react";
import baseQueryWithReAuth from "@/shared/api/base-query/base-query-with-reauth";
import { IUser } from "@/shared/types/user";
import { API_ROUTES } from "@/shared/enums/api-routes";
import { adaptAuthData } from "@/shared/api/auth/adapter";
import { IRefreshTokenResponse } from "@/shared/api/auth/types";
import userAuthApi from "@/shared/api/auth";
import { IUserUpdateData } from "@/shared/api/user/types";
import { adaptSexOrientationData } from "@/shared/api/user/adapter";
import { SelectValue } from "@/shared/types/components";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["User"],
  endpoints: (build) => ({
    currentUser: build.query<IUser, void>({
      query: () => API_ROUTES.CURRENT_USER,
      providesTags: ["User"],
      transformResponse: adaptAuthData,
    }),
    updateUserProfile: build.mutation<IUser, IUserUpdateData>({
      query: (updateData) => ({
        url: API_ROUTES.USER_UPDATE,
        method: "PUT",
        body: updateData,
      }),
    }),
    logout: build.query<"OK", void>({
      query: () => API_ROUTES.USER_LOGOUT,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        dispatch(userApi.util.resetApiState());
        dispatch(userAuthApi.util.resetApiState());
      },
    }),
    refresh: build.query<IRefreshTokenResponse, void>({
      query: () => API_ROUTES.REFRESH_TOKEN,
      providesTags: ["User"],
    }),
    sexOrientation: build.query<SelectValue[], void>({
      query: () => API_ROUTES.USER_ORIENTATION,
      providesTags: ["User"],
      transformResponse: adaptSexOrientationData,
    }),
  }),
});

export const {
  useUpdateUserProfileMutation,
  useCurrentUserQuery,
  useLazySexOrientationQuery,
  useLazyCurrentUserQuery,
  useLogoutQuery,
  useRefreshQuery,
} = userApi;
export default userApi;
