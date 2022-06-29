import React, {useState,useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import ColorButton from "../../../Components/Common/ColorButton";

import NotificationList from "../../../Components/MyPage/NotificationList";
import NotificationNumber from "../../../Components/MyPage/NotificationNumber";
import {useParams} from "react-router-dom";
import {getUserData} from "../../../Service/AuthService";



const NaviNotificationSettingScreen = (props) => {
    let { id } = useParams();
    const [list, setList] = useState(false);
    const [number, setNumber] = useState(false);
    const [etc, setEtc] = useState(false);
    const [grade, setGrade] = useState(null);

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
        console.log('Navi-NotificationSettingScreen.jsx:36 ->',getUserData());
    },[id])
    return (
        <section className='naviNotificationSettingCover'>
            <h1>
                <Title text1={'通知設定'} color={Color.MAIN_RED}/>
            </h1>
            <div className='btnCover'>
                <ColorButton onClick={()=>null} path={props.path + '/list'} text={'通知設定'} color={list ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
                <ColorButton onClick={()=>null} path={props.path + '/number'}  text={'號碼接收設定'} color={number ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
                <ColorButton onClick={()=>null} path={''}  text={'廣告設定'} color={etc ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
            </div>
            {list === true ? <NotificationList grade={grade}/> : null}
            {number === true ? <NotificationNumber grade={grade}/> : null}
        </section>
    );
};

export default NaviNotificationSettingScreen;