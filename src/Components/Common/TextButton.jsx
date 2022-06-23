import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Link} from "react-router-dom";
import {Color} from "../../Styles/Base/color";

const TextButton = (props) => {
    let text = props.text ? props.text : 'TextButton';
    let color = props.color ? props.color : Color.REGULAR_GREY;
    let underLine = props.underLine ? 'underline' : 'none';
    return (
        <div className='textBtnCover'>
            <button style={{color: color, textDecoration: underLine}}>{text}</button>
        </div>
    );
};

export default TextButton;