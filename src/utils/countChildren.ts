import React, { Children } from "react";

export const countChildren = (children: React.ReactNode): number => {
    let count = React.Children.count(children);
    Children.forEach(children, (child) => {
        if (React.isValidElement<{ children: React.ReactNode }>(child)) {
            count += countChildren(child.props.children);
        }
    });
    return count;
};
