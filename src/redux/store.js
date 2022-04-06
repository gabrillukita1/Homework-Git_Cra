import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./globalSlice";

const Store = configureStore({
    reducer: {
        global: GlobalSlice.reducer
    }
})

export default Store;