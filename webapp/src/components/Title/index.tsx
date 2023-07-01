import React from "react";

interface TitleProps { overlay: string; text: string; }

import "./styles.css";

const Navbar: React.FC<TitleProps> = ({text, overlay}) => {
    return (
        <div className="title-container">
            <h1 className="title-text"> {text} </h1>
            <span className="title-overlay"> {overlay} </span>
        </div>
    )
}

export default Navbar;