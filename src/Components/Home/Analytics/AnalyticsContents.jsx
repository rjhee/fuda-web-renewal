import React, {useEffect, useState} from 'react';
import AnalyticsCircleBtn from "./AnalyticsCircleBtn";
import WinningPerIssue from "./Basic/WinningPerIssue";
import {AnalyticsBasicSection} from "./Basic/AnalyticsBasicSection";
import {AnalyticsAdvanceSection} from "./Advance/AnalyticsAdvanceSection";
import DistributionPerIssue from "./DistributionPerIssue";
import ContentsTitleSection from "./ContentsTitleSection";
import {useParams} from "react-router-dom";

const AnalyticsContents = (props) => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [currentOn, setCurrentOn] = useState('');

    let level = props.btnTitle;
    useEffect(()=>{
        if(level[0].on){
            setData(props.basicData);
            setCurrentOn(level[0].type);
        }
        else if(level[1].on){
            setData(props.advanceData);
            setCurrentOn(level[1].type);
        }
        else {
            setData([]);
            setCurrentOn(level[2].type);
        }
        console.log('AnalyticsContents.jsx:29 ->',props);
    });

    return (
        <>
            <AnalyticsCircleBtn
                onMenuBtn={props.onMenuBtn}
                moveToSection={props.moveToSection}
                lottoType={props.lottoType}
                staticsLevel={props.staticsLevel}
                staticsType={props.staticsType}
                color={props.color}
                data={data}
                />

            {currentOn === 'basic'
                ?
                <>
                    <ContentsTitleSection
                        color={props.color}
                        type={props.lottoType}
                        staticsLevel={props.staticsLevel}
                        circleMenu={props.basicData}
                        // staticsType={props.staticsType}
                        staticsType={id}
                        sum={props.sum}
                        sumMantissa={props.sumMantissa}
                    />
                    <AnalyticsBasicSection
                        key={''}
                        title={''}
                        // staticsType={props.staticsType}
                        staticsType={id}
                        mantissaStatics={props.mantissaStaticsArr}
                        type={props.lottoType}
                        titleColor={props.color}
                        lotto={props.lotto}/>
                </>
                : null}
            {currentOn === 'advance'
                ?
                <>
                    <ContentsTitleSection
                        color={props.color}
                        type={props.lottoType}
                        staticsLevel={props.staticsLevel}
                        circleMenu={props.advanceData}
                        // staticsType={props.staticsType}
                        staticsType={id}
                        sum={props.sum}
                        sumMantissa={props.sumMantissa}
                    />
                    <AnalyticsAdvanceSection
                        key={''}
                        title={''}
                        sum={props.sum}
                        sumMantissa={props.sumMantissa}
                        issue={props.issue}
                        cooperArr={props.cooperArr}
                        noShowArr={props.noShowArr}
                        numCount={props.numCount}
                        // staticsType={props.staticsType}
                        staticsType={id}
                        mantissaStatics={props.mantissaStaticsArr}
                        type={props.lottoType}
                        titleColor={props.color}
                        lotto={props.lotto}/>
                </>
                : null}
            {currentOn === 'distribution'
                ?
                <>
                    <ContentsTitleSection
                        color={props.color}
                        staticsType={currentOn}
                        circleMenu={props.distribution}
                    />
                    <DistributionPerIssue
                        key={''}
                        title={''}
                        staticsType={props.staticsType}
                        mantissaStatics={props.mantissaStaticsArr}
                        type={props.lottoType}
                        titleColor={props.color}
                        lotto={props.lotto}
                    />
                </>
                : null}

        </>
    );
};

export default AnalyticsContents;