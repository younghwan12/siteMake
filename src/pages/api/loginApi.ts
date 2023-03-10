import qs from 'query-string'
import appApi from '@/redux/appApi'


interface ISearchResList {
  login?: string;
}

interface ISearchReqList {
  id: string;
  password: string;
}


const appTaggedApi = appApi.enhanceEndpoints({
  addTagTypes: ["Login"]
})

const loginApi = appTaggedApi.injectEndpoints({
  endpoints: (builder) => ({

    /*
    getLoginCheck: builder.query<ISearchResList[],
      ISearchReqList
    >({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body
      }),
      providesTags: () => [{ type: "Login" }],
    }),
    */

    getLoginCheck: builder.query<ISearchResList[],
      ISearchReqList
    >({
      query: (args) => ({
        url: `/${args}`,
        method: "GET",
      }),
      providesTags: () => [{ type: "Login" }],
    }),
  })
});

export default loginApi;
export const { useLazyGetLoginCheckQuery } = loginApi;