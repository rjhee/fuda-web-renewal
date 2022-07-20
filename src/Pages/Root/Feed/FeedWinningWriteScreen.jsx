import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import Textarea from "../../../Components/Common/Textarea";
import LongFileInput from "../../../Components/Common/LongFileInput";
import LineButton from "../../../Components/Common/LineButton";

const FeedWinningWriteScreen = () => {
    return (
        <section className='FeedWriteScreenCover'>
            <h1>
                <Title text1={'中獎分享'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <div className='selectBox'>
                    <div>
                        <label htmlFor="">類別</label>
                        <select  className='selectCover'>
                            <option>第 期  </option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">獎項</label>
                        <select  className='selectCover'>
                            <option>第 期  </option>
                        </select>
                    </div>
                </div>
                <LongInput type={'text'} placeHolder={'請先選擇上方類別與獎項，再輸入標題'}/>
                <Textarea placeHolder={'請在此填寫您的貼文\n' +
                    '如果您的貼文內容是捏造的，誹謗的，不准確的，辱罵性的，粗俗的，憤恨的，騷擾性的，淫穢的，褻瀆性的，性暗示的，威脅性的，侵犯個人隱私的，或以其他方式違反任何法律的，您的貼文將可能被移除。'}/>
                <LongFileInput/>
            </div>
            <div className='btnCover'>
                <LineButton
                    text={'取消'} btnStyle={{width:'48%'}}/>
                <LineButton
                    text={'發布'} btnStyle={{borderColor: Color.MAIN_RED, width:'48%'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default FeedWinningWriteScreen;