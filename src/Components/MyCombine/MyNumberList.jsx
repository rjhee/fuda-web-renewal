import React, {useEffect, useState} from 'react';
import {Color} from "../../Styles/Base/color";
import {lang} from "../../Assets/Lang/Lang";
import {convertToChineseYear, dailyWinDefine, superWinDefine, bigWinDefine, getJustTime} from "../../Service/util";
import {getBuyIssueData, getLottoBuyData, getQrString} from "../../Service/LottoService";
import QrCodePopup from "./QrCodePopup";
import scanIcon from "../../Assets/Images/icon/icon-QR.png";

import LottoNumRow from "./LottoNumRow";
import * as LocalStorageService from "../../Service/LocalStorageService"

const MyNumberList = (props) => {
    const [winNumData, setWinNumData] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(0);
    const [numberData, setNumberData] = useState([]);
    const [regData, setRegData] = useState();
    const [isChecked, setIsChecked] = useState([]);
    const [onQr, setOnQr] = useState(false);
    const [qrValue, setQrValue] = useState();

    async function setWinNum(issue, index){
        let winNum = [];
        let result = await getLottoBuyData(props.type, issue);
        let data = result.data[index][0];
        for(let i = 0; i < props.ea; i++){
            winNum.push(data[`b${i+1}`])
        }
        setWinNumData(winNum);
    }

    async function handleSelectedIssue(e){
        let i = e ? e.target.value : 0;
        setSelectedIssue(i);

        let issue = props?.lottoIssue[i]?.issue??'';
        let result = await getLottoBuyData(props.type, issue);
        let data = result.data;
        let winNumIndex = data?.length-1;
        let isChecked = [];

        for(let i = 0; i < data.length+1; i++){
            isChecked.push(false);
        }
        setIsChecked(isChecked);
        await setWinNum(issue, winNumIndex);
        setRegData(data[0].regdate)
        setNumberData(data);
    }

    function getSelectedCheckBox(e) {
        let isCheckedCopy = [...isChecked];
        let checkbox = e.target.value;
        if(checkbox === '0'){
                isCheckedCopy[0] = !isCheckedCopy[0]
            for(let i = 0; i < isCheckedCopy.length; i++){
                isCheckedCopy[i] = isCheckedCopy[0]
            }
            setIsChecked(isCheckedCopy)
        }else {
            isCheckedCopy[checkbox] = !isCheckedCopy[checkbox];
            if(!!isCheckedCopy[checkbox] === false) {
               isCheckedCopy[0] = false;
            }
            setIsChecked(isCheckedCopy)
        }

    }

    function getLastIssue(){
        let data = null;

        switch (props.type) {
            case 'daily':
                data = LocalStorageService.get('qrHistoryListDaily');
                break;
            case 'big':
                data = LocalStorageService.get('qrHistoryListBig');
                break;
            case 'super':
                data = LocalStorageService.get('qrHistoryListSuper');
                break;
        }

        if ( !!data === false ) return null;
        data = JSON.parse(data);
        return data[0].date[1];
    }

    function initLocal(type) {
        switch (type) {
            case 'daily':
                LocalStorageService.set('qrHistoryListDaily', '');
                break;
            case 'big':
                LocalStorageService.set('qrHistoryListBig', '');
                break;
            case 'super':
                LocalStorageService.set('qrHistoryListSuper', '');
                break;
        }
    }

    function getQRLottoArray(lottoList) {
        let data =[];
        data.push(lottoList.b1);
        data.push(lottoList.b2);
        data.push(lottoList.b3);
        data.push(lottoList.b4);
        data.push(lottoList.b5);

        if(props.type !== 'daily'){
            data.push(lottoList.b6);
        }

        if(props.type === 'super') {
            data.push(lottoList.sn);
        }

        return data;
    }

    async function createQrCode(){
       let numbers = [];
       let idxList = [];

        if(isChecked.indexOf(true) === -1){
            alert('請先勾選號碼');  return;
        }
        isChecked.map((num, i)=>{
            if(num === true && 0 < i) {
                console.log('MyNumberList.jsx:81 ->',numberData[i-1]);
                numbers.push(getQRLottoArray(props.buyData[i-1]));
                idxList.push(props.buyData[i-1].idx);
                props.buyData.isUse = 'Y';
                setOnQr(true);
            }
        })

        for(let i = 1; i < isChecked.length; i++) {
            if(isChecked[i] === true) {
                numbers.push(getQRLottoArray(props.buyData[i-1]));
                idxList.push(props.buyData[i-1].idx);
                props.buyData.isUse = 'Y';
            }
        }
        let savedDate = getLastIssue() // 로컬스토리지에 저장된 날짜
        if ( savedDate !== null ){
            let newDate = props.buyData[0].regdate;
            savedDate = new Date(savedDate).getTime();
            newDate = new Date(newDate).getTime();

            if(savedDate < newDate){
                initLocal(props.type);
            }
        }

        // if(numbers.length === 0) {
        //     alert('請先勾選號碼');
        //     return;
        // }
        // setQrValue('');
        let result = await getQrString(props.type, numbers, idxList);
       console.log('MyNumberList.jsx:174 ->',result);
        setDataInLocal(result.data[0]);
        if(result.data !== null) {
            setQrValue(result.data[0]);
            setOnQr(true);
            props.refreshData();
        }
        else {
            return false;
        }
    }

    function setDataInLocal(qr){
        if(isChecked.indexOf(true) === -1) return;

        const qrHistoryListDaily = LocalStorageService.get('qrHistoryListDaily');
        const qrHistoryListBig = LocalStorageService.get('qrHistoryListBig');
        const qrHistoryListSuper = LocalStorageService.get('qrHistoryListSuper');

        let lottoDate = [];
        lottoDate = [props.issue, props.buyData[0].regdate];

        switch (props.type){
            case 'daily' :
                let selectedHistoryDaily = [];
                const qrHistoryDaily = qrHistoryListDaily ? JSON.parse(qrHistoryListDaily) : [];
                let qrHistoryDailyCopy = [...qrHistoryDaily];

                for(let i = isChecked.length-1; i > -1; i--){
                    if(isChecked[i+1] === true){
                        selectedHistoryDaily.unshift(props.buyData[i]);
                    }
                }

                qrHistoryDailyCopy.unshift({date: lottoDate, data : selectedHistoryDaily, qr: qr});
                LocalStorageService.set('qrHistoryListDaily', JSON.stringify(qrHistoryDailyCopy));
                break;

            case 'big' :
                let selectedHistoryBig = [];
                const qrHistoryBig = qrHistoryListBig ? JSON.parse(qrHistoryListBig) : [];
                let qrHistoryBigCopy = [...qrHistoryBig];

                for(let i = 0; i < isChecked.length-1; i++){
                    if(isChecked[i+1] === true){
                        selectedHistoryBig.unshift(props.buyData[i]);

                    }
                }
                qrHistoryBigCopy.unshift({date: lottoDate, data : selectedHistoryBig, qr: qr});
                LocalStorageService.set('qrHistoryListBig', JSON.stringify(qrHistoryBigCopy));
                break;

            case 'super' :
                let selectedHistorySuper = [];
                const qrHistorySuper = qrHistoryListSuper ? JSON.parse(qrHistoryListSuper) : [];
                let qrHistorySuperCopy = [...qrHistorySuper];

                for(let i = 0; i < isChecked.length-1; i++){
                    if(isChecked[i+1] === true){
                        selectedHistorySuper.unshift(props.buyData[i]);

                    }
                }
                qrHistorySuperCopy.unshift({date: lottoDate, data : selectedHistorySuper, qr: qr});
                LocalStorageService.set('qrHistoryListSuper', JSON.stringify(qrHistorySuperCopy));
                break;

        }


    }

    useEffect(()=>{
        handleSelectedIssue();

    },[onQr])
    return (
        <section className='numberListCover'>
            <h1 className='hidden'>QR code generate page</h1>
            {onQr === true ?
                <QrCodePopup setOnQr={setOnQr} value={qrValue}/>
                : null}
            <select onChange={handleSelectedIssue} value={selectedIssue} className='selectCover'>
                {props.lottoIssue.map((data, i)=>
                    <option key={i} value={i}>第 {data.issue}期  {data?.draw_date ? convertToChineseYear(data.draw_date)+'三' : '' }</option>
                )}
            </select>
            <header className='indexCover' style={{backgroundColor: props.color}}>
                <input type="checkbox" value={0} onClick={(e)=> getSelectedCheckBox(e)} checked={isChecked[0]}/>
                <span>{lang().MY_FUDA_NUM}</span>
                <span>{lang().RESULT}</span>
            </header>
            <p>{convertToChineseYear(regData)}&nbsp;&nbsp;{getJustTime(regData)}</p>
            <LottoNumRow
                type={props.type}
                buyData={props.buyData}
                color={props.color}
                isChecked={isChecked}
                winNumData={winNumData}
                numberData={numberData}
                getSelectedCheckBox={getSelectedCheckBox}
            />
            <button className='qrMakeBtn' onClick={createQrCode}>
                <img src={scanIcon} alt="scan icon image"/>
                <span>{lang().MAKE_QR}</span>
            </button>
        </section>
    );
};

export default MyNumberList;