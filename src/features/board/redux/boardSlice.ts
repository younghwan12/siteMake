import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBoardList, addBoardList } from './boardActions'
import { initialState } from "./boardState";
import { ISearchReqList } from '../types'

export const boardMgrSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setSearchParams(state, action: PayloadAction<ISearchReqList>) {
            state.searchParams = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBoardList.pending, (state, action) => {
            state.fetchBoardListLoading = true
        });
        builder.addCase(getBoardList.fulfilled, (state, action) => {
            state.boardMgtList = action.payload
            state.fetchBoardListLoading = false
        });
        builder.addCase(getBoardList.rejected, (state, action) => {
            state.fetchBoardListErrors = action.error
            state.fetchBoardListLoading = false
        });

        /* builder.addCase(addBoardList.pending, (state, action) => {
            state.fetchAddBoardListLoading = true
        });
        builder.addCase(addBoardList.fulfilled, (state, action) => {
            state.addBoardMgtList = action.payload
            state.fetchAddBoardListLoading = false
        });
        builder.addCase(addBoardList.rejected, (state, action) => {
            state.fetchAddBoardListErrors = action.error
            state.fetchAddBoardListLoading = false
        });
        */
    },
});

export const { setSearchParams } = boardMgrSlice.actions;

export default boardMgrSlice.reducer;