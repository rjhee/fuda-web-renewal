import React from 'react';
import {Link} from "react-router-dom";
import {Color} from "../../Styles/Base/color";

const RoundButton = (props) => {
    let text = props.text ? props.text : 'roundButton';
    let color = props.color ? props.color : Color.REGULAR_GREY;
    let path = props.path ? props.path : '/';
    return (
        <div className='roundBtnCover'>
            <button style={{color:color}} onClick={()=>props.setOn(true)}>
                {text}
            </button>
        </div>
    );
};

export default RoundButton;