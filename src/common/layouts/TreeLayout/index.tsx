import React from "react";

interface TreeLayoutProps {
    children: React.ReactNode;
    multiTree?: boolean;
    fullSize?: boolean;
}

const TreeLayout = (props: TreeLayoutProps) => {
    return (
        <div
            className={`treelayout ${props.multiTree && props.multiTree == true ? "multi" : ''
                } ${props.fullSize && props.fullSize == true ? "fullSize" : ""}`}
        >
            {props.children && props.children}
        </div>
    )
}

export default TreeLayout