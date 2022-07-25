import React, {useEffect, useState} from 'react';

import {Color} from "../../../../Styles/Base/color";
import RowBarGraph from "../RowBarGraph";



const SumNumberPerIssue = (props) => {
    // 각 회차별 숫자 합계

    const xLabel = [0, 50, 100, 150, 200, 250];
    const [color, setColor] = useState('');
    useEffect(()=>{
        if(props.staticsType === 'sum'){
            setColor(Color.LIGHT_RED);
        }
    },[])
    return (
        <div className={'SumNumberPerIssue'}>
            <RowBarGraph
                xLabelArr={xLabel}
                yLabelArr={props.issue}
                data={props.sum}
                maxNum={250}
                color={color}/>
        </div>
    );
};

export default SumNumberPerIssue;
