import React, {useState,useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import ColorButton from "../../../Components/Common/ColorButton";

import NotificationList from "../../../Components/MyPage/NotificationList";
import NotificationNumber from "../../../Components/MyPage/NotificationNumber";
import {useParams} from "react-router-dom";
import {getUserData} from "../../../Service/AuthService";
import {showTooltip} from "../../../Service/util";
import {getNotificationInfo} from "../../../Service/UserService";
import Tooltip from "../../../Components/Common/Tooltip";
import {NotificationDefine} from "../../../Service/util";


const NaviNotificationSettingScreen = (props) => {
    let { id } = useParams();
    const [list, setList] = useState(false);
    const [number, setNumber] = useState(false);
    const [etc, setEtc] = useState(false);
    const [grade, setGrade] = useState(null);
    const [tooltipAd, setTooltipAd] = useState(false);
    const [notificationValue, setNotificationValue] = useState(null);

    const toggleDefine = {
        free: [NotificationDefine?.daily_free_push_yn,
            NotificationDefine?.push_yn],

        vip:[NotificationDefine?.super_vip_push_yn,
            NotificationDefine?.big_vip_push_yn,
            NotificationDefine?.daily_vip_push_yn,
            NotificationDefine?.push_yn],
    }

    useEffect(()=>{

        if(id === 'list'){
            setList(true);
            setNumber(false);
        }
        else if(id === 'number'){
            setList(false);
            setNumber(true);
        }
        setGrade(getUserData().grade);
    },[id])


    useEffect(()=>{
        getNotificationInfo().then(r => {
            if(r.data !== null) {
                setNotificationValue(r.data[0]);
            }
        });
    },[]);

    return (
        <section className='naviNotificationSettingCover'>
            <h1>
                <Title text1={'通知設定'} color={Color.MAIN_RED}/>
            </h1>
            <div className='btnCover' style={{position: 'relative'}}>
                <ColorButton onClick={()=>null} path={props.path + '/list'} text={'通知設定'} color={list ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
                <ColorButton onClick={()=>null} path={props.path + '/number'}  text={'號碼接收設定'} color={number ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
                <ColorButton onClick={()=>showTooltip(setTooltipAd)} text={'廣告設定'} color={etc ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
                {tooltipAd === true ? <Tooltip down={true} top={'-60px'} left={'60%'}/> : null}
            </div>
            {list === true ? <NotificationList value={notificationValue} grade={grade} data={toggleDefine}/> : null}
            {number === true ? <NotificationNumber grade={grade}/> : null}
        </section>
    );
};

export default NaviNotificationSettingScreen;