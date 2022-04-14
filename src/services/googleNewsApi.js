import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const googleNewsApiHeaders = {
    'X-RapidAPI-Host': 'google-news.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_NEWS_KEY
  }

const baseUrl = 'https://google-news.p.rapidapi.com/v1';

const createRequest = (url) => ({url, headers: googleNewsApiHeaders})

export const googleNewsApi = createApi ({

    reducerPath: 'googleNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getGoogleNews: builder.query({
            query: (newsCategory) => createRequest(`/search?q=${newsCategory}&country=US&lang=en&from=2022-13-04`)
        })
    })

});

export const {
    useGetGoogleNewsQuery,
} = googleNewsApi 