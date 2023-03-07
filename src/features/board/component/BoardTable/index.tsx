import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { Section } from "@/common/layouts"

import {
    Button,
    // DataTable,
    // Column,
} from '@/common/components'
import { useModal } from "@/common/components"
import { useAppSelector } from "@/redux/hooks"
import { DataTablePFSEvent } from "primereact/datatable"
import { useLazyGetboardListQuery, useDelboardListMutation } from "@/features/board/redux"

import { DELETE_CONFIRM_MSG } from "@/common/constants";

import { WritingAddModal, WritingDetailModal } from '@/features/modal'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const BoardTable = () => {
    const [first, setFirst] = useState(0);


    const router = useRouter();
    const [modal, contextHolder] = useModal();
    const [selectedDatas, setSelectedDatas] = useState(null);
    const [localBoardList, setLocalBoardList] = useState([]);

    const [rowData, setRowData] = useState([]);
    const [delData, setDelData] = useState([]);


    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)

    const { searchParams } = useAppSelector((state) => state.board);

    const [getBoard, { data: boardList, isFetching }] = useLazyGetboardListQuery();


    const [delBoard] = useDelboardListMutation();

    // const { boardMgtList, fetchBoardListLoading, } = useAppSelector(({ board }) => board)

    useEffect(() => {
        if (boardList) {
            setLocalBoardList(boardList)
        }
    }, [boardList])

    useEffect(() => {
        getBoard(searchParams)
    }, [searchParams])

    // useEffect(() => {
    //     if (boardMgtList) {
    //         setLocalBoardList(boardMgtList.rspData.content)
    //     }
    // }, [boardMgtList])

    const handlePage = (e: DataTablePFSEvent) => {
        // getBoardMgtList({
        //     ...searchParams,
        //     page: e.page,
        //     size: e.rows
        // })
    }

    const moveToAddPage = () => {
        setVisible(true)
    }

    const detailModal = (e) => {
        setRowData(e.data)
        setVisible2(true)
    }

    const bodyTemplate = (rowData) => {
        return (
            <Button onClick={(e) => delFunc(rowData)}>삭제 </Button>
        )
    }
    const delFunc = (rowData) => {
        modal.confirm({
            title: DELETE_CONFIRM_MSG,
            onOk() {
                delBoard(
                    rowData?.id,
                )
            }

        })
    }

    return (
        <>
            {contextHolder}
            <Section>
                <Button
                    onClick={moveToAddPage}>
                    생성
                </Button>
                <DataTable
                    value={localBoardList}
                    loading={isFetching}
                    // onPage={handlePage}
                    selectionMode="checkbox"
                    selection={selectedDatas}
                    onSelectionChange={(e) => setSelectedDatas(e.value)}
                    onRowDoubleClick={(e) => detailModal(e)}
                    paginator rows={5}
                    first={first}
                    onPage={(e) => setFirst(e.first)}
                // totalRecords={boardList ? boardList.rspData?.totalElements : 0}
                >
                    <Column body={bodyTemplate} header="삭제" />
                    <Column field="title" header="글" />
                    <Column field="author" header="작성자" />
                </DataTable>
            </Section>


            <WritingAddModal
                visible={visible}
                setVisible={setVisible}
            />

            <WritingDetailModal
                visible2={visible2}
                setVisible2={setVisible2}
                rowData={rowData}
            />
        </>

    )
}
export default BoardTable