import React, {useState} from 'react';

const ToggleButton = (props) => {
    let left = props.left ? props.left : 'left';
    let right = props.right ? props.right : 'right';


    function toggleSwitch() {
        props.setOn(!props.on);
    }

    return (
        <button onClick={toggleSwitch} className='toggleButtonCover'>
            <div className={props.on === true ? 'toggleOn' : ''}>{left}</div>
            <div className={props.on === false ? 'toggleOn' : ''}>{right}</div>
        </button>
    );
};

export default ToggleButton;