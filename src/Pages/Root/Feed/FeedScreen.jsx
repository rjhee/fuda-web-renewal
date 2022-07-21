import React, {useEffect, useState} from 'react';
import Title from "../../../Components/Common/Title";
import FeedCircleBtn from "../../../Components/Feed/FeedCircleBtn";
import FeedCardLists from "../../../Components/Feed/FeedCardLists";
import {lang} from "../../../Assets/Lang/Lang";
import {useNavigate, useParams} from "react-router-dom";
import {Color} from "../../../Styles/Base/color";
import {getPublicFeedListGuest, getPublicFeedList, getFeedLoveSelf} from "../../../Service/FeedService"
import {isGuest} from "../../../Service/AuthService"
import Pagination from "../../../Components/Common/Pagination";
import LottoButton from "../../../Components/Feed/LottoButton";
import loveMap from "../../../Service/FeedLoveService";
import WriteBtn from "../../../Components/Feed/WriteBtn";
const FeedScreen = (props) => {
    let { id } = useParams();
    const navigate = useNavigate();
    let [buttonData, setButtonData] = useState([
        {key:0, on:false, title:lang().ALL, subTitle:'全部', path:props.allPath, icon: require('../../../Assets/Images/icon/feed0-icon.png'), title_kr:'최근소식'},
        {key:1, on:false, title:lang().OFFICIAL, subTitle:'官方新聞', path: props.officialPath, icon:require('../../../Assets/Images/icon/feed1-icon.png'), title_kr:'공식뉴스'},
        {key:2, on:false, title:lang().FUDANEWS, subTitle:'富達新聞', path:props.newsPath, icon:require('../../../Assets/Images/icon/feed2-icon.png'), title_kr:'푸다뉴스'},
        {key:3, on:false, title:lang().EVENT, subTitle:'富達活動', path:props.eventPath, icon:require('../../../Assets/Images/icon/feed3-icon.png'), title_kr:'푸다이벤트'},
        {key:4, on:false, title:lang().RESULT, subTitle:'開獎結果', path:props.resultPath, icon:require('../../../Assets/Images/icon/feed4-icon.png'), title_kr:'추첨결과'},
        {key:5, on:false, title:lang().WINNER, subTitle:'中獎者專訪', path:props.winnerPath, icon:require('../../../Assets/Images/icon/feed5-icon.png'), title_kr:'명예의 전당'},
        {key:6, on:false, title:lang().WINNERSHARE, subTitle:'中獎分享', path:props.winnerSharePath, icon:require('../../../Assets/Images/icon/feed6-icon.png'), iconSize: {width:'42px'}, title_kr:'당첨자게시판'},
        {key:7, on:false, title:lang().WISHBOARD, subTitle:'許願池', path:props.wishBoardPath, icon:require('../../../Assets/Images/icon/feed7-icon.png'), title_kr:'소원게시판'},
        {key:8, on:false, title:lang().MAIL, subTitle:'信箱', path:props.mailPath, icon:require('../../../Assets/Images/icon/feed8-icon.png'), iconSize: {width:'25px', transform:['translateY(-5px)']}, title_kr:'우편함'},
    ]);

    let [currentTitle, setCurrentTitle] = useState('');
    let [currentKey, setCurrentKey] = useState({});
    let [currentFeedPath, setCurrentFeedPath] = useState('');
    let [page, setPage] = useState(0);
    let [lastPage, setLastPage] = useState(0);

    //페이징을 위한 마지막 uid 정보
    const [feedAllLastUid, setFeedAllLastUid] = useState(0);
    const [feedAllListData, setFeedAllListData] = useState([]);
    const [feedLastUid, setFeedLastUid] = useState(0);
    const [feedListData, setFeedListData] = useState([]);
    const PAGE_COUNT = 10;

    function onMenu() {
        let buttonDataCopy = [...buttonData];
        let currentPage = `${props.feedPath}/${id}`
        buttonDataCopy.map((data) => {
            if (data.path === currentPage) {
                data.on = true;
                setCurrentTitle(data.title);
                setCurrentKey({key: data.key});
                setCurrentFeedPath(data.path);
                getFeedData(buttonData[data.key], isGuest(), true);
            } else {
                data.on = false;
            }

        })
        setButtonData(buttonDataCopy);

    }

    let getFeedData = async (value, guest, init = false) => {
        try {
            let result = null;
            let lastFeed = (init === true) ? 0 : feedLastUid;

            if(guest === true){
                result = await getPublicFeedListGuest(value.key, lastFeed, PAGE_COUNT, 0);
            }
            else if(guest === false) {

                result = await getPublicFeedList(value.key, lastFeed, PAGE_COUNT, 0);
                await getFeedLoveData(result.data);
            }
            console.log('FeedScreen.jsx:59 guest : ->',guest);
            console.log('FeedScreen.jsx:72 ->', result.data);
            if(result.data === null) {
                setFeedLastUid(0);
                setFeedListData([]);
            }
            if(Number(value.key) === 0){
                setFeedLastUid(result?.data?.all[result?.data?.all?.length-1]['uid']);
                setFeedListData(result?.data?.all);

            }else {
                setFeedLastUid(result?.data[result?.data?.length-1]['uid']);
                setFeedListData(result?.data);
            }

            setFeedLoveData(result.data);


        }catch (e){
            // console.log('FeedScreen.jsx:64 ->',e.error);
        }
    }

    function onPrev() {
        if(page+1 === 1) return null;
        else setPage(page-1);
    }

    function onNext() {
        if(page+1 === lastPage)return null;
        else{
            setPage(page+1);
        }
    }

    let setFeedLoveData = (allFeedData) => {
        console.log('FeedScreen.jsx:110 ->',allFeedData);
        for(let i = 0; i< allFeedData.length; i++) {
            if(allFeedData[i]['likeCnt'] !== null) {
                loveMap.setCnt(allFeedData[i].uid, allFeedData[i]['likeCnt']);
            }
        }
    }

    let getFeedLoveData = async (data) => {
        let max = 0;
        let min = 987654321;

        for(let i = 0; i<data.length; i++) {
            if(data[i].type !== 8) {
                if(data[i].uid > max) {
                    max = data[i].uid;
                }

                if(data[i].uid < min) {
                    min = data[i].uid;
                }
            }
        }

        let result = await getFeedLoveSelf(min, max);

        if (result.data !== null) {
            for (let i = 0; i < result.data.length; i++) {
                loveMap.set(result.data[i]['board_id'], true);
                loveMap.setCnt(result.data[i]['board_id'], result.data[i]['cnt']);
            }
        }
    }

    function moveToWrite(boardType) {
        navigate('write',{state:{board_type: boardType, mode: 'upload' }});
    }

    useEffect(()=>{
        onMenu();
        setPage(0);
        setFeedLastUid(0);
    },[id])

    useEffect(()=>{
        getFeedData(currentKey, isGuest(), false);
    },[page])

    return (
        <section className='feedScreenCover'>
            <h1>
                <Title text1={currentTitle} color={Color.MAIN_RED}/>
            </h1>
            <FeedCircleBtn data={buttonData}/>
            {feedListData[0]?.type === 4
            ? <LottoButton
                    data={feedListData}
                    lottoListPath={props.lottoListPath}
                    category={currentTitle}/>
            : null}
            {feedListData?.length === 0
                ? <div className='noNewsYet'>
                    <span>目前無訊息</span>
                </div>
                : <FeedCardLists
                    feedPath={props.feedPath}
                    detailPath={props.detailPath}
                    allPath={props.allPath}
                    officialPath={props.officialPath}
                    newsPath={props.newsPath}
                    eventPath={props.eventPath}
                    resultPath={props.resultPath}
                    winnerPath={props.winnerPath}
                    winnerSharePath={props.winnerSharePath}
                    wishBoardPath={props.wishBoardPath}
                    mailPath={props.mailPath}
                    lottoListPath={props.lottoListPath}
                    data={feedListData}
                    category={currentTitle}
                    path={currentFeedPath}/>}
            <Pagination current={page} last={page+2} onPrev={onPrev} onNext={onNext}/>
            {isGuest() === false && (currentKey.key === 6 || currentKey.key === 7)
                ? <WriteBtn onClick={()=>moveToWrite(currentKey.key)}/>
                : null}
        </section>
    );
};

export default FeedScreen;