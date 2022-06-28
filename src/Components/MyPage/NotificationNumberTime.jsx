import React from 'react';
import dailyLotto from "../../Assets/Images/icon/daily-icon-a.png";
import CheckBoxWithText from "../Common/CheckBoxWithText";
import bigLotto from "../../Assets/Images/icon/big-icon-a.png";
import superLotto from "../../Assets/Images/icon/super-icon-a.png";

const NotificationNumberTime = () => {
    return (
        <section className='notificationNumberTimeCover'>
            <h1>
                title <strong>title2</strong>
            </h1>
            <h2>號碼接收時間設定</h2>
            <ul>
                <li>
                    <img src={dailyLotto} alt="daily lotto icon image"/>
                    <CheckBoxWithText text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                    <CheckBoxWithText text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                </li>
                <li>
                    <img src={bigLotto} alt="daily lotto icon image"/>
                    <CheckBoxWithText text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                    <CheckBoxWithText text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                </li>
                <li>
                    <img src={superLotto} alt="daily lotto icon image"/>
                    <CheckBoxWithText text={'在晚上接收號碼 (下午 12:30 ~ 14:00)'}/>
                    <CheckBoxWithText text={'在白天接收號碼 (早上 8:00 ~ 9:00)'}/>
                </li>
            </ul>
        </section>
    );
};

export default NotificationNumberTime;