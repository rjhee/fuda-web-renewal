import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {lang} from "../../../Assets/Lang/Lang";
import {Color} from "../../../Styles/Base/color";
import ColorButton from "../../../Components/Common/ColorButton";
import {useParams} from "react-router-dom";

import Caution from "../../../Components/Common/Caution";
import MyNumberList from "../../../Components/MyCombine/MyNumberList";
import MyResultList from "../../../Components/MyCombine/MyResultList";
import {getBuyIssueData} from "../../../Service/LottoService";


const Result = (props) => {
    let { id } = useParams();
    const [dailyLotto, setDailyLotto] = useState(false);
    const [bigLotto, setBigLotto] = useState(false);
    const [superLotto, setSuperLotto] = useState(false);
    const [lottoIssue, setLottoIssue] = useState([]);
    const [lottoName, setLottoName] = useState('');
    const [ea, setEa] = useState(0);

    const [color, setColor] = useState(Color.WHITE);
    const [resultSwitch, setResultSwitch] = useState(false);


    function onResultSwitch(){
        setResultSwitch(!resultSwitch);
    }

    async function getData(type){
        let result = await getBuyIssueData();
        let data = result.data;
        let lottoIssue = data[type];
        console.log('MyNumberList.jsx:22 ->',lottoIssue);
        setLottoIssue(lottoIssue)
    }

    // 로또 타입별로 setting
    useEffect(()=>{
        getData(id);
        setResultSwitch(true);
        if(id === 'daily'){
            setDailyLotto(true);
            setBigLotto(false);
            setSuperLotto(false);
            setLottoName(lang().DAILY_LOTTO);
            setEa(5);
            setColor(Color.ORANGE);
        }
        else if(id === 'big'){
            setDailyLotto(false);
            setBigLotto(true);
            setSuperLotto(false);
            setLottoName(lang().BIG_LOTTO);
            setEa(6);
            setColor(Color.DARK_BLUE);
        }
        else if(id === 'super'){
            setDailyLotto(false);
            setBigLotto(false);
            setSuperLotto(true);
            setLottoName(lang().SUPER_LOTTO);
            setEa(6)
            setColor(Color.LIGHT_RED);
        }
    },[id]);
    // TODO
    // 로또 타입 변경시 MyNumberList 컴포넌트 리셋
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

                </div>
                {resultSwitch === true ?
                    <MyNumberList
                        ea={ea}
                        type={id}
                        color={color}
                        lottoIssue={lottoIssue}/>
                    :
                    <MyResultList
                        ea={ea}
                        type={id}
                        color={color}
                        lottoName={lottoName}
                        lottoIssue={lottoIssue}/> }

            </main>
            <footer>
                <Caution/>
            </footer>
        </section>
    );
};


export default Result;