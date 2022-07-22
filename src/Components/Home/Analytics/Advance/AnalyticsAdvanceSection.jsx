import React from 'react';

import ContentsTitleSection from "../ContentsTitleSection";
import QualityPerIssue from "./QualityPerIssue";
import SumNumberPerIssue from "./SumNumberPerIssue";
import SumMantissaPerIssue from "./SumMantissaPerIssue";
import CooperatePerIssue from "./CooperatePerIssue";
import UncombinePerIssue from "./UncombinePerIssue";
import ACvaluePerIssue from "./ACvaluePerIssue";
import FrequencyPerIssue from "./FrequencyPerIssue";
import {Color} from "../../../../Styles/Base/color";

export const AnalyticsAdvanceSection = (props) => {
    const on = props.circleBtnAdvance.filter((item)=> item.on === true);

    const commonStyle = {
        sectionCover: {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: Color.LIGHT_GREY_2,
            borderWidth: 1,
            marginVertical: 20,
            paddingTop: 15,
            paddingBottom: 5,
            paddingHorizontal: 10,
        },
        issueFont: {
            fontSize: 15,
            color: Color.DARK_GREY_2,
            position: "absolute",
            backgroundColor: Color.WHITE,
            paddingHorizontal: 10,
            paddingVertical: 10,

        },
        lottoNumCover: {
            flexDirection: "row",
            marginVertical: 12,
        },
        lottoNum: {
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            borderRadius: 50,
            marginHorizontal: 2,
            backgroundColor: Color.LIGHT_GREY_3,
        },
        lottoNumFont: {
            fontSize: 15,
            color: Color.LIGHT_GREY,
        },
    }
    let sum = [];
    let sumMantissa = [];
    let issue = [];
    props.lotto.map((data) => {
        sum.push(data.sumNum[0]);
        sumMantissa.push(data.sumMantissa[0]);
        issue.push(data.issue);
    })


    return (
        <div>
            <h1>{props.title.issue}</h1>
            {/*<ContentsTitleSection*/}
            {/*    index={props.i}*/}
            {/*    titleColor={props.titleColor}*/}
            {/*    key={props.i + props.title.L}*/}
            {/*    title={props.title.L}*/}
            {/*    title_XL={props.title.XL}*/}
            {/*    type={props.title.name}*/}
            {/*    subTitle={props.title.subTitle}*/}
            {/*    info={props.title.info}*/}
            {/*    lotto={props.lotto}*/}
            {/*    infoText={props.title.infoText}/>*/}
            {props.lotto.map((data, i)=>
                <>
                    {on[0].type === 'quality' ?
                        <QualityPerIssue
                            i={i}
                            type={props.type}
                            issue={data.issue}
                            lotto={data.valueString}
                            sn={data.snString}
                            compositeNum={data.compositeNum != undefined && data.compositeNum}
                            primeNum={data.primeNum != undefined && data.primeNum}
                            multiples3Num={data.multiples3Num != undefined &&data.multiples3Num}
                            commonStyle={commonStyle}/> : null}
                    {on[0].type === 'ac' ?
                        <ACvaluePerIssue
                            i={i}
                            type={props.type}
                            issue={data.issue}
                            lotto={data.valueString}
                            diffNum={data.differenceNum}
                            heightDiffNum={data.heightDiffNum}
                            AcNum={data.AcNum}
                            sn={data.snString}
                            repeatNum={data.repeat}
                            commonStyle={commonStyle}/> : null}
                </>
            )}
            {on[0].type === 'sum' ?
                <SumNumberPerIssue
                    issue={issue}
                    sum={sum}
                    commonStyle={commonStyle}/> : null}
            {on[0].type === 'sumMantissa' ?
                <SumMantissaPerIssue
                    issue={issue}
                    sumMantissa={sumMantissa}
                    commonStyle={commonStyle}/> : null}
            {on[0].type === 'cooperate' ?
                <CooperatePerIssue
                    cooperArr={props.cooperArr}
                    commonStyle={commonStyle}/> : null}
            {on[0].type === 'unCombine' ?
                <UncombinePerIssue
                    noShowArr={props.noShowArr}
                    commonStyle={commonStyle}/> : null}
            {on[0].type === 'frequency' ?
                <FrequencyPerIssue
                    type={props.type}
                    titleColor={props.titleColor}
                    numCount={props.numCount}
                    commonStyle={commonStyle}/> : null}

        </div>
    )
};

