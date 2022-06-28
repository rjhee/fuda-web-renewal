import React from 'react';
import dailyLotto from "../../Assets/Images/icon/daily-icon-a.png";
import CheckBoxWithText from "../Common/CheckBoxWithText";
import bigLotto from "../../Assets/Images/icon/big-icon-a.png";
import superLotto from "../../Assets/Images/icon/super-icon-a.png";

const NotificationNumberGroup = () => {
    return (
        <section className='notificationNumberGroupCover'>
            <h1>號碼接收組數設定</h1>
            <ul>
                <li>
                    <img src={dailyLotto} alt="daily lotto icon image"/>
                    <select name="" id="">
                        <option value="1">value</option>
                        <option value="2">value</option>
                    </select>
                    
                </li>
                <li>
                    <img src={bigLotto} alt="daily lotto icon image"/>
                    <select name="" id="">
                        <option value="1">value</option>
                        <option value="2">value</option>
                    </select>
                </li>
                <li>
                    <img src={superLotto} alt="daily lotto icon image"/>
                    <select name="" id="">
                        <option value="1">value</option>
                        <option value="2">value</option>
                    </select>
                </li>
            </ul>
        </section>
    );
};

export default NotificationNumberGroup;