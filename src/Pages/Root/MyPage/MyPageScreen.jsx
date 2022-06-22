import React from 'react';
import LoginButton from "../../../Components/Common/LoginButton";
import {Color} from "../../../Styles/Base/color";
import googleIcon from "../../../Assets/Images/icon/google_icon.png";
import { Link, useNavigate } from 'react-router-dom';

const MyPageScreen = ({authService}) => {
    let navigate = useNavigate();
    console.log('MyPageScreen.jsx:9 ->',navigate);
    function onLogin(){
        authService
            .login('Google')
            .then((result)=>{
                console.log('login success  :',result);
                navigate('/');
            })
            .catch((error)=>{
            console.log('login fail, error : ',error);
            alert('다시시도 하세요');
        });

    }
    // TODO
    // 로그인후 새로고침
    return (
        <div>
            <Link to={'/login'}>
                <button>
                    로그인
                </button>
            </Link>
            <LoginButton onClick={onLogin} type={'FULL'} color={Color.LIGHT_RED} icon={googleIcon}/>
        </div>
    );
};

export default MyPageScreen;