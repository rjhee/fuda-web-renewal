import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Title from "../../../../Components/Common/Title";
import {Color} from "../../../../Styles/Base/color";
import {lang} from "../../../../Assets/Lang/Lang";
import ColorButton from "../../../../Components/Common/ColorButton";
import WinningListSection from "../../../../Components/Home/Winning/WinningListSection";
import {getBuyUserWinTen, getBuyUserWinResultNum} from "../../../../Service/LottoService";
import {superWinDefine} from "../../../../Assets/Lang/defineWords";
import {setNumberFormat, hideUseId} from "../../../../Service/commonService";
import * as LoadingService from "../../../../Service/loadingService";

const WinningListScreen = () => {
    let { id } = useParams();
    const [dailyLotto, setDailyLotto] = useState(false);
    const [bigLotto, setBigLotto] = useState(false);
    const [superLotto, setSuperLotto] = useState(false);
    const [data, setData] = useState([]);
    const [superData, setSuperData] = useState([]);
    const [bigData, setBigData] = useState([]);
    const [dailyData, setDailyData] = useState([]);
    const [page, setPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);

    let dailyDataCopy = [];
    let superDataCopy = [];
    let bigDataCopy = [];
    const startDate = '2020.07.2';

    async function getData(type, page){
        LoadingService.start();
        let result = await getBuyUserWinResultNum(type);
        setLastPage(Math.ceil(result.data.count/10));

        result = await getBuyUserWinTen(type, page);
        result.data.forEach((item, i)=>{
            let day = new Date(item.draw_date);
            let day2 = day.toISOString().split("T")[0];
            let day3 = day2.split('-');
            day3[0] = day3[0] - 1911;
            item.draw_date = day3.join('.');
            let listData = { key: item.uid, date: item.draw_date, awards: superWinDefine[item.price-1].rate, reward: setNumberFormat(item.reward), user_id: hideUseId(item.name)};
            if(type === 'daily'){
                dailyDataCopy.push(listData);
                setData(dailyDataCopy);
            }
            else if(type === 'big'){
                bigDataCopy.push(listData);
                setData(bigDataCopy);
            }
            else if(type === 'super'){
                superDataCopy.push(listData);
                setData(superDataCopy);
            }

        });
        LoadingService.end();
    }

    useEffect(()=>{
        getData(id, page);
        if(id === 'daily'){
            setDailyLotto(true);
            setBigLotto(false);
            setSuperLotto(false);
        }
        else if(id === 'big'){
            setDailyLotto(false);
            setBigLotto(true);
            setSuperLotto(false);
        }
        else if(id === 'super'){
            setDailyLotto(false);
            setBigLotto(false);
            setSuperLotto(true);
        }
    },[id])


    return (
        <div className='winningListCover'>
            <Title
                day={startDate}
                color={Color.MAIN_RED}
                text1={lang().FUDA_LOTTO}
                text2={lang().LOTTO_RESULT}/>
            <div className='btnCover'>
                <ColorButton path={'/winning/daily'} text={lang().DAILY_LOTTO} color={dailyLotto ? Color.ORANGE : Color.LIGHT_GREY_1}/>
                <ColorButton path={'/winning/big'}  text={lang().BIG_LOTTO} color={bigLotto ? Color.DARK_BLUE : Color.LIGHT_GREY_1}/>
                <ColorButton path={'/winning/super'}  text={lang().SUPER_LOTTO} color={superLotto ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
            </div>
            <div className='indexCover'>
                <span className='date'>{lang().DATE}</span>
                <span className='awards'>{lang().AWARDS}</span>
                <span className='bonus'>{lang().BONUS}</span>
                <span className='id'>{lang().USER_ID}</span>
            </div>
            <WinningListSection
                page={page}
                data={data}/>
        </div>
    );
};

export default WinningListScreen;