import {request} from "./ApiRoot";


export const getLottoDrawDate = (lotto_type, issue) => {
    let reqData = {
        lotto_type: lotto_type,
        issue: issue,
    };
    return request({
        url: '/feed/draw_date',
        method: 'GET',
        params: reqData,
    });
}

export const getPublicFeedList = (type, start, count,mailPos) => {
    let reqData = {
        start: start,
        pageCount: count,
        mail_start:mailPos,
    };

    return request({
        url: '/feed/' + type,
        method: 'POST',
        data: reqData,
    });
}

export const getPublicFeedListGuest = (type, start, count,mailPos) => {
    let reqData = {
        start: start,
        pageCount: count,
        mail_start:mailPos
    };

    return request({
        url: '/feed/guest/' + type,
        method: 'POST',
        data: reqData,
    });
}

export const getCommentList = (board_uid, start, count) => {
    let reqData = {
        start: start,
        pageCount: count,
    };

    console.log(board_uid, start, count);

    return request({
        url: '/feed/' + board_uid + '/comment',
        method: 'GET',
        params: reqData,
    });
}

export const writeComment = (board_uid, comment) => {
    let reqData = {
        comment: comment,
    };

    return request({
        url: '/feed/' + board_uid + '/comment/write',
        method: 'POST',
        data: reqData,
    });
}

export const banBoard = (user_id, board_uid) => {
    let reqData = {
        user_id: user_id,
        board_uid: board_uid,
    };

    return request({
        url: '/feed/' + board_uid + '/ban',
        method: 'POST',
        data: reqData,
    });
}

export const banComment = (user_id, comment_uid) => {
    let reqData = {
        user_id: user_id,
        comment_uid: comment_uid,
    };

    return request({
        url: '/feed/comment/' + comment_uid + '/ban',
        method: 'POST',
        data: reqData,
    });
}

export const writeWishFeed = (title, contents, img) => {
    let reqData = {
        title: title,
        contents: contents,
        img: img,
    };

    return request({
        url: '/feed/7/write',
        method: 'POST',
        data: reqData,
    });
}

export const writeWinnerFeed = (title, contents, img, lotto, issue, rate, win_id) => {
    let reqData = {
        title: title,
        contents: contents,
        img: img,
        lotto: lotto,
        issue: issue,
        rate: rate,
        win_id: win_id,
    };

    return request({
        url: '/feed/6/write',
        method: 'POST',
        data: reqData,
    });
}

export const getFeedDetail = (board_uid, board_type) => {
    return request({
        url: '/feed/'+board_uid+'/'+board_type+'/detail',
        method: 'GET',
    });
}

export const getLottoFeed = (type, year, month, start, count) => {

    let reqData = {
        year: year,
        month: month,
        start: start,
        count: count,
    };

    return request({
        url: '/feed/lotto/'+type,
        method: 'POST',
        data: reqData,
    });
}

export const iLoveFeed = (board_uid, love) => {
    let reqData = {
        love: love,
    };

    return request({
        url: '/feed/' + board_uid + '/like',
        method: 'GET',
        params: reqData,
    });
}

export const getFeedLoveSelf = (start, end) => {
    return request({
        url: '/feed/checkHart',
        method: 'GET',
        params: {
            start: start,
            end: end,
        }
    });
}

export const editFeed = (board_uid, title, contents, img) =>{
    let reqData = {
        title: title,
        contents: contents,
        img: img,
    };

    return request({
        url: '/feed/' + board_uid + '/edit',
        method: 'POST',
        data: reqData,
    });
}

export const deleteFeed = (board_uid) =>{
    let reqData = {
        board_uid:board_uid,
    };

    return request({
        url: '/feed/' + board_uid + '/delete',
        method: 'POST',
        data: reqData,
    });
}

export const editComment = (comment_uid, comment) =>{
    let reqData = {
        comment: comment,
    };

    return request({
        url: '/feed/comment/'+comment_uid+'/edit',
        method: 'POST',
        data: reqData,
    });
}

export const deleteComment = (comment_uid) =>{

    return request({
        url: '/feed/comment/'+comment_uid+'/delete',
        method: 'POST',
    });
}
