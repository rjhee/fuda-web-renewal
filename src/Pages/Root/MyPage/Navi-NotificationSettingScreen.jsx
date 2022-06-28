import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import ColorButton from "../../../Components/Common/ColorButton";
import NotificationDetail from "../../../Components/MyPage/NotificationDetail";
import NotificationList from "../../../Components/MyPage/NotificationList";
import NotificationNumber from "../../../Components/MyPage/NotificationNumber";

const NaviNotificationSettingScreen = () => {
    return (
        <section className='naviNotificationSettingCover'>
            <h1>
                <Title text1={'通知設定'} color={Color.MAIN_RED}/>
            </h1>
            <div className='btnCover'>
                <ColorButton text={'通知設定'}/>
                <ColorButton text={'號碼接收設定'}/>
                <ColorButton text={'廣告設定'}/>
            </div>
            <NotificationList/>
            <NotificationNumber/>
        </section>
    );
};

export default NaviNotificationSettingScreen;