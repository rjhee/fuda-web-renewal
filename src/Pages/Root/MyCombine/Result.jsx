import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {lang} from "../../../Assets/Lang/Lang";
import {Color} from "../../../Styles/Base/color";
import ColorButton from "../../../Components/Common/ColorButton";
import {useParams} from "react-router-dom";

import scanIcon from "../../../Assets/Images/icon/icon-QR.png"
import Caution from "../../../Components/Common/Caution";
import {getBuyIssueData, getLottoBuyData} from "../../../Service/LottoService";
import {convertToChineseYear} from "../../../Service/util";
import ResultList from "../../../Components/MyCombine/ResultList";


const Result = (props) => {
    let { id } = useParams();
    const [dailyLotto, setDailyLotto] = useState(false);
    const [bigLotto, setBigLotto] = useState(false);
    const [superLotto, setSuperLotto] = useState(false);

    const [lottoIssue, setLottoIssue] = useState([]);
    const [numberData, setNumberData] = useState([]);
    const [winNumData, setWinNumData] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(0);
    const [ea, setEa] = useState(0);
    const [color, setColor] = useState(Color.WHITE);
    const [resultSwitch, setResultSwitch] = useState(false);

    async function getData(type){
        let result = await getBuyIssueData();
        let data = result.data;
        let lottoIssue = data[type];
        setLottoIssue(lottoIssue)
    }

   async function handleSelectedIssue(e){
        let i = e ? e.target.value : 0;
        setSelectedIssue(i);

        let issue = lottoIssue[i].issue;
        let result = await getLottoBuyData(id, issue);
        let data = result.data;
        let winNumIndex = data.length-1;

        await setWinNum(issue, winNumIndex);
        setNumberData(data);
    }

    async function setWinNum(issue, index){
        let winNum = [];
        let result = await getLottoBuyData(id, issue);
        let data = result.data[index][0];
        for(let i = 0; i < ea; i++){
            winNum.push(data[`b${i+1}`])
        }
        setWinNumData(winNum);
    }

    function setWinNumColor(num){
        if(winNumData.indexOf(num) !== -1){
            return {backgroundColor:Color.LIGHT_RED, color:Color.WHITE};
        }
    }

    function onResultSwitch(){
        setResultSwitch(!resultSwitch);
    }

    useEffect(()=>{
        getData(id);
        handleSelectedIssue();
        setResultSwitch(true);
        if(id === 'daily'){
            setDailyLotto(true);
            setBigLotto(false);
            setSuperLotto(false);
            setEa(5);
            setColor(Color.ORANGE);
        }
        else if(id === 'big'){
            setDailyLotto(false);
            setBigLotto(true);
            setSuperLotto(false);
            setEa(6);
            setColor(Color.DARK_BLUE);
        }
        else if(id === 'super'){
            setDailyLotto(false);
            setBigLotto(false);
            setSuperLotto(true);
            setEa(6)
            setColor(Color.LIGHT_RED);
        }
    },[id]);

    return (
        <section className='resultCover'>
            <header>
                <Title text1={lang().CENTER} color={Color.MAIN_RED}/>
            </header>
            <main className='contents'>
                <div className='btnCover'>
                    <ColorButton path={props.path+'/daily'} text={lang().DAILY_LOTTO} color={dailyLotto ? Color.ORANGE : Color.LIGHT_GREY_1}/>
                    <ColorButton path={props.path+'/big'}  text={lang().BIG_LOTTO} color={bigLotto ? Color.DARK_BLUE : Color.LIGHT_GREY_1}/>
                    <ColorButton path={props.path+'/super'}  text={lang().SUPER_LOTTO} color={superLotto ? Color.MAIN_RED : Color.LIGHT_GREY_1}/>
                </div>
                <div className='issueCover'>
                    <div className='optionBtnCover'>
                        <button
                            className={resultSwitch === true ? 'selected' : 'unSelected'}
                            onClick={onResultSwitch}>
                            <span>我的號碼</span>
                        </button>
                        <button
                            className={resultSwitch === true ? 'unSelected' : 'selected'}
                            onClick={onResultSwitch}>
                            <span>我的成果</span>
                        </button>
                    </div>
                    <select onChange={handleSelectedIssue} value={selectedIssue} className='selectCover'>
                        {lottoIssue.map((data, i)=>
                            <option value={i}>第 {data.issue}期  {data?.draw_date ? convertToChineseYear(data.draw_date)+'三' : '' }</option>
                        )}
                    </select>
                </div>
                <section className='numberListCover'>
                    <h1 style={{backgroundColor: color}}>
                        <input type="checkbox"/>
                        <span>{lang().MY_FUDA_NUM}</span>
                        <span>{lang().RESULT}</span>
                    </h1>
                    <p>{numberData[selectedIssue]?.regdate}</p>
                    <ResultList
                        numberData={numberData}
                        setWinNumColor={setWinNumColor}/>
                    <button className='qrMakeBtn'>
                        <img src={scanIcon} alt=""/>
                        <span>{lang().MAKE_QR}</span>
                    </button>
                </section>
            </main>
            <footer>
                <Caution/>
            </footer>
        </section>
    );
};


export default Result;