import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import useWindowDimensions from "../../Styles/Base/windowDimensions";

const Accumulate = (props) => {
    const { height, width } = useWindowDimensions();
    return (
        <aside className='accumulateSection' style={{width:width-42}}>
            <div className='title'>
                <img src={props.lotto.titleImg} alt="title image"/>
                <h1>{lang().ACCUMULATED}</h1>
            </div>
            <div className='amount'>
                <strong>{props.jackpot.toLocaleString('ko-KR')} </strong>
                <span>{lang().YUAN}</span>
            </div>
            <div className='date'>
                <span>
                    {lang().FIRST}{props.lotto.issue}{lang().ISSUE}
                </span>
                <span>
                    {props.lotto.day[0]}{lang().YEAR}
                    {props.lotto.day[1]}{lang().MONTH}
                    {props.lotto.day[2]}{lang().DAY}
                    {lang().LOTTERY}
                </span>
            </div>
        </aside>
    );
};

export default Accumulate;