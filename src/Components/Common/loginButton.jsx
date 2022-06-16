import React from 'react';
import {Color} from "../../Styles/Base/color";
import iconImg from "../../Assets/Images/icon/google_icon.png"

const LoginButton = (props) => {
    const buttonType = props.type === 'FULL' ? 'fullLoginBtnCover' : 'emptyLoginBtnCover';
    let buttonStyle = {};
    let font = {};
    let icon = props.icon ? props.icon : '';

    if(props.type === 'FULL') {
        buttonStyle = {backgroundColor: props.color , border: 'none'};
        font = {color: Color.WHITE}
    }else {
        buttonStyle = {backgroundColor: Color.WHITE, borderColor: props.color};
        font = {color: props.color}
    }

    return (
        <button
            onClick={props.onClick}
            className={buttonType}
            style={buttonStyle}>
            <img src={icon} alt="icon image"/>
            <span style={font}>{props.text}Google帳號登入</span>
        </button>
    );
};

export default LoginButton;