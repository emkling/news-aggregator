import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const newsApiHeaders =  {
    'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
  }
const baseUrl = 'https://newsapi.org/v2';

const createRequest = (url) => ({url, headers: newsApiHeaders})

export const newsApi = createApi ({

    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNewsApiSearch: builder.query({
            query: (newsCategory) => createRequest(`/everything?q=${newsCategory}&sortBy=popularity&pageSize=26&from=null&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        })
    })

});

export const {
    useGetNewsApiSearchQuery,
} = newsApi 