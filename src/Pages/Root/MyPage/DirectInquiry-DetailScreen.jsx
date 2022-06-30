import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import Pagination from "../../../Components/Common/Pagination";
import LineButton from "../../../Components/Common/LineButton";

const DirectInquiryDetailScreen = () => {
    return (
        <section className='qnaDetailCover'>
            <h1>
                <Title text1={'一對一諮詢'} color={Color.MAIN_RED}/>
            </h1>
            <div className='question'>
                <div className='title'>
                    <p>已付款卻看不到任何優惠號碼？ </p>
                    <span>111.02.15 14:27:49</span>
                </div>
                <p className='desc'>
                    您好：以照您服務專員協助下給予照片請協助處理，開通會員時間正確為2022/03/14止。 而您系統顯示所給我手機看到的日期為2022/02/22。請協助我更正為《2022/03/14》以上感謝您們。辛苦了
                </p>
            </div>
            <div className='answer'>
                <div className='title'>
                    <p>您尚未提出問題</p>
                    <span>111.02.15 14:27:49</span>
                </div>
                <p className='desc'>
                    您尚未提出問題
                </p>
            </div>
            <div className='btnCover'>
                <LineButton text={'刪除'} btnStyle={{marginRight:'6px', width:'48%'}}/>
                <LineButton text={'寄信'} btnStyle={{borderColor: Color.MAIN_RED, width:'48%'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default DirectInquiryDetailScreen;