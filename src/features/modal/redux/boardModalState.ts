import { DEFAULT_ROWS } from '@/common/constants'
import { ISearchReqList } from "../types"



interface ISearchReqState {
    searchParams: ISearchReqList
}

export const initialState: ISearchReqState = {
    searchParams: {
        page: 0,
        size: DEFAULT_ROWS
    }
}