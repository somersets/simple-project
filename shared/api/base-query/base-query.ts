import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const realBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const siteLocale = localStorage.getItem("siteLocale");
    if (siteLocale) {
      headers.set("Site-Locale", siteLocale);
    }
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQuery: typeof realBaseQuery = async (args, api, extraOptions) => {
  return realBaseQuery(args, api, extraOptions);
};

export default baseQuery;
