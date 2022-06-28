import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";

const UserInfoEditNameChangeScreen = (props) => {
    return (
        <section className='userInfoEditNameChangeCover'>
            <h1>
                <Title text1={'變更暱稱'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <label htmlFor="">新暱稱</label>
                <LongInput placeHolder={' '} />
                <LineButton text={'再次確認'}/>
            </div>
            <p className='descCover'>
                ※ 暱稱應由1~10個中英文或數字組成 <br/>
                ※ 六個月內只能更改一次暱稱
            </p>
            <div className='btnCover'>
                <LineButton text={'確認'} btnStyle={{borderColor:Color.MAIN_RED, width: '50%'}} fontStyle={{color:Color.MAIN_RED}}/>
                <LineButton text={'取消'} btnStyle={{width: '50%'}}/>
            </div>
        </section>
    );
};

export default UserInfoEditNameChangeScreen;