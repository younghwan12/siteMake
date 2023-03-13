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

    const onDrop: TreeProps['onDrop'] = (info) => {
        console.log(info);
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loop = (
            data: DataNode[],
            key: React.Key,
            callback: (node: DataNode, i: number, data: DataNode[]) => void,
        ) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children!, key, callback);
                }
            }
        };
        const data = [...treemenus];

        // Find dragObject
        let dragObj: DataNode;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else if (
            ((info.node as any).props.children || []).length > 0 && // Has children
            (info.node as any).props.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
                // in previous version, we use item.children.push(dragObj) to insert the
                // item to the tail of the children
            });
        } else {
            let ar: DataNode[] = [];
            let i: number;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i!, 0, dragObj!);
            } else {
                ar.splice(i! + 1, 0, dragObj!);
            }
        }
        setTreemenus(data);

        // children 이 비어있을시 isLeaf : true 처리해야함 


        console.log(`Move ${dragObj.key} to ${dropKey}`);
    };

    return (
        <div className="grid">
            <div className="col-12 xl:col-4">
                <div className="card">
                    <h5>Tree list</h5>
                    <DirectoryTree
                        blockNode
                        onSelect={(e, r) => clickEvent(e, r)}
                        treeData={treemenus}
                        draggable
                        onDrop={onDrop}
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