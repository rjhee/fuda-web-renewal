import {lang} from "../Assets/Lang/Lang";

export const setNumberFormat = (reward) => {
    if(reward > 9999 && reward < 10000000){
        return Math.ceil(reward/10000)+lang().THOUSAND;
    }
    else if(reward > 9999999){
        return (reward/100000000).toFixed(2)+lang().MILLION;
    }
    else {
        return reward;
    }
}

export const hideUseId = (id) => {
    return id.replace(id.substr(1,1),'*');
}