import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import baseQuery from "./base-query";

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  /*if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      API_ROUTES.,
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      const data = refreshResult.data as IRefreshResponse;

      // store the new token
      localStorage.setItem("accessToken", data.accessToken);

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    }
  }*/
  return result;
};

export default baseQueryWithReAuth;
