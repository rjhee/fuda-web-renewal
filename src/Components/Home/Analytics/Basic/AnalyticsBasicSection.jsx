

import WinningPerIssue from "./WinningPerIssue";
import AmountPerIssue from "./AmountPerIssue"
import React, {useEffect} from "react";
import ContinuousPerIssue from "./ContinuousPerIssue";
import OddEvenPerIssue from "./OddEvenPerIssue";
import SizePerIssue from "./SizePerIssue";
import MantissaPerIssue from "./MantissaPerIssue";
import LianPerIssue from "./LianPerIssue";
import AdjacentPerIssue from "./AdjacentPerIssue";

export const AnalyticsBasicSection = (props) => {

    return (
        <div className={'contentsCover'}>
            {/*<h1>{props?.title.issue}</h1>*/}
            {props?.lotto?.map((data, i)=>
                <div key={i}>
                    {props?.staticsType === 'winning' ?
                        <WinningPerIssue
                            i={i}
                            issue={data.issue}
                            type={props?.type}
                            lotto={data.valueString}
                            sn={data.snString}
                            continuousNum={data.continuous !== undefined && data.continuous}
                            repeatNum={data.repeat !== undefined && data.repeat}
                            lianNum={data.lian !== undefined && data.lian}
                            adjacentNum={data.adjacent !== undefined && data.adjacent}/> : null}
                    {props.staticsType === 'amount' ?
                        <AmountPerIssue
                            i={i}
                            issue={data.issue}
                            type={props.type}
                            lotto={data.valueString}
                            sn={data.snString}
                            win_mny_1={data.win_mny_1}
                            win_mny_2={data.win_mny_2}
                            // win_mny_1={data.win_mny_1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            // win_mny_2={data.win_mny_2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            win_1={data.win_1}
                            win_2={data.win_2}/> : null}
                    {props.staticsType === 'continuous' ?
                        <ContinuousPerIssue
                            i={i}
                            issue={data.issue}
                            type={props.type}
                            lotto={data.valueString}
                            sn={data.snString}
                            continuousNum={data.continuous !== undefined && data.continuous}/> : null}
                    {props.staticsType === 'oddEven' ?
                        <OddEvenPerIssue
                            i={i}
                            issue={data.issue}
                            type={props.type}
                            lotto={data.valueString}
                            sn={data.snString}/> : null}
                    {props.staticsType === 'size' ?
                        <SizePerIssue
                            i={i}
                            type={props.type}
                            issue={data.issue}
                            lotto={data.valueString}
                            sn={data.snString}/> : null}
                    {props.staticsType === 'mantissa' ?
                        <MantissaPerIssue
                            i={i}
                            type={props.type}
                            issue={data.issue}
                            lotto={data.valueString}
                            sn={data.snString}
                            repeatNum={data.repeat !== undefined && data.repeat}/> : null}
                    {props.staticsType === 'lian' ?
                        <LianPerIssue
                            i={i}
                            issue={data.issue}
                            type={props.type}
                            lotto={data.valueString}
                            sn={data.snString}
                            lianNum={data.lian !== undefined && data.lian}/> : null}
                    {props.staticsType === 'adjacent' ?
                        <AdjacentPerIssue
                            i={i}
                            issue={data.issue}
                            type={props.type}
                            lotto={data.valueString}
                            sn={data.snString}
                            adjacentNum={data.adjacent !== undefined && data.adjacent}/> : null}
                </div>
            )}


        </div>
    )
};
