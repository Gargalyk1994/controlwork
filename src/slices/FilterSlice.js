import { createSlice } from "@reduxjs/toolkit";



export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        arrSortByTrend: ["HIT", "NEW"],
        arrSortBySize: ["XS", "S", "M", "L"],
        arrSortByPrice: ["more 1000", "less 1000 and more 500", "less 500 and more 250", "less 250"],
    },
    reducers: {
        setFilterByTrend(state, { payload: trend }) {
            // state.arrSortByTrend = trend;
            // state.arrSortByTrend = [...state.arrSortByTrend, trend];
            
            state.arrSortByTrend
                .filter((item) => item === trend)
                .join("");
        },
    },
});

export const { setFilterByTrend } =
filterSlice.actions;

export default filterSlice.reducer;