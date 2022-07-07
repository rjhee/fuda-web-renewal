import React from 'react';
import heartIcon from "../../Assets/Images/icon/hart-icon.png";

const HeartBtn = (props) => {
    let count = props.count ? props.count : 0;
    return (
        <button className='heart'>
            <img src={heartIcon} alt="heart button icon"/>
            <span>{count}</span>
        </button>
    );
};

export default HeartBtn;