import { createApi } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "@/shared/enums/api-routes";
import baseQueryWithReAuth from "@/shared/api/base-query/base-query-with-reauth";
import { IChatMessagesHistory } from "./types";
import { adaptAuthData } from "@/shared/api/auth/adapter";

export interface SenderAndRecipientInfo {
  id: number;
  name: string;
  last_name: string;
  date: string;
}

export interface Message {
  id: string;
  sender: SenderAndRecipientInfo;
  recipient: SenderAndRecipientInfo;
  content: string;
  type: string;
}

export const chatApi = createApi({
  reducerPath: "chat",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Chat"],
  endpoints: (build) => ({
    userMessagesHistory: build.query<
      Message[],
      { user_id: number; recipient_id: number }
    >({
      query: ({ user_id, recipient_id }) =>
        `${API_ROUTES.MESSAGES_HISTORY}?user_id=${user_id}&recipient_id=${recipient_id}`,
      providesTags: ["Chat"],
    }),
  }),
});

export const { useLazyUserMessagesHistoryQuery } = chatApi;
