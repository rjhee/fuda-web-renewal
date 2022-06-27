import React, {useState} from 'react';
import LoginButton from "../../../Components/Common/LoginButton";

import { Link, useNavigate } from 'react-router-dom';
import * as AuthService from '../../../Service/AuthService'
import UserInfoCard from "../../../Components/MyPage/UserInfoCard";
import AnalyzeCard from "../../../Components/MyPage/AnalyzeCard";
import AnalyzeBar from "../../../Components/MyPage/AnalyzeBar";
import PromptModal from "../../../Components/Common/PromptModal";
import NaviList from "../../../Components/MyPage/NaviList";
import InfoBox from "../../../Components/MyPage/InfoBox";


const MyPageScreen = (props) => {
    let navigate = useNavigate();
    let googleSignInClient = null;
    const [onModal, setOnModal] = useState(false);
    const [barValue, setBarValue] = useState(0);

    let logoutProcess = () => {
        AuthService.logout().then((result)=>{
            // TODO
            // 로그아웃 후 재로그인 시 구글 계정 선택창 띄우기
            console.log('MyPageScreen.jsx:10 -> logout result : ',result);
            navigate('/login');
        });
    }
    return (
        <section className='myPageScreenCover'>
            {onModal === true ? <PromptModal on={onModal} setOn={setOnModal} value={barValue} setValue={setBarValue}/> : null}
            <div className='infoCover'>
                <UserInfoCard/>
                <AnalyzeCard/>
                <AnalyzeBar value={barValue} onClick={setOnModal}/>
            </div>
            <NaviList
                myPagePath={props.myPagePath}
                userPath={props.userPath}
                notificationPath={props.notificationPath}
                paymentPath={props.paymentPath}
                couponPath={props.couponPath}
                receiptPath={props.receiptPath}
                faqPath={props.faqPath}
                qnaPath={props.qnaPath}/>
            <InfoBox/>
            <div className=''>
                <Link to={'/login'}>
                    <LoginButton text={'로그인'}/>
                </Link>
                <LoginButton text={'로그아웃'} onClick={logoutProcess} />
            </div>
        </section>
    );
};

export default MyPageScreen;