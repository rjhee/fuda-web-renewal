import React, {useEffect, useState} from 'react';
import Title from "../../../../Components/Common/Title";
import {lang} from "../../../../Assets/Lang/Lang";
import {Color} from "../../../../Styles/Base/color"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import ColorButton from "../../../../Components/Common/ColorButton";
import CircleButton from "../../../../Components/Common/CircleButton";
import AnalyticsCircleBtn from "../../../../Components/Home/Analytics/AnalyticsCircleBtn";
import AnalyticsColorBtnGroup from "../../../../Components/Home/Analytics/AnalyticsColorBtnGroup";
import AnalyticsContents from "../../../../Components/Home/Analytics/AnalyticsContents";
import {getUserData} from "../../../../Service/AuthService";

const AnalyticsListScreen = (props) => {
    let { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [title, setTitle] = useState(null);
    const [mainColor, setMainColor] = useState(null);
    const [subColor, setSubColor] = useState(null);

    const [lotto, setLotto] = useState(location?.state?.data);
    const [count, setCount] = useState({num:location?.state?.countNum, sn:location?.state?.countSn});

    const [currentLotto, setCurrentLotto] = useState('daily');
    const [currentLevel, setCurrentLevel] = useState('basic');
    const [currentStatics, setCurrentStatics] = useState('winning');
    const [circleBtnBasic , setCircleBtnBasic] = useState([
        {type: 'winning', S: lang().WINNING_S, L:lang().WINNING_L, subTitle: lang().WINNING_SUB , on: true,},
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

    const [btnTitle, setBtnTitle] = useState([
        {type: 'basic',title: lang().BASIC, on: true},
        {type: 'advance',title: lang().ADVANCE, on: false},
        {type: 'distribution',title: lang().DISTRIBUTION, on: false}]);

    const onSubBtn = (staticsLevel, calType) => {
        let copy = [];
        if(staticsLevel === 'basic'){
            copy = [...circleBtnBasic];
            copy.forEach((data) => data.type === calType ?  data.on = true : data.on = false);
            setCircleBtnBasic(copy);
        }
        else if(staticsLevel === 'advance'){
            copy = [...circleBtnAdvance];
            copy.forEach((data) => data.type === calType ?  data.on = true : data.on = false);
            setCircleBtnAdvance(copy);
        }else if(staticsLevel === 'distribution'){

        }

    }

    const onMainBtn = (type) => {
        let copy = [...btnTitle];
        copy.forEach((data) => data.type === type ?  data.on = true : data.on = false);
        setBtnTitle(copy);
    }

    function moveToSection(){
        let lottoType = location?.state?.lottoType;
        let staticsLevel = location?.state?.staticsLevel;
        let staticsType = location?.state?.staticsType;

        if(staticsLevel){
            setCurrentLevel(staticsLevel);
        }
        if(staticsType){
            setCurrentStatics(staticsType);
        }
        if(lottoType){
            setCurrentLotto(lottoType);
        }
    }

    function setLottoData(){
        if(currentLotto === 'daily'){
            setTitle(lang().DAILY_LOTTO);
            setMainColor(Color.ORANGE);
            setSubColor(Color.REGULAR_ORANGE);
        }
        else if(currentLotto === 'big'){
            setTitle(lang().BIG_LOTTO);
            setMainColor(Color.DARK_BLUE);
            setSubColor(Color.LIGHT_BLUE);
        }
        else if(currentLotto === 'super'){
            setTitle(lang().SUPER_LOTTO);
            setMainColor(Color.REGULAR_RED);
            setSubColor(Color.LIGHT_RED);
        }
    }

    function moveToStaticsLevel (path, callback){
        callback();
        let urlPath = props.dailyPath +'/'+ path;
        switch (path){
            case 'basic':
                navigate( urlPath + '/winning', {state: {lottoType:currentLotto, staticsLevel: path, staticsType:currentStatics}});
                break;
            case 'advance' :
                navigate(urlPath + '/quality', {state: {lottoType:currentLotto, staticsLevel: path, staticsType:currentStatics}});
                break;
            case 'distribution' :
                navigate(urlPath + '/list', {state: {lottoType:currentLotto, staticsLevel: path, staticsType:currentStatics}});
                break;
        }

    }

    function moveToStaticsType(path, callback){
        callback();
        let urlPath = props.dailyPath + "/" + currentLevel + "/";
        switch (currentLevel){
            case 'basic':
                navigate(urlPath + path, {state: {lottoType:currentLotto, staticsLevel: currentLevel, staticsType:path}});
                break;
            case 'advance' :
                navigate(urlPath + path, {state: {lottoType:currentLotto, staticsLevel: currentLevel, staticsType:path}});
                break;
            case 'distribution' :
                navigate(urlPath + '/list', {state: {lottoType:currentLotto, staticsLevel: currentLevel, staticsType:path}});
                break;
        }
    }



    const [lottoNumAll, setLottoNumAll] = useState([]);
    const [numCount, setNumCount] = useState({});
    const [cooperArr, setCooperArr] = useState([]);
    const [noShowArr, setNoShowArr] = useState([]);
    const [mantissaStaticsArr, setMantissaStaticsArr] = useState([]);

    const [userType, setUserType] = useState('');

    let primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

    //region [COPY VARIABLE]
    let continuousNumCopy = [];
    let repeatNumCopy = [];
    let lianNumCopy = [];
    let adjacentNumCopy = [];
    let primeNumCopy = [];
    let compositeNumCopy = [];
    let multiples3NumCopy = [];
    let sumNumCopy = [];
    let sumMantissaCopy = [];
    let cooperateNumCopy = [];


    let lottoNumAllCopy = [];

    let numCountCopy = [];
    let snCountCopy = [];
    let cooperArrCopy = [];
    let noShowNumCopy = [];
    // endregion



    const getLotto = async () => {
        await setLotto(props.route.params?.data)
        await setCount({num: props.route.params?.countNum, sn: props.route.params?.countSn})
    }

    const calContinuousNum = () => {
        lotto && lotto.map((items, index)=>{

            continuousNumCopy = [];
            for(let i = 0; i < items.value.length; i++){
                const result = items.value[i+1] - items.value[i];
                if(result === 1 && result != null){
                    continuousNumCopy.push([items.value[i],items.value[i+1]]);
                    let continuousArr = continuousNumCopy.toString();
                    let continuousArrTotal = continuousArr.split(',');
                    let continuousAfter  = new Set(continuousArrTotal);
                    items.continuous = [...continuousAfter];
                }
            }
        })
    }

    const calRepeatNum = () => {
        lotto && lotto.map((items)=>{
            repeatNumCopy = [];
            for(let i = 0; i < items.value.length; i++){
                for(let j = i+1; j < items.value.length; j++){
                    // items.value[i] = items.value[i].toString().padStart(2, '0')
                    let mantissa = items.value[i].toString()[1] ? items.value[i].toString()[1] : items.value[i].toString()[0];
                    let mantissa2 = items.value[j].toString()[1] ? items.value[j].toString()[1] : items.value[j].toString()[0];
                    if( mantissa === mantissa2){
                        repeatNumCopy.push([mantissa, mantissa2]);
                        let repeatArr = repeatNumCopy.toString();
                        let repeatArrTotal = repeatArr.split(',');
                        let repeatAfter  = new Set(repeatArrTotal);
                        items.repeat = [...repeatAfter];
                    }
                }
            }
        })
    }

    const calLianNum  = () => {
        let nextIssue = [];
        let prevIssue = [];
        lotto && lotto.map((items, index) => {
            if(index < lotto.length-1){
                nextIssue = lotto[index].value;
                prevIssue = lotto[index+1].value;
                lianNumCopy = [];
                for (let i = 0; i < items.value.length; i++) {
                    for (let j = 0; j < items.value.length; j++) {
                        if (prevIssue[i] === nextIssue[j]) {
                            lianNumCopy.push(nextIssue[j]);
                            let lianArr = lianNumCopy.toString();
                            let lianArrTotal = lianArr.split(',');
                            let lianAfter  = new Set(lianArrTotal);
                            items.lian = [...lianAfter];
                        }
                    }
                }
            }
        })
    }

    const calAdjacentNum = () =>{
        let prevIssue = [];
        let nextIssue = [];
        lotto && lotto.map((items, index) => {
            if(index < lotto.length-1){
                nextIssue = lotto[index].value;
                prevIssue = lotto[index+1].value;
                adjacentNumCopy = [];
                for (let i = 0; i < items.value.length; i++) {
                    for (let j = 0; j < items.value.length; j++) {
                        if (Number(prevIssue[i]) === Number(nextIssue[j])-1 ||
                            Number(prevIssue[i]) === Number(nextIssue[j])+1) {
                            adjacentNumCopy.push(nextIssue[j]);
                            let adjacentArr = adjacentNumCopy.toString();
                            let adjacentArrTotal = adjacentArr.split(',');
                            let adjacentAfter  = new Set(adjacentArrTotal);
                            items.adjacent = [...adjacentAfter];
                        }
                    }
                }
            }
        })
    }

    const calQualityNum = () => {
        lotto && lotto.map((items)=>{
            primeNumCopy = [];
            multiples3NumCopy = [];
            compositeNumCopy = [];
            for(let i = 0; i < items.value.length; i++) {
                if (primeNum.indexOf(items.value[i]) !== -1) {
                    primeNumCopy.push(items.value[i])
                } else if ((items.value[i] % 3) === 0) {
                    multiples3NumCopy.push(items.value[i])
                } else {
                    compositeNumCopy.push(items.value[i])
                }
            }
            items.multiples3Num = [...multiples3NumCopy];
            items.compositeNum = [...compositeNumCopy];
            items.primeNum = [...primeNumCopy];
        })
    }

    const calSum = () =>{
        lotto && lotto.map((items)=> {
            sumNumCopy = [];
            let num = 0;
            for(let i = 0; i < items.value.length; i++){
                num += Number(items.value[i]);
            }
            sumNumCopy.push(num)
            let sumNumArr = sumNumCopy.toString();
            let sumNumArrTotal = sumNumArr.split(',');
            let sumNumAfter  = new Set(sumNumArrTotal);
            items.sumNum = [...sumNumAfter];
        })
    }

    const calSumMantissa = () =>{
        lotto && lotto.map((items)=> {
            sumMantissaCopy = [];

            let num = 0;
            for(let i = 0; i < items.value.length; i++){
                num += Number((items.value[i].toString().padStart(2, '0')).toString()[1]);
            }
            sumMantissaCopy.push(num)
            let sumMantissaArr = sumMantissaCopy.toString();
            let sumMantissaArrTotal = sumMantissaArr.split(',');
            let sumMantissaAfter  = new Set(sumMantissaArrTotal);
            items.sumMantissa = [...sumMantissaAfter];
        })
    }

    const calCooperateNum = () => {
        let typeLength = 0;
        let cooperateArr = [];

        if(currentLotto === 'big'){
            typeLength = 49;
        }
        else if(currentLotto === 'super'){
            typeLength = 38
        }
        else if(currentLotto === 'daily'){
            typeLength = 39
        }


        for(let i = 0; i < typeLength; i++){
            cooperateArr.push([])
            for(let j = i+1; j < typeLength; j++) {
                cooperateArr[i].push([0])

            }}

        count.num.map((items)=>{
            for(let i = 0; i < items.length; i++){
                for(let j = i+1; j < items.length; j++){
                    cooperateArr[items[i]][items[j]] && cooperateArr[items[i]][items[j]]++;
                }
            }
        })
        for(let i = 0; i < typeLength; i++){
            for(let j = i+1; j < typeLength; j++) {
                i !== 0 && cooperateArr[i][j] && cooperArrCopy.push({num: [i+1, j+1], count : cooperateArr[i][j]})
            }}

        setCooperArr(cooperArrCopy);
    }

    const calNoShowNum = () => {
        let typeLength = 0;
        if(currentLotto === 'big'){
            typeLength = 49;
        }
        else if(currentLotto === 'super'){
            typeLength = 38
        }
        else if(currentLotto === 'daily'){
            typeLength = 39
        }

        for(let i = 0; i < typeLength; i++){
            noShowNumCopy.push(-99);
        }

        count.num.map((items, index)=>{
            for(let i = 0; i < items.length; i++){
                let t = items[i];
                if(noShowNumCopy[t] === -99) {
                    noShowNumCopy[t] = index;
                }

            }
        })
        setNoShowArr(noShowNumCopy);
    }

    const calACNum = () => {
        lotto && lotto.map((items)=>{
            let differenceNum = [];
            let numArr = items.value;
            for(let i = 0; i < numArr.length-1; i++){
                differenceNum.push(numArr[i+1] - numArr[i]);
            }
            items.differenceNum = [...differenceNum];
        })
        lotto && lotto.map((items)=>{
            let heightDiffNum = [];
            let numArr = items.value;
            heightDiffNum.push(numArr[numArr.length-1]-numArr[0]);
            items.heightDiffNum = [...heightDiffNum];
        })
        lotto && lotto.map((items)=>{
            let AcNumArr = [];
            let AcNumArrArr = [];
            let numArr = items.value;
            for(let i = 0; i < numArr.length; i++){
                for(let j = i+1; j < numArr.length; j++){
                    let AcNum = numArr[j]-numArr[i]
                    AcNumArr.push(AcNum)
                    AcNumArrArr = new Set(AcNumArr)
                }
            }
            items.AcNum = AcNumArrArr.size-5;
        })
    }

    const countFrequencyNum = () => {
        count.num && count.num.map((item)=>{
            for(let i = 0; i < item.length; i++){
                lottoNumAllCopy.push(item[i])
            }
        })
        setLottoNumAll(lottoNumAllCopy)
        if(currentLotto === 'big'){
            for(let i = 0; i < 49; i++){
                numCountCopy[i] = lottoNumAllCopy.filter((num)=> num === i+1).length
            }
            for(let i = 0; i < 8; i++){
                snCountCopy[i] = lottoNumAllCopy.filter((num)=> num === i+1).length
            }
        }
        else if(currentLotto === 'super'){
            for(let i = 0; i < 38; i++){
                numCountCopy[i] = lottoNumAllCopy.filter((num)=> num === i+1).length
            }
            for(let i = 0; i < 9; i++){
                snCountCopy[i] = lottoNumAllCopy.filter((num)=> num === i+1).length
            }
        }
        else if(currentLotto === 'daily'){
            for(let i = 0; i < 39; i++){
                numCountCopy[i] = lottoNumAllCopy.filter((num)=> num === i+1).length
            }
        }
        setNumCount({num: numCountCopy, sn: snCountCopy})
    }

    function mantissaStatics(){
        let mantissaStaticsArr = [];
        for(let i = 0; i < 10; i++){
            mantissaStaticsArr[i] = 0
        }
        lotto && lotto.map((items)=> {
            let mantissaArr = [];
            for(let i = 0; i < items.value.length; i++){
                mantissaArr.push(Number((items.value[i].toString().padStart(2, '0')).toString()[1]))
            }
            for(let i = 0; i < mantissaArr.length; i++){
                for(let j = 0; j < 10; j++){
                    if(mantissaArr[i] === j){
                        mantissaStaticsArr[j]++;
                    }
                }
            }

            setMantissaStaticsArr(mantissaStaticsArr)
        })





    }


    function checkNormalUser (user){
        if(user.grade === 'FREE' &&  (!!user.vip_date === false)){
            setUserType('NORMAL');
        }
    }


    useEffect(()=> {
        let staticsLevel = location?.state?.staticsLevel;
        if(staticsLevel) {
            onMainBtn(staticsLevel);
        }
    },[lotto])

    useEffect(()=>{
        // getLotto();
        let userData = getUserData();
        checkNormalUser(userData);
        calContinuousNum();
        calRepeatNum();
        calLianNum();
        calAdjacentNum();
        calQualityNum();
        calSum();
        calSumMantissa();
        calCooperateNum();
        calNoShowNum();
        calACNum();
        countFrequencyNum();
        mantissaStatics();
        console.log('AnalyticsListScreen.jsx:520 ->',lotto);
    },[lotto])


    useEffect(()=>{
        setLottoData();
        moveToSection();
    })

    return (
        <section className='analyticsListCover'>
            <h1 className='titleCover'>
                <Title text1={title} text2={lang().STATISTICAL_DATA} color={mainColor}/>
            </h1>
            <AnalyticsColorBtnGroup
                onMenuBtn={onMainBtn}
                moveToSection={moveToStaticsLevel}
                lottoType={currentLotto}
                staticsLevel={currentLevel}
                staticsType={currentStatics}
                btnTitle={btnTitle}
                color={mainColor}
                />
            <AnalyticsContents
                lotto={lotto}
                onMenuBtn={onSubBtn}
                moveToSection={moveToStaticsType}
                lottoType={currentLotto}
                staticsLevel={currentLevel}
                staticsType={currentStatics}
                color={subColor}
                basicData={circleBtnBasic}
                advanceData={circleBtnAdvance}
                mantissaStaticsArr={mantissaStaticsArr}
                btnTitle={btnTitle}/>
        </section>
    );
};

export default AnalyticsListScreen;