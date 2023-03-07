import { IIQPRes, IPageRes } from "@/common/types";
import { ISearchResList } from '@/features/board/types'

const data = [
    {
        글: "글1",
        작성자: "일무개"
    },
    {
        글: "글2",
        작성자: "이무개"
    },
    {
        글: "글3",
        작성자: "삼무개"
    },
    {
        글: "글4",
        작성자: "사무개"
    },
    {
        글: "글5",
        작성자: "오무개"
    },
    {
        글: "글6",
        작성자: "육무개"
    },
]

export const mockBoardRes: IIQPRes<IPageRes<ISearchResList[]>> = {
    // rspCode: "00000",
    // rspMsg: "success",
    // rspData: {
    //     content: data,
    //     empty: false,
    //     first: true,
    //     last: false,
    //     number: 0,
    //     numberOfElements: 20,
    //     size: 20,
    //     pageable: {
    //         offset: 0,
    //         pageNumber: 0,
    //         pageSize: 20,
    //         paged: true,
    //         sort: {
    //             empty: true,
    //             sorted: false,
    //             unsorted: true,
    //         },
    //         unpaged: false,
    //     },
    //     sort: {
    //         empty: false,
    //         sorted: false,
    //         unsorted: true,
    //     },
    //     totalElements: 87,
    //     totalPages: 5
    // }
    rspData: data
}