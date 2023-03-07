import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { Modal, Input, Form, FormItem, useForm } from "@/common/components";
import { DataTableStateEvent } from "primereact/datatable";
import { Section } from "@/common/layouts";
import { SearchForm, SearchFormBox, SearchFormControls } from "@/features/search";


import { addBoardList, useAddboardListMutation } from "@/features/board/redux";

interface IModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const BoardAddModal = ({ visible, setVisible }: IModalProps) => {

    const [updateBoard] = useAddboardListMutation();
    const [selectedDatas, setSelectedDatas] = useState([])
    const [form] = useForm()
    const dispatch = useAppDispatch();

    const handleFinish = (e) => {
        //dispatch(
        updateBoard({
            ...e
        }),
            setVisible(false)
        //)
    }

    const resetModal = () => {
        setSelectedDatas([])
        form.resetFields([])
    }

    const modalOnCancelFun = () => {
        setVisible(false)
    }

    const modalOnOkFun = () => {
        setVisible(false)
    }



    return (
        <Modal
            title="글 검색"
            open={visible}
            closable={true}
            onCancel={() => modalOnCancelFun()}
            onOk={form.submit}
        >
            <Form form={form} onFinish={handleFinish}>
                <SearchForm>
                    <FormItem label="제목" name="title">
                        <Input />
                    </FormItem>
                    <FormItem label="작성자" name="author">
                        <Input />
                    </FormItem>
                </SearchForm>
            </Form>
        </Modal>
    )
}
export default BoardAddModal