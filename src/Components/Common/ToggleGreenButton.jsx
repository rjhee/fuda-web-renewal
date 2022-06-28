import React from 'react';

const ToggleGreenButton = (props) => {
    let on = '開';
    let off = '';

    function toggleSwitch() {
        props.setOn(!props.on);
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