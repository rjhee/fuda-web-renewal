import React from 'react';

import RowBarGraph from "../RowBarGraph";
import {Color} from "../../../../Styles/Base/color";

const FrequencyPerIssue = (props) => {
    // 숫자가 모든 회차에서 나온 횟수 통계 그래프

    const xLabel = [];
    const yLabelIndex = [];
    let yLabel = [];
    let yLabelSn = [];

    if(props.type.name === 'big'){
        for(let i = 0; i < 49; i++){
            yLabel[i] = i;
        }
    }
    else if(props.type.name === 'super'){
        for(let i = 0; i < 38; i++){
            yLabel[i] = i;
        }
        for(let i = 0; i < 9; i++){
            yLabelSn[i] = i;
        }
    }
    else if(props.type.name === 'daily'){
        for(let i = 0; i < 39; i++){
            yLabel[i] = i;
        }
    }


    const style = {
        chartCover: {
            marginTop: 40,
        },
        xLabelCover: {
            flexDirection:"row",
            justifyContent:"space-between",
            top: -15,
            left: 80,
            width: 20,
        },
        xLabel: {
            fontSize: 10,
            color: Color.LIGHT_GREY,
            height: 35,
        },
        labelCircle:{
            backgroundColor: Color.LIGHT_GREY_3,
            borderRadius: 50,
            width: 29,
            height: 29,
            justifyContent: "center",
            alignItems: "center",
            borderColor: Color.WHITE,
            borderWidth: 3,
            marginVertical: 2,
            zIndex: 100,
        },
        rowCover: {
            flexDirection:"row",
        },
        bgImg: {
            resizeMode: "contain",
            position:"absolute",
            left: 20,
            top: -10,
        },
        barCover:{
            width: window.width,
            left: -10,
        },
        barSubCover:{
            height: 35,
            justifyContent: "center",
            zIndex: 10,
        },
        bar:{
            width: window.width,
            maxWidth: 270,
            height: 19,
            marginVertical: 2,
            backgroundColor:props.titleColor,
        },
        barNum: {
            color: Color.WHITE,
            position: "absolute",
            right: 0,
            top: 3,
            fontSize: 8.5,
            fontWeight: "bold",
            paddingHorizontal: 4
        },
        yLabelSubCover: {
            height: 35,
        },
        yLabelFont: {
            height: 15,
            fontSize: 13,
            color: Color.LIGHT_GREY,
            textAlign: "center",
            lineHeight: 17,
        },
        lineCover:{
            position: 'absolute',
            flexDirection: 'row',
        },
        line: {
            width:1,
            height: 2000,
            backgroundColor: '#C9C9C9',
        },
        boldLine: {
            width:2,
            height: 2000,
            backgroundColor: '#DEDEDE',
        }
    }
    const styleSn = {
        chartCover: {
            marginTop: 40,
        },
        xLabelCover: {
            flexDirection:"row",
            justifyContent:"space-between",
            top: -15,
            left: 80,
            width: 20,
        },
        xLabel: {
            fontSize: 10,
            color: Color.LIGHT_GREY,
            height: 35,
        },
        labelCircle:{
            backgroundColor: Color.LIGHT_YELLOW,
            borderRadius: 50,
            width: 29,
            height: 29,
            justifyContent: "center",
            alignItems: "center",
            borderColor: Color.WHITE,
            borderWidth: 3,
            marginVertical: 2,
            zIndex: 100,
        },
        rowCover: {
            flexDirection:"row",
        },
        bgImg: {
            resizeMode: "contain",
            position:"absolute",
            left: 20,
            top: -10,
        },
        barCover:{
            width: window.width,
            left: -10,
        },
        barSubCover:{
            height: 35,
            justifyContent: "center",
            zIndex: 10,
        },
        bar:{
            width: window.width,
            maxWidth: 270,
            height: 19,
            marginVertical: 2,
            backgroundColor:Color.REGULAR_ORANGE,
        },
        barNum: {
            color: Color.WHITE,
            position: "absolute",
            right: 0,
            top: 3,
            fontSize: 8.5,
            fontWeight: "bold",
            paddingHorizontal: 4
        },
        yLabelSubCover: {
            height: 35,
        },
        yLabelFont: {
            height: 15,
            fontSize: 13,
            color: Color.LIGHT_RED,
            textAlign: "center",
            lineHeight: 17,
        },
    }
    return (
        <div>
            <RowBarGraph
                bg={'L'}
                xLabelArr={xLabel}
                yLabelArr={yLabel}
                yLabel={yLabelIndex}
                data={props.numCount.num}
                size={363}
                style={style}/>
            {props.type.name === 'super' ?
                <RowBarGraph
                    bg={'L'}
                    xLabelArr={xLabel}
                    yLabelArr={yLabelSn}
                    yLabel={yLabelIndex}
                    data={props.numCount.sn}
                    size={363}
                    style={styleSn}/> : null}
        </div>
    );
};

export default FrequencyPerIssue;