import React, { useState, useEffect } from "react"

import { Form, useForm, FormItem, Space, Search } from "@/common/components";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { SearchForm, SearchFormBox, SearchFormControls } from '@/features/search'

import { getBoardList } from '@/features/board/redux'

import { setSearchParams } from "@/features/board/redux";

import { ISearchReqList } from '../../types'



import { WritingSearchModal } from '@/features/modal'

const BoardSearch = () => {
    const [form] = useForm();
    const dispatch = useAppDispatch();

    const [visible, setVisible] = useState(false)

    const onSearchAppCode = () => {
        setVisible(true)
    }

    const handleFinish = (v: ISearchReqList) => {
        dispatch(
            setSearchParams({
                ...v
            })
            // getBoardList({
            //     params: {
            //         ...v
            //     }
            // })
        )
    }

    const handleWritingSelect = (r) => {
        console.log('ddd')
    }

    return (
        <>
            <Form form={form} onFinish={handleFinish}>
                <SearchForm>
                    <SearchFormBox>
                        <FormItem label="글">
                            <Space>
                                <FormItem name="title">
                                    <Search onSearch={onSearchAppCode} />
                                </FormItem>
                            </Space>
                        </FormItem>
                        <FormItem label="작성자">
                            <Space>
                                <FormItem name="author">
                                    <Search />
                                </FormItem>
                            </Space>
                        </FormItem>
                    </SearchFormBox>
                    <SearchFormControls form={form} />
                </SearchForm>
            </Form>

            <WritingSearchModal
                visible={visible}
                setVisible={setVisible}
                onOk={handleWritingSelect}
            />
        </>
    )
}
export default BoardSearch


