import firebase from 'firebase';
import firebaseApp from './firebase';
import * as LocalStorageService from '../Service/LocalStorageService'
import {setAccessToken, request} from "./ApiRoot";
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

class AuthService {
    async login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        let result  = await firebaseApp.auth().signInWithPopup(authProvider);
        let uid = result.user.uid;
        console.log('AuthService.js:54 ->',uid);
        result = await snsSignIn(uid);
        console.log('AuthService.js:69 ->',result);
    }
}

export default AuthService;
