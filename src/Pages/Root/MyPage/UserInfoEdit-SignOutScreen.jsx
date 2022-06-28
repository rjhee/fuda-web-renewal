import React from 'react';
import Title from "../../../Components/Common/Title";
import {lang} from "../../../Assets/Lang/Lang";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LoginButton from "../../../Components/Common/LoginButton";
import CheckBoxWithText from "../../../Components/Common/CheckBoxWithText";

const UserInfoEditSignOutScreen = () => {
    return (
        <section className='userInfoEditSignOutCover'>
            <h1>
                <Title text1={'退出會員'} color={Color.MAIN_RED}/>
            </h1>
            <div className='descCover'>
                <p>在您退出會員之前，請確認</p>
                <div className='line'/>
                <ol>
                    <li>
                        一旦您退出會員，您的紀錄將會被刪除，並且無法復原。
                    </li>
                    <li>
                        在您退出會員後，15日內您將無法使用相同帳號或手機號碼進行註冊與登入。
                    </li>
                    <li>
                        一旦您退出，所有的付費服務將會終止。退出前請確認您的VIP期間。
                    </li>
                    <li>
                        在您退出後，您在佈告欄的內容依然會留存。如果您想要刪除討論區上的內容，請在退出前進行刪除。
                    </li>
                </ol>
            </div>
            <div className='descCover'>
                <p>提款會員信息</p>
                <div className='line'/>
                <ul>
                    <li className='infoCover'>
                        <span>暱稱</span>
                        <strong>test</strong>
                    </li>
                    <li className='infoCover'>
                        <span>帳號</span>
                        <strong>test@test.com</strong>
                    </li>
                </ul>
            </div>
            <CheckBoxWithText text={'我已了解並同意所有須知'}/>
            <div className='btnCover'>
                <LoginButton text={'確認'} color={Color.MAIN_RED}/>
                <LoginButton text={'取消'} color={Color.LIGHT_GREY}/>
            </div>
        </section>
    );
};

export default UserInfoEditSignOutScreen;