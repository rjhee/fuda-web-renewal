import React, {useEffect, useState} from 'react';
import NaviList from "../../../Components/MyPage/NaviList";
import InfoBox from "../../../Components/MyPage/InfoBox";
import {Link, useNavigate} from "react-router-dom";
import LoginButton from "../../../Components/Common/LoginButton";
import {Color} from "../../../Styles/Base/color";
import * as AuthService from "../../../Service/AuthService";


const MyPageScreenForGuest = (props) => {
    let navigate = useNavigate();

    useEffect(()=>{
    let guest = AuthService.isGuest();
        if(!!guest === false){
            navigate(props.userPath);
        }
    })

    return (
        <section className='myPageScreenForGuestCover'>
            <div className='loginBtn'>
                <Link to={'/login'}>
                    <LoginButton type={'FULL'} color={Color.MAIN_RED} text={'登入'}/>
                </Link>
            </div>
            <NaviList
                myPagePath={props.myPagePath}
                userPath={'no'}
                notificationPath={'no'}
                paymentPath={'no'}
                couponPath={'no'}
                receiptPath={props.receiptPath}
                faqPath={props.faqPath}
                qnaPath={'no'}/>
            <InfoBox/>
        </section>
    );
};

export default MyPageScreenForGuest;