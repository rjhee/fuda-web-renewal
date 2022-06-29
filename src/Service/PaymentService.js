import {request} from "./ApiRoot";

export const getUserVipHistory = () => {

    return request({
        url: '/shop/vip/history',
        method: 'GET',
    });
}

export const getUserReceiptHistory = (start, count) => {

    let reqData = {
        start: start,
        count: count,
    };

    return request({
        url: '/shop/receipt',
        method: 'GET',
        params: reqData,
    });
}

export const getUserReciptHistoryCnt = () => {

    return request({
        url: '/shop/receipt/cnt',
        method: 'GET',
    });
}
