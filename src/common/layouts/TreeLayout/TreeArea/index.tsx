import React from "react";
import { useMeasure } from 'react-use'

interface TreeAreaProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

const TreeArea = (props: TreeAreaProps) => {
    const [ref, { width }] = useMeasure();

    return (
        <div className="treelayout-tree" ref={ref}>
            <div
                className="treelayout-tree-box"
            >
                {props.children && props.children}
            </div>
        </div>
    )
}

export default TreeArea