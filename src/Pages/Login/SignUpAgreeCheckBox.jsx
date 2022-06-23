import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import TitleBig from "../../Components/Login/TitleBig";
import {lang} from "../../Assets/Lang/Lang";
import LongInput from "../../Components/Login/LongInput";
import LoginButton from "../../Components/Common/LoginButton";
import CheckBoxWithText from "../../Components/Common/CheckBoxWithText";
import PolicyModal from "../../Components/Modal/PolicyModal";
import {policyContents} from "../../Service/util";
import {termsContents} from "../../Service/util";
import {sendPhoneAuth} from "../../Service/AuthService";


const SignUpAgreeCheckBox = (props) => {
    // 3) 개인정보 동의 체크박스 화면
    // 핸드폰번호 입력, 인증번호 받기버튼
    const navigate = useNavigate();
    const location = useLocation();
    const [onTerms, setOnTerms] = useState(false);
    const [onPolicy, setOnPolicy] = useState(false);
    const [up_18, setUp18] = useState(false);
    const [policy_1, setPolicy1] = useState(false);
    const [policy_2, setPolicy2] = useState(false);
    const [phone_num, setPhoneNum] = useState(false);
    const [email, setEmail] = useState(false);
    const [name, setName] = useState(false);
    const [pwd, setPwd] = useState(false);
    const [sns, setSns] = useState('N');
    const [uid, setUid] = useState('');


    let test_phone = ['821044658488', '821066747738'];
    let phone_format = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;


    function checkState(){

        if (test_phone.indexOf(phone_num) !== -1)
            return true;

        if (up_18 === false) {
            alert('請確認您已年滿18歲（以上）'); // 18세 이상 사용자에 동의해주세요
            return false;
        }  else if (policy_1 === false) {
            alert('請確認使用條款1'); // 약관 1에 동의해주세요
            return false;
        } else if (policy_2 === false) {
            alert('請確認使用條款2'); //약관 2 에 동의해주세요
            return false;
        } else if (phone_num === '') {
            alert('請輸入您的手機號碼'); //폰번호를 입력해주세요
            return false;
        } else if (phone_format.test(phone_num) === false) {
            alert('無效的號碼'); //유효하지 않은 핸드폰 번호입니다.
            return false;
        }

        return true;
    }

    async function phoneAuthProcess(){
        if (checkState() === false) return;

        if (await requestSendNumber() === true) {
            navigate(`${props.path}/page=3`,{state:{sns: sns, email: email, uid: uid, name: name, pwd: pwd,  phone_num: phone_num, type: 'signUp',}});
        }
    }

    async function requestSendNumber(){
        return await sendPhoneAuth(email, phone_num).then((result) => {
            if ( result.data === false ){
                alert(result.message);
                return false;
            }
            else {
                return true;
            }
        });
    }

    useEffect(() => {
        setEmail(location.state?.email ?? '');
        setName(location.state?.name ?? '');
        setPwd(location.state?.pwd ?? '');
        setSns(location.state?.sns ?? 'N');
        setUid(location.state?.uid ?? '');
    }, []);

    useEffect(() => {
        if (up_18 === true) {
            setPolicy1(true);
            setPolicy2(true);
        } else {
            setPolicy1(false);
            setPolicy2(false);
        }
    }, [up_18]);

    return (
        <section className='signUpFormCover'>
            <h1>
                <TitleBig text={lang().JOIN}/>
            </h1>
            <div className='checkboxCover'>
               <CheckBoxWithText i={0} text={lang()["18+"]} isSubText={true} subText={lang().ONLY_18} checked={up_18} setChecked={setUp18}/>
               <CheckBoxWithText i={1} text={lang().AGREE_TERMS_MUST} isDescBtn={true} setOn={setOnTerms} checked={policy_1} setChecked={setPolicy1}/>
               <CheckBoxWithText i={2} text={lang().PRIVACY_POLICY_MUST} isDescBtn={true} setOn={setOnPolicy} checked={policy_2} setChecked={setPolicy2}/>
            </div>
            <LongInput type={'number'} placeHolder={lang().ENTER_CELL} setValue={setPhoneNum}/>
            <LoginButton text={lang().CONTINUE} onClick={phoneAuthProcess}/>
            <p>{lang().RECEIVE_C_NUM_4}</p>
            {onTerms === true ?
                <PolicyModal title={lang().TERMS} contents={termsContents} setOn={setOnTerms}/> : null}
            {onPolicy === true ?
                <PolicyModal title={lang().PRIVACY_POLICY} contents={policyContents} setOn={setOnPolicy}/> : null}
        </section>
    );
};

export default SignUpAgreeCheckBox;