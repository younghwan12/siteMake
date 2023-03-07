import { RefreshButton, Space } from "@/common/components";

interface SectionHeadProps {
    children?: React.ReactNode;
    title?: React.ReactNode;
    tooltip?: React.ReactNode;
    className?: string;

    onRefresh?: () => void;
}
const SectionHead = ({ onRefresh, ...props }: SectionHeadProps) => {
    return (
        <div
            className={`section-head ${props.className && props.className ? props.className : ""}`}
        >
            <span className="section-title">
                {props.title && props.title}
                <Space className="gap-0">'
                    {props.tooltip && props.tooltip !== undefined ? props.tooltip : null}
                    {onRefresh ? <RefreshButton onClick={onRefresh} /> : null}
                </Space>
            </span>
            {props.children && props.children}
        </div>
    )
}
export default SectionHead