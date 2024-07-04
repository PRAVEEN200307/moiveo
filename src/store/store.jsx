import { configureStore } from "@reduxjs/toolkit";

import movieoReducer from "./movieoSlice";

export const store = configureStore({
    reducer: {
        movieData : movieoReducer
    },
})