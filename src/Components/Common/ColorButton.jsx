import React from 'react';
import {Link} from "react-router-dom";
import {Color} from "../../Styles/Base/color"

const ColorButton = (props) => {
    return (
        <button onClick={props.onClick ? props.onClick : null} className="colorBtnCover" style={{backgroundColor:props.on ? props.color : Color.LIGHT_GREY_6}}>
            <span className="text">{props?.text??"TEXT"}</span>
        </button>
    );
};

export default ColorButton;