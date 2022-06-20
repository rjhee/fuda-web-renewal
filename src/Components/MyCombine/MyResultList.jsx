import React, {useEffect, useState} from 'react';
import {bigWinDefine, convertToChineseYear, dailyWinDefine, superWinDefine} from "../../Service/util";
import {getLottoBuyData, getUserWinResultInfo, getUserWinResultInfoTotal} from "../../Service/LottoService";
import {lang} from "../../Assets/Lang/Lang";
import {Color} from "../../Styles/Base/color";
import LottoNumList from "./LottoNumList";


const MyResultList = (props) => {
    const [selectedIssueFrom, setSelectedIssueFrom] = useState(0);
    const [selectedIssueTo, setSelectedIssueTo] = useState(0);
    const [winNumData, setWinNumData] = useState([]);
    const [lottoIssue, setLottoIssue] = useState([]);
    const [numberData, setNumberData] = useState([]);
    const [regData, setRegData] = useState();
    const [page, setPage] = useState(1);
    const [totalMoney, setTotalMoney] = useState(0);
    let winNumList = [];

   async  function handleSelectedIssue(e, selectType){
         let i = e ? e.target.value : 0;
         if(selectType === 'FROM') {
             setSelectedIssueFrom(i);
         }else {
             setSelectedIssueTo(i);
         }
    }

    async function getLottoDataList () {
        let fromIssue = lottoIssue[selectedIssueFrom].issue;
        let toIssue = lottoIssue[selectedIssueTo].issue;

        console.log('MyResultList.jsx:33 ->',fromIssue);
        console.log('MyResultList.jsx:34 ->',toIssue);
        if(!!fromIssue === true && !!toIssue === true) {
           if(fromIssue <= toIssue){
               let result = await getUserWinResultInfo(props.type, fromIssue, toIssue, page, 15);
               let data = result.data;
               console.log('MyResultList.jsx:38 ->',data);
               setNumberData(data);
               for(let i = 0; i < data.length; i++){
                   await setWinNumberList(data[i]);
               }

               result = await getUserWinResultInfoTotal(props.type, fromIssue, toIssue)
               data = result.data[0];
               setTotalMoney(Number(data['total']));
           }else {
               alert('시작날짜보다 끝날짜가 더 커야 합니다');
               return;
           }
        }

    }

    async function setWinNumberList(num){
        let winNum = [];
        for(let i = 0; i < props.ea; i++){
            winNum.push(num[`win_b${i+1}`])
        }
        winNumList.push(winNum);
        setWinNumData(winNumList);
    }

    function setWinNumColor(index, num){
        if(winNumData[index].indexOf(num) !== -1){
            return {backgroundColor:Color.LIGHT_RED, color:Color.WHITE};
        }

    }
    function setWinSnColor(index) {
        if(props.type === 'super'){
            if(numberData[index]['win_sn'] === numberData[index]['sn']){
                return {backgroundColor:'#FFDA7C', color:Color.LIGHT_RED};
            }
        }
    }


    function setRank(price){
       let rank = null;
        if(props.type === 'daily'){
            rank = dailyWinDefine[price-1].rate;
        }
        else if(props.type === 'big'){
            rank = bigWinDefine[price-1].rate;
        }
        else if(props.type === 'super'){
            rank = superWinDefine[price-1].rate;
        }
        return rank;
    }


    function removeDuplicateDate(prev, current, date){
        if(prev === current){
            return '';
        }else {
            return convertToChineseYear(date);
        }
    }


    useEffect(()=>{
        setLottoIssue(props.lottoIssue);
    },[])
    return (
        <section className='myResultCover'>
            <header className='selectsCover'>
                <h1 className='hidden'>my result page</h1>
                <select onChange={(e)=>handleSelectedIssue(e, 'FROM')} value={selectedIssueFrom} className='selectCover'>
                    {props.lottoIssue.map((data, i)=>
                        <option value={i}>第 {data.issue}期 {data?.draw_date ? convertToChineseYear(data.draw_date)+'三' : '' }</option>
                    )}
                </select>
                <span>~</span>
                <select onChange={(e)=>handleSelectedIssue(e, 'TO')} value={selectedIssueTo} className='selectCover'>
                    {props.lottoIssue.map((data, i)=>

                            <option key={i} value={i}>第 {data.issue}期
                               {data?.draw_date ? convertToChineseYear(data.draw_date)+'三' : '' }</option>

                    )}
                </select>
                <button onClick={getLottoDataList} className='okBtn'>
                    {lang().CHECKING}
                </button>
            </header>
            <h1 className='titleCover'>
                <div>
                    <strong>{props.lottoName}{lang().WIN_RESULT}</strong>
                    <strong>{totalMoney.toLocaleString('ko-KR')} {lang().YUAN}</strong>
                </div>
                <span>※ {lang().WIN_RESULT_DESC}</span>
            </h1>
            <header className='indexCover' style={{backgroundColor: props.color}}>
                <span>{lang().MY_FUDA_NUM}</span>
                <span>{lang().RESULT}</span>
            </header>
            <ol>
            {numberData.map((item, i)=>
                <li key={i}>
                   <div>
                       <p style={{color:props.color}}>{removeDuplicateDate(numberData[i-1]?.issue??'', item.issue, item.draw_date)}</p>
                       <LottoNumList
                           i={i}
                           b1={item.b1}
                           b2={item.b2}
                           b3={item.b3}
                           b4={item.b4}
                           b5={item.b5}
                           b6={item.b6 ? item.b6 : false}
                           sn={item.sn ? item.sn : false}
                           setColor={setWinNumColor}
                           setSnColor={setWinSnColor}/>
                   </div>
                    <span style={{color:props.color}}>{setRank(item.price)}</span>
                </li>

                )}
            </ol>
        </section>
    );
};

export default MyResultList;