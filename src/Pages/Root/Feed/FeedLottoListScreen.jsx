import React, {useEffect, useState} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {useLocation, useNavigate} from "react-router-dom";
import dailyTitleImg from "../../../Assets/Images/banner/title_daily_aos.png";
import bigTitleImg from "../../../Assets/Images/icon/big-icon-a.png";
import superTitleImg from "../../../Assets/Images/icon/super-icon-a.png";
import Pagination from "../../../Components/Common/Pagination";
import {getLottoFeed} from "../../../Service/FeedService"
import FeedCardLists from "../../../Components/Feed/FeedCardLists";

const FeedLottoListScreen = (props) => {
    let today = new Date();
    const location = useLocation();
    const navigate = useNavigate();
    const [type, setType] = useState('daily');
    const [color, setColor] = useState('daily');
    const [title, setTitle] = useState(dailyTitleImg);
    const [drawDate, setDrawDate] = useState('每週一至週六');
    const [lottoData, setLottoData] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [page, setPage] = useState(`${currentYear-1911}.${currentMonth+1}`);

    const pageCnt = 10;
    let pos = 0;
    let category = location.state?.category;
    let path = location.state?.path;

    function setLottoStyles(LottoType){
        switch (LottoType) {
            case "daily":
                setTitle(dailyTitleImg);
                setDrawDate('每週一至週六');
                setColor(Color.ORANGE);
                break;
            case "big" :
                setTitle(bigTitleImg);
                setDrawDate('每週一至週六');
                setColor(Color.DARK_BLUE);
                break;
            case "super" :
                setTitle(superTitleImg);
                setDrawDate('每週一、週四');
                setColor(Color.MAIN_RED);
                break;
        }

    }
    function onPrev() {
        let year = null;
        let month = null;

        if(currentMonth === 1){
            year = currentYear-1;
            month = 12;
        }else {
            year = currentYear;
            month = currentMonth-1;
        }
        setCurrentMonth(month);
        setCurrentYear(year);
        setPage(`${year-1911}.${month+1}`);
    }

    function onNext() {
        let year = null;
        let month = null;

        if(currentMonth === today.getMonth()
            && currentYear === today.getFullYear()) return null;
        else {
            if(currentMonth === 12){
                year = currentYear+1;
                month = 1;
            }else {
                year = currentYear;
                month = currentMonth+1;
            }
            setCurrentMonth(month);
            setCurrentYear(year);
            setPage(`${year-1911}.${month+1}`);
        }
    }

    async function getBoardData(){
        let result = await getLottoFeed(type, currentYear, currentMonth, pos, pageCnt);
        let data = result.data;
        if (data.length !== 0) {
            setLottoData(data);
            pos += pageCnt;
        }
        else {
            setLottoData([]);
        }
    }

    useEffect(()=>{
        setType(location.state?.type);
        setLottoStyles(location.state?.type)
        getBoardData();
        console.log('FeedLottoListScreen.jsx:102 ->',location.state?.type);
    },[type, currentMonth])



    return (
        <section className='feedLottoListCover'>
            <div className='feedLottoTitleCover'>
                <h1>
                    <Title text1={category} color={Color.MAIN_RED}/>
                </h1>
                <div className='titleCover' style={{backgroundColor:color}}>
                    <img src={title} alt={type + 'lotto title image'}/>
                    <span>開獎日 : {drawDate}</span>
                </div>
                <Pagination noPage={true} onPrev={onPrev} onNext={onNext} last={page} current={''}/>
            </div>
            <FeedCardLists data={lottoData} category={category} path={props.detailPath}/>
        </section>
    );
};

export default FeedLottoListScreen;