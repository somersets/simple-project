import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const realBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    // const siteLocale = localStorage.getItem("siteLocale");
    // if (siteLocale) {
    //   headers.set("site-locale", siteLocale);
    // }
    // const accessToken = localStorage.getItem("accessToken");
    // if (accessToken) {
    //   headers.set("authorization", `Bearer ${accessToken}`);
    // }
    return headers;
  },
});

const baseQuery: typeof realBaseQuery = async (args, api, extraOptions) => {
  const response = await realBaseQuery(args, api, extraOptions);
  if (typeof args === "object") {
    switch (args.url) {
      default:
        break;
    }
  }
  return response;
};

export default baseQuery;
