import { DataTable as PDataTable, DataTableStateEvent, DataTableProps } from 'primereact/datatable'

import { SectionHead, SectionBody } from '@/common/layouts'

import { useState, useCallback, useMemo, useEffect } from 'react';
import { Option, Select } from '../Select'
import Button from '../Button'
import Space from '../Space'

interface ICustomDataTableProps extends DataTableProps<any> {
    extraButtons?: React.ReactNode;
    tooltip?: React.ReactNode;
    extraForm?: React.ReactNode;
    refresh?: React.ReactNode;
    /** 기본 Row 10, 30, 50 외 필요시 전달 */
    rowNums?: number[] | null;
    onRefresh?: () => void;
    onRowClick?: any;
}

const DataTable: React.FC<ICustomDataTableProps> = (props) => {
    const { totalRecords, rowNums } = props;
    const [first, setFirst] = useState(0);

    const [rows, setRows] = useState(
        props.rowNums ? props.rowNums[0] : props.rows,
    );
    const [tableCellSize, setTableCellSize] = useState<DataTableProps<any>['size']>("normal");

    const handleCellSizeBtn1 = useCallback(() => {
        setTableCellSize(tableCellSize === "normal" ? "small" : "normal")
    }, [tableCellSize])

    const handleRowNumChange = useCallback((newValue: number) => {
        setRows(newValue)
    }, [])

    const handlePage = (e: DataTableStateEvent) => {
        setFirst(e.first);
        props.onPage(e);
    };
    const isPaginatorTable = useMemo(() => {
        if (totalRecords && rowNums && totalRecords > rowNums[0]) {
            return true;
        }
    }, [totalRecords, rowNums])

    const handleOnclick = (e) => {
        if (
            e.originalEvent.target.classList.contains("p-selection-column") ||
            e.originalEvent.target.classList.contains("p-checkbox-icon")
        )
            return false;


        props.onRowClick && props.onRowClick(e);
    }
    return (
        <>
            <SectionHead
                title={props.title ? props.title : ""}
                tooltip={props.tooltip && props.tooltip}
                onRefresh={props.onRefresh}
            >
                <Space>
                    {props?.extraButtons && props.extraButtons}
                    {props?.rowNums && props.value && Array.isArray(props.value) && props.value.length > props.rowNums[0] ? (
                        <Select
                            defaultValue={props.rowNums[0]}
                            onChange={handleRowNumChange}
                        >
                            {props.rowNums.map((item) => (
                                <Option key={item} value={item}>
                                    {item}건 보기
                                </Option>
                            ))}
                        </Select>
                    ) : null}

                    {props.value &&
                        Array.isArray(props.value) &&
                        props.value.length >= 10 ? (
                        <Button
                            onClick={handleCellSizeBtn1}
                        >

                        </Button>
                    ) : null
                    }
                </Space>
            </SectionHead>
            {props.extraForm !== undefined ? (<div>{props.extraForm}</div>) : null}
            {/* <SectionBody> */}
            <PDataTable
                rows={rows}
                size={tableCellSize}
                paginator={isPaginatorTable}
                {...props}
                emptyMessage="데이터가 없습니다."
                onPage={handlePage}
                first={first}
                onRowClick={
                    props.selectionMode !== "single"
                        ? handleOnclick
                        : () => {
                            return false
                        }
                }
            />
            {/* </SectionBody> */}
        </>
    )

}

DataTable.defaultProps = {
    rowNums: [10, 30, 50,]
}

export default DataTable;