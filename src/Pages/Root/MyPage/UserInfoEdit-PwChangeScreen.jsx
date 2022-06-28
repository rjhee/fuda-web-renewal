import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";

const UserInfoEditPwChangeScreen = () => {
    return (
        <section className='userInfoEditPwChangeCover'>
            <h1>
                <Title text1={'變更密碼'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <label htmlFor="">目前密碼</label>
                <LongInput type={'password'} placeHolder={' '} />
            </div>
            <div className='inputCover'>
                <label htmlFor="">新密碼</label>
                <LongInput type={'password'} placeHolder={' '} />
            </div>
            <div className='inputCover'>
                <label htmlFor="">確認新密碼</label>
                <LongInput type={'password'} placeHolder={' '} />
            </div>
            <p className='descCover'>
                ※ 密碼應為6~12個英文和數字之組合
            </p>
            <div className='btnCover'>
                <LineButton text={'確認'} btnStyle={{borderColor:Color.MAIN_RED, width: '50%'}} fontStyle={{color:Color.MAIN_RED}}/>
                <LineButton text={'取消'} btnStyle={{width: '50%'}}/>
            </div>
        </section>
    );
};

export default UserInfoEditPwChangeScreen;