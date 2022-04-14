import {configureStore} from '@reduxjs/toolkit'
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { googleNewsApi } from '../services/googleNewsApi';
import { newsCatcherApi } from '../services/newsCatcherApi';
import { webSearchApi } from '../services/webSearchApi';
import { newsApi } from '../services/newsApi';

export default configureStore({
    reducer: {
        [cryptoNewsApi.reducerPath] :cryptoNewsApi.reducer,
        [googleNewsApi.reducerPath] :googleNewsApi.reducer,
        [newsCatcherApi.reducerPath] :newsCatcherApi.reducer,
        [webSearchApi.reducerPath] :webSearchApi.reducer,
        [newsApi.reducerPath] : newsApi.reducer
    },
});