

import React, {useEffect} from 'react';


// region [ EX ]
//     <RowBarGraph
//         xLabelArr={x축 라벨 array}
//         yLabelArr={y축 라벨 array}
//         data={data array}
//         size={비율} 라벨최대값 / 0.6875
//         yLabel={y축 라벨 고정index array[앞, 뒤]}/>
// endregiond
const ColumnBarGraph = (props) => {
    let data = !props.data ? ["39", "11", "22", "33", "23", "18"] : props.data;
    let size = !props.size ? 80 : props.size;
    // let sizeResult = Platform.OS === 'ios' ? size : size * 1.0652;
    let sizeResult = 10;
    let barCover = null;
    let per = 0;
    // if(props.type === 'big'){
    //     barCover = props.style.bigBarCover;
    //     per = 6;
    // }else if(props.type === 'super'){
    //     barCover = props.style.superBarCover;
    //     per = 6.2;
    // }else if(props.type === 'daily'){
    //     barCover = props.style.dailyBarCover;
    //     per = 7.7
    // }
    console.log('ColumnBarGraph.jsx:31 ->',props);
    return (
        <div className={'ColumnBarGraph'}>
            <ul className={'lineCover'}>
                <li className={'boldLine'}/>
                <li className={'line'}/>
                <li className={'boldLine'}/>
                <li className={'line'}/>
                <li className={'pointLine'} style={props.color ? {backgroundColor: props.color} : null}/>
            </ul>
            <ul className={'yLabelCover'}>
                {props?.yLabelArr.map((num,i)=>
                    <li key={i} className={'yLabelFont'}>{props.yLabelArr[props.yLabelArr.length-1]-num}</li>
                )}
            </ul>
            <ul className={'xLabelCover'}>
                {props?.xLabelIndex.map((item, i)=>
                    <li key={i} className={'xLabel'}>{item}</li>
                )}
            </ul>
            <ul className={'barCover'}>
                {props?.xLabelArr?.map((num, i)=>
                    i < 10 ? <li key={i} className={'bar'} style={{height: (num/130*100)+"%", backgroundColor : props.color ? props.color : null }}></li>
                        : null
                )}

            </ul>
        </div>
    );
};
export default ColumnBarGraph;