import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
    name: "global",
    initialState: {
        accessToken: ""
    },
    reducers: {setToken: (state, action) => {
        state.accessToken = action.payload
    }}
})

export const { setToken } = GlobalSlice.actions;
export default GlobalSlice;