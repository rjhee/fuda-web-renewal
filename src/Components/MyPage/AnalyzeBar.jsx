import React, {useEffect, useState} from 'react';
import fudaIcon from '../../Assets/Images/icon/chara.png';
import {lang} from "../../Assets/Lang/Lang";

const AnalyzeBar = (props) => {

    return (
        <section className='analyzeBar'>
            <h1 className='hidden'>gradient bar</h1>
            <div className='barGroup'>
                <div className='barImgCover'>
                    <div className='bar' style={{width: `${props.per}%`}}>
                        <div className='imgCover'>
                            <img src={fudaIcon} alt="pointer icon"/>
                        </div>
                    </div>
                    <span className='minNum'>0</span>
                    <span className='maxNum'>{Number(props.maxValue).toLocaleString('ko-KR')}元</span>
                </div>
            </div>
            <div className='modalBtn'>
                <button onClick={()=>props.onClick(true)}>
                    {lang().SET_GOAL}
                </button>
            </div>
        </section>
    );
};

export default AnalyzeBar;