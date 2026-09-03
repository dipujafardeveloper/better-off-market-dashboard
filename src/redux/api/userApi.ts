import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.users],
    }),
    userBlock: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { status: "blocked" },
      }),
      invalidatesTags: [tagTypes.users],
    }),
    userUnBlock: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { status: "active" },
      }),
      invalidatesTags: [tagTypes.users],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUserBlockMutation,
  useUserUnBlockMutation,
} = userApi;
