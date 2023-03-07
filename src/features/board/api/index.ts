import AxiosInstance from "@/api/http-common"
import queryString from "query-string"
const BoardApi = {
    getBoardList,
    addBoardList,
}

function getBoardList(params) {
    const query = queryString.stringify(params, { arrayFormat: "bracket" })
    return AxiosInstance.get(`/board?${query}`, {
    })
}

function addBoardList(params) {
    const query = queryString.stringify(params, { arrayFormat: "bracket" })
    return AxiosInstance.post(`/boardAdd?${query}`, params)
}


function bearerAuth(token: string | undefined) {
    return `Bearer ${token}`
}

export default BoardApi