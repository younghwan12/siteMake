import { rest } from 'msw'
import { mockBoardRes } from './boardMock'

export const boardHandlers = [
    rest.get<any[]>("/boardSearch", (req, res, ctx) => {
        return res(ctx.json(mockBoardRes))
    })
]