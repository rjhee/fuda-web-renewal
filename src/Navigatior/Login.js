import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginScreen from "../Pages/Login/LoginScreen";
import SignUpScreen from "../Pages/Login/SignUpScreen";
import SignUpEnterInform from "../Pages/Login/SignUpEnterInform";
import SignUpAgreeCheckBox from "../Pages/Login/SignUpAgreeCheckBox";
import SignUpVerifyCode from "../Pages/Login/SignUpVerifyCode";
import FindFwScreen from "../Pages/Login/FindFwScreen";

const Login = ({authService}) => {
    const LOGIN = '/login';
    const SIGNUP = '/signUp';
    const FIND_PW = '/fidePw';
    const ID = '/:id';

    return (
        <Routes>
            <Route exact path={'/login'}
                   element={
                       <LoginScreen
                           authService={authService}
                           pathLogin={LOGIN}
                           pathSignUp={SIGNUP}
                           pathFindPw={FIND_PW}/>}/>
            <Route path={'/signUp'} element={<SignUpScreen authService={authService}/>}/>
            <Route path={'/signUp' + ID} element={<SignUpEnterInform authService={authService}/>}/>
            <Route path={'/signUp' + ID} element={<SignUpAgreeCheckBox authService={authService}/>}/>
            <Route path={'/signUp' + ID} element={<SignUpVerifyCode authService={authService}/>}/>
            <Route path={'/fidePw'} element={<FindFwScreen authService={authService}/>}/>
        </Routes>
    );
};

export default Login;