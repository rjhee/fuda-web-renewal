import React, {useState, useEffect} from 'react';
import TitleBig from "../../Components/Login/TitleBig";
import {lang} from "../../Assets/Lang/Lang";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import LongInput from "../../Components/Login/LongInput";
import LoginButton from "../../Components/Common/LoginButton";
import {signUp, signUpSNS} from "../../Service/AuthService";


const SignUpVerifyCode = () => {
    // 4)
    // 핸드폰인증번호 입력 화면
    const location = useLocation();
    const navigate = useNavigate();
    const [authNumber, setAuthNumber] = useState('');
    const [phone_num, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [timer, setTimer] = useState(180);
    const [sns, setSns] = useState('N');
    const [snsID, setSNSID] = useState('');

    function getMinuteString(num){
        let min = parseInt(num / 60);
        let secStr = num % 60 < 10 ? '0' + num % 60 : num % 60;
        return min + ':' + secStr;
    }

    function checkState(){
        if (authNumber === '') {
            alert('請輸入驗證碼'); //인증번호를 입력해주세요
            return false;
        }
    }

    async function signUpProcess(){

        if (checkState() === false) {
            return false;
        }

        let data = {
            email: email,
            name: name,
            phone_num: phone_num,
            pwd: pwd,
            authNumber: authNumber,
            site_code: 'W',
            sns: sns,
            sns_id: snsID,
            agree_yn: 'Y',
        };

        let signUpFunction = signUp;
        if (sns !== 'N') {
            signUpFunction = signUpSNS;
        }
        console.log('SignUpVerifyCode.jsx:58 ->',data);
        let result = await signUpFunction(data);
        console.log('SignUpVerifyCode.jsx:60 ->',result);
        if (result === false) {
            alert('無效的手機號碼'); // 잘못된 휴대폰 번호
        } else {
            // 성공
            navigate('/');
        }

    }

    useEffect(() => {
        setPhoneNum(location.state?.phone_num ?? '');
        setEmail(location.state?.email ?? '');
        setName(location.state?.name ?? '');
        setPwd(location.state?.pwd ?? '');
        setSns(location.state?.sns ?? '');
        setSNSID(location.state?.uid ?? '');
        setTimer(180);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (timer <= 0) {
                // props.navigation.goBack();
            } else {
                setTimer(timer - 1);
            }
        }, 1000);
    }, [timer]);

    return (
        <section className='signUpFormCover'>
            <h1>
                <TitleBig text={lang().JOIN}/>
            </h1>
            <span className='timer'>{getMinuteString(timer)}</span>
            <LongInput type={'number'} placeHolder={lang().ENTER_CELL} setValue={setAuthNumber}/>
                <LoginButton text={lang().CONTINUE} onClick={signUpProcess}/>
        </section>
    );
};

export default SignUpVerifyCode;