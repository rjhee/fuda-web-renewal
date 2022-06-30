import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LongFileInput from "../../../Components/Common/LongFileInput";
import Textarea from "../../../Components/Common/Textarea";
import LineButton from "../../../Components/Common/LineButton";

const DirectInquiryWriteScreen = () => {
    return (
        <section className='qnaWriteCover'>
            <h1>
                <Title text1={'一對一諮詢'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <LongInput type={'text'} placeHolder={'請輸入標題'}/>
                <Textarea placeHolder={'請輸入內容'}/>
                <LongFileInput/>
            </div>
            <div className='btnCover'>
                <LineButton
                    text={'取消'} btnStyle={{width:'48%'}}/>
                <LineButton
                    text={'確認'} btnStyle={{borderColor: Color.MAIN_RED, width:'48%'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default DirectInquiryWriteScreen;