import { configureStore } from '@reduxjs/toolkit'
import { openLibraryApi } from '../api/openLibraryApi'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [openLibraryApi.reducerPath]: openLibraryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openLibraryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch