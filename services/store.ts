import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import loginReducer from "./slices/authSlice";
import { api } from "./api";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  login: loginReducer,
  [api.reducerPath]: api.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);
// const makeStore = (context: Context) => store;
// export const wrapper = createWrapper(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
