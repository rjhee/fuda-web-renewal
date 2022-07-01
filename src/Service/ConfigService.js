import {request} from "./ApiRoot";

export const getFastQnAList = () => {
    return request({
        url: '/config/fqa/list',
        method: 'GET',
    });
}