import React, {useState, useEffect} from 'react';
import LoginButton from "../../../Components/Common/LoginButton";

import { Link, useNavigate } from 'react-router-dom';
import * as AuthService from '../../../Service/AuthService'
import UserInfoCard from "../../../Components/MyPage/UserInfoCard";
import AnalyzeCard from "../../../Components/MyPage/AnalyzeCard";
import AnalyzeBar from "../../../Components/MyPage/AnalyzeBar";
import PromptModal from "../../../Components/Common/PromptModal";
import NaviList from "../../../Components/MyPage/NaviList";
import InfoBox from "../../../Components/MyPage/InfoBox";
import * as UserService from "../../../Service/UserService";



const MyPageScreen = (props) => {
    let navigate = useNavigate();
    let googleSignInClient = null;
    const [onModal, setOnModal] = useState(false);
    const [winData, setWinData] = useState(null);
    const [currentValue, setCurrentValue] = useState(30);
    const [maxValue, setMaxValue] = useState(100);
    const [per, setPer] = useState(0);

    const [inputValue, setInputValue] = useState(100000);

    let updateMaxValue = async (value) =>{
        // TODO enter 키 눌렀을때도 실행되게 하고 싶다
        let check = /^[0-9]+$/;
        if (!check.test(value)) {
            alert("僅能輸入數字");
            return false ;
        }

        if(value < currentValue) {
            value = currentValue;
        }

        if(value.toString().length > 20) {
            alert('數字過大'); //값이 너무 큽니다.
            return false ;
        }
        setMaxValue(value);
        console.log('MyPageScreen.jsx:44 ->',value);
        await UserService.setGoal(value)
        return true;
    }

    useEffect(()=>{
        UserService.getGoal().then(r=>{
            console.log('AnalyzeBar.jsx:22 ->',r);
            if( r.data !== null && r.data[0] !== null && r.data[0].goal !== null) {
                setMaxValue(r.data[0].goal);
                setInputValue(r.data[0].goal)
            }
            else {
                setMaxValue(10000);
            }
        })
    },[]);

    useEffect(()=>{
        if(winData !== null) {
            let sum = winData.big_sum + winData.daily_sum + winData.super_sum;
            setCurrentValue(sum);
        }
    }, [winData]);

    useEffect(()=>{
        if(currentValue > maxValue) {
            return;
        }
        let perNum = (currentValue/maxValue)*100;
        setPer(perNum);

    },[ currentValue,maxValue ]);


    let logoutProcess = () => {
        AuthService.logout().then((result)=>{
            // TODO
            // 로그아웃 후 재로그인 시 구글 계정 선택창 띄우기
            console.log('MyPageScreen.jsx:10 -> logout result : ',result);
            navigate('/login');
        });
    }
    return (
        <section className='myPageScreenCover'>
            {onModal === true ?
                <PromptModal
                    on={onModal}
                    setOn={setOnModal}
                    value={maxValue}
                    setValue={setMaxValue}
                    setInputValue={setInputValue}
                    updateValue={async()=> {
                        let success = await updateMaxValue(inputValue);}}/>
                : null}
            <div className='infoCover'>
                <UserInfoCard/>
                <AnalyzeCard setWinData={setWinData}/>
                <AnalyzeBar per={per} maxValue={maxValue} onClick={setOnModal}/>
            </div>
            <NaviList
                myPagePath={props.myPagePath}
                userPath={props.userPath}
                notificationPath={props.notificationPath}
                paymentPath={props.paymentPath}
                couponPath={props.couponPath}
                receiptPath={props.receiptPath}
                faqPath={props.faqPath}
                qnaPath={props.qnaPath}/>
            <InfoBox/>
            <div className=''>
                <Link to={'/login'}>
                    <LoginButton text={'로그인'}/>
                </Link>
                <LoginButton text={'로그아웃'} onClick={logoutProcess} />
            </div>
        </section>
    );
};

export default MyPageScreen;