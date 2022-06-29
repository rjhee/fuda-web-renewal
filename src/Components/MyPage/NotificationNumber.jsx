import React, {useState, useEffect} from 'react';
import NotificationNumberTime from "./NotificationNumberTime";
import NotificationNumberGroup from "./NotificationNumberGroup";
import LineButton from "../Common/LineButton";
import {Color} from "../../Styles/Base/color";
import {getNotificationInfo, notificationChange} from "../../Service/UserService";
import {getUserData} from "../../Service/AuthService";
import * as LoadingService from "../../Service/LoadingService";

const NotificationNumber = (props) => {
    const [notificationValue, setNotificationValue] = useState([]);
    const [userType, setUserType] = useState('');

    useEffect(()=>{
        let userData = getUserData();
        checkNormalUser(userData);
    },[])

    function checkNormalUser (user){
        if(user.grade === 'FREE' &&  (!!user.vip_date === false)){
            setUserType('NORMAL');
        }
    }

    async function updateNumberSetting(){
        LoadingService.start();
        await notificationChange('big_receive_time', notificationValue['big_receive_time']);
        await notificationChange('daily_receive_time', notificationValue['daily_receive_time']);
        await notificationChange('super_receive_time', notificationValue['super_receive_time']);
        await notificationChange('big_ticket_cnt', notificationValue['big_ticket_cnt']);
        await notificationChange('daily_ticket_cnt', notificationValue['daily_ticket_cnt']);
        await notificationChange('super_ticket_cnt', notificationValue['super_ticket_cnt']);
        LoadingService.end();
        alert('設定完成!');
    }

    function setNumberSetting(e) {
        // if(userType === 'NORMAL'){
        //     e.preventDefault();
        //     alert('一般會員無法變更服務資訊');
        // }
        // else {
        // }
           updateNumberSetting();
    }
    useEffect(()=>{
        getNotificationInfo().then(r => {
            if(r.data !== null) {
                setNotificationValue(r.data[0]);
            }
        });
    },[]);
    return (
        <div className='notificationNumberCover'>
            <NotificationNumberTime grade={props.grade} value={notificationValue}/>
            <NotificationNumberGroup value={notificationValue}/>
            <LineButton
                onClick={setNumberSetting}
                text={'更改資訊'} btnStyle={{borderColor: Color.MAIN_RED, width:'150px'}} fontStyle={{color: Color.MAIN_RED}}/>
        </div>
    );
};

export default NotificationNumber;