import React, {useEffect, useState} from 'react';
import {dailyWinDefine, bigWinDefine, superWinDefine} from "../../Service/util";
import {useParams} from "react-router-dom";
import {getLottoDetail} from "../../Service/LottoService";

const LottoDetailRankList = (props) => {
    const [resultData, setResultData] = useState([]);
    const [rankData, setRankData] = useState([]);
    let { id } = useParams();


    async function getData() {
        let result = await getLottoDetail(props.lotto_type, props.issue);
        let data = result.data[0];
        setRankData(data);
    }

    function setData(){
        let result = [];
        if (props?.lotto_type === 'daily') {
            for (let i = 1; i <= dailyWinDefine.length; i++) {
                result.push({
                    rank: dailyWinDefine[i - 1].rate,
                    limitWinner: dailyWinDefine[i - 1].match,
                    winner: rankData['win_cnt_' + i]?.toLocaleString('ko-KR') + '注',
                    money: rankData['win_mny_' + i]?.toLocaleString('ko-KR') + '元'
                });
            }
        } else if (props.lotto_type === 'big') {
            for (let i = 1; i <= bigWinDefine.length; i++) {
                if (i === bigWinDefine.length) {
                    result.push({
                        rank: bigWinDefine[i - 1].rate,
                        limitWinner: bigWinDefine[i - 1].match,
                        winner: rankData['win_cnt_n'] + '注',
                        money: rankData['win_mny_n'] + '元'
                    });
                } else {
                    result.push({
                        rank: bigWinDefine[i - 1].rate,
                        limitWinner: bigWinDefine[i - 1].match,
                        winner: rankData['win_cnt_' + i]?.toLocaleString('ko-KR') + '注',
                        money: rankData['win_mny_' + i]?.toLocaleString('ko-KR') + '元'
                    });
                }
            }
        } else if (props.lotto_type === 'super') {
            for (let i = 1; i <= superWinDefine.length; i++) {
                result.push({
                    rank: superWinDefine[i - 1].rate,
                    limitWinner: superWinDefine[i - 1].match,
                    winner: rankData['win_cnt_' + i]?.toLocaleString('ko-KR') + '注',
                    money: rankData['win_mny_' + i]?.toLocaleString('ko-KR') + '元'
                });
            }
        }
        setResultData(result);
    }

    useEffect(()=>{
        getData();
    },[id])

    useEffect(()=>{
        setData();

    },[rankData])
    return (
        <ul className='rank'>
            <li className='rankHeader'>
                <strong className='rankText'>項目</strong>
                <strong className='winningNumCount'>對中獎號數</strong>
                <strong className='winnerCount'>中獎注數</strong>
                <strong className='winMoney'>獎金</strong>
            </li>
            {resultData.map((items,i)=>
                    <li className={i === 0 ? 'pointLow' : ''}>
                        <strong className='rankText'>{items.rank}</strong>
                        <strong className='winningNumCount'>{items.limitWinner}</strong>
                        <strong className='winnerCount'>{items.winner}</strong>
                        <strong className='winMoney'>{items.money}</strong>
                    </li>)}
        </ul>

    );
};

export default LottoDetailRankList;