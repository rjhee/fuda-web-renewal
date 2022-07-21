import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LineButton from "../../../Components/Common/LineButton";
import {getUserQnADetail, deleteQnA} from "../../../Service/UserService";
import {useLocation, useNavigate} from "react-router-dom";
import {convertToChineseYear, getImageUrl, getJustTime} from "../../../Service/util";
import {deleteComment} from "../../../Service/FeedService";

const DirectInquiryDetailScreen = (props) => {
    const location = useLocation();
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [answerState, setAnswerState] = useState('');
    const [answerDate, setAnswerDate] = useState('');
    const [answerContents, setAnswerContents] = useState('');
    const [answerImg, setAnswerImg] = useState('');

    let uid = location.state.uid;

    let getData = async () => {
        console.log('DirectInquiry-DetailScreen.jsx:11 ->',location.state.uid);
        getUserQnADetail(location.state?.uid ?? '').then(result=>{
            console.log('DirectInquiryDetailScreen.js::18 ->',result.data[0]);
            isAnswer(result.data[0].state);
            if(result.data !== null) {
                setData(result.data[0]);
            }else {
                navigate(-1);
            }

        });
    }

    function isAnswer(state){
        console.log('DirectInquiry-DetailScreen.jsx:31 ->',state);
        switch(state) {
            case 'wait' :
            case 'process' :
                setAnswerState('已回覆');
                setAnswerDate('');
                setAnswerContents('回覆中');
                break;
            case 'end' :
                setAnswerState('回覆');
                setAnswerDate(`${convertToChineseYear(data?.answer_date)} ${getJustTime(data?.answer_date)}`);
                setAnswerContents(data?.answer);
                setAnswerImg(data?.answer_img_url);
                break;
        }
    }

    function deleteDirectInquiryDetail(){
        let answer = window.confirm('您確認要刪除嗎?');
        if(answer) {
            deleteQnA(uid).then(r=>{
                navigate(-1);
            });
        }
        else {
            return null;
        }

    }

    function moveToWriteScreen(){
        navigate(props.writePath);
    }

    useEffect(()=>{
        getData();
    },[answerState])
    return (
        <section className='qnaDetailCover'>
            <h1>
                <Title text1={'一對一諮詢'} color={Color.MAIN_RED}/>
            </h1>
            <div className='question'>
                <div className='title'>
                    <p>{data.title} </p>
                    <span>{convertToChineseYear(data.reg_date)} {getJustTime(data.reg_date)}</span>
                </div>
                <p className='desc'>
                    <img src={getImageUrl(data.img_url)} alt=""/>
                    {data.contents}
                </p>
            </div>
            <div className='answer'>
                <div className='title'>
                    <p>{answerState}</p>
                    <span>{answerDate}</span>
                </div>
                <p className='desc'>
                    <img src={getImageUrl(answerImg)} alt=""/>
                    {answerContents}
                </p>
            </div>
            <div className='btnCover'>
                <LineButton
                    onClick={deleteDirectInquiryDetail}
                    text={'刪除'} btnStyle={{marginRight:'6px', width:'48%',borderColor: Color.MAIN_RED,}} fontStyle={{color: Color.MAIN_RED}}/>
                <LineButton
                    onClick={moveToWriteScreen}
                    text={'表單'} btnStyle={{ width:'48%'}}/>
            </div>
        </section>
    );
};

export default DirectInquiryDetailScreen;