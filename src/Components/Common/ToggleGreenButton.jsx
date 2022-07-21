import React from 'react';
import {notificationChange} from "../../Service/UserService";

const ToggleGreenButton = (props) => {
    let on = '開';
    let off = '';

    function toggleSwitch() {
        props.setOn(!props.on);
        props.value[props?.data.COLUMN] = !props.on === true ? props?.data.TRUE : props?.data.FALSE;
        notificationChange(props?.data.COLUMN, props?.value[props?.data.COLUMN]).then(r=>{
            if(r.data !== null) {
                console.log('NotificationToggle.js::26 ->',JSON.stringify(r.data));
            }
        });
    }



    return (
        <button onClick={toggleSwitch} className={props.on === true ? 'onToggleGreenButtonCover' : 'offToggleGreenButtonCover'}>
            <div className={props.on === true ? 'toggleOn' : 'hidden'}/>
            <div className={props.on === false ? 'toggleOn' : 'hidden'}/>
            <span>{on}{off}</span>
        </button>
    );
};

export default ToggleGreenButton;