import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { Modal, Input, Form, FormItem, useForm, Button } from "@/common/components";
import { DataTableStateEvent } from "primereact/datatable";
import { Section } from "@/common/layouts";
import { SearchForm, SearchFormBox, SearchFormControls } from "@/features/search";

import { MODIFY_CONFIRM_MSG } from "@/common/constants";

import { useModal } from "@/common/components";


import { useUpdateboardListMutation } from "@/features/board/redux";

interface IModalProps {
    visible2: boolean;
    rowData: any;
    setVisible2: React.Dispatch<React.SetStateAction<boolean>>;
}


const BoardDetailModal = ({ visible2, setVisible2, rowData }: IModalProps) => {

    const [updateBoard] = useUpdateboardListMutation();
    const [selectedDatas, setSelectedDatas] = useState([])
    const [form] = useForm()

    const [modal, contextHolder] = useModal();

    const dispatch = useAppDispatch();

    const handleFinish = (e) => {
        updateBoard({
            ...e
        }),
            setVisible2(false)
    }

    useEffect(() => {
        console.log(rowData)
        form.setFieldsValue({
            param_a: rowData?.param_a,
            param_b: rowData?.param_b,
            uid: rowData?.uid,
        })
    }, [rowData])

    const resetModal = () => {
        setSelectedDatas([])
        form.resetFields([])
    }

    const modalOnCancelFun = () => {
        setVisible2(false)
    }

    const modalOnOkFun = () => {
        setVisible2(false)
    }

    const viewModal = () => {
        modal.confirm({
            title: MODIFY_CONFIRM_MSG,
            onOk: updateList
        })
    }
    const updateList = () => {
        form.submit();
    }

    const modifyevent = (e) => {
        console.log(e)
    }



    return (
        <>
            {contextHolder}
            <Modal
                title="글 삭제"
                open={visible2}
                closable={true}
                onCancel={() => modalOnCancelFun()}
                onOk={viewModal}
            >
                <Form form={form} onFinish={handleFinish}>
                    <SearchForm>
                        <FormItem label="글" name="param_a">
                            <Input />
                        </FormItem>
                        <FormItem label="작성자" name="param_b">
                            <Input />
                        </FormItem>
                        <FormItem label="id" name="uid" hidden>
                            <Input />
                        </FormItem>
                    </SearchForm>
                </Form>
            </Modal>
        </>
    )
}
export default BoardDetailModal