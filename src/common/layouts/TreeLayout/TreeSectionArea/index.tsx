import React from "react";

interface TreeSectionAreaProps {
    children: React.ReactNode;
    className?: string;
}

const TreeSectionArea = (props: TreeSectionAreaProps) => {
    return (
        <div className="treelayout-section">{props.children && props.children}</div>
    )
}

export default TreeSectionArea