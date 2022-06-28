import React from 'react';
import Title from "../../../Components/Common/Title";
import {lang} from "../../../Assets/Lang/Lang";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LoginButton from "../../../Components/Common/LoginButton";

const UserInfoEditReLoginScreen = () => {
    return (
        <section className='userInfoEditReLoginCover'>
            <h1>
                <Title text1={lang().ACCOUNT_SETTING} color={Color.MAIN_RED}/>
            </h1>
            <p>為了保護個人資料，請確認您的密碼</p>
            <div className='inputCover'>
                <label htmlFor="">帳號</label>
                <LongInput type={'email'} placeHolder={'請輸入完整email帳號'}/>
            </div>
            <div className='inputCover'>
                <label htmlFor="">密碼</label>
                <LongInput type={'password'} placeHolder={' '}/>
            </div>
            <div className='btnCover'>
                <LoginButton text={'確認'} color={Color.MAIN_RED}/>
                <LoginButton text={'取消'} color={Color.LIGHT_GREY}/>
            </div>
        </section>
    );
};

export default UserInfoEditReLoginScreen;