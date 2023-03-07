export interface IIQPRes<T> {
    rspCode: string;
    rspMsg: string;
    rspData: T;
}

export interface IPageable {
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
}

export interface IPageRes<T> {
    content: T;
    pageable: IPageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface IPageReq {
    page: number;
    size: number;
}

export interface IErrRes {
    errorCode: string;
    errorMsg: string;
    treatCode: string;
    treatMsg: string;
    customMsg: string;
    cause: string;
}