import React, { useContext, useEffect, useState } from 'react';
import { Panel } from 'primereact/panel';

import { LayoutContext } from '@/layout/context/layoutcontext';

//tree
import { DirectoryTree } from "@/common/components"
import { arrayToTree, TreeItem } from '@/common/utils/treeUtil/arrayToTree'


import type { DataNode, TreeProps } from 'antd/es/tree';

const BoardFive = () => {

    //treeTable

    const treeDummy = {
        list: [
            {
                tree_id: "1",
                parent_tree_id: "0",
                data1: "data1",
                data2: "data2",
                data3: "data3",
                data4: "data4",
                data5: "data5",
                menu_nm: '메뉴1'
            },
            {
                tree_id: "1.1",
                parent_tree_id: "1",
                data1: "data1.1-1",
                data2: "data1.1-2",
                data3: "data1.1-3",
                data4: "data1.1-4",
                data5: "data1.1-5",
                menu_nm: '메뉴1-1'
            },
            {
                tree_id: "1.1.1",
                parent_tree_id: "1.1",
                data1: "data1.1.1-1",
                data2: "data1.1.1-2",
                data3: "data1.1.1-3",
                data4: "data1.1.1-4",
                data5: "data1.1.1-5",
                menu_nm: '메뉴1-1-1'
            },
            {
                tree_id: "1.1.2",
                parent_tree_id: "1.1",
                data1: "data1.1.2-1",
                data2: "data2.1.2-2",
                data3: "data3.1.2-3",
                data4: "data4.1.2-4",
                data5: "data5.1.2-5",
                menu_nm: '메뉴1-1-2'
            },
            {
                tree_id: "1.2",
                parent_tree_id: "1",
                data1: "data1.2-1",
                data2: "data1.2-2",
                data3: "data1.2-3",
                data4: "data1.2-4",
                data5: "data1.2-5",
                menu_nm: '메뉴1-2'
            },
            {
                tree_id: "1.2.1",
                parent_tree_id: "1.2",
                data1: "data1.2.1-1",
                data2: "data1.2.1-2",
                data3: "data1.2.1-3",
                data4: "data1.2.1-4",
                data5: "data1.2.1-5",
                menu_nm: '메뉴1-2-1'
            },
            {
                tree_id: "1.2.2",
                parent_tree_id: "1.2",
                data1: "data1.2.2-1",
                data2: "data1.2.2-2",
                data3: "data1.2.2-3",
                data4: "data1.2.2-4",
                data5: "data1.2.2-5",
                menu_nm: '메뉴1-2-2'
            },
        ]
    }

    const [tmpUseTreeData, setTmpUseTreeData] = useState(null)
    const [treemenus1, setTreemenus1] = useState(null);

    useEffect(() => {
        setTmpUseTreeData(treeDummy)
    }, [])

    useEffect(() => {
        if (tmpUseTreeData && tmpUseTreeData.list.length > 0) {
            const treeData = arrayToTree(tmpUseTreeData.list, {
                id: "tree_id",
                parentId: "parent_tree_id",
                dataField: null,
                rootParentIds: { [tmpUseTreeData.list[0].parent_tree_id]: true }
            });
            setTreemenus1(treeData)
        }
    }, [tmpUseTreeData])


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
        const data = [...treemenus1];



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
        setTreemenus1(data);
    };



    return (
        <div className="mb-2">
            <Panel header="Test중..." toggleable>
                <div className="grid">
                    <div className="col-12">
                        <h5 className='blind'>일정/인력/Risk/Issue/Action Item/변경 요청</h5>
                        <DirectoryTree
                            blockNode
                            draggable
                            onDragEnter={onDragEnter}
                            treeData={treemenus1}
                            // onDrop={onDrop}
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
            </Panel>
        </div>
    )
}
export default BoardFive