import axios from 'axios';
import {getAccessToken} from "./AuthService";
import * as LoacalStorageService from "./LocalStorageService"
const CODE = require('./status-code');
// const apiURL = 'https://mobile-dev.fudalotto.com.tw';
//  const apiURL = 'http://localhost:3030/';
const apiURL = 'http://172.30.1.75:3030';

let client = axios.create({
    baseURL: apiURL,
    validateStatus: function (status) {
        return status < 500;
    },
});

client.interceptors.response.use(async (res )=>{
    const { config , status } = res;
    if ( status === CODE.UNAUTHORIZED ){
        console.log('ApiRoot.js: check token ->',' token expired so renew token');
        const originalRequest = config;
        let success = await getAccessToken();
        if ( success === false ){
            //토큰 갱신 실패
            return Promise.reject("refresh token fail");
        }

        originalRequest.headers['Access-Token'] = LoacalStorageService.get('access');
        return client(originalRequest);
    }
    else if ( status === CODE.TOO_MANY_REQUEST ){
        return Promise.reject("too many request");
    }
    return res;
});



const onSuccess = function (response) {
    if ( response.code === CODE.UNAUTHORIZED ){
        //console.log('ApiRoot.js:71 ->',response);
    }

    //console.log('ApiRoot.js:onSuccess ->',response);
    return {
        code    : response.status      !== undefined ? response.status : 999,
        message : response.data.message!== undefined ? response.data.message : "",
        data    : response.data.data   !== undefined ? response.data.data : null,
        error   : response.error       !== undefined ? response.error : ""
    }
};

const onError = function (error) {
    if ( error === "refresh token fail"){
        // window.location.href = '/Home';
        console.log('hi')
        throw new Error("refresh token fail");
    }

    if ( error === "too many request"){
        alert("TOO MANY REQUEST" , "too many request in short time");
    }
    console.log('ApiRoot.js:onError ->', error);
    throw new Error("Network Error :"+ error);
};


//jwt 토큰 가져오기
export const setAccessToken = async ( accessToken) => {
    client.defaults.headers.common['Access-Token'] = accessToken;
};


export const request = async function (options) {
    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export const removeAccessToken = () => {
    client.defaults.headers.common['Access-Token'] = null;
};


export const checkState = async ()=>{

    return client({
        url: '/config/netstat',
        method: 'GET'
    })
        .then(onSuccess)
        .catch((e)=>{
            throw new Error("Network Error ");
        });
}

