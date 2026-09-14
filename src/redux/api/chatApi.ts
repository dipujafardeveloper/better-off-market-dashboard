import { baseApi } from "./baseApi";

const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: (params) => ({
        url: "/chats",
        method: "GET",
        params,
      }),
    }),
    getSingleChat: builder.query({
      query: (id) => ({
        url: `/chats/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetChatsQuery, useGetSingleChatQuery } = chatApi;
