import { createAsyncThunk } from "@reduxjs/toolkit";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import BoardMgr from '@/features/board/api'

export const getBoardList = createAsyncThunk<
    boolean,
    {
        params: Params;
    }
>("board/getBoardList", async (data) => {
    try {
        const response = await BoardMgr.getBoardList(data.params);
        console.log("action", data)
        return response.data
    } catch (err) {
        return console.log(err)
    }
})

export const addBoardList = createAsyncThunk<
    boolean,
    {
        params: Params;
    }
>("board/addBoardList", async (data) => {
    try {
        const response = await BoardMgr.addBoardList(data.params);
        console.log("action", data)
        return response.data
    } catch (err) {
        return console.log(err)
    }
})

