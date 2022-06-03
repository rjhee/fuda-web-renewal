import React from 'react';
import {lang} from "../../Assets/Lang/Lang";

const Title = (props) => {
    return (
        <section className='titleSection'>
            {props.day ? <span className='date'>{lang().SINCE} {props.day}</span> : null}
            <h1 className='textCover'>
                <div className='line' style={{backgroundColor: props.color}}/>
                <strong className='textFirst'>{props.text1}</strong>
                <strong className='textSecond'>&nbsp;{props.text2}</strong>
            </h1>
        </section>
    );
};

export default Title;