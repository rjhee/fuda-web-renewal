import React, {useEffect, useState} from 'react';
import {Color} from "../../Styles/Base/color";
import {lang} from "../../Assets/Lang/Lang";
import {convertToChineseYear} from "../../Service/util";
import {getBuyIssueData, getLottoBuyData} from "../../Service/LottoService";
import QrCodePopup from "./QrCodePopup";
import scanIcon from "../../Assets/Images/icon/icon-QR.png";
import plusIcon from "../../Assets/Images/icon/plus-icon.png"
import LottoNumList from "./LottoNumList";

const MyNumberList = (props) => {
    const [winNumData, setWinNumData] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(0);
    const [numberData, setNumberData] = useState([]);
    const [regData, setRegData] = useState();
    const [isChecked, setIsChecked] = useState([]);
    const [onQr, setOnQr] = useState(false);

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

        let issue = props.lottoIssue[i].issue;
        let result = await getLottoBuyData(props.type, issue);
        let data = result.data;
        let winNumIndex = data.length-1;
        let isChecked = [];

        console.log('MyNumberList.jsx:42 ->',data);
        for(let i = 0; i < data.length+1; i++){
            isChecked.push(false);
        }
        setIsChecked(isChecked);
        await setWinNum(issue, winNumIndex);
        setRegData(data[0].regdate)
        setNumberData(data);
    }

    function setWinNumColor(num){
        if(winNumData.indexOf(num) !== -1){
            return {backgroundColor:Color.LIGHT_RED, color:Color.WHITE};
        }
    }

    function selectCheckBox(e) {
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
    function createQrCode(){
        if(isChecked.indexOf(true) === -1){
            alert('請先勾選號碼');
        }
        isChecked.map((num, i)=>{
            if(num === true && 0 < i) {
                console.log('MyNumberList.jsx:81 ->',numberData[i-1]);
                setOnQr(true);
            }
        })
    }

    useEffect(()=>{
        handleSelectedIssue();
    },[onQr])
    return (

        <section className='numberListCover'>
            <h1 className='hidden'>QR code generate page</h1>
            {onQr === true ? <QrCodePopup setOnQr={setOnQr}/> : null}
            <select onChange={handleSelectedIssue} value={selectedIssue} className='selectCover'>
                {props.lottoIssue.map((data, i)=>
                    <option value={i}>第 {data.issue}期  {data?.draw_date ? convertToChineseYear(data.draw_date)+'三' : '' }</option>
                )}
            </select>
            <header className='indexCover' style={{backgroundColor: props.color}}>
                <input type="checkbox" value={0} onClick={(e)=> selectCheckBox(e)} checked={isChecked[0]}/>
                <span>{lang().MY_FUDA_NUM}</span>
                <span>{lang().RESULT}</span>
            </header>
            <p>{regData}</p>
            <ol>
                {numberData.map((item,i)=>
                    (i !== numberData.length-1 ?
                        <li>
                            <input
                                type="checkbox"
                                onClick={(e)=> selectCheckBox(e)}
                                value={i+1} name='number'
                                checked={isChecked[i+1]}/>
                            <div>
                                <LottoNumList
                                    b1={item.b1}
                                    b2={item.b2}
                                    b3={item.b3}
                                    b4={item.b4}
                                    b5={item.b5}
                                    b6={item.b6 ? item.b6 : false}
                                    sn={item.sn ? item.sn : false}
                                    setColor={setWinNumColor}
                                    setSnColor={setWinNumColor}/>
                            </div>
                            <span>{lang().WAITING}</span>
                        {/* TODO */}
                        {/*    1. QR생성후 'QR생성완료' 문구추가*/}
                        {/*    2. 구매체크 후 '구매완료' 문구추가*/}

                        </li>
                        : null
                    ))}
            </ol>
            <button className='qrMakeBtn' onClick={createQrCode}>
                <img src={scanIcon} alt="scan icon image"/>
                <span>{lang().MAKE_QR}</span>
            </button>
        </section>
    );
};

export default MyNumberList;