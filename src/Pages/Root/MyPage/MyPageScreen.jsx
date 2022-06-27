import React from 'react';
import LoginButton from "../../../Components/Common/LoginButton";

import { Link, useNavigate } from 'react-router-dom';
import * as AuthService from '../../../Service/AuthService'

const MyPageScreen = () => {
    let navigate = useNavigate();
    let googleSignInClient = null;
    let logoutProcess = () => {
        AuthService.logout().then((result)=>{
            // TODO
            // 로그아웃 후 재로그인 시 구글 계정 선택창 띄우기
            console.log('MyPageScreen.jsx:10 -> logout result : ',result);
            navigate('/login');
        });
    }
    // TODO
    // 로그인후 새로고침
    return (
        <div>
            <Link to={'/login'}>
               <LoginButton text={'로그인'}/>
            </Link>
            <LoginButton text={'로그아웃'} onClick={logoutProcess} />
        </div>
    );
};

export default MyPageScreen;