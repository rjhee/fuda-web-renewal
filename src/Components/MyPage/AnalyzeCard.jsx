import React, {useState, useEffect} from 'react';
import Title from "../Common/Title";
import {Color} from "../../Styles/Base/color";
import {lang} from "../../Assets/Lang/Lang";
import ToggleButton from "../Common/ToggleButton";
import { PieChart } from 'react-minimal-pie-chart';
import AnalyzeTotalValue from "./AnalyzeTotalValue";


const AnalyzeCard = () => {
    const [toggleOn, setToggleOn] = useState(false);
    const [title, setTitle] = useState(lang().TOTAL_MONEY);


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
                <ToggleButton on={toggleOn} setOn={setToggleOn} left={lang().AMOUNT_S} right={lang().FREQUENCY}/>
            </h1>
            <div className='pieChartCover'>
                <div className='chart'>
                    <PieChart
                        lineWidth={55}
                        data={[
                            { title: 'daily', value: 10, color: Color.REGULAR_ORANGE },
                            { title: 'big', value: 15, color: Color.LIGHT_RED },
                            { title: 'super', value: 20, color: Color.LIGHT_BLUE },
                        ]}
                    />
                </div>
                <ul className='label'>
                    <li>
                        <strong style={{color:Color.REGULAR_ORANGE}}>{lang().DAILY_LOTTO} </strong>
                        <span>&nbsp;50%</span>
                    </li>
                    <li>
                        <strong style={{color:Color.LIGHT_BLUE}}>{lang().BIG_LOTTO} </strong>
                        <span>&nbsp;50%</span>
                    </li>
                    <li>
                        <strong style={{color:Color.LIGHT_RED}}>{lang().SUPER_LOTTO} </strong>
                        <span>&nbsp;50%</span>
                    </li>
                </ul>
            </div>
            <AnalyzeTotalValue on={toggleOn} price={'8920140'} count={'1234'}/>
        </section>
    );
};

export default AnalyzeCard;