import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { Modal, Input, Form, FormItem, useForm } from "@/common/components";
import { DataTablePFSEvent } from "primereact/datatable";
import { Section } from "@/common/layouts";
import { SearchForm, SearchFormBox, SearchFormControls } from "@/features/search";

import { ISearchReqList } from '../types'

import { useLazyGetboardModalListQuery } from "../redux";

import { DEFAULT_ROWS } from '@/common/constants'


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface IModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onOk: (
        selectionRow: any,
        e: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => void;
}


const WritingSearchModal = ({ visible, onOk, setVisible }: IModalProps) => {
    const [selectedDatas, setSelectedDatas] = useState([])
    const [form] = useForm()
    const [searchParams, setSearchParams] = useState<ISearchReqList>({
        page: 0,
        size: DEFAULT_ROWS
    });
    const dispatch = useAppDispatch();

    const [localBoardList, setLocalBoardList] = useState([])

    const [getBoard, { data: boardList, isFetching }] = useLazyGetboardModalListQuery();

    useEffect(() => {
        if (boardList) {
            setLocalBoardList(boardList[0].rspData?.content)
        }
    }, [boardList])

    const handlePage = (e: DataTablePFSEvent) => {
        getBoard({
            ...searchParams,
            page: e.page,
            size: e.size
        })
    }

    const handleFinish = () => {
        getBoard({
            ...searchParams
        })
    }

    const resetModal = () => {
        setSelectedDatas([])
        form.resetFields([])
    }

    const modalOnCancelFun = () => {
        setVisible(false)
    }

    const modalOnOkFun = (r, e) => {
        onOk(r, e);
        resetModal();
        setVisible(false)
    }



    return (
        <Modal
            title="글 검색"
            open={visible}
            closable={true}
            onCancel={() => modalOnCancelFun()}
            onOk={(e) => modalOnOkFun(selectedDatas, e)}
        >
            <Form form={form} onFinish={handleFinish}>
                <SearchForm>
                    <FormItem label="검색어" name="writing">
                        <Input />
                    </FormItem>
                    <SearchFormControls form={form} />
                </SearchForm>
            </Form>

            <Section>
                {/* <DataTable
                    title="제목"
                    value={localBoardList}
                    loading={isFetching}
                    selectionMode="single"
                    selection={selectedDatas}
                    onPage={handlePage}
                    totalRecords={boardList ? boardList?.rspData?.totalElements : 0}
                >
                    <Column field="글" header="글" />
                    <Column field="작성자" header="작성자" />
                </DataTable> */}
                <DataTable
                    // value={localBoardList} 
                    loading={isFetching}
                >
                    <Column field="글" header="글"></Column>
                    <Column field="작성자" header="작성자"></Column>
                </DataTable>


            </Section>
        </Modal>
    )
}
export default WritingSearchModal