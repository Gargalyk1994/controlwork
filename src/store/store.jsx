import { configureStore } from "@reduxjs/toolkit";
// import favoritesSlice from "../reducers/favoritesSlice.js";
import productsListReducer from "../slices/ProductsListSlice.js";
import filterReducer from "../slices/FilterSlice.js";
// import {middleware} from "../middleware/middleware.js"

export const store = configureStore({
    reducer: {
        productsList: productsListReducer,
        filter: filterReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(middleware),
});
