import React, {useEffect, useState} from 'react';
import Title from "../../../../Components/Common/Title";
import {lang} from "../../../../Assets/Lang/Lang";
import {Color} from "../../../../Styles/Base/color"
import {useParams} from "react-router-dom";
import ColorButton from "../../../../Components/Common/ColorButton";
import CircleButton from "../../../../Components/Common/CircleButton";
import CircleButtonBox from "../../../../Components/Home/Analytics/CircleButtonBox";

const AnalyticsListScreen = (props) => {
    let { id } = useParams();
    const [title, setTitle] = useState(null);
    const [mainColor, setMainColor] = useState(null);
    const [subColor, setSubColor] = useState(null);

    const [circleBtnBasic , setCircleBtnBasic] = useState([
        {type: 'winning', S: lang().WINNING_S, L:lang().WINNING_L, subTitle: lang().WINNING_SUB , on: true},
        {type: 'amount', S: lang().AMOUNT_S, L: lang().AMOUNT_L, subTitle: lang().AMOUNT_SUB , on: false},
        {type: 'continuous',S: lang().CONTINUOUS_S, L:lang().CONTINUOUS_L, subTitle: lang().CONTINUOUS_SUB , on: false, info: true,
            infoText: [
                {title: '2'+lang().CONSECUTIVE_NUM+lang().SIMPLE_CONSECUTIVE_NUM, desc: [lang().CONSECUTIVE_PATTERN_2]},
                {title: '3'+lang().CONSECUTIVE_NUM, desc: [lang().CONSECUTIVE_PATTERN_3]},
                {title: '2'+lang().PAIR_CONSECUTIVE_NUM, desc: [lang().DIFF_NUM_CONSECUTIVE_PATTERN]},
                {title: '2'+lang().CONSECUTIVE_NUM+'+ 3'+lang().CONSECUTIVE_NUM, desc: [lang().CONSECUTIVE_PATTERN_23]},
                {title: '4'+lang().CONSECUTIVE_NUM, desc: [lang().CONSECUTIVE_PATTERN_4]}]},
        {type: 'oddEven',S: lang().ODD_EVEN_S, L: lang().ODD_EVEN_L, subTitle: lang().ODD_EVEN_SUB , on: false},
        {type: 'size',S: lang().SIZE_S, L: lang().SIZE_L, subTitle: lang().SIZE_SUB , on: false, },
        {type: 'mantissa',S: lang().MANTISSA_S, L: lang().MANTISSA_L, subTitle: lang().MANTISSA_SUB , on: false},
        {type: 'lian',S: lang().LIAN_S, L: lang().LIAN_L, subTitle:  lang().LIAN_SUB , on: false},
        {type: 'adjacent',S: lang().ADJACENT_S, L: lang().ADJACENT_L, subTitle: lang().ADJACENT_SUB , on: false}]);
    const [circleBtnAdvance , setCircleBtnAdvance] = useState([
        {type: 'quality', S: lang().QUALITY_S, L:lang().QUALITY_L, XL: lang().QUALITY_XL , subTitle: lang().QUALITY_SUB , on: true, info: true,
            infoText: [
                {title: lang().PRIME, desc: [lang().PRIME_NUM_DESC]},
                {title: lang().MULTIPLES3, desc: [lang().MULTIPLES3_NUM_DESC]},
                {title: lang().COMPOSITE, desc: [lang().COMPOSITE_NUM_DESC]},]},
        {type: 'sum', S: lang().SUM_S, L: lang().SUM_L, subTitle: lang().SUM_SUB , on: false, info: true,
            infoText: [
                {title: lang().SUM_L, desc: [lang().SUM_WINNING_NUM]}]},
        {type: 'sumMantissa',S: lang().SUM_MANTISSA_S, L:lang().SUM_MANTISSA_L, subTitle: lang().SUM_MANTISSA_SUB , on: false, info: true,
            infoText: [
                {title: lang().SUM_MANTISSA_L, desc: [lang().SUM_MANTISSA_WINNING_NUM]}]},
        {type: 'cooperate',S: lang().COOPERATE_S, L: lang().COOPERATE_L, subTitle: lang().COOPERATE_SUB , on: false, info: true,
            infoText: [
                {title: lang().MATCHING_NUM, desc: [lang().MATCHING_NUM_DESC]},
                {title: lang().UN_MATCHING_NUM, desc: [lang().UN_MATCHING_NUM_DESC]}]},
        {type: 'unCombine',S: lang().NOT_COUNTED_S, L: lang().NOT_COUNTED_L, subTitle: lang().NOT_COUNTED_SUB , on: false, },
        {type: 'ac',S: lang().AC_S, L: lang().AC_L, subTitle:  lang().AC_SUB , on: false, info: true,
            infoText: [
                {title: lang().DIFF_NUM, desc: [lang().DIFF_NUM_DESC]},
                {title: lang().HEIGHT_DIFF_NUM, desc: [lang().HEIGHT_DIFF_NUM_DESC]},
                {title: lang().AC_S, desc: [lang().AC_DESC_1, lang().AC_DESC_2, lang().AC_DESC_3]}]},
        {type: 'frequency',S: lang().FREQUENCY_S, L: lang().FREQUENCY_L, subTitle: lang().FREQUENCY_SUB , on: false}]);
    const [distribution , setDistribution] = useState({type: 'distribution', L:lang().DISTRIBUTION, subTitle: lang().DISTRIBUTION_SUB });


    useEffect(()=>{
        if(id === 'daily'){
            setTitle(lang().DAILY_LOTTO);
            setMainColor(Color.ORANGE);
            setSubColor(Color.REGULAR_ORANGE);
        }
        else if(id === 'big'){
            setTitle(lang().BIG_LOTTO);
            setMainColor(Color.DARK_BLUE);
            setSubColor(Color.LIGHT_BLUE);
        }
        else if(id === 'super'){
            setTitle(lang().SUPER_LOTTO);
            setMainColor(Color.REGULAR_RED);
            setSubColor(Color.LIGHT_RED);
        }

    })
    return (
        <section className='analyticsListCover'>
            <h1 className='titleCover'>
                <Title text1={title} text2={lang().STATISTICAL_DATA} color={mainColor}/>
            </h1>
            <div className='btnCover'>
                <ColorButton text={lang().BASIC} color={mainColor}/>
                <ColorButton text={lang().ADVANCE} color={mainColor}/>
                <ColorButton text={lang().DISTRIBUTION} color={mainColor}/>
            </div>
            <div className='subBtnCover'>
                <CircleButtonBox/>
                {circleBtnBasic.map((item)=>
                    <CircleButton
                        title={item.S}
                        subTitle={item.L}
                    />
                )}
            </div>
        </section>
    );
};

export default AnalyticsListScreen;