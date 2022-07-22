import React, {useEffect} from 'react';
import {Color} from "../../../Styles/Base/color";

// region [ EX ]
//     <RowBarGraph
//         xLabelArr={x축 라벨 array}
//         yLabelArr={y축 라벨 array}
//         data={data array}
//         size={비율} 라벨최대값 / 0.6875
//         yLabel={y축 라벨 고정index array[앞, 뒤]}/>
// endregiond
const RowBarGraph = (props) => {
    let xLabelArr = !props.xLabelArr ? ['0', '11', '22', '33', '44', '55'] : props.xLabelArr;
    let yLabelArr = !props.yLabelArr ? ['111000011', '111000012', '111000013', '111000014', '111000015', '111000016'] : props.yLabelArr;
    let data = !props.data ? ["39", "11", "22", "33", "23", "18"] : props.data;
    let size = !props.size ? 80 : props.size;
    let sizeResult = 1.0652;
    let yLabel = !props.yLabel ? ['第','期'] : props.yLabel;

    return (
        <div className={'chartCover'}>
            <ul className={'lineCover'}>
                <li className={'boldLine'}/>
                <li className={'line'}/>
                <li className={'boldLine'}/>
                <li className={'line'}/>
                <li className={'boldLine'}/>
                <li className={'line'}/>
                <li className={'boldLine'}/>
                <li className={'line'}/>
                <li className={'boldLine'}/>
                <li className={'line'}/>
                <li className={'boldLine'}/>
            </ul>
            <ul className={'xLabelCover'}>
                {xLabelArr.map((num, i)=>
                    <li key={num*(i+num)} className={'xLabel'}>{num}</li>
                )}
            </ul>
            <div className={'rowCover'}>
                {props.bg === 'S'
                    ? <img className={'bgImg'}/>
                    : null}
                <ul className={'yLabelCover'}>
                    {yLabelArr.map((num, i)=>
                        <li key={num*(i+num)} className={'yLabelSubCover'}>
                            <div className={'labelCircle'}>
                                <span className={'yLabelFont'}>{yLabel[0]}{num+1}{yLabel[1]}</span>
                            </div>
                        </li>
                    )}
                </ul>
                <ul className={'barCover'}>
                    {data.map((num, i)=>
                        <li key={num*(i+num)} className={'barSubCover'}>
                            <div className={'bar'} style={{width: `${(270/sizeResult * num)/270*100}%`}}>
                                <span className={'barNum'}>{num}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
export default RowBarGraph;