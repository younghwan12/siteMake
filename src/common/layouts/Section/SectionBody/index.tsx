interface SectionBodyProps {
    children: React.ReactNode;
    className?: string;
}
const SectionBody = (props: SectionBodyProps) => {
    return (
        <div
            className={`iq-section-body ${props.className && props.className ? props.className : ""}`}
        >
            {props.className}
        </div>
    )
}
export default SectionBody