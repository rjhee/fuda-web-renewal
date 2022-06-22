import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {lang} from "../../Assets/Lang/Lang";
import {Color} from "../../Styles/Base/color";
import TitleBig from "../../Components/Login/TitleBig";
import LongInput from "../../Components/Login/LongInput";
import LoginButton from "../../Components/Common/LoginButton";
import appleIcon from "../../Assets/Images/icon/apple_icon.png"
import googleIcon from "../../Assets/Images/icon/google_icon.png"

const LoginScreen = (props) => {
    // 첫번째 화면
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');


    return (
        <section className='loginScreenCover'>
            <h1>
                <TitleBig text={lang().LOGIN}/>
            </h1>
            <div className='inputGroup'>
                <LongInput
                    type={'text'}
                    placeHolder={lang().ENTER_EMAIL}
                    setValue={setUserId}/>
                <LongInput
                    type={'password'}
                    placeHolder={lang().ENTER_PW}
                    setValue={setUserPw}/>
                <LoginButton text={lang().LOGIN}/>
            </div>
            <div className='btnGroup'>
                <Link to={props.pathFindPw}>
                    <button>{lang().FORGOT_PW}</button>
                </Link>
                <Link to={props.pathSignUp}>
                    <button>{lang().JOIN}</button>
                </Link>
            </div>
            <div className='line'><span>或</span></div>
            <div className='snsBtnGroup'>
                <LoginButton
                    type={'FULL'}
                    color={Color.LIGHT_RED}
                    text={'Google帳號登入'}
                    icon={googleIcon}/>
                <LoginButton
                    type={'FULL'}
                    color={Color.LIGHT_RED}
                    text={'Apple帳號登入'}
                    icon={appleIcon}/>
                <LoginButton
                    type={'FULL'}
                    color={Color.LIGHT_RED}
                    text={'GUEST'}/>
            </div>
        </section>
    );
};

export default LoginScreen;