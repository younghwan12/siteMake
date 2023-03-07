import { IPageReq } from '@/common/types'


/** 조회 요청 param */
export interface ISearchResList {
    글: string;
    작성자: string;
}

export interface ISearchReqList extends IPageReq {
    writer?: string;
    author?: string;
}