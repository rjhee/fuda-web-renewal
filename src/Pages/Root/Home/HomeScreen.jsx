import React, {useEffect, useState} from 'react';
import {getJackpot, getWinBig, getWinSuper, getBuyWinUser} from "../../../Service/LottoService";
import {getNotice} from "../../../Service/ComunityService";
import NoticeSlide from "../../../Components/Home/NoticeSlide";
import Accumulate from "../../../Components/Home/Accumulate";
import Winning from "../../../Components/Home/Winning";
import GuideBanner from "../../../Components/Home/GuideBanner";
import HomeMenu from "../../../Components/Home/HomeMenu";
import AdBanner from "../../../Components/Home/AdBanner";
import useWindowDimensions from "../../../Styles/Base/windowDimensions";
import {lang} from "../../../Assets/Lang/Lang";
import * as LocalStorageService from "../../../Service/LocalStorageService";

import bigTitleImg from "../../../Assets/Images/banner/title_big_aos.png";
import superTitleImg from "../../../Assets/Images/banner/title_super_aos.png";

import guideBannerFree from "../../../Assets/Images/banner/banner.png";
import guideBannerVip from "../../../Assets/Images/banner/banner-vip.png";
import guideBannerVvip from "../../../Assets/Images/banner/banner-vvip.png";

import winningIcon from "../../../Assets/Images/icon/result.png";
import analyticsIcon from "../../../Assets/Images/icon/analytics.png";
import pressIcon from "../../../Assets/Images/icon/express.png";
import youTubeIcon from "../../../Assets/Images/icon/youtube.png";
import FaceBookIcon from "../../../Assets/Images/icon/facebook.png";
import MapIcon from "../../../Assets/Images/icon/map.png";


import {Link} from "react-router-dom";
import Caution from "../../../Components/Common/Caution";

