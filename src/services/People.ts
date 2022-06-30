import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ResourceResponse, ResourceType} from "../@types/People";
import {apiService} from "../utils/HelperUtils";

export const peopleApi = createApi({
    reducerPath: 'peopleApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiService() }),
    endpoints: (builder) => ({
        getResource: builder.query<ResourceResponse, string>({
            query: (id) => `${id}`,
        }),
    }),
})

export const {useGetResourceQuery } = peopleApi