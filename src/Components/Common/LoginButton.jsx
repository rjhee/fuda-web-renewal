import React from 'react';
import {Color} from "../../Styles/Base/color";


const LoginButton = (props) => {
    const buttonType = props.type === 'FULL' ? 'fullLoginBtnCover' : 'emptyLoginBtnCover';
    let buttonStyle = {};
    let font = {};
    let icon = props.icon ? props.icon : '';
    let text = props.text ? props.text : 'Google帳號登入';

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
            {props.icon ?
                <img src={icon} alt="icon image"/>
            : null}
            <span style={font}>{text}</span>
        </button>
    );
};

export default LoginButton;