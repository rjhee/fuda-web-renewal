import firebase from 'firebase';
import firebaseApp from './firebase';
import * as LocalStorageService from '../Service/LocalStorageService'
import {setAccessToken, request , removeAccessToken} from "./ApiRoot";
import { Buffer } from "buffer";

let userData;
const saveAccessToken = async (access, refresh) => {
    if (!!access === false || !!refresh === false)
        return false;
    LocalStorageService.set('refresh', refresh);
    LocalStorageService.set('access', access);
    setAccessToken(access);

    userData = getPayload(access);
    return true;
}


export const getPayload = (access) => {
    let payload = access.split('.')[1];
    payload += new Array(5 - payload.length % 4).join('=');
    payload = payload.replace(/\-/g, '+').replace(/_/g, '/');

    let string = Buffer.from(payload, 'base64').toString();
    return JSON.parse(string);
}

export const getAccessToken = async () => {

    let refreshToken = LocalStorageService.get('refresh');
    let accessToken = LocalStorageService.get('access');
    if (accessToken === null || refreshToken === null) {
        return false;
    }

    let reqData = {
        accessToken: accessToken,
        refreshToken: refreshToken,
    };

    let response = await request({
        url: '/auth/access-token',
        method: 'POST',
        data: reqData,
    });

    if (response.data === null || response.data.accessToken === null || response.data.refreshToken === null)
        return false;
    let res = await saveAccessToken(response.data.accessToken, response.data.refreshToken);
    if (!!res === false)
        return false;

    return res;
};

export const checkEmail = (email) => {
    let reqData = {
        email: email,
    };

    return request({
        url: '/auth/duplicate-email',
        method: 'POST',
        data: reqData,
    });
}

export const signUp = async (signUpData) => {
    let reqData = {
        email: signUpData.email,
        name: signUpData.name,
        phone_num: signUpData.phone_num,
        pwd: signUpData.pwd,
        authNumber: signUpData.authNumber,
        site_code: signUpData.site_code,
        agree_yn: signUpData.agree_yn,
        sns: signUpData.sns,
        uid: signUpData.uid,
    };
    console.log('AuthService.js:83 ->',reqData);
    let response = await request({
        url: '/auth/signUp',
        method: 'POST',
        data: reqData,
    });

    if (!!response.data === false || !!response.data.accessToken === false || !!response.data.refreshToken === false) {
        return false;
    }

    let res = await saveAccessToken(response.data.accessToken, response.data.refreshToken);
    return res;
}

export const signUpSNS = async (signUpData) => {
    //  console.log("signUpSns :", signUpData);
    let reqData = {
        email: signUpData.email,
        name: signUpData.name,
        phone_num: signUpData.phone_num,
        pwd: signUpData.pwd,
        authNumber: signUpData.authNumber,
        site_code: signUpData.site_code,
        agree_yn: signUpData.agree_yn,
        sns: signUpData.sns,
        sns_id: signUpData.sns_id,
    };

    let response = await request({
        url: '/auth/signUpSNS',
        method: 'POST',
        data: reqData,
    });

    if (!!response.data === false || !!response.data.accessToken === false || !!response.data.refreshToken === false) {
        console.log('AuthService.js:signUpSNS ->', response);
        return false;
    }

    let res = await saveAccessToken(response.data.accessToken, response.data.refreshToken);
    return res;
}

// 이메일 로그인
export const signIn = async (email, pwd) => {
    let reqData = {
        email: email,
        pwd: pwd,
    };

    console.log('AuthService.js:69 ->',reqData);
    let response = await request({
        url: 'auth/login',
        method: 'POST',
        data: reqData,
    });
    if (!!response.data === false || !!response.data.accessToken === false || !!response.data.refreshToken === false) {
        return false;
    }

    let res = await saveAccessToken(response.data.accessToken, response.data.refreshToken);

    return res;
}


//sns로그인
export const snsSignIn = async (sns_id) => {
    let reqData = {
        sns_id: sns_id,
    };

    let response = await request({
        url: 'auth/snsLogin',
        method: 'POST',
        data: reqData,
    });

    if (!!response.data === false || !!response.data.accessToken === false || !!response.data.refreshToken === false) {
        return false;
    }

    let res = await saveAccessToken(response.data.accessToken, response.data.refreshToken);
    return res;
}

export const sendPhoneAuth = (email, phone) => {
    let reqData = {
        email: email,
        phone: phone,
    };

    return request({
        url: '/auth/phone-auth',
        method: 'POST',
        data: reqData,
    });
}

export async function googleLogin(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

    let result  = await firebaseApp.auth().signInWithPopup(authProvider);
    console.log('AuthService.js:185 ->',result);
    return result;
}

export const logout = async () => {
    await LocalStorageService.set('refresh', '');
    await LocalStorageService.set('access', '');

    removeAccessToken();

    userData = null;
    let res = await SNSlogout();
    console.log('AuthService.js:logout ->',res);
    return true;
}

export async function SNSlogout() {
    try {
        // await GoogleLogin().signOut();
        await firebaseApp.auth().signOut();
        return true;
    }
    catch{
        return false;
    }

}