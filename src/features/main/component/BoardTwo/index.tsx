import React, { useContext, useEffect, useState } from 'react';
import { Panel } from 'primereact/panel';

import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import TreeNode from 'primereact/treenode';


const BoardTwo = () => {


    const nodes: TreeNode[] = [
        {
            key: '0',
            data: { subsystem: '운영 및 유지보수', lastYearSale: '', thisYearSale: '60.00%', lastYearProfit: '52.89', colum1: '46.84' },
            children: [
                {
                    key: '0-0',
                    data: { subsystem: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', colum1: '$o' },
                    children: [
                        {
                            key: '0-0-0',
                            data: { subsystem: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', colum1: '$o' },
                        },
                        {
                            key: '0-0-1',
                            data: { subsystem: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', colum1: '$o' },
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: { subsystem: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', colum1: '$o' },
                }
            ]
        },
        {
            key: '2',
            data: { subsystem: '솔루션관리', lastYearSale: '', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            children: [
                {
                    key: '2-0',
                    data: { subsystem: '솔루션관리', lastYearSale: '솔루션관리', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                },
                {
                    key: '2-1',
                    data: { subsystem: '솔루션관리', lastYearSale: '솔루션관리', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                },
                {
                    key: '2-1',
                    data: { subsystem: '솔루션관리', lastYearSale: '교육', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                }
            ]
        },
        {
            key: '3',
            data: { subsystem: '관리', lastYearSale: '', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            children: [
                {
                    key: '3-0',
                    data: { subsystem: '관리', lastYearSale: '관리', thisYearSale: '3%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                },
                {
                    key: '3-1',
                    data: { subsystem: '관리', lastYearSale: '산출물관리', thisYearSale: '3%', lastYearProfit: '$3,031', thisYearProfit: '$3,000' },
                },
                {
                    key: '3-1',
                    data: { subsystem: '관리', lastYearSale: '교육', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                }
            ]
        },
    ];

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="서브시스템" rowSpan={2} style={{ width: "12%" }} />
                <Column header="" rowSpan={2} style={{ width: "10%" }} />
                <Column header="일정 진척" colSpan={4} style={{ width: "19%" }} />
                <Column header="Risk" colSpan={4} />
                <Column header="issue" colSpan={5} />
                <Column header="Action item" colSpan={5} />
                <Column header="변경 요청" colSpan={2} />
            </Row>
            <Row>
                <Column header="가중치" />
                <Column header="계획%" />
                <Column header="실적%" />
                <Column header="달성률%" />
                <Column header="전체" />
                <Column header="재기" />
                <Column header="진행" />
                <Column header="종료" />
                <Column header="전체" />
                <Column header="재기" />
                <Column header="진행" />
                <Column header="지연" />
                <Column header="종료" />
                <Column header="전체" />
                <Column header="재기" />
                <Column header="진행" />
                <Column header="지연" />
                <Column header="종료" />
                <Column header="전체" />
                <Column header="진행" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="" />
                <Column footer="합계" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
                <Column footer="1" />
            </Row>
        </ColumnGroup>
    );


    return (
        <div className="mb-2">
            <Panel header="일정/인력/Risk/Issue/Action Item/변경 요청" toggleable>
                <div className="grid">
                    <div className="col-12">
                        <h5 className='blind'>일정/인력/Risk/Issue/Action Item/변경 요청</h5>
                        <TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} >
                            <Column field="subsystem" expander />
                            <Column field="lastYearSale" />
                            <Column field="thisYearSale" />
                            <Column field="lastYearProfit" />
                            <Column field="columA" />
                            <Column field="columB" />
                            <Column field="columC" />
                            <Column field="columD" />
                            <Column field="columE" />
                            <Column field="columF" />
                            <Column field="columG" />
                            <Column field="columH" />
                            <Column field="columI" />
                            <Column field="columJ" />
                            <Column field="columK" />
                            <Column field="columL" />
                            <Column field="columM" />
                            <Column field="columN" />
                            <Column field="columO" />
                            <Column field="columP" />
                            <Column field="columQ" />
                            <Column field="columR" />
                        </TreeTable>
                    </div>
                </div>
            </Panel>
        </div>
    )
}
export default BoardTwo