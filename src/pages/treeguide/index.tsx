import React, { useState, useEffect } from "react"
//tree
import { DirectoryTree } from "@/common/components"
import { arrayToTree, TreeItem } from '@/common/utils/treeUtil/arrayToTree'
import type { DataNode, TreeProps } from 'antd/es/tree';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import * as ReactIcons from "react-icons/ri";

const x = 3;
const y = 2;
const z = 1;
const defaultData: DataNode[] = [];

const generateData = (_level: number, _preKey?: React.Key, _tns?: DataNode[]) => {
    const preKey = _preKey || '0';
    const tns = _tns || defaultData;

    const children: React.Key[] = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);


const treeGuidePage = () => {
    const [treemenus, setTreemenus] = useState([]);
    const [detailData, setDetailData] = useState();


    // useEffect(() => {
    //     if (ExplorerList && ExplorerList.length > 0) {
    //         const treeData = arrayToTree(ExplorerList, {
    //             id: "tree_id",
    //             parentId: "parent_tree_id",
    //             dataField: null,
    //             rootParentIds: { [ExplorerList[0].parent_tree_id]: true }
    //         });
    //         setTreemenus(treeData)
    //     }
    // }, [ExplorerList])


    const iconBodyType = (rowData) => {
        const Compoenent = ReactIcons[rowData.icon];


        return (
            <Compoenent />
        )
    }

    const [gData, setGData] = useState(defaultData);
    const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

    const onDragEnter: TreeProps['onDragEnter'] = (info) => {
        console.log(info);
    };

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
        const data = [...gData];

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
                // where to insert 示例添加到头部，可以是随意位置
                item.children.unshift(dragObj);
            });
        } else if (
            ((info.node as any).props.children || []).length > 0 && // Has children
            (info.node as any).props.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert 示例添加到头部，可以是随意位置
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
        setGData(data);
    };

    useEffect(() => {
        console.log("트리테이블 들어갈 데이터입니다", gData)
    }, [gData])


    return (
        <div className="grid">
            <div className="col-12 xl:col-4">
                <div className="card">
                    <h5>Tree list</h5>
                    <DirectoryTree
                        blockNode
                        // onSelect={(e, r) => clickEvent(e, r)}
                        defaultExpandedKeys={expandedKeys}
                        draggable
                        onDragEnter={onDragEnter}
                        onDrop={onDrop}
                        treeData={gData}

                    // titleRender={(node: TreeItem) => {
                    //     return (
                    //         <span
                    //         >
                    //             {node.menu_nm}
                    //         </span>
                    //     )
                    // }}
                    />
                </div>
            </div>
            <div className="col-12 xl:col-8">
                <div className="card">
                    <DataTable
                        // value={detailList}
                        // loading={isFetching}
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
export default treeGuidePage