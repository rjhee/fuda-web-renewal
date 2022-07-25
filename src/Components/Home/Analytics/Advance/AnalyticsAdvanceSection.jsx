import React, {useEffect, useState} from 'react';

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

    return (
        <div>
            {/*<h1>{props?.title.issue}</h1>*/}

            {props?.lotto?.map((data, i)=>
                <>
                    {props.staticsType === 'quality' ?
                        <QualityPerIssue
                            i={i}
                            type={props.type}
                            issue={data.issue}
                            lotto={data.valueString}
                            sn={data.snString}
                            compositeNum={data.compositeNum != undefined && data.compositeNum}
                            primeNum={data.primeNum != undefined && data.primeNum}
                            multiples3Num={data.multiples3Num != undefined &&data.multiples3Num}/> : null}
                    {props.staticsType === 'ac' ?
                        <ACvaluePerIssue
                            i={i}
                            type={props.type}
                            issue={data.issue}
                            lotto={data.valueString}
                            diffNum={data.differenceNum}
                            heightDiffNum={data.heightDiffNum}
                            AcNum={data.AcNum}
                            sn={data.snString}
                            repeatNum={data.repeat}/> : null}
                </>
            )}
            {props.staticsType === 'sum' ?
                <SumNumberPerIssue
                    staticsType={props.staticsType}
                    issue={props.issue}
                    sum={props.sum}/> : null}
            {props.staticsType === 'sumMantissa' ?
                <SumMantissaPerIssue
                    staticsType={props.staticsType}
                    issue={props.issue}
                    sumMantissa={props.sumMantissa}/> : null}
            {props.staticsType === 'cooperate' ?
                <CooperatePerIssue
                    cooperArr={props.cooperArr}/> : null}
            {props.staticsType === 'unCombine' ?
                <UncombinePerIssue
                    noShowArr={props.noShowArr}/> : null}
            {props.staticsType === 'frequency' ?
                <FrequencyPerIssue
                    type={props.type}
                    staticsType={props.staticsType}
                    titleColor={props.titleColor}
                    numCount={props.numCount}/> : null}

        </div>
    )
};

