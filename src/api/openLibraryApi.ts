import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Book } from '../types/book'

interface OpenLibraryResponse {
  docs: Book[]
}

export const openLibraryApi = createApi({
  reducerPath: 'openLibraryApi',
  //todo .ENV_URL for baseURL
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org/' }),
  endpoints: (builder) => ({
    searchBooks: builder.query<OpenLibraryResponse, string>({
      query: (query) => `search.json?q=${encodeURIComponent(query)}&limit=10`,
    }),
  }),
})

export const { useSearchBooksQuery } = openLibraryApi
