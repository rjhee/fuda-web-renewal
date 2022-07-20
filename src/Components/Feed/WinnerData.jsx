import React,{useState, useEffect} from 'react';
import {getFeedDetail} from "../../Service/FeedService"
import {superWinDefine, bigWinDefine, dailyWinDefine} from "../../Service/util";

const WinnerData = (props) => {
    let [type, setType] = useState('今彩539');
    let [issue, setIssue] = useState('第111000034期 ');
    let [rate, setRate] = useState('肆獎');

    let getTypeTitle = (lotto_type) => {
        switch (lotto_type) {
            case 'super':
                return '威力彩';
            case 'big':
                return '大樂透';
            case 'daily':
                return '今彩539';
        }
    }

    let getIssueText = (issue) => {
        return '第' + issue + '期 ';
    }

    let getRateText = (type, rate) =>{
        console.log('WinnerInfo.js:getRateText:34 ->', type, rate);
        switch (type) {
            case 'super':
                return superWinDefine[rate-1].rate;
            case 'big':
                return bigWinDefine[rate-1].rate;
            case 'daily':
                return dailyWinDefine[rate-1].rate;
        }
    }

    let getData = async (uid) => {
        if(!!uid === true) {
            return await getFeedDetail(uid, 6).then(r=>{
                if(r.data !== null ){
                    console.log(JSON.stringify(r.data))
                    setType(getTypeTitle(r.data[0].lotto_type));
                    setIssue(getIssueText(r.data[0].lotto_issue));
                    setRate(getRateText(r.data[0].lotto_type, r.data[0].lotto_rank));
                }
            });
        }
    };

    useEffect(()=>{
        getData(props.uid).then();
    },[]);
    return (
        <div className='winnerBoard'>
            <span className="lotto">{type}</span>
            <span className="issue">{issue}</span>
        </div>
    );
};

export default WinnerData;