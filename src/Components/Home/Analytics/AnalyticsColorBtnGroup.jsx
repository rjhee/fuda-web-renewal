import React, {useEffect, useState} from 'react';
import ColorButton from "../../Common/ColorButton";

const AnalyticsColorBtnGroup = (props) => {
    return (
        <div className='btnCover'>
            {props.btnTitle.map((item)=>
                <ColorButton onClick={()=> props.moveToSection(item.type,()=> props.onMenuBtn(item.type))} on={item.on} text={item.title} color={props.color}/>
            )}
        </div>
    );
};

export default AnalyticsColorBtnGroup;