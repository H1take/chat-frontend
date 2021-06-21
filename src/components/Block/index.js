import React from "react";

import "./Block.scss";

import classNames from "classnames";

const Block = ({ children, className }) => {
    return(
        <div className={classNames("block", className)}>
            {children}
        </div>
    );
}

export default Block;