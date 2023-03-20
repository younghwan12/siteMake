import React, { useState, useEffect } from "react"

import { Form, useForm, FormItem, Space, Search } from "@/common/components";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { SearchForm, SearchFormBox, SearchFormControls } from '@/features/search'

import { getBoardList } from '@/features/board/redux'

import { setSearchParams } from "@/features/board/redux";

import { ISearchReqList } from '../../types'



import { WritingSearchModal } from '@/features/modal'
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

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

    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];


    const [selectedFruit, setSelectedFruit] = useState<string[]>([]);

    const handleChange = (e) => {
        setSelectedFruit(e.target.checked ? [e.target.value] : []);
    };

    const isFruitChecked = (fruit: string) => {
        return selectedFruit && selectedFruit.includes(fruit);
    }

    const fruits = [
        { value: 'apple', label: '사과' },
        { value: 'banana', label: '바나나' },
        { value: 'orange', label: '오렌지' },
    ];

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
                        <FormItem>
                            <Checkbox.Group value={selectedFruit}>
                                {fruits.map(fruit => (
                                    <Checkbox
                                        key={fruit.value}
                                        value={fruit.value}
                                        checked={isFruitChecked(fruit.value)}
                                        onChange={handleChange}
                                    >
                                        {fruit.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
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


