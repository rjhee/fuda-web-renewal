import React, {useEffect, useState} from 'react';
import AnalyticsCircleBtn from "./AnalyticsCircleBtn";
import WinningPerIssue from "./Basic/WinningPerIssue";
import {AnalyticsBasicSection} from "./Basic/AnalyticsBasicSection";
import {AnalyticsAdvanceSection} from "./Advance/AnalyticsAdvanceSection";
import DistributionPerIssue from "./DistributionPerIssue";

const AnalyticsContents = (props) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        let level = props.btnTitle;
        if(level[0].on){
            setData(props.basicData);
        }
        else if(level[1].on){
            setData(props.advanceData);
        }
        else {
            setData([]);
        }
    },[props.btnTitle])
    return (
        <>
            <AnalyticsCircleBtn
                onMenuBtn={props.onMenuBtn}
                moveToSection={props.moveToSection}
                lottoType={props.lottoType}
                staticsLevel={props.staticsLevel}
                staticsType={props.staticsType}
                color={props.color}
                data={data}/>
            {props.staticsLevel
                ? <DistributionPerIssue
                    key={''}
                    title={''}
                    staticsType={props.staticsType}
                    mantissaStatics={props.mantissaStaticsArr}
                    type={props.lottoType}
                    titleColor={props.color}
                    lotto={props.lotto}
                />
                : <>
                    <AnalyticsBasicSection
                        key={''}
                        title={''}
                        staticsType={props.staticsType}
                        mantissaStatics={props.mantissaStaticsArr}
                        type={props.lottoType}
                        titleColor={props.color}
                        lotto={props.lotto}/>
                    <AnalyticsAdvanceSection
                        key={''}
                        title={''}
                        cooperArr={props.cooperArr}
                        noShowArr={props.noShowArr}
                        numCount={props.numCount}
                        staticsType={props.staticsType}
                        mantissaStatics={props.mantissaStaticsArr}
                        type={props.lottoType}
                        titleColor={props.color}
                        lotto={props.lotto}/>
                </>}
            {props.staticsLevel}
            {props.staticsType}
        </>
    );
};

export default AnalyticsContents;