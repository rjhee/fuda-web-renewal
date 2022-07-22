import React  from 'react';

import {Color} from "../../../../Styles/Base/color";
import RowBarGraph from "../RowBarGraph";



const SumNumberPerIssue = (props) => {
    // 각 회차별 숫자 합계

    const xLabel = [0, 50, 100, 150, 200, 250];
    const style = {
        chartCover: {
            marginTop: 20,
        },
        xLabelCover: {
            flexDirection:"row",
            justifyContent:"space-between",
            left: 80,
            width: 275,
            top: -15,
        },
        xLabel: {
            fontSize: 10,
            color: Color.LIGHT_GREY,
        },
        rowCover: {
            flexDirection:"row",
        },
        bgImg: {
            width: 270,
            height: 270,
            resizeMode:"cover",
            position:"absolute",
            left: 80,
            top: -10,
        },
        barCover:{
            width: window.width,
        },
        bar:{
            width: window.width,
            maxWidth: 270,
            height: 15,
            marginVertical: 5,
            backgroundColor:Color.LIGHT_RED,
        },
        barNum: {
            color: Color.WHITE,
            position: "absolute",
            right: 0,
            fontSize: 8.5,
            fontWeight: "bold",
            paddingHorizontal: 4
        },
        yLabelCover: {
            width: 80,
        },
        yLabelFont: {
            height: 15,
            marginVertical: 5,
            fontSize: 10,
            color: Color.LIGHT_GREY,
        },
    }
    return (
        <div className={'chartCover'}>
            <RowBarGraph
                bg={'S'}
                xLabelArr={xLabel}
                yLabelArr={props.issue}
                data={props.sum}
                size={363}
                style={style}/>
        </div>
    );
};

export default SumNumberPerIssue;
