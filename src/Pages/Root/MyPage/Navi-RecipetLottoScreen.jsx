import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";
import {getReceiptLottoRecently} from "../../../Service/LottoService"
import {getReceiptLottoInfo} from "../../../Service/PaymentService"
import {convertToChineseYear} from "../../../Service/util";
const NaviReceiptLottoScreen = (props) => {
    // const data = [
    //     {key:'千萬 特別獎' , value:['31150905']},
    //     {key: '二百萬特獎', value: ['28564531']},
    //     {key: '頭獎', value: ['05754 219', '52891 675', '45327 106']},
    //     {key: '增開二百元', value: ['252']},
    //     {key: '對獎期限', value: ['2022/02/06 ~ 2022/05/05']},]
    const [data, setData] = useState([]);
    const [render, setRender] = useState();


    useEffect(()=>{
        getData().then();
        console.log('Navi-RecipetLottoScreen.jsx:23 ->',data);
    },[]);

    let getData = async () =>{
        await getReceiptLottoRecently().then(result =>{
            let dataList = [];
            if(result.data !== null) {
                console.log(result.data);
                result.data.forEach((item)=>{
                let start = convertToChineseYear(item['redemption_start_date']);
                let end = convertToChineseYear(item['redemption_end_date']);
                let jackpot = item['jackpot'].split(',');
                let redValue1 = item['milion_2_special'].substring(item['milion_2_special'].length-3, (item['milion_2_special']).length);
                let redValue3 = item['prize_200_win_num'].substring(item['prize_200_win_num'].length-3, (item['prize_200_win_num']).length);
                let redValue2 = [];

                for (let i = 0; i < jackpot.length; i++) {
                    redValue2.push(jackpot[i].substring(jackpot[i].length-3, (jackpot[i]).length));
                }
                let data = [
                    {key: '統一發票中獎號碼', value: `${item['year']} ${item['start_month']}月、 ${item['end_month']}月`},
                    {key:'idx' , value:item['idx']},
                    {key:'千萬 特別獎' , value:item['milion_10_special']},
                    {key: '二百萬特獎', value: item['milion_2_special'] , value2: redValue1},
                    {key: '頭獎', value: jackpot, value2:  redValue2},
                    {key: '增開二百元', value: item['prize_200_win_num'], value2: redValue3},
                    {key: '對獎期限', value: start + ' ~ ' + end},
                ]

                    dataList.push(data);
                })
            }
            setData(dataList);
            console.log('Navi-RecipetLottoScreen.jsx:43 ->',dataList);
            setIsFetching(false);
        });
    };


    return (
        <section className='receiptLottoCover'>
            <h1>
                <Title text1={'統一發票'} color={Color.MAIN_RED}/>
            </h1>
                {data.map((items)=>
            <main>
                <header>
                    <h1>{items[0].value}<br/>
                        {items[0].key}</h1>
                </header>
                    <ul>
                    {items.map((item, i)=>
                        1 < i  ?
                            <li>
                                <span>{item.key}</span>
                                <div>
                                    <strong className={i === 5 ? 'redValue' : ''}>{
                                        i !== 4 ?
                                            item.value :
                                        // jackpot value 세로 정렬
                                            item.value.map((a)=>
                                            <div>
                                                <span>{a.replace(a.substring(a.length-3, a.length),'')} </span>
                                                <span className='redValue'>{a.substring(a.length-3, a.length)}</span>
                                            </div>
                                            )
                                    }</strong>
                                </div>
                            </li> : null
                    )}
                    </ul>
            </main>
                )}
        </section>
    );
};

export default NaviReceiptLottoScreen;