import React, { useState, useEffect } from "react"
//tree
import { DirectoryTree } from "@/common/components"
import { arrayToTree, TreeItem } from '@/common/utils/treeUtil/arrayToTree'
import type { DataNode, TreeProps } from 'antd/es/tree';
import { useGetExplorerListQuery, useLazyGetExplorerDetailQuery } from "../../redux/explorerApi";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ITreeResList } from "../../types";

import * as ReactIcons from "react-icons/ri";


const ExplorerTable = () => {
    const [treemenus, setTreemenus] = useState([]);
    const [detailData, setDetailData] = useState();
    const { data: ExplorerList } = useGetExplorerListQuery();

    const [getDetail, { data: detailList, isFetching, isSuccess }] = useLazyGetExplorerDetailQuery();

    useEffect(() => {
        if (ExplorerList && ExplorerList.length > 0) {
            const treeData = arrayToTree(ExplorerList, {
                id: "tree_id",
                parentId: "parent_tree_id",
                dataField: null,
                rootParentIds: { [ExplorerList[0].parent_tree_id]: true }
            });
            setTreemenus(treeData)
        }
    }, [ExplorerList])

    const clickEvent = (e, r) => {
        // console.log("data", r.node.children)
        getDetail(
            r.node.menu_nm
        )
    }

    const iconBodyType = (rowData) => {
        const Compoenent = ReactIcons[rowData.icon];


        return (
            <Compoenent />
        )
    }

    return (
        <div className="grid">
            <div className="col-12 xl:col-4">
                <div className="card">
                    <h5>Tree list</h5>
                    <DirectoryTree
                        blockNode
                        showIcon
                        onSelect={(e, r) => clickEvent(e, r)}
                        treeData={treemenus}
                        titleRender={(node: TreeItem) => {
                            return (
                                <span
                                >
                                    {node.menu_nm}
                                </span>
                            )
                        }}
                    />
                </div>
            </div>
            <div className="col-12 xl:col-8">
                <div className="card">
                    <DataTable
                        value={detailList}
                        loading={isFetching}
                        paginator rows={5}
                        size={"small"}
                    >
                        <Column field="dataName" header="Name" />
                        <Column field="fileSize" header="Size" />
                        <Column field="type" header="Type" />
                        <Column field="icon"
                            body={iconBodyType}
                            header="img" />
                        <Column field="date" header="Modi Date" />
                    </DataTable>

                </div>
            </div>
        </div>
    )
}
export default ExplorerTable