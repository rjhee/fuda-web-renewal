import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import CheckBoxWithText from "../../../Components/Common/CheckBoxWithText";
import LoginButton from "../../../Components/Common/LoginButton";

const UserInfoEditSignOutReasonScreen = () => {
    return (
        <section className='userInfoEditSignOutReasonCover'>
            <h1>
                <Title text1={'退出會員'} color={Color.MAIN_RED}/>
            </h1>
            <div className='descCover'>
                <p>感謝您使用富達樂透</p>
                <div className='line'/>
                <span>
                     請讓我們知道您退出的原因，幫助我們改進服品質。
                </span>
            </div>
            <div className='checkbox'>
                <CheckBoxWithText text={'不滿意的地方'}/>
                <CheckBoxWithText text={'使用其他服務'}/>
                <CheckBoxWithText text={'創建新ID'}/>
                <CheckBoxWithText text={'考慮到個人資料與安全'}/>
                <CheckBoxWithText text={'不舒服的使用體驗'}/>
                <CheckBoxWithText text={'不滿意的服務內容'}/>
                <CheckBoxWithText text={'其他原因'}/>
            </div>
            <div className='btnCover'>
                <LoginButton text={'退出'} color={Color.MAIN_RED}/>
                <LoginButton text={'取消'} color={Color.LIGHT_GREY}/>
            </div>
        </section>
    );
};

export default UserInfoEditSignOutReasonScreen;