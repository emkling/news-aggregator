import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const newsCatcherApiHeaders = {
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_NEWS_KEY
    
}
const baseUrl = 'https://free-news.p.rapidapi.com/v1'
const createRequest = (url) => ({url, headers: newsCatcherApiHeaders})

export const newsCatcherApi = createApi ({

    reducerPath: 'newsCatcherApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNewsCatcher: builder.query({
            query: (newsCategory) => createRequest(`/search?q=${newsCategory}&lang=en`)
        })
    })
});

export const {
    useGetNewsCatcherQuery,
} = newsCatcherApi 