const HomeScreen = () => {
    const { height, width } = useWindowDimensions();
    const [bigJackpot, setBigJackpot] = useState(0);
    const [superJackpot, setSuperJackpot] = useState(0);
    const [bigLotto, setBigLotto] = useState({type: 'big', day:'', issue: 0, titleImg: ''});
    const [superLotto, setSuperLotto] = useState({type: 'super', day:'', issue: 0, titleImg: ''});
    const [winMember, setWinMember] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [homeBannerGuide, setHomeBannerGuide] = useState(guideBannerFree);
    const [menuIcon, setMenuIcon] = useState([
        {name: "WinningScreen", title: "開獎結果", urlPath: 'winning', imgPath: winningIcon},
        {name: "AnalyticsScreen", title: "統計分析", urlPath: 'analytics', imgPath: analyticsIcon},
        {name: "PressScreen", title: "媒體報導", urlPath: 'press', imgPath: pressIcon},
        {name: "YoutubeScreen", title: "開獎直播", urlPath: 'youtube', imgPath: youTubeIcon},
        {name: "FaceBookScreen", title: "官方臉書", urlPath: 'facebook', imgPath: FaceBookIcon},
        {name: "MapScreen", title: "尋找彩券行", urlPath: 'map', imgPath: MapIcon}]);


    async function getData() {
        let response = await getJackpot();
        let data = response.data;
        setBigJackpot(data.big)
        setSuperJackpot(data.super)

        response = await getWinBig();
        data = response.data[0];
        let bigDrawDate = setDay('big', data.draw_date);
        setBigLotto({type: 'big', day:bigDrawDate, issue: Number(data.issue)+1, titleImg: bigTitleImg})

        response = await  getWinSuper();
        data = response.data[0];
        let superDrawDate = setDay('super', data.draw_date);
        setSuperLotto({type: 'super', day:superDrawDate, issue: Number(data.issue)+1, titleImg: superTitleImg})

        response = await getBuyWinUser();
        data = response.data;
        let sum = 0;
        let user = 0;
        for(let i = 0; i < data.length; i++){
            sum += (data[i].daily_sum + data[i].big_sum + data[i].super_sum);
            user += (data[i].daily_cnt + data[i].big_cnt + data[i].super_cnt);
        }

        setTotalAmount(setNumberFormat(sum));
        setWinMember(setNumberFormat(user))






        // response = await getNoticeData();

        // console.log('HomeScreen.jsx:98 ->',response.data);

    }

    function checkPlusDay(type, day) {
        const week = day.getDay();
        if(type === 'big'){
            if (week === 2) {
                return 3;
            }else if(week === 5){
                return 4;
            }
        }
        if(type === 'super'){
            if (week === 1){
                return 3;
            }else if (week === 4){
                return 4;
            }
        }
    }

    function setDay(type, day) {
        const dDay = new Date(day);
        const plusDay = checkPlusDay(type, dDay);
        dDay.setDate(dDay.getDate() + plusDay);
        const DDay = dDay.toISOString().split("T")[0];
        const resultDay = DDay.split('-');
        return resultDay;
    }

    function checkedUserType(user) {
        switch (user) {
            case 'free' :
                setHomeBannerGuide(guideBannerVip);
                break;
            case 'vip' :
                setHomeBannerGuide(guideBannerVvip);
                break;
        }
    }

    function setNumberFormat(reward) {
        if(reward > 9999 && reward < 10000000){
            return (reward/10000).toFixed(0)+lang().THOUSAND;
        }
        else if(reward > 9999999){
            return (reward/100000000).toFixed(0)+lang().MILLION;
        }
        else {
            return reward;
        }
    }

    function AccumulateBanner() {
        // TODO 슬라이드 애니메이션 만들기
        // TODO 슬라이드 배너 스크롤 이벤트
        const [move, setMove] = useState(0)
        const moveBanner = () => {
            if(move === 0) {
                setMove(-width)
            }
            else {
                setMove(0)
            }
        }
        useEffect(()=>{
            let movingBanner = setInterval(()=>{
                moveBanner();
            }, 3000)
            return(()=>{
                clearInterval(movingBanner)
            })
        },[move])

        return (
           <section className='slideBannerCover' style={{ transform: `translateX(${move}px)`}}>
               <Accumulate
                   lotto={bigLotto && bigLotto}
                   jackpot={bigJackpot && bigJackpot}/>
               <Accumulate
                   lotto={superLotto && superLotto}
                   jackpot={superJackpot && superJackpot}/>
           </section>
        )
    }


    async function getNoticeData() {
        let CURRENT_UID = "noticeCurrentUid";
        let NEW_UID = "noticeNewUid";
        let noticeData = await getNotice(0);
        if (noticeData.data.length === 0 || noticeData.data === false) {
            return;
        }

        const savedLastUid = LocalStorageService.get(CURRENT_UID);
        const gotLastUid = noticeData.data[0].uid;
        if (savedLastUid === gotLastUid) {
            return;
        }
        else if (!savedLastUid || savedLastUid === 0) {
            LocalStorageService.set(CURRENT_UID, JSON.stringify(gotLastUid))
            LocalStorageService.set(NEW_UID, JSON.stringify(10))
        }
        else if (savedLastUid < gotLastUid) {
            const noReadNoticeArr = noticeData.data.filter((item) => {
                if (savedLastUid < item.uid) return item.uid;
            })
            LocalStorageService.set(CURRENT_UID, JSON.stringify(gotLastUid))
            LocalStorageService.set(NEW_UID, JSON.stringify(noReadNoticeArr.length))
        }
        return;
    }

    useEffect(()=>{
        getNoticeData();
    })

    useEffect(()=>{
        getData();
        checkedUserType('vip');

    },[])

    return (
        <div className='HomeScreen'>
            <NoticeSlide/>
            <AccumulateBanner/>
            <Link to='/winning'>
               <Winning
                   amount={totalAmount}
                   winner={winMember}/>
            </Link>
            <Link to='/guide'>
                <GuideBanner
                    imgPath={homeBannerGuide}/>
                <HomeMenu/>
            </Link>
            <HomeMenu Icon={menuIcon}/>
            <AdBanner/>
            <Caution/>
        </div>
    );
};

export default HomeScreen;