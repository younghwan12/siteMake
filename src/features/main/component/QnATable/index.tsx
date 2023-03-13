import React, { useState, useEffect } from "react"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useGetboardListQuery } from "@/features/board/redux";

const QnATable = () => {

    const [localBoardList, setLocalBoardList] = useState([]);

    const { data: boardList } = useGetboardListQuery();

    return (
        <div className="col-12 xl:col-6">
            <div className="card">
                <h5>Q&A 게시판</h5>
                <DataTable
                    size={'small'}
                    value={boardList}
                >
                    <Column header="글" field="title" />
                    <Column header="작성자" field="author" />
                </DataTable>
            </div>
        </div>
    )
}
export default QnATable