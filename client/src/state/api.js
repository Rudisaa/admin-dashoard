import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


//api state
export const api = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: 'adminApi',
    tagTypes: [],
    endpoints: (build) => ({

    })
});

export const {

} = api;