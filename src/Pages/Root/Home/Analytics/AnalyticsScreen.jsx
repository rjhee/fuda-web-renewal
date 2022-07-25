import React, {useEffect, useState} from 'react';

import {Link, useNavigate} from "react-router-dom";
import {lang} from "../../../../Assets/Lang/Lang";
import dailyLotto from '../../../../Assets/Images/banner/title_daily_aos.png'
import bigLotto from '../../../../Assets/Images/banner/title_big_aos.png'
import superLotto from '../../../../Assets/Images/banner/title_super_aos.png'
import analyticsSystem from '../../../../Assets/Images/icon/icon-analysis-search.png'
import Caution from "../../../../Components/Common/Caution";
import {getWinBig, getWinSuper, getWinDaily, getWinBigNumAll, getWinSuperNumAll, getWinDailyNumAll} from "../../../../Service/LottoService";

const AnalyticsScreen = (props) => {
    const navigate = useNavigate();

    const [bigNum, setBigNum] = useState([]);
    const [superNum, setSuperNum] = useState([]);
    const [dailyNum, setDailyNum] = useState([]);

    const [bigNumAll, setBigNumAll] = useState([]);
    const [superNumAll, setSuperNumAll] = useState([]);
    const [dailyNumAll, setDailyNumAll] = useState([]);

    const [bigSnAll, setBigSnAll] = useState([]);
    const [superSnAll, setSuperSnAll] = useState([]);

    const getIssueNum = () => {
        getWinDaily()
            .then((result)=>{
                let dailyNumCopy = [];
                result.data.forEach((data, i)=>{
                    let numberBefore = [data.b1, data.b2, data.b3, data.b4, data.b5];
                    let numbersAfter = [];
                    for(let i = 0; i < numberBefore.length; i++){
                        numbersAfter.push(numberBefore[i].toString().padStart(2, '0'));
                    }
                    let dailyData = {type: 'daily', key: i+data.issue, issue:data.issue, value:numberBefore, valueString:numbersAfter, win_mny_1: data.win_mny_1, win_mny_2: data.win_mny_2, win_1: data.win_cnt_1, win_2: data.win_cnt_2};
                    dailyNumCopy.push(dailyData);
                })
                    console.log('AnalyticsScreen.jsx:51 ->',dailyNumCopy);
                setDailyNum(dailyNumCopy);
            })
        getWinBig()
            .then((result)=>{
                let bigNumCopy = [];
                result.data.forEach((data, i)=>{
                    let numberBefore = [data.b1, data.b2, data.b3, data.b4, data.b5, data.b6];
                    let numbersAfter = [];
                    for(let i = 0; i < numberBefore.length; i++){
                        numbersAfter.push(numberBefore[i].toString().padStart(2, '0'));
                    }
                    let bigData = {type: 'big', key: i+data.issue, issue:data.issue, value:numberBefore, valueString:numbersAfter, sn:data.sn, snString:data.sn.toString().padStart(2, '0'),  win_mny_1: data.win_mny_1, win_mny_2: data.win_mny_2, win_1: data.win_cnt_1, win_2: data.win_cnt_2};
                    bigNumCopy.push(bigData);
                })

                setBigNum(bigNumCopy);
            })
        getWinSuper()
            .then((result)=>{
                let superNumCopy = [];
                result.data.forEach((data, i)=>{
                    let numberBefore = [data.b1, data.b2, data.b3, data.b4, data.b5, data.b6];
                    let numbersAfter = [];
                    for(let i = 0; i < numberBefore.length; i++){
                        numbersAfter.push(numberBefore[i].toString().padStart(2, '0'));
                    }
                    let superData = {type: 'super', key: i+data.issue, issue:data.issue, value:numberBefore, valueString:numbersAfter, sn:data.sn, snString:data.sn.toString().padStart(2, '0'), win_mny_1: data.win_mny_1, win_mny_2: data.win_mny_2, win_1: data.win_cnt_1, win_2: data.win_cnt_2};
                    superNumCopy.push(superData);
                })
                setSuperNum(superNumCopy);
            })
        getWinBigNumAll()
            .then((result) => {
                let bigNumAllCopy = [];
                let bigSnAllCopy = [];
                result.data.forEach((data, i)=> {
                    bigNumAllCopy.push([data.b1, data.b2, data.b3, data.b4, data.b5, data.b6]);
                    bigSnAllCopy.push(data.sn);
                })
                setBigNumAll(bigNumAllCopy);
                setBigSnAll(bigSnAllCopy);
            })
        getWinSuperNumAll()
            .then((result)=> {
                let superNumAllCopy = [];
                let superSnAllCopy = [];
                result.data.forEach((data, i)=> {
                    superNumAllCopy.push([data.b1, data.b2, data.b3, data.b4, data.b5, data.b6]);
                    superSnAllCopy.push(data.sn);
                })
                setSuperNumAll(superNumAllCopy);
                setSuperSnAll(superSnAllCopy);
            })
        getWinDailyNumAll()
            .then((result)=> {
                let dailyNumAllCopy = [];
                result.data.forEach((data, i)=> {
                    dailyNumAllCopy.push([data.b1, data.b2, data.b3, data.b4, data.b5]);
                })
                setDailyNumAll(dailyNumAllCopy);
            })

    }


    function moveToPage(type){
        switch (type){
            case 'daily':
                navigate(props.dailyPath + props.winning, {state: {lottoType:type, staticsLevel: 'basic',staticsType: 'winning', data: dailyNum,countNum: dailyNumAll, countSn: []}});
                break;
            case 'big' :
                navigate(props.bigPath + props.winning, {state: {lottoType:type, staticsLevel: 'basic',staticsType: 'winning', data: bigNum,countNum: bigNumAll,countSn: bigSnAll}});
                break;
            case 'super' :
                navigate(props.superPath + props.winning, {state: {lottoType:type, staticsLevel: 'basic',staticsType: 'winning', data: superNum,countNum: superNumAll,countSn: superSnAll}});
                break;
        }
    }



    useEffect(()=>{
        getIssueNum();

    },[])


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div className='analyticsCover'>
            <div className='lottoCover'>
                <button onClick={()=>moveToPage('daily')}>
                    <div className='box'>
                        <img src={dailyLotto} alt="daily lotto title image"/>
                        <strong>{lang().STATISTICAL_DATA}</strong>
                    </div>
                </button>
                <button onClick={()=>moveToPage('big')}>
                    <div className='box'>
                        <img src={bigLotto} alt="big lotto title image"/>
                        <strong>{lang().STATISTICAL_DATA}</strong>
                    </div>
                </button>
                <button onClick={()=>moveToPage('super')}>
                    <div className='box'>
                        <img src={superLotto} alt="super lotto title image"/>
                        <strong>{lang().STATISTICAL_DATA}</strong>
                    </div>
                </button>
            </div>
            <Link to='system'>
                <div className='systemBox'>
                    <img src={analyticsSystem} alt="super lotto title image"/>
                    <strong>{lang().FUDA_LOTTO} {lang().ANALYSIS_SYSTEM}</strong>
                </div>
            </Link>
            <Caution/>
        </div>
    );
};

export default AnalyticsScreen;