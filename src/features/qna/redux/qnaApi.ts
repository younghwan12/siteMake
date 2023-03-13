import qs from 'query-string'
import appApi from '@/redux/appApi'
import { IIQPRes, IPageRes } from '@/common/types'
import { ITreeResList, ITreeReqList } from '../types'

const appTaggedApi = appApi.enhanceEndpoints({
    addTagTypes: ["QnA"]
})

const qnaApi = appTaggedApi.injectEndpoints({
    endpoints: (builder) => ({
        getqnaList: builder.query<ITreeResList[], void>(
            {
                query: (args) => ({
                    url: `/qnalist`,
                    method: "GET",
                }),
                providesTags: () => [{ type: "QnA" }],
            }),
    })
});

export default qnaApi;
export const { useGetqnaListQuery } = qnaApi;