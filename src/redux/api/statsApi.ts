import { baseApi } from "./baseApi";

const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => ({
        url: "/stats/about-page",
        method: "GET",
      }),
    }),
    getUserOverview: builder.query({
      query: (params) => ({
        url: "/stats/user-overview",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetStatsQuery, useGetUserOverviewQuery } = statsApi;
