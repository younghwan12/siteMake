import qs from 'query-string'
import appApi from '@/redux/appApi'
import { IIQPRes, IPageRes } from '@/common/types'
import { ITreeResList, ITreeReqList } from '../types'

const appTaggedApi = appApi.enhanceEndpoints({
    addTagTypes: ["Explorer"]
})

const ExplorerApi = appTaggedApi.injectEndpoints({
    endpoints: (builder) => ({
        getExplorerList: builder.query<ITreeResList[], void>({
            query: (args) => ({
                url: `/treelist`,
                method: "GET",
            }),
            providesTags: () => [{ type: "Explorer" }],
        }),
        getExplorerDetail: builder.query<ITreeResList[], ITreeReqList>({
            query: (args) => ({
                url: `/${args}`,
                method: "GET",
            }),
            providesTags: () => [{ type: "Explorer" }],
        }),
    })
});

export default ExplorerApi;
export const { useGetExplorerListQuery, useLazyGetExplorerDetailQuery } = ExplorerApi;