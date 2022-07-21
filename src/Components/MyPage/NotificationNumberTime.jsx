import React, {useEffect, useState} from 'react';
import dailyLottoIcon from "../../Assets/Images/icon/daily-icon-a.png";
import CheckBoxWithText from "../Common/CheckBoxWithText";
import bigLottoIcon from "../../Assets/Images/icon/big-icon-a.png";
import superLottoIcon from "../../Assets/Images/icon/super-icon-a.png";
import {getUserData} from "../../Service/AuthService";
import {NotificationDefine} from "../../Service/util";

const NotificationNumberTime = (props) => {
    const [title1, setTitle1] = useState('');
    const [title2, setTitle2] = useState('');


    const [dailyValue, setDailyValue] = useState(1);
    const [bigValue, setBigValue] = useState(1);
    const [superValue, setSuperValue] = useState(1);




    let changeValue = (column, index) => {
        if(index === 1) {
            props.value[column] = NotificationDefine[column].TRUE;
        }else {
            props.value[column] = NotificationDefine[column].FALSE;
        }

        switch (column) {
            case 'daily_receive_time':
                if(index === dailyValue) {
                    return;
                }
                setDailyValue(index);
                break;
            case 'big_receive_time':
                if(index === bigValue) {
                    return;
                }
                setBigValue(index);
                break;
            case 'super_receive_time':
                if(index === superValue) {
                    return;
                }
                setSuperValue(index);
                break;
        }
    }
    function isChecked(index, value){
        if(index === value){
            return true;
        }else {
            return false;
        }
    }

    useEffect(()=>{
        if(props.value['daily_receive_time'] === NotificationDefine.daily_receive_time.TRUE) {
            setDailyValue(1);
        }else {
            setDailyValue(2);
        }

        if(props.value['big_receive_time'] === NotificationDefine.big_receive_time.TRUE) {
            setBigValue(1);
        }else {
            setBigValue(2);
        }

        if(props.value['super_receive_time'] === NotificationDefine.super_receive_time.TRUE) {
            setSuperValue(1);
        }else {
            setSuperValue(2);
        }
    },[props.value]);


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
                    <div>
                        <CheckBoxWithText i={0} small={true} type={'daily'} onClick={()=>changeValue('daily_receive_time',1)} checked={isChecked(1, dailyValue)} text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                        <CheckBoxWithText i={1} small={true} type={'daily'} onClick={()=>changeValue('daily_receive_time',2)} checked={isChecked(2, dailyValue)} text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                    </div>
                </li>
                <li>
                    <img src={bigLottoIcon} alt="big lotto icon image"/>
                    <div>
                        <CheckBoxWithText i={0} small={true} type={'big'} onClick={()=>changeValue('big_receive_time',1)} checked={isChecked(1, bigValue)} text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                        <CheckBoxWithText i={1} small={true} type={'big'} onClick={()=>changeValue('big_receive_time',2)} checked={isChecked(2, bigValue)} text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                    </div>
                </li>
                <li>
                    <img src={superLottoIcon} alt="super lotto icon image"/>
                    <div>
                        <CheckBoxWithText i={0} small={true} type={'super'} onClick={()=>changeValue('super_receive_time',1)} checked={isChecked(1, superValue)} text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                        <CheckBoxWithText i={1} small={true} type={'super'} onClick={()=>changeValue('super_receive_time',2)} checked={isChecked(2, superValue)} text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default NotificationNumberTime;