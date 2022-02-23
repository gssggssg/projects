import { createSlice } from "@reduxjs/toolkit";

export interface ItemFSTypes {
};

const state: ItemFSTypes = {
};

export const itemFS = createSlice({
    name: "itemFS",
    initialState: state,
    reducers: {
        updata: (state, { payload }) => {
            return { ...state, ...payload };
        },
    },
});

export default itemFS.reducer;