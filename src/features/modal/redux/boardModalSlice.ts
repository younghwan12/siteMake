import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./boardModalState";
import { ISearchReqList } from '../types'

export const boardModalSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setSearchParams(state, action: PayloadAction<ISearchReqList>) {
            state.searchParams = action.payload;
        }
    },
})

export const { setSearchParams } = boardModalSlice.actions;

export default boardModalSlice.reducer;