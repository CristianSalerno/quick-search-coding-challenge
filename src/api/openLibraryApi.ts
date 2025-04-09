import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Book } from '../types/book'

interface OpenLibraryResponse {
  docs: Book[]
}

export const openLibraryApi = createApi({
  reducerPath: 'openLibraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_OPEN_LIBRARY_URL }),
  endpoints: (builder) => ({
    searchBooks: builder.query<OpenLibraryResponse, string>({
      query: (query) => `search.json?q=${encodeURIComponent(query)}&limit=10`,
    }),
  }),
})

export const { useSearchBooksQuery } = openLibraryApi
