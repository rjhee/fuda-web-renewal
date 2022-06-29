import React, {useEffect, useState} from 'react';
import dailyLottoIcon from "../../Assets/Images/icon/daily-icon-a.png";
import CheckBoxWithText from "../Common/CheckBoxWithText";
import bigLottoIcon from "../../Assets/Images/icon/big-icon-a.png";
import superLottoIcon from "../../Assets/Images/icon/super-icon-a.png";
import {getUserData} from "../../Service/AuthService";

const NotificationNumberTime = (props) => {
    const [title1, setTitle1] = useState('');
    const [title2, setTitle2] = useState('');
    const [dailyLotto, setDailyLotto] = useState([-1,-1]);
    const [bigLotto, setBigLotto] = useState([-1,-1]);
    const [superLotto, setSuperLotto] = useState([-1,-1]);

    function checkedDaily(index) {
        console.log('daily ->',index);
        let copy = [...dailyLotto];
        for(let i = 0; i < copy.length; i++){
            copy[i] = -1;
        }
        copy[index] = true;
        setDailyLotto(copy);
        // console.log('NotificationNumberTime.jsx:34 ->',copy);
    }

    function checkedBig(index) {
        console.log('Big ->',index);
        let copy = [...bigLotto];
        for(let i = 0; i < copy.length; i++){
            copy[i] = -1;
        }
        copy[index] = true;
        setBigLotto(copy);
    }

    function checkedSuper(index) {
        console.log('super ->',index);
        let copy = [...superLotto];
        for(let i = 0; i < copy.length; i++){
            copy[i] = -1;
        }
        copy[index] = true;
        setSuperLotto(copy);
    }

    useEffect(()=>{
        switch (getUserData().grade) {
            case 'FREE':
                setTitle1('您現在是');
                setTitle2('一般會員');
                break;
            case 'Silver':
                setTitle1('您現在是');
                setTitle2('白銀會員(1個月/非自動續訂)');
                break;
            case 'Gold':
                setTitle1('您現在是');
                setTitle2('黃金會員(1個月)');
                break;
            case 'Diamond':
                setTitle1('您現在是');
                setTitle2('鑽石會員(6個月)');
                break;
            case 'VIP':
                setTitle1('您現在是');
                setTitle2('VIP會員(12個月)');
                break;
            case 'VVIP':
                setTitle1('您現在是');
                setTitle2('VVIP會員(12+贈送2個月)');
                break;
        }
    },[])
    return (
        <section className='notificationNumberTimeCover'>
            <h1>
                {title1} <strong>{title2}</strong>
            </h1>
            <h2>號碼接收時間設定</h2>
            <ul>
                <li>
                    <img src={dailyLottoIcon} alt="daily lotto icon image"/>
                    <CheckBoxWithText i={0} onClick={checkedDaily} checked={dailyLotto[0]} text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                    <CheckBoxWithText i={1} onClick={checkedDaily} checked={dailyLotto[1]} text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                </li>
                <li>
                    <img src={bigLottoIcon} alt="big lotto icon image"/>
                    <CheckBoxWithText i={0} onClick={checkedBig} checked={bigLotto[0]} text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                    <CheckBoxWithText i={1} onClick={checkedBig} checked={bigLotto[1]} text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                </li>
                <li>
                    <img src={superLottoIcon} alt="super lotto icon image"/>
                    <CheckBoxWithText i={0} onClick={checkedSuper} checked={superLotto[0]} text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                    <CheckBoxWithText i={1} onClick={checkedSuper} checked={superLotto[1]} text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                </li>
            </ul>
        </section>
    );
};

export default NotificationNumberTime;