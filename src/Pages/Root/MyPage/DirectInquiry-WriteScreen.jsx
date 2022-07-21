import React, {useState} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LongFileInput from "../../../Components/Common/LongFileInput";
import Textarea from "../../../Components/Common/Textarea";
import LineButton from "../../../Components/Common/LineButton";
import {getUserQnAUpload} from "../../../Service/UserService";
import {useNavigate} from "react-router-dom";

const DirectInquiryWriteScreen = () => {
    let navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    let initData = () => {
        setTitle('');
        setContents('');
        setImgUrl('');
    }

    let createData = async () => {
        if (checkInputData() === false) {
            return;
        }
        await getUserQnAUpload(title, contents, imgUrl[0])
            .then((result) => {
                console.log(JSON.stringify(result));
                if (result.message === 'success') {
                    initData();
                    navigate(-1);
                }
            }).finally(() => {
            })
    }

    let checkInputData = () => {
        if (!!title === false) {
            alert('請輸入標題'); //제목을 입력해주세요
            return false;
        } else if (!!contents === false) {
            alert('請輸入內文'); //내용을 입력해주세요
            return false;
        } else if(title.length > 20) {
            alert('標題請勿超過20字'); //제목은 20자 제한입니다.
            return false;
        }
    }


    const checkAlert = (text, okFunction) =>{
        alert(text);
        okFunction();
    }

    return (
        <section className='qnaWriteCover'>
            <h1>
                <Title text1={'一對一諮詢'} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                <LongInput type={'text'} placeHolder={'請輸入標題'} value={title} setValue={setTitle}/>
                <Textarea placeHolder={'請輸入內容'} value={contents} setValue={setContents}/>
                <LongFileInput setValue={setImgUrl}/>
            </div>
            <div className='btnCover'>
                <LineButton
                    text={'取消'} btnStyle={{width:'48%'}}/>
                <LineButton
                    onClick={()=> checkAlert('確定要上傳嗎?', createData)}
                    text={'發布'} btnStyle={{borderColor: Color.MAIN_RED, width:'48%'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default DirectInquiryWriteScreen;