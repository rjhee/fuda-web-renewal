import React from 'react';
import {Link} from "react-router-dom";
import {Color} from "../../Styles/Base/color"

const ColorButton = (props) => {
    return (
        <Link to={props.path}>
            <button className="colorBtnCover" style={{backgroundColor:props.color}}>
                <span className="text">{props?.text??"TEXT"}</span>
            </button>
        </Link>
    );
};

export default ColorButton;