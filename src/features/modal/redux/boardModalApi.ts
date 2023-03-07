import qs from 'query-string'
import appApi from '@/redux/appApi'
import { IIQPRes, IPageRes } from '@/common/types'
import { ISearchReqList, ISearchResList } from '../types'

const appTaggedApi = appApi.enhanceEndpoints({
    addTagTypes: ["BoardModal"]
})

const boardModalApi = appTaggedApi.injectEndpoints({
    endpoints: (builder) => ({
        getboardModalList: builder.query<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (args) => ({
                url: `/boardModal?${qs.stringify(args)}`
            }),
            providesTags: () => [{ type: "BoardModal" }],
        })
    })
});

export default boardModalApi;
export const { useLazyGetboardModalListQuery } = boardModalApi;