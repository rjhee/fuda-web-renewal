import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import LoginScreen from "../Pages/Login/LoginScreen";
import SignUpScreen from "../Pages/Login/SignUpScreen";
import SignUpEnterInform from "../Pages/Login/SignUpEnterInform";
import SignUpAgreeCheckBox from "../Pages/Login/SignUpAgreeCheckBox";
import SignUpVerifyCode from "../Pages/Login/SignUpVerifyCode";
import FindFwScreen from "../Pages/Login/FindFwScreen";
import * as AuthService from "../Service/AuthService";
const Login = () => {
    const LOGIN = '/login';
    const SIGNUP = '/signUp';
    const FIND_PW = '/fidePw';
    const EMAIL = '/email';
    const PAGE = '/page=';


    let uid = null;
    let email = null;
    let name = null;

    let navigate = useNavigate();
    function onGoogleLogin (){
       AuthService.googleLogin('Google')
           .then((result)=> {
               uid = result.user.uid;
               email = result.user.email;
               name = result.user.displayName;
               console.log('Login.js:23 ->',result.user);
            })
           .then(()=>AuthService.snsSignIn(uid))
           .then((result)=> {
               console.log('Login result : ', result);
               if(result === true){
                   //     구글 계정으로 회원이 있을때
                   navigate('/');
               }else {
                   //    없을때
                   navigate(`${SIGNUP+EMAIL+PAGE}2`,{state:{sns: 'Google', uid: uid, email: email, name: name, }});
               }
           })
           .catch((error)=>{
               console.log('login fail, error : ',error);
               alert('다시시도 하세요');
           });






    }


    return (
        <Routes>
            <Route path={LOGIN}
                   element={
                       <LoginScreen
                           pathLogin={LOGIN}
                           pathSignUp={SIGNUP}
                           pathFindPw={FIND_PW}
                           onGoogleLogin={onGoogleLogin}/>}/>
            <Route path={SIGNUP}
                   element={
                        <SignUpScreen
                            pathLogin={LOGIN}
                            pathSignUp={SIGNUP}
                            pathFindPw={FIND_PW}/>}/>
            <Route path={SIGNUP + EMAIL + PAGE +'1'}
                   element={
                        <SignUpEnterInform path={SIGNUP + EMAIL}/>}/>
            <Route path={SIGNUP + EMAIL + PAGE +'2'}
                   element={
                        <SignUpAgreeCheckBox path={SIGNUP + EMAIL}/>}/>
            <Route path={SIGNUP+ EMAIL + PAGE +'3'}
                   element={
                        <SignUpVerifyCode/>}/>
            <Route path={FIND_PW}
                   element={
                        <FindFwScreen/>}/>
        </Routes>
    );
};

export default Login;