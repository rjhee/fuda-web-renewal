import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";
import {changePhone, phoneAuth} from "../../../Service/UserService";
import {useNavigate} from "react-router-dom";

const UserInfoEditPhoneChangeScreen = (props) => {
    let navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [authNum, setAuthNum] = useState('');
    const [timer, setTimer] = useState(0);
    const [isStart, setStart] = useState(false);


    let phone_format = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
    let test_phone = [
        '821044658488' , //vanillacode 김경호
        '821066747738' //vanillacode 김도영
    ];
    useEffect(()=>{
        if(isStart === true){
            setTimer(180);
        }},[isStart]);

    useEffect(()=>{
        if(isStart === true) {
            setTimeout(() => {
                if (timer <= 0) {
                    navigate(-1);
                } else {
                    setTimer(timer - 1);
                }
            }, 1000);
        }
    },[timer]);

    let getMinuteString = (num) => {
        if(num === 0) {
            return '';
        }

        let min = parseInt(num / 60);
        let secStr = num % 60 < 10 ? '0' + num % 60 : num % 60;
        return min + ':' + secStr;
    }

    let getAuthNumber = () => {
        if ( test_phone.indexOf(phone) !== -1 ) {

        }
        else if (phone === '') {
            alert('請輸入您的手機號碼'); //핸드폰 번호를 입력해 주세요
            return false;
        } else if (phone_format.test(phone) === false) {
            alert('無效的號碼'); // 유효하지 않은 핸드폰 번호입니다.
            return false;
        }

        phoneAuth(phone).then(r=>{
            console.log('PhoneChangeScreen.js::67 ->',JSON.stringify(r));
            if(r.data === true) {
                setStart(true);
            }else {
                alert('號碼已被使用.'); //중복된 전화번호 입니다.
            }
        });
    }

    let changePhoneNumber = () => {
        if(isStart === false ){
            alert('請輸入驗證碼');
            return false;
        }else if(authNum.length === 0) {
            alert('請出入驗證碼'); //인증번호를 입력해주세요
            return false;
        }

        changePhone(phone, authNum).then(r=>{
            if(r.data !== null) {
                alert('您的號碼已變更'); //전화번호가 변경되었습니다.
                navigate(-1);
            }
        });
    }

    return (
        <section className='userInfoEditPhoneChangeCover'>
            <h1>
                <Title text1={'新號碼驗證/變更'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <label htmlFor="">新號碼</label>
                <LongInput
                    setValue={setPhone}
                    type={'number'} placeHolder={'請輸入您的新手機號碼'} />
                <LineButton
                    onClick={getAuthNumber}
                    text={'取得驗證碼'} btnStyle={{width: '110px'}}/>
            </div>
            <div className='inputCover'>
                <label htmlFor="">驗證碼</label>
                <LongInput
                    setValue={setAuthNum}
                    type={'number'} placeHolder={' '}/>
                <span className='timer'>{getMinuteString(timer)}</span>
                <LineButton
                    onClick={changePhoneNumber}
                    text={'確認'} btnStyle={{borderColor:Color.MAIN_RED, width: '110px'}} fontStyle={{color:Color.MAIN_RED}}/>
            </div>
            <p className='descCover'>
                ※ 新號碼驗證/變更 將在輸入驗證碼後完成
            </p>
        </section>
    );
};

export default UserInfoEditPhoneChangeScreen;