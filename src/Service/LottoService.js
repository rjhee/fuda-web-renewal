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

let buyIssueStorage = null;
export let getBuyIssueData = async () => {
    if (buyIssueStorage === null) {
        console.log('LottoInfoStorage.js:getBuyIssueData:40 -> server call');
        buyIssueStorage = await request({
            url: '/lotto/buy-issue-list',
            method: 'GET',
        }).then();
    } else {
        console.log('LottoInfoStorage.js:getBuyIssueData:46 -> inner call');
    }
    return buyIssueStorage;
}

export let getLottoBuyData = async (type, issue) => {
    let query = {
        lottoType: type,
        issue: issue,
    }

    let result = await request({
        url: '/lotto/buy-info',
        method: 'GET',
        params: query,
    });
    return result;
}

export let getUserWinResultInfo = async (lotto_type, startIssue, endIssue, page, pageCnt) => {

    let data = {
        lottoType: lotto_type,
        start: startIssue,
        end: endIssue,
        page: page,
        pageCnt: pageCnt
    }

    return await request({
        url: '/lotto/result-info',
        method: 'GET',
        params: data,
    });
}

export let getUserWinResultInfoTotal = async (lotto_type, startIssue, endIssue) => {
    let data = {
        lottoType: lotto_type,
        start: startIssue,
        end: endIssue,
    }

    return await request({
        url: '/lotto/result-info/total',
        method: 'GET',
        params: data,
    });
}