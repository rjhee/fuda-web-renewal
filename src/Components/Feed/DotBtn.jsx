import React from 'react';
import menuIcon from "../../Assets/Images/icon/menu-icon.png";
import menuIconGrey from "../../Assets/Images/icon/menuDotIcon.png";

const DotBtn = (props) => {
    return (
        <button className='menuBtn' onClick={() => props.setMenuOn(!props.menuOn)}>
            <img src={props.grey === true ? menuIconGrey : menuIcon} alt="menu image icon"/>
        </button>
    );
};

export default DotBtn;