import { DEFAULT_ROWS } from '@/common/constants'
import { SerializedError } from '@reduxjs/toolkit'
import { ISearchReqList } from "../types"



interface ISearchReqState {
    boardMgtList: any[],
    fetchBoardListErrors: SerializedError
    fetchBoardListLoading: boolean

    // searchParams: ISearchReqList
    searchParams: any[]
}


export const initialState: ISearchReqState = {
    boardMgtList: <any>[],
    fetchBoardListErrors: <SerializedError>[],
    fetchBoardListLoading: false,

    searchParams: <any>[]
}