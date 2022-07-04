import React from 'react';
import {Link} from "react-router-dom";
import {Color} from "../../Styles/Base/color"

const ColorButton = (props) => {
    return (
        <Link to={props.path ? props.path : ''}>
            <button onClick={props.onClick ? props.onClick : null} className="colorBtnCover" style={{backgroundColor:props.color ? props.color : Color.MAIN_RED}}>
                <span className="text">{props?.text??"TEXT"}</span>
            </button>
        </Link>
    );
};

export default ColorButton;