import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { peopleApi } from './services/People'
import peopleReducer from "./states/People";

export const store = configureStore({
    reducer: {
        [peopleApi.reducerPath]: peopleApi.reducer,
        favoritePeople: peopleReducer,
    },
    middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
