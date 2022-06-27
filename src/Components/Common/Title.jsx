import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Color} from "../../Styles/Base/color";

const Title = (props) => {
    const S = {
        line : { width : '2px', height: '20px',backgroundColor: props.color},
        font : { lineHeight : '22px', fontSize: '20px'},
    }

    const L = {
        line : { width : '4px', height: '30px', backgroundColor: props.color},
        font : { lineHeight : '33px', fontSize: '30px'},
    }

    const line = props.size === 'small' ?  S.line : L.line;
    const fontSize = props.size === 'small' ?  S.font : L.font;

    return (
        <section className='titleSection'>
            {props.day ? <span className='date'>{lang().SINCE} {props.day}</span> : null}
            <h1 className='textCover'>
                <div className='line' style={line}/>
                <strong className='textFirst' style={fontSize}>{props.text1}</strong>
                <strong className='textSecond' style={fontSize}>&nbsp;{props.text2}</strong>
            </h1>
        </section>
    );
};

export default Title;