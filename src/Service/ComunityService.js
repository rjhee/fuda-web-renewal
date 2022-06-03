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

export const getNoticeTitle = (count) => {
    let reqData = {count: count};
    return request({
            url: '/community/notice/title',
            method: 'GET',
            params: reqData,
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
            url: '/user/notice',
            method: 'GET',
            params: reqData,
        }
    )
}

export  const getNoticeNum = () => {
    let data = '';
    return request({
            url: '/user/notice_count',
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