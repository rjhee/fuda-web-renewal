import React, {useState} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";
import {useNavigate} from "react-router-dom";
import {getAccessToken} from "../../../Service/AuthService"
import {checkName, changeName} from "../../../Service/UserService"

const UserInfoEditNameChangeScreen = (props) => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [isCheck, setIsCheck] = useState(false);

    let cancel = () => {
        navigate(-1);
    }


    let changeNameProcess = () => {
        if(isCheck === true) {
            changeName(name).then(r=>{
                if(r.data !== null) {
                    alert('暱稱已變更'); //이름 변경 완료
                    getAccessToken().then(r=>{
                        if(typeof props.route.params.change === 'function'){
                            props.route.params.change(name);
                        }
                        navigate(-1);
                    });
                }
            });
        }else {
            alert('請再次確認');
        }
    }

    let checkNameProcess = () =>{
        if(name ==='') {
            alert('請輸入您的暱稱'); //이름을 입력해 주세요
        }else if(name.length > 10) {
            alert('不可超過10位字元'); //이름은 10 글자 이내입니다.
        }else {
            checkName(name).then(r=>{
                // TODO
                // 인증성공시 액션 없음?
                if(r.data === true) {
                    setIsCheck(true);
                }else {
                    alert('暱稱已被使用'); //중복된 이름입니다.
                }
            });
        }
    }
    return (
        <section className='userInfoEditNameChangeCover'>
            <h1>
                <Title text1={'變更暱稱'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <label htmlFor="">新暱稱</label>
                <LongInput placeHolder={' '} setValue={setName} />
                <LineButton text={'再次確認'} onClick={checkNameProcess}/>
            </div>
            <p className='descCover'>
                ※ 暱稱應由1~10個中英文或數字組成 <br/>
                ※ 六個月內只能更改一次暱稱
            </p>
            <div className='btnCover'>
                <LineButton
                    onClick={changeNameProcess}
                    text={'確認'} btnStyle={{borderColor:Color.MAIN_RED, width: '50%'}} fontStyle={{color:Color.MAIN_RED}}/>
                <LineButton
                    onClick={cancel}
                    text={'取消'} btnStyle={{width: '50%'}}/>
            </div>
        </section>
    );
};

export default UserInfoEditNameChangeScreen;