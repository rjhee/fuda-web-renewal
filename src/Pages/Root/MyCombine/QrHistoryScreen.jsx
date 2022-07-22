import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {lang} from "../../../Assets/Lang/Lang";
import {Color} from "../../../Styles/Base/color";
import ColorButton from "../../../Components/Common/ColorButton";
import {useParams} from "react-router-dom";
import HistoryList from "../../../Components/MyCombine/HistoryList";
import * as LocalStorageService from "../../../Service/LocalStorageService"
import {convertToChineseYear, setWillLotteryDay} from "../../../Service/util";
import {getBuyIssueData} from "../../../Service/LottoService"

const QrHistoryScreen = (props) => {
    let { id } = useParams();
    const [dailyLotto, setDailyLotto] = useState(false);
    const [bigLotto, setBigLotto] = useState(false);
    const [superLotto, setSuperLotto] = useState(false);
    const [historyData, setHistoryData] = useState([]);
    const [currentDate, setCurrentDate] = useState([]);
    const [ea, setEa] = useState(0);

    const [color, setColor] = useState(Color.WHITE);
    const [index, setIndex] = useState('');


    let data = null;
    function getQrHistory(type){
        switch (type){
            case 'daily':
                data = LocalStorageService.get('qrHistoryListDaily');
                return data && JSON.parse(data);
            case 'big':
                data = LocalStorageService.get('qrHistoryListBig');
                return data && JSON.parse(data);
            case 'super':
                data = LocalStorageService.get('qrHistoryListSuper');
                return data && JSON.parse(data);
        }
    }


    async function getDate(type){
        let current = []; // [issue, date]
        let result = await getBuyIssueData();
        let data = result.data;
        if(data){
            current[0] = Number(data[type][0]['issue'])+1;
            current[1] = data[type][0]['draw_date'] === null ? data[type][1]['draw_date'] : data[type][0]['draw_date'];

            let plusDay = setWillLotteryDay(type, current[1])
            let day_ =  new Date(current[1]);
            day_.setDate(day_.getDate() + plusDay);
            current[1] =  convertToChineseYear(day_);
            setCurrentDate(current);
        }
    }



    // 로또 타입별로 setting
    useEffect(()=>{
        getDate(id);
        let historyData = getQrHistory(id);
        setHistoryData(historyData);

        if(id === 'daily'){
            setDailyLotto(true);
            setBigLotto(false);
            setSuperLotto(false);
            setEa(5);
            setColor(Color.ORANGE);
            setIndex('三');
        }
        else if(id === 'big'){
            setDailyLotto(false);
            setBigLotto(true);
            setSuperLotto(false);
            setEa(6);
            setColor(Color.DARK_BLUE);
            setIndex('五');
        }
        else if(id === 'super'){
            setDailyLotto(false);
            setBigLotto(false);
            setSuperLotto(true);
            setEa(6)
            setColor(Color.MAIN_RED);
            setIndex('四');
        }
    },[id]);
    return (
        <section className='historyCover'>
            <h1>
                <Title text1={lang().MAKE_QR} color={Color.MAIN_RED}/>
            </h1>
            <main className='contents'>
                <div className='btnCover'>
                    <ColorButton path={props.path+'/daily'} text={lang().DAILY_LOTTO} color={dailyLotto ? Color.ORANGE : Color.LIGHT_GREY_1}/>
                    <ColorButton path={props.path+'/big'}  text={lang().BIG_LOTTO} color={bigLotto ? Color.DARK_BLUE : Color.LIGHT_GREY_1}/>
                    <ColorButton path={props.path+'/super'}  text={lang().SUPER_LOTTO} color={superLotto ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
                </div>
                <div className='issueCover'>
                    <span className='index' style={{color: color}}>生成期別</span>
                    <span className='issue'>{lang().FIRST} {currentDate[0]}{lang().ISSUE}</span>
                    <span className='date'>{currentDate[1]} {index}</span>
                </div>
                <HistoryList
                    type={id}
                    color={color}
                    historyData={historyData}/>
            </main>
        </section>
    );
};

export default QrHistoryScreen;