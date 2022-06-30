import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";
import Pagination from "../../../Components/Common/Pagination";

const NaviCouponScreen = () => {
    return (
        <section className='couponCover'>
            <h1>
                <Title text1={'登陸兌換券'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <LongInput placeHolder={'請輸入兌換券序號'}/>
                <LineButton text={'登錄'} btnStyle={{borderColor:Color.MAIN_RED, width: '100px'}} fontStyle={{color:Color.MAIN_RED}}/>
            </div>
            <header>
                <h1>兌換品項</h1>
                <h2>兌換日期</h2>
            </header>
            <p>目前沒有兌換紀錄</p>
            <ul>
                <li>
                    <span>一個月會員權限</span>
                    <span>110.06.23</span>
                </li>
                <li>
                    <span>一個月會員權限(新墨魂 Online P...</span>
                    <span>110.06.23</span>
                </li>
            </ul>
            <Pagination current={0} last={1}/>
            <footer>
                <h1>使用說明</h1>
                <div className="line"/>
                <ul>
                    <li>富達樂透所發行之兌換券可於此處進行登陸。</li>
                    <li>請確認兌換券之有效期限。</li>
                    <li>登錄完成後即可使用富達樂透之服務。</li>
                    <li>1張兌換券僅供1個帳號使用1次，無法重複使用。</li>
                    <li>{'使用兌換券期間若於商店內付款，將自動更換成付費 服務。'}</li>
                    <li>{'付費服務(1個月兌換券除外) 使用期間若登錄兌換券，會員期間將會在付費服務結束後自動延長。'}</li>
                    <li>若您已身為1個月黃金會員，將無法使用兌換券。</li>
                </ul>
            </footer>
        </section>
    );
};

export default NaviCouponScreen;