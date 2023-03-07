import qs from 'query-string'
import appApi from '@/redux/appApi'
import { IIQPRes, IPageRes } from '@/common/types'
import { ISearchReqList, ISearchResList } from '../types'

const appTaggedApi = appApi.enhanceEndpoints({
    addTagTypes: ["Board"]
})

const boardApi = appTaggedApi.injectEndpoints({
    endpoints: (builder) => ({
        getboardList: builder.query<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (args) => ({
                url: `/board?${qs.stringify(args)}`,
                method: "GET",
            }),
            providesTags: () => [{ type: "Board" }],
        }),
        //생성
        addboardList: builder.mutation<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (body) => ({
                url: `/board`,
                method: "POST",
                body,
            }),
            invalidatesTags: () => [{ type: "Board" }],
        }),
        //삭제
        delboardList: builder.mutation<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (id) => ({
                url: `/board/${id}`,
                method: "DELETE",
                // credentials: 'include',
            }),
            invalidatesTags: () => [{ type: "Board" }],
        }),
        //수정
        updateboardList: builder.mutation<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (body) => ({
                url: `/board`,
                method: "PUT",
                body,
            }),
            invalidatesTags: () => [{ type: "Board" }],
        })
    })
});

export default boardApi;
export const { useLazyGetboardListQuery, useAddboardListMutation, useDelboardListMutation, useUpdateboardListMutation } = boardApi;