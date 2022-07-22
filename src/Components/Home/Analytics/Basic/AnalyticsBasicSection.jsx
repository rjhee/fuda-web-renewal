
import ContentsTitleSection from "../ContentsTitleSection";
import WinningPerIssue from "./WinningPerIssue";
import AmountPerIssue from "./AmountPerIssue"
import React, {useEffect} from "react";
import ContinuousPerIssue from "./ContinuousPerIssue";
import OddEvenPerIssue from "./OddEvenPerIssue";
import SizePerIssue from "./SizePerIssue";
import MantissaPerIssue from "./MantissaPerIssue";
import LianPerIssue from "./LianPerIssue";
import AdjacentPerIssue from "./AdjacentPerIssue";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {Color} from "../../../../Styles/Base/color";

export const AnalyticsBasicSection = (props) => {
    console.log('AnalyticsBasicSection.jsx:16 ->',props);

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

    return (
        <div className={'contentsCover'}>
            <h1>{props.title.issue}</h1>
            {/*<ContentsTitleSection*/}
            {/*    titleColor={props.titleColor}*/}
            {/*    index={props.i}*/}
            {/*    key={props.i + props.title.L}*/}
            {/*    title={props.title.L}*/}
            {/*    type={props.title.type}*/}
            {/*    subTitle={props.title.subTitle}*/}
            {/*    info={props.title.info}*/}
            {/*    infoText={props.title.infoText}*/}
            {/*    mantissaStatics={props.mantissaStatics}*/}
            {/*    lottoType={props.type.name}*/}
            {/*    lotto={props.lotto}/>*/}
            {props.lotto.map((data, i)=>
                <>
                    {props?.staticsType === 'winning' ?
                        <WinningPerIssue
                            i={i}
                            issue={data.issue}
                            type={props.type}
                            lotto={data.valueString}
                            sn={data.snString}
                            continuousNum={data.continuous !== undefined && data.continuous}
                            repeatNum={data.repeat !== undefined && data.repeat}
                            lianNum={data.lian !== undefined && data.lian}
                            adjacentNum={data.adjacent !== undefined && data.adjacent}
                            commonStyle={commonStyle}/> : null}
                    {/*{props.staticsType === 'amount' ?*/}
                    {/*    <AmountPerIssue*/}
                    {/*        i={i}*/}
                    {/*        issue={data.issue}*/}
                    {/*        type={props.type}*/}
                    {/*        lotto={data.valueString}*/}
                    {/*        sn={data.snString}*/}
                    {/*        win_mny_1={data.win_mny_1}*/}
                    {/*        win_mny_2={data.win_mny_2}*/}
                    {/*        // win_mny_1={data.win_mny_1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}*/}
                    {/*        // win_mny_2={data.win_mny_2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}*/}
                    {/*        win_1={data.win_1}*/}
                    {/*        win_2={data.win_2}*/}
                    {/*        commonStyle={commonStyle}/> : null}*/}
                    {/*{props.staticsType === 'continuous' ?*/}
                    {/*    <ContinuousPerIssue*/}
                    {/*        i={i}*/}
                    {/*        issue={data.issue}*/}
                    {/*        type={props.type}*/}
                    {/*        lotto={data.valueString}*/}
                    {/*        sn={data.snString}*/}
                    {/*        continuousNum={data.continuous !== undefined && data.continuous}*/}
                    {/*        commonStyle={commonStyle}/> : null}*/}
                    {/*{props.staticsType === 'oddEven' ?*/}
                    {/*    <OddEvenPerIssue*/}
                    {/*        i={i}*/}
                    {/*        issue={data.issue}*/}
                    {/*        type={props.type}*/}
                    {/*        lotto={data.valueString}*/}
                    {/*        sn={data.snString}*/}
                    {/*        commonStyle={commonStyle}/> : null}*/}
                    {/*{props.staticsType === 'size' ?*/}
                    {/*    <SizePerIssue*/}
                    {/*        i={i}*/}
                    {/*        type={props.type}*/}
                    {/*        issue={data.issue}*/}
                    {/*        lotto={data.valueString}*/}
                    {/*        sn={data.snString}*/}
                    {/*        commonStyle={commonStyle}/> : null}*/}
                    {/*{props.staticsType === 'mantissa' ?*/}
                    {/*    <MantissaPerIssue*/}
                    {/*        i={i}*/}
                    {/*        type={props.type}*/}
                    {/*        issue={data.issue}*/}
                    {/*        lotto={data.valueString}*/}
                    {/*        sn={data.snString}*/}
                    {/*        repeatNum={data.repeat !== undefined && data.repeat}*/}
                    {/*        commonStyle={commonStyle}/> : null}*/}
                    {/*{props.staticsType === 'lian' ?*/}
                    {/*    <LianPerIssue*/}
                    {/*        i={i}*/}
                    {/*        issue={data.issue}*/}
                    {/*        type={props.type}*/}
                    {/*        lotto={data.valueString}*/}
                    {/*        sn={data.snString}*/}
                    {/*        lianNum={data.lian !== undefined && data.lian}*/}
                    {/*        commonStyle={commonStyle}/> : null}*/}
                    {/*{props.staticsType === 'adjacent' ?*/}
                    {/*    <AdjacentPerIssue*/}
                    {/*        i={i}*/}
                    {/*        issue={data.issue}*/}
                    {/*        type={props.type}*/}
                    {/*        lotto={data.valueString}*/}
                    {/*        sn={data.snString}*/}
                    {/*        adjacentNum={data.adjacent !== undefined && data.adjacent}*/}
                    {/*        commonStyle={commonStyle}/> : null}*/}
                </>
            )}


        </div>
    )
};

// const style = StyleSheet.create({
//     contentsCover:{
//         paddingHorizontal:21,
//     },
// });
