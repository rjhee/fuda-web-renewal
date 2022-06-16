import React from 'react';
import LoginButton from "../../../Components/Common/loginButton";
import {Color} from "../../../Styles/Base/color";
import googleIcon from "../../../Assets/Images/icon/google_icon.png";

const MyPageScreen = ({authService}) => {

    function onLogin(){
        authService
            .login('Google')
            .then((result)=>{
                console.log('login success  :',result);
            })
            .catch((error)=>{
            console.log('login fail, error : ',error);
        });

    }
    return (
        <div>
            <LoginButton onClick={onLogin} type={'FULL'} color={Color.LIGHT_RED} icon={googleIcon}/>
        </div>
    );
};

export default MyPageScreen;