import React from 'react';
import {Color} from "../../Styles/Base/color";

const TitleBig = (props) => {
    let color = props.color ? props.color : Color.MAIN_RED;
    let text = props.text ? props.text : 'Title';

    return (
        <h1 className='bigTitle' style={{color:color}}>
            {text}
        </h1>
    );
};

export default TitleBig;