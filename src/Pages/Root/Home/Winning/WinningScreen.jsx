import React, {useEffect, useRef, useState} from 'react';
import Title from "../../../../Components/Common/Title";
import {Color} from "../../../../Styles/Base/color";
import {lang} from "../../../../Assets/Lang/Lang";
import WinningBox from "../../../../Components/Home/Winning/WinningBox";
import {getBuyWinUser} from "../../../../Service/LottoService";
import {Link} from "react-router-dom";

import dailyIcon from "../../../../Assets/Images/icon/daily-icon-a.png"
import bigIcon from "../../../../Assets/Images/icon/big-icon-a.png"
import superIcon from "../../../../Assets/Images/icon/super-icon-a.png"
import ColorButton from "../../../../Components/Common/ColorButton";
import Caution from "../../../../Components/Common/Caution";

const WinningScreen = (props) => {
    const [superResult, setSuperResult] = useState({});
    const [bigResult, setBigResult] = useState({});
    const [dailyResult, setDailyResult] = useState({});
    const startDate = '2020.07.2';

    async function getLottoTotal () {
        let result = await getBuyWinUser();

        let dailyJackpot =  result.data[0].daily_sum;
        let dailySecond =  result.data[1].daily_sum;
        let dailyJackpotUser =  result.data[0].daily_cnt;
        let dailySecondUser =  result.data[1].daily_cnt;

        let superJackpot =  result.data[0].super_sum;
        let superSecond =  result.data[1].super_sum;
        let superJackpotUser =  result.data[0].super_cnt;
        let superSecondUser =  result.data[1].super_cnt;

        let bigJackpot =  result.data[0].big_sum;
        let bigSecond =  result.data[1].big_sum;
        let bigBonus =  result.data[10].big_sum;
        let bigJackpotUser =  result.data[0].big_cnt;
        let bigSecondUser =  result.data[1].big_cnt;
        let bigBonusUser =  result.data[10].big_cnt;

        let dailyOther = 0;
        let dailyOtherUser = 0;
        let superOther = 0;
        let superOtherUser = 0;
        let bigOther = 0;
        let bigOtherUser = 0;

        for (let i = 2; i < 10; i++){
            dailyOther =  result.data[i].daily_sum;
            dailyOtherUser =  result.data[i].daily_cnt;
            superOther =  result.data[i].super_sum;
            superOtherUser =  result.data[i].super_cnt;
            bigOther =  result.data[i].big_sum;
            bigOtherUser =  result.data[i].big_cnt;
        }

        setDailyResult({type: 'daily', jackpot: dailyJackpot, second: dailySecond, other: dailyOther, jackpotUser: dailyJackpotUser, secondUser: dailySecondUser, otherUser: dailyOtherUser});
        setSuperResult({type: 'super', jackpot: superJackpot, second: superSecond, other: superOther, jackpotUser: superJackpotUser, secondUser: superSecondUser, otherUser: superOtherUser});
        setBigResult({type: 'big', jackpot: bigJackpot, second: bigSecond, other: bigOther, bonus: bigBonus, jackpotUser: bigJackpotUser, secondUser: bigSecondUser, otherUser: bigOtherUser, bonusUser: bigBonusUser});
    }
    useEffect(()=>{
        getLottoTotal();
    },[])


    return (
        <div>
            <Title
                day={startDate}
                color={Color.MAIN_RED}
                text1={lang().FUDA_LOTTO}
                text2={lang().LOTTO_RESULT}/>
            <Link to='/winning/daily'>
                <WinningBox
                    titleImg={dailyIcon}
                    firstIndex={lang().JACKPOT}
                    firstUser={dailyResult.jackpotUser}
                    firstAmount={dailyResult.jackpot}
                    secondIndex={lang().SECOND_PRIZE}
                    secondUser={dailyResult.secondUser}
                    secondAmount={dailyResult.second}
                    thirdIndex={lang().OTHER_AWARDS}
                    thirdUser={dailyResult.otherUser}
                    thirdAmount={dailyResult.other}/>
            </Link>
            <Link to='/winning/big'>
            <WinningBox
                titleImg={bigIcon}
                firstIndex={lang().JACKPOT}
                firstUser={bigResult.jackpotUser}
                firstAmount={bigResult.jackpot}
                secondIndex={lang().SECOND_PRIZE}
                secondUser={bigResult.secondUser}
                secondAmount={bigResult.second}
                thirdIndex={lang().OTHER_AWARDS}
                thirdUser={bigResult.otherUser}
                thirdAmount={bigResult.other}
                bonusIndex={lang().MILLION_PLUS_CODE}
                bonusUser={bigResult.bonusUser}
                bonusAmount={bigResult.bonus}/>
            </Link>
            <Link to='/winning/super'>
            <WinningBox
                titleImg={superIcon}
                firstIndex={lang().JACKPOT}
                firstUser={superResult.jackpotUser}
                firstAmount={superResult.jackpot}
                secondIndex={lang().SECOND_PRIZE}
                secondUser={superResult.secondUser}
                secondAmount={superResult.second}
                thirdIndex={lang().OTHER_AWARDS}
                thirdUser={superResult.otherUser}
                thirdAmount={superResult.other}/>
            </Link>
            <div className='winningBtn'>
                <ColorButton
                    text={lang().WINNER_LIST}/>
            </div>
            <Caution/>
        </div>
    );
};

export default WinningScreen;