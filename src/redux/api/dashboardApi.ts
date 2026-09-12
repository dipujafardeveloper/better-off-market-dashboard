import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: () => ({
        url: "/dashboard/analytics",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
