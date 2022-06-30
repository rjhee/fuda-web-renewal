import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";

import LineButton from "../../../Components/Common/LineButton";
import Pagination from "../../../Components/Common/Pagination";

const NaviDirectInquiryScreen = () => {
    return (
        <section className='qnaCover'>
            <h1>
                <Title text1={'一對一諮詢'} color={Color.MAIN_RED}/>
            </h1>
            <div className='desc'>
                <h1>一旦收到您的詢問，我們會盡快回覆</h1>
            </div>
            <p>一對一諮詢僅限週一至週五 09:00 至 18:00 提供服務，<br/>
                18:00 後之諮詢將於次日回覆。</p>
            <ul className='qnaHeader'>
                <li className='title'>標題</li>
                <li className='date'>日期</li>
                <li className='response'>回覆</li>
            </ul>
            <ul className='qnaBody'>
                <li>
                    <span className='title'>今日2/21沒有收到預測...</span>
                    <span className='date'>110.06.23</span>
                    <span className='response_y'>回覆完成</span>
                </li>
                <li>
                    <span className='title'>富達號碼</span>
                    <span className='date'>110.06.23</span>
                    <span className='response_n'>回覆中</span>
                </li>
            </ul>
            <div className='nodata'>
                您尚未提出問題
            </div>
            <footer>
                <Pagination current={0} last={1}/>
                <LineButton text={'詢問'} btnStyle={{borderColor: Color.MAIN_RED, width:'100px'}} fontStyle={{color: Color.MAIN_RED}}/>
            </footer>
            <div className='emailQna'>
                <strong>客服信箱</strong>
                <span>cs@fudalotto.com.tw</span>
                <LineButton text={'寄信'} btnStyle={{borderColor: Color.MAIN_RED, width:'100px'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default NaviDirectInquiryScreen;