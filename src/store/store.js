import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { theHumorPicturesApi } from "./apis/HumorPicturesApi";

export const store = configureStore({
  reducer: {
    [theHumorPicturesApi.reducerPath]: theHumorPicturesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(theHumorPicturesApi.middleware),
});

setupListeners(store.dispatch);
