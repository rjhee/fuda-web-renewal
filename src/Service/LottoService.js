import {request} from "./ApiRoot.js";


export const getJackpot = () => {
    let data = '';
    return request({
        url: '/lotto/jackpot',
        method: 'GET',
        data: data,
    });
}


export const getWinBigNumAll = () => {
    let data = '';
    return request({
        url: '/lotto/win/big_number_all',
        method: 'GET',
        data: data,
    });
}

export const getWinSuperNumAll = () => {
    let data = '';
    return request({
        url: '/lotto/win/super_number_all',
        method: 'GET',
        data: data,
    });
}

export const getWinDailyNumAll = () => {
    let data = '';
    return request({
        url: '/lotto/win/daily_number_all',
        method: 'GET',
        data: data,
    });
}

export const getWinBig = () => {
    let data = '';
    return request({
        url: '/lotto/win/big',
        method: 'GET',
        data: data,
    });
}

export const getWinSuper = () => {
    let data = '';
    return request({
        url: '/lotto/win/super',
        method: 'GET',
        data: data,
    });
}

export const getWinDaily = () => {
    let data = '';
    return request({
        url: '/lotto/win/daily',
        method: 'GET',
        data: data,
    });
}



export const getBuyUserWinTen = (type, next) => {
    let reqData = {type:type, page: next};
    return request({
        url: '/lotto/win/lotto_buy_user_ten',
        method: 'GET',
        params: reqData,
    });
}

export const getBuyBigTotal = () => {
    let data = '';
    return request({
        url: '/lotto/win/big_buy_user_all',
        method: 'GET',
        params: data,
    })
}

export const getBuySuperTotal = () => {
    let data = '';
    return request({
        url: '/lotto/win/super_buy_user_all',
        method: 'GET',
        params: data,
    })
}

export const getBuyDailyTotal = () => {
    let data = '';
    return request({
        url: '/lotto/win/daily_buy_user_all',
        method: 'GET',
        params: data,
    })
}

export const getBuyWinUser = () => {
    let data = '';
    return request({
        url: '/lotto/win/lotto_buy_user_all',
        method: 'GET',
        params: data,
    })
}

export const getBuyUserWinResultNum = (type) => {
    let reqData = {type:type};
    return request({
        url: '/lotto/win/lotto_buy_user_count',
        method: 'GET',
        params: reqData,
    });
}

export const getUserWinIssue = (lotto_type) =>{
    return request({
        url: '/lotto/'+lotto_type+'/win-issue',
        method: 'GET',
    });
}


export const getLottoDetail = (lotto_type, issue) =>{
    return request({
        url: '/lotto/'+lotto_type+'/issue/'+issue+'/detail',
        method: 'GET',
    });
}

export const getReceiptLottoRecently = () =>{
    return request({
        url: '/lotto/receipt/recently',
        method: 'GET',
    });
}


export const getQRCode = ( type, numbers )=>{
    let reqData = {type:type, numbers: numbers};
    return request({
        url: '/lotto/qrcode',
        method: 'GET',
        params: reqData,
    });
}
