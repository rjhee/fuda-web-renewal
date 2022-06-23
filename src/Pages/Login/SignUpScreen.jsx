import React, {useState} from 'react';
import TitleBig from "../../Components/Login/TitleBig";
import {lang} from "../../Assets/Lang/Lang";
import LoginButton from "../../Components/Common/LoginButton";
import {Color} from "../../Styles/Base/color";
import email from "../../Assets/Images/icon/email_icon.png";
import googleIcon from "../../Assets/Images/icon/google_icon.png";
import appleIcon from "../../Assets/Images/icon/apple_icon.png";
import TextButton from "../../Components/Common/TextButton";
import RoundButton from "../../Components/Common/RoundButton";
import PolicyModal from "../../Components/Modal/PolicyModal";
import {Link} from "react-router-dom";
import {termsContents} from "../../Service/util";
import {policyContents} from "../../Service/util";

const SignUpScreen = (props) => {
    // 1)
    // 회원가입 1.이메일 2.구글 3.애플
    const [onTerms, setOnTerms] = useState(false);
    const [onPolicy, setOnPolicy] = useState(false);
    return (
        <section className='signUpCover'>
            <h1>
                <TitleBig text={lang().JOIN}/>
            </h1>
            <div className='btnGroup'>
                <Link to={'email/page=1'}>
                    <LoginButton type={'FULL'} color={Color.LIGHT_RED} text={lang().EMAIL_JOIN} icon={email}/>
                </Link>
                <Link to='signup'>
                    <LoginButton type={'FULL'} color={Color.LIGHT_RED} text={'Google帳號登入'} icon={googleIcon}/>
                </Link>
                <Link to='signup'>
                    <LoginButton type={'FULL'} color={Color.LIGHT_RED} text={'Apple帳號登入'} icon={appleIcon}/>
                </Link>
            </div>
            <div className='textBtnGroup'>
                <div>{lang().ALREADY_MEMBER}</div>
                <Link to={props.pathSignUp}>
                    <TextButton
                        text={lang().LOGIN}
                        color={Color.MAIN_RED}
                        underLine={true}/>
                </Link>
            </div>
            <div className='roundBtnGroup'>
                <RoundButton
                    text={lang().TERMS}
                    setOn={setOnTerms}/>
                <RoundButton
                    text={lang().PRIVACY_POLICY}
                    setOn={setOnPolicy}/>
            </div>
            {onTerms === true ?
                <PolicyModal title={lang().TERMS} contents={termsContents} setOn={setOnTerms}/> : null}
            {onPolicy === true ?
                <PolicyModal title={lang().PRIVACY_POLICY} contents={policyContents} setOn={setOnPolicy}/> : null}
        </section>
    );
};

export default SignUpScreen;