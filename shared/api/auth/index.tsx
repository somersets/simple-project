import { createApi } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "@/shared/enums/api-routes";
import { invalidateOn } from "../helpers";
import { addAccessToken } from "./adapter";
import {
  IActivateAccountResponse,
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "./types";
import baseQuery from "@/shared/api/base-query/base-query";

const userAuthApi = createApi({
  reducerPath: "userAuth",
  baseQuery: baseQuery,
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    login: build.mutation<ILoginResponse, ILoginPayload>({
      query: (loginData: ILoginPayload) => ({
        url: API_ROUTES.LOGIN,
        method: "POST",
        body: loginData,
      }),
      transformResponse: addAccessToken,
      invalidatesTags: invalidateOn({ success: ["Auth"] }),
    }),
    register: build.mutation<IRegisterResponse, IRegisterPayload>({
      query: (registerData: IRegisterPayload) => ({
        url: API_ROUTES.REGISTER,
        method: "POST",
        body: registerData,
      }),
      transformResponse: addAccessToken,
      invalidatesTags: invalidateOn({ success: ["Auth"] }),
    }),
    activateAccount: build.query<IActivateAccountResponse, string>({
      query: (activateUUID) => API_ROUTES.ACTIVATE_ACCOUNT + activateUUID,
      transformResponse: addAccessToken,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyActivateAccountQuery,
} = userAuthApi;

export default userAuthApi;
