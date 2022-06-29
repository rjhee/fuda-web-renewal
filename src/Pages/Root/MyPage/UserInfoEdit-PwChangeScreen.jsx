import React, {useState} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";
import {useNavigate} from "react-router-dom";
import {changePassword} from "../../../Service/UserService";

const UserInfoEditPwChangeScreen = (props) => {
    let navigate = useNavigate();
    const [beforePwd, setBeforePwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [checkPwd, setCheckPwd] = useState('');

    let cancel = () => {
        navigate(-1);
    }

    let changePwd = () => {
        if(verifyPwd() === true) {
            changePassword(beforePwd, newPwd).then(r=>{
                console.log(JSON.stringify(r.data));
                if(r.data.changedRows === 1) {
                    navigate(-1);
                } else {
                    alert('與當前密碼不符'); //기존 패스워드가 일치하지 않습니다.
                }
            });
        }
    }

    let verifyPwd = () => {
        if(beforePwd.length === 0 || newPwd.length === 0 || checkPwd.length === 0) {
            alert('請輸入密碼'); //패스워드를 입력해주세요
            return false;
        }else if(newPwd !== checkPwd) {
            alert('與前次密碼不符'); // 중복 패스워드가 일치하지 않습니다.
            return false;
        }

        return true;
    }
    return (
        <section className='userInfoEditPwChangeCover'>
            <h1>
                <Title text1={'變更密碼'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <label htmlFor="">目前密碼</label>
                <LongInput
                    setValue={setBeforePwd}
                    type={'password'} placeHolder={' '} />
            </div>
            <div className='inputCover'>
                <label htmlFor="">新密碼</label>
                <LongInput
                    setValue={setNewPwd}
                    type={'password'} placeHolder={' '} />
            </div>
            <div className='inputCover'>
                <label htmlFor="">確認新密碼</label>
                <LongInput
                    setValue={setCheckPwd}
                    type={'password'} placeHolder={' '} />
            </div>
            <p className='descCover'>
                ※ 密碼應為6~12個英文和數字之組合
            </p>
            <div className='btnCover'>
                <LineButton
                    onClick={changePwd}
                    text={'確認'} btnStyle={{borderColor:Color.MAIN_RED, width: '50%'}} fontStyle={{color:Color.MAIN_RED}}/>
                <LineButton
                    onClick={cancel}
                    text={'取消'} btnStyle={{width: '50%'}}/>
            </div>
        </section>
    );
};

export default UserInfoEditPwChangeScreen;