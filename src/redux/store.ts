import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import appApi from "./appApi"
import { rtkErrorLogger } from './middlewares'

import { boardMgtReducer } from '@/features/board/redux'
import wriModalReducer from '@/features/modal/redux/boardModalSlice'

import { pokemonApi } from '@/api/pokemonApi';

const reducers = combineReducers({
    board: boardMgtReducer,
    wrimodal: wriModalReducer,
    [appApi.reducerPath]: appApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
})


export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        })
            .concat(appApi.middleware)
            .concat(pokemonApi.middleware)
            .concat(rtkErrorLogger)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>