interface FlexboxItemProps {
    children: React.ReactNode;
    className?: string;
}

const FlexboxItem = (props: FlexboxItemProps) => {
    return (
        <div
            className={`iq-section-item ${props.className && props.className ? props.className : ""
                }`}
        >
            {props.children}
        </div>
    )
}

export default FlexboxItem