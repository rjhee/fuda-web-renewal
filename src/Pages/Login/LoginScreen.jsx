import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {lang} from "../../Assets/Lang/Lang";
import {Color} from "../../Styles/Base/color";
import TitleBig from "../../Components/Login/TitleBig";
import LongInput from "../../Components/Login/LongInput";
import LoginButton from "../../Components/Common/LoginButton";
import appleIcon from "../../Assets/Images/icon/apple_icon.png"
import googleIcon from "../../Assets/Images/icon/google_icon.png"
import TextButton from "../../Components/Common/TextButton";
import * as AuthService from "../../Service/AuthService";

const LoginScreen = (props) => {
    // 1) 첫번째 화면
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

   async function submitLogin(){
        console.log('LoginScreen.jsx:19 ->',userId);
        console.log('LoginScreen.jsx:20 ->',userPw);
           if(!!userId === false) {
               alert('請輸入您的電子信箱帳號');
               return;
           }else if (!!userPw === false){
               alert('請輸入密碼');
               return;
           }
        let result = await AuthService.signIn(userId, userPw);


        if (result === true) {
            console.log('로그인 결과 : ',result);
            navigate('/');
        }else {
            alert('login failed');
        }

    }

    return (
        <section className='loginScreenCover'>
            <h1>
                <TitleBig text={lang().LOGIN}/>
            </h1>
            {/*TODO - 1. id/pw input 값 받아오기*/}
            <div className='inputGroup'>
                <LongInput
                    type={'text'}
                    placeHolder={lang().ENTER_EMAIL}
                    setValue={setUserId}/>
                <LongInput
                    type={'password'}
                    placeHolder={lang().ENTER_PW}
                    setValue={setUserPw}/>
                {/*TODO - 2. 받아온 input 값으로 DB에 전송
                            DB에 있는 회원이면 -> 로그인 -> 메인페이지로 이동
                            없으면 -> 회원가입페이지로 이동 */}
                <LoginButton text={lang().LOGIN} onClick={()=> submitLogin()}/>
            </div>
            <div className='btnGroup'>
                <Link to={props.pathFindPw}>
                    <TextButton text={lang().FORGOT_PW}/>
                </Link>
                <Link to={props.pathSignUp}>
                    <TextButton text={lang().JOIN} color={Color.MAIN_RED}/>
                </Link>
            </div>
            <div className='line'><span>或</span></div>
            <div className='snsBtnGroup'>
                {/* TODO - 3. 구글/애플 로그인시,
                            DB에 있는 회원이면 -> 로그인 -> 메인페이지로 이동
                            없으면 -> 회원가입페이지로 이동 */}
                <LoginButton
                    type={'FULL'}
                    color={Color.LIGHT_RED}
                    text={'Google帳號登入'}
                    onClick={props.onGoogleLogin}
                    icon={googleIcon}/>
                <LoginButton
                    type={'FULL'}
                    color={Color.LIGHT_RED}
                    text={'Apple帳號登入'}
                    icon={appleIcon}/>
                {/* TODO - 4. 게스트로 토큰 받아서 페이지 이동 처리 */}
                <LoginButton
                    type={'FULL'}
                    color={Color.LIGHT_RED}
                    text={'GUEST'}/>
            </div>
        </section>
    );
};

export default LoginScreen;