interface FlexboxProps {
    children: React.ReactNode;
    className?: string;
}

const FlexBox = (props: FlexboxProps) => {
    return (
        <div
            className={`iq-section-itembox ${props.className && props.className == "col" ? "col" : ""
                }`}
        >
            {props.children}
        </div>
    )
}

export default FlexBox