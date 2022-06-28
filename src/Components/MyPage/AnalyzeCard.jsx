import React, {useState, useEffect} from 'react';
import Title from "../Common/Title";
import {Color} from "../../Styles/Base/color";
import {lang} from "../../Assets/Lang/Lang";
import ToggleButton from "../Common/ToggleButton";
import { PieChart } from 'react-minimal-pie-chart';
import AnalyzeTotalValue from "./AnalyzeTotalValue";
import * as UserService from "../../Service/UserService"

const AnalyzeCard = (props) => {
    const [toggleOn, setToggleOn] = useState(true);
    const [title, setTitle] = useState(lang().TOTAL_MONEY);
    const [winData, setWinData] = useState(null);

    let [rate, setRate] = useState([0,0,0,100]);
    let [maxValue, setMaxValue] = useState('0');

    let getDataFromServer = async ()=>{
        let response = await UserService.getWinInfo();

        if ( response === null ){
            response =  {daily_sum : 0,big_sum : 0,super_sum : 0,daily_count : 0,big_count : 0,super_count : 0,};
        }
        return response;
    }

    function calculate(type){
        let dailyAmount, bigAmount, superAmount;

        if ( type === true ){
            dailyAmount    = winData['daily_sum'];
            bigAmount      = winData['big_sum'];
            superAmount    = winData['super_sum'];
        }
        else {
            dailyAmount    = winData['daily_count'];
            bigAmount      = winData['big_count'];
            superAmount    = winData['super_count'];
        }
        let total = dailyAmount +bigAmount+ superAmount;
        let empty = 0;
        if ( total === 0){
            total = 0.1;
            empty = 100;
        }

        setRate( [
            Math.floor(dailyAmount / total * 1000)/10,
            Math.floor(bigAmount / total * 1000)/10,
            Math.floor(superAmount / total * 1000)/10,
            empty
        ]);

        setMaxValue(Math.floor(total));
    }

    useEffect( ()=>{
        if ( winData === null ){
            getDataFromServer().then( res =>{
                props.setWinData(res);
                setWinData(res);
            });
        }
        else {
            calculate(toggleOn);
        }
    } ,[toggleOn]);

    useEffect(()=>{
        if(winData!= null) {
            calculate(toggleOn);
        }
    },[winData]);

    // toggle on/off
    useEffect(()=>{
        if(!!toggleOn === false) {
            setTitle(lang().TOTAL_WIN);
        }else {
            setTitle(lang().TOTAL_MONEY);
        }
    },[toggleOn])
    return (
        <section className='analyzeCardCover'>
            <h1>
                <Title size={'small'} color={Color.MAIN_RED} text1={title}/>
                <ToggleButton on={toggleOn} setOn={setToggleOn} right={lang().AMOUNT_S} left={lang().FREQUENCY}/>
            </h1>
            <div className='pieChartCover'>
                <div className='chart'>
                    <PieChart
                        lineWidth={55}
                        data={[
                            { title: 'daily', value: rate[0], color: Color.REGULAR_ORANGE },
                            { title: 'big', value: rate[1], color: Color.LIGHT_BLUE },
                            { title: 'super', value: rate[2], color: Color.LIGHT_RED },
                        ]}
                    />
                </div>
                <ul className='label'>
                    <li>
                        <strong style={{color:Color.REGULAR_ORANGE}}>{lang().DAILY_LOTTO} </strong>
                        <span>&nbsp;{rate[0]}%</span>
                    </li>
                    <li>
                        <strong style={{color:Color.LIGHT_BLUE}}>{lang().BIG_LOTTO} </strong>
                        <span>&nbsp;{rate[1]}%</span>
                    </li>
                    <li>
                        <strong style={{color:Color.LIGHT_RED}}>{lang().SUPER_LOTTO} </strong>
                        <span>&nbsp;{rate[2]}%</span>
                    </li>
                </ul>
            </div>
            <AnalyzeTotalValue on={toggleOn} value={maxValue}/>
        </section>
    );
};

export default AnalyzeCard;