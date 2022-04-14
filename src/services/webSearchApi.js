import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const webSearchApiHeaders =  {
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_NEWS_KEY
  }
const baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search';

const createRequest = (url) => ({url, headers: webSearchApiHeaders})

export const webSearchApi = createApi ({

    reducerPath: 'webSearchApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getWebSearch: builder.query({
            query: (newsCategory, datePref) => createRequest(`/NewsSearchAPI?q=${newsCategory}&pageNumber=1&pageSize=25&autoCorrect=true&fromPublishedDate=${datePref}&toPublishedDate=null`)
        })
    })

});

export const {
    useGetWebSearchQuery,
} = webSearchApi 