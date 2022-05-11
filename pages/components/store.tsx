import { configureStore } from '@reduxjs/toolkit'
import handleReducer from './redux'

export const store = configureStore({
  reducer: {
    handles: handleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch