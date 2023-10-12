
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API = 'http://api.giphy.com/v1/gifs/'
const API_KEY = process.env.REACT_APP_API_KEY

export const giphyApi = createApi({
  reducerPath: 'giphyApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (search) => `search?api_key=${API_KEY}&q=${search}`,
    }),
  }),
})

export const { useGetSearchQuery } = giphyApi;