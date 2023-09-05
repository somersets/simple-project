import { createApi } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "@/shared/enums/api-routes";
import baseQueryWithReAuth from "@/redux/api/base-query/base-query-with-reauth";

const userAuth = createApi({
  reducerPath: "userAuth",
  refetchOnReconnect: true,
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    login: build.query<void, void>({
      query: () => ({
        url: API_ROUTES.LOGIN,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
});

export default userAuth;
