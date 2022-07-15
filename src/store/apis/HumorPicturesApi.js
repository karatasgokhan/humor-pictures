import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.imgflip.com",
});

export const theHumorPicturesApi = createApi({
  reducerPath: "theHumorPicturesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPicturesApi: builder.query({
      query: () => ({
        url: `/get_memes`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPicturesApiQuery } = theHumorPicturesApi;
