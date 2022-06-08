import {request} from "./ApiRoot";

export const getPress = (page) => {
    let reqData = {page: page};
    return request({
        url: '/community/press',
        method: 'GET',
        params: reqData,
    })
}

export const getPressNum = () => {
    let data = '';
    return request({
        url: '/community/pressNum',
        method: 'GET',
        params: data,
    })
}

export const getBillboard = () => {
    return request({
            url: '/community/billboard',
            method: 'GET',
        }
    )
}

export const getNoticeData = (uid) => {
    let reqData = {uid: uid};
    return request({
            url: '/community/notice/uid',
            method: 'GET',
            params: reqData,
        }
    )
}

export  const getNotice = (page) => {
    let reqData = {page: page};
    return request({
            url: '/community/notice',
            method: 'GET',
            params: reqData,
        }
    )
}

export  const getNoticeNum = () => {
    let data = '';
    return request({
            url: '/community/notice_count',
            method: 'GET',
            params: data,
        }
    )
}

export const getBanner = () => {
    let data = '';
    return request({
            url: '/community/banner',
            method: 'GET',
            params: data,
        }
    )
}

export const getPopup = () => {
    let data = '';
    return request({
            url: '/community/popup',
            method: 'GET',
            params: data,
        }
    )
}

export const getStore = () => {
    let data = '';
    return request({
            url: '/community/store',
            method: 'GET',
            params: data,
        }
    )
}

export const getStoreDetail = (uid) => {
    let reqData = {uid: uid};
    return request({
            url: '/community/store/detail',
            method: 'GET',
            params: reqData,
        }
    )
}

export const getStoreSearchPage = (page, pageCnt, region) => {
    let reqData = {
        page: page,
        pageCnt: pageCnt,
        region: region,
    };

    return request({
            url: '/community/store/list',
            method: 'GET',
            params: reqData,
        }
    )
}
