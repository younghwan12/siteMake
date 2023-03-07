import SearchFormFooter from "../SearchFormFooter";
import { Button, Space } from "@/common/components"

import type { FormInstance } from 'antd'


interface ISearchFormControlsProps {
    /**검색영역 Form 전달 */
    form: FormInstance<any>;
}
const SearchFormControls = ({ form }: ISearchFormControlsProps) => {
    return (
        <SearchFormFooter>
            <Space>
                <Button type="primary" size="large" htmlType="submit">검색</Button>
                <Button size="large" onClick={() => form.resetFields()}>검색조건 초기화</Button>
            </Space>
        </SearchFormFooter>
    )
}
export default SearchFormControls