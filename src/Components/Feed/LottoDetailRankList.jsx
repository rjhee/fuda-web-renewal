import React, {useEffect, useState} from 'react';
import {dailyWinDefine, bigWinDefine, superWinDefine} from "../../Service/util";
import {useParams} from "react-router-dom";

const LottoDetailRankList = (props) => {
    const [resultData, setResultData] = useState([]);

    let { id } = useParams();
    let data = props?.data;

    function setData(){
        let result = [];
        if (props?.lotto_type === 'daily') {
            for (let i = 1; i <= dailyWinDefine.length; i++) {
                result.push({
                    rank: dailyWinDefine[i - 1].rate,
                    limitWinner: dailyWinDefine[i - 1].match,
                    winner: data['win_cnt_' + i]?.toLocaleString('ko-KR') + '注',
                    money: data['win_mny_' + i]?.toLocaleString('ko-KR') + '元'
                });
            }
        } else if (props.lotto_type === 'big') {
            for (let i = 1; i <= bigWinDefine.length; i++) {
                if (i === bigWinDefine.length) {
                    result.push({
                        rank: bigWinDefine[i - 1].rate,
                        limitWinner: bigWinDefine[i - 1].match,
                        winner: data['win_cnt_n'] + '注',
                        money: data['win_mny_n'] + '元'
                    });
                } else {
                    result.push({
                        rank: bigWinDefine[i - 1].rate,
                        limitWinner: bigWinDefine[i - 1].match,
                        winner: data['win_cnt_' + i]?.toLocaleString('ko-KR') + '注',
                        money: data['win_mny_' + i]?.toLocaleString('ko-KR') + '元'
                    });
                }
            }
        } else if (props.lotto_type === 'super') {
            for (let i = 1; i <= superWinDefine.length; i++) {
                result.push({
                    rank: superWinDefine[i - 1].rate,
                    limitWinner: superWinDefine[i - 1].match,
                    winner: data['win_cnt_' + i]?.toLocaleString('ko-KR') + '注',
                    money: data['win_mny_' + i]?.toLocaleString('ko-KR') + '元'
                });
            }
        }
        setResultData(result);
    }

    useEffect(()=>{
        setData();
        console.log('LottoDetailRankList.jsx:1 ->',props.data);
        console.log('LottoDetailRankList.jsx:2 ->',resultData);
    },[id])
    return (
        <ul className='rank'>
            <li className='rankHeader'>
                <strong className='rankText'>項目</strong>
                <strong className='winningNumCount'>對中獎號數</strong>
                <strong className='winnerCount'>中獎注數</strong>
                <strong className='winMoney'>獎金</strong>
            </li>
            {resultData.length !== 0
                ? resultData.map((items,i)=>
                    <li className={i === 0 ? 'pointLow' : ''}>
                        <strong className='rankText'>{items.rank}</strong>
                        <strong className='winningNumCount'>{items.limitWinner}</strong>
                        <strong className='winnerCount'>{items.winner}</strong>
                        <strong className='winMoney'>{items.money}</strong>
                    </li>)
                : <></>}
        </ul>

    );
};

export default LottoDetailRankList;