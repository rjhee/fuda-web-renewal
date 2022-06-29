import {request} from "./ApiRoot";

export const getWinInfo = async () => {

    let response = await request({
        url: '/user/win-info',
        method: 'get',
    });

    return response.data;
}

export const checkPassword = (email, pwd) =>{
    let reqData = {
        email: email,
        pwd: pwd
    };

    return request({
        url: '/user/password/check',
        method: 'POST',
        data: reqData,
    });
}

export const checkName = (name) =>{
    let reqData = {
        name:name
    };

    return request({
        url: '/user/name/check',
        method: 'GET',
        params: reqData,
    });
}

export const changeName = (new_name) =>{
    let reqData = {
        name: new_name
    };

    return request({
        url: '/user/name/change',
        method: 'POST',
        data: reqData,
    });
}

export const phoneAuth = (phone_num) =>{
    let reqData = {
        phone_num: phone_num
    };

    return request({
        url: '/user/phone-auth',
        method: 'POST',
        data: reqData,
    });
}


export const changePhone = (new_phone, authNum) =>{
    let reqData = {
        phone_num: new_phone,
        auth_num: authNum
    };

    return request({
        url: '/user/phone/change',
        method: 'POST',
        data: reqData,
    });
}

export const getUserSimple = () =>{
    return request({
        url: '/user/simple',
        method: 'GET',
    });
}

export const changePassword = (beforePwd, afterPwd) =>{
    let reqData = {
        beforePwd: beforePwd,
        newPwd: afterPwd,
    };

    return request({
        url: '/user/password/change',
        method: 'POST',
        data: reqData,
    });
}

export const getUserSignType = () =>{

    return request({
        url: '/user/sign/type',
        method: 'GET',
    });
}


export const signOut = (reason) =>{
    let reqData = {
        signOutReason: reason,
    };

    return request({
        url: '/user/sign/out',
        method: 'POST',
        data: reqData,
    });
}

export const getNotificationInfo = () => {
    return request({
        url: '/user/notification/option',
        method: 'GET',
    });
}

export const notificationChange = (option_type, value) =>{
    let reqData = {
        notificationOption: {type:option_type, value: value},
    };

    return request({
        url: '/user/notification/option/change',
        method: 'POST',
        data: reqData,
    });
}


export const getUserQnAList = (start, count) =>{
    let reqData = {
        start: start,
        count: count,
    };

    return request({
        url: '/user/qna/list',
        method: 'POST',
        data: reqData,
    });
}

export const getUserQnAListCnt = () =>{
    return request({
        url: '/user/qna/list/cnt',
        method: 'GET',
    });
}

export const getUserQnADetail = (id) =>{
    let reqData = {
        qa_id: id,
    };

    return request({
        url: '/user/qna/detail',
        method: 'POST',
        data: reqData,
    });
}

export const deleteQnA = (id) =>{
    let reqData = {
        qa_id: id,
    };

    return request({
        url: '/user/qna/delete',
        method: 'POST',
        data: reqData,
    });
}


export const getUserQnAUpload = (title, contents, img) =>{
    let reqData = {
        title: title,
        contents: contents,
        img: img,
    };

    return request({
        url: '/user/qna/upload',
        method: 'POST',
        data: reqData,
    });
}


export const getGoal = () =>{
    return request({
        url: '/user/goal',
        method: 'GET',
    });
}

export const setGoal = (value) =>{
    let reqData = {
        value:value
    };

    return request({
        url: '/user/goal/set',
        method: 'GET',
        params: reqData,
    });
}

