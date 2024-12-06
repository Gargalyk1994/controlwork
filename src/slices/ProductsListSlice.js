import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/images/product1.png"
import product2 from "../assets/images/product2.png"
import product3 from "../assets/images/product3.png"
import product4 from "../assets/images/product4.png"
import product5 from "../assets/images/product5.png"
import product6 from "../assets/images/product6.png"
import product7 from "../assets/images/product7.png"
import product8 from "../assets/images/product8.png"
import product9 from "../assets/images/product9.png"

export const productsListSlice = createSlice({
    name: "productsList",
    initialState: {
    },
    reducers: {
        deleteProduct: (state, { payload: product }) => {
            const filteredArray = state.arrayProducts.filter(
                (item) => item.id !== product.id
            );
            state.arrayProducts = filteredArray;
        },
        changeProduct: (state, { payload: product }) => {
            const index = state.arrayProducts.findIndex(
                (item) => item.id === product.id
            );
            if (index !== -1) {
                state.arrayProducts[index] = product;
            }
        },
    },
});

export const { deleteProduct, changeProduct } =
    productsListSlice.actions;

export default productsListSlice.reducer;
