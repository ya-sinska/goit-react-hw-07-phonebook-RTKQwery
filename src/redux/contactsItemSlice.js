import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsItemApi = createApi({
  reducerPath: 'items',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62829a3638279cef71ca32ce.mockapi.io'
    }),
  tagTypes:['Items'],
  endpoints: (builder) => ({
    getContacts: builder.query({
        query: () => '/contacts',
        providesTags:['Items'],
    }),
    addContacts: builder.mutation({
        query: (values) => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
        invalidatesTags:['Items'],
    }),
    deleteContacts: builder.mutation({
        query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',  
      }),
        invalidatesTags:['Items'],
    }),
  }),
})

export const { useGetContactsQuery, useAddContactsMutation, useDeleteContactsMutation} = contactsItemApi;
// Selectors
// export const getItemsValue = (state) => state.items.value;