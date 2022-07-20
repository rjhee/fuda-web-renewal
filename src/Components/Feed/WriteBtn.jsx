import React from 'react';
import icon from '../../Assets/Images/icon/write-btn.png'
const WriteBtn = (props) => {
    return (
        <button className='writeButton' onClick={props.onClick}>
            <img src={icon} alt="write image icon"/>
        </button>
    );
};

export default WriteBtn;