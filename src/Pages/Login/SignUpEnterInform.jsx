import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import TitleBig from "../../Components/Login/TitleBig";
import {lang} from "../../Assets/Lang/Lang";
import LongInput from "../../Components/Login/LongInput";
import LoginButton from "../../Components/Common/LoginButton";
import * as AuthService from "../../Service/AuthService";

const SignUpEnterInform = (props) => {
    // 2)
    // 1.이메일 2.이름 3. 비밀번호 입력
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [rePwd, setRePwd] = useState('');
    const [sns, setSns] = useState('N');
    const [uid, setUid] = useState('');
    const [isEmailCheckState,setIsEmailCheckState] = useState('wait');
    let email_format = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


    async function checkEmailProcess(){
        if (email !== '' &&
            (isEmailCheckState === 'fail' || isEmailCheckState === 'wait') &&
            email_format.test(email)) {
            return await AuthService.checkEmail(email).then((response) => {
                console.log('SignUpEnterInform.jsx:29 ->',response);
                if (response.data === true) {
                    alert(response.message);
                    setIsEmailCheckState('fail');
                } else {
                    setIsEmailCheckState('complete');
                }
            })
        }
    }

    async function signUpProcess(){
        await checkEmailProcess();
        if(!!checkState() === false) return;
        navigate(`${props.path}/page=2`,{state:{email: email, name: name, pwd: pwd,  sns: 'N', uid: ''}});
    }

    function checkState(){
        if (email === '') {
            alert('請輸入您的電子信箱帳號'); //이메일을 입력해 주세요
            return false;
        } else if (email_format.test(email) === false) {
            alert('帳號格式錯誤'); // 이메일 형식이 올바르지 않습니다.
            return false;
        } else if (isEmailCheckState === 'fail' || isEmailCheckState === 'wait') {
            alert('此帳號已被使用'); //중복된 이메일 입니다.
            return false;
        } else if (name === '') {
            alert('請輸入您的暱稱'); //이름을 입력해주세요
            return false;
        } else if (pwd.length < 8) {
            alert('請輸入至少8字元的密碼'); //비밀번호는 8자리 이상입니다.
            return false;
        } else if (pwd === '') {
            alert('請輸入密碼'); //비밀번호를 입력해주세요
            return false;
        } else if (rePwd === '') {
            alert('請再次輸入密碼進行確認'); //비밀번호 중복확인을 입력해 주세요
            return false;
        } else if (pwd !== rePwd) {
            alert('與前次密碼不符'); //중복 확인이 일치하지 않습니다.
            return false;
        }

        return true;

    }

    useEffect(() => {
        setEmail(location.state?.email ?? '');
        setName(location.state?.name ?? '');
        setPwd(location.state?.pwd ?? '');
        setSns(location.state?.sns ?? 'N');
        setUid(location.state?.uid ?? '');
        console.log('SignUpEnterInform.jsx:82 ->', `sns: ${location.state?.sns} , name: ${location.state?.name}, email: ${location.state?.email}`);
    }, []);

    useEffect(()=>{
        setIsEmailCheckState('wait');

    },[]);

    return (
        <section className='signUpFormCover'>
            <h1>
                <TitleBig text={lang().JOIN}/>
            </h1>
            <LongInput type={'email'} placeHolder={lang().ENTER_EMAIL}  setValue={setEmail}/>
            <LongInput type={'text'} placeHolder={lang().ENTER_NICKNAME}  setValue={setName}/>
            <LongInput type={'password'} placeHolder={lang().ENTER_PW_DESC}  setValue={setPwd}/>
            <LongInput type={'password'} placeHolder={lang().RE_ENTER_PW}  setValue={setRePwd}/>
            <LoginButton text={lang().CONTINUE} onClick={signUpProcess}/>
            {/*<Link to={props.path+'/page=2'}>*/}
            {/*</Link>*/}
        </section>
    );
};

export default SignUpEnterInform;