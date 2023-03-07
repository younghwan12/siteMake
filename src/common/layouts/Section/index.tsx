import { Button } from "@/common/components";
import { CSSProperties, useState } from "react";
interface SectionProps {
    children: React.ReactNode;
    className?: string;
    toggle?: boolean;
    initToggle?: boolean;
    style?: CSSProperties
}
const Section = (props: SectionProps) => {
    const [sectionHide, setSectionHide] = useState(
        props.initToggle == undefined || false ? false : true,
    )
    const sectionToggle = (e) => {
        sectionHide == false ? setSectionHide(true) : setSectionHide(false);
    };

    return (
        <div
            className={`section ${props.className && props.className ? props.className : ""
                } ${sectionHide && sectionHide == true ? "toggle" : ""}`}
            style={props.style !== undefined ? props.style : null}
        >
            {props.toggle && props.toggle == true ? (
                <div className="section-toggle">
                    <Button onClick={(e) => sectionToggle(e)}>
                        <i className="ico-arrow"></i>
                    </Button>

                </div>
            ) : null}
            {props.children}
        </div>
    )
}
export default Section