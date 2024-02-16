import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import baseQuery from "./base-query";
import { API_ROUTES } from "@/shared/enums/api-routes";
import { IRefreshTokenResponse } from "../auth/types";
import { clearUserData } from "@/shared/redux/user-slice";

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      API_ROUTES.REFRESH_TOKEN,
      api,
      extraOptions,
    );
    if (refreshResult.data && refreshResult.meta?.response?.status === 200) {
      const data = refreshResult.data as IRefreshTokenResponse;

      // store the new token
      localStorage.setItem("accessToken", data.access_token);

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    }
    if (refreshResult.data && refreshResult.meta?.response?.status === 401) {
      api.dispatch(clearUserData());
      localStorage.removeItem("accessToken");
    }
  }
  return result;
};

export default baseQueryWithReAuth;
