import React, {useState} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";

const UserInfoEditPhoneChangeScreen = (props) => {
    const [timer, setTimer] = useState(180);
    function getMinuteString(num){
        let min = parseInt(num / 60);
        let secStr = num % 60 < 10 ? '0' + num % 60 : num % 60;
        return min + ':' + secStr;
    }

    return (
        <section className='userInfoEditPhoneChangeCover'>
            <h1>
                <Title text1={'新號碼驗證/變更'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <label htmlFor="">新號碼</label>
                <LongInput type={'number'} placeHolder={'請輸入您的新手機號碼'} />
                <LineButton text={'取得驗證碼'} btnStyle={{width: '110px'}}/>
            </div>
            <div className='inputCover'>
                <label htmlFor="">驗證碼</label>
                <LongInput type={'number'} placeHolder={' '}/>
                <span className='timer'>{getMinuteString(timer)}</span>
                <LineButton text={'確認'} btnStyle={{borderColor:Color.MAIN_RED, width: '110px'}} fontStyle={{color:Color.MAIN_RED}}/>
            </div>
            <p className='descCover'>
                ※ 新號碼驗證/變更 將在輸入驗證碼後完成
            </p>
        </section>
    );
};

export default UserInfoEditPhoneChangeScreen;