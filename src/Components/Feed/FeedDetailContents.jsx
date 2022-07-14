import React, {useEffect, useState} from 'react';
import Title from "../Common/Title";
import {Color} from "../../Styles/Base/color";
import {convertToChineseYear, getImageUrl, getJustTime} from "../../Service/util";
import HeartBtn from "../Common/HeartBtn";
import CommentBtn from "../Common/CommentBtn";
import {useLocation} from "react-router-dom";
import UserIdWithIcon from "../Common/UserIdWithIcon";
import FeedComment from "./FeedComment";
import LineButton from "../Common/LineButton";
import FeedCommentsList from "./FeedCommentsList";
import {getUserData} from "../../Service/AuthService";

const FeedDetailContents = (props) => {
    const location = useLocation();
    const [userUid, setUserUid] = useState(null);
    const [titleColor, setTitleColor] = useState(Color.LIGHT_RED);

    let data = location.state;
    let category = location.state?.category;
    let title = location.state?.title;
    let reg_date = location.state?.reg_date;
    let member_grade = location.state?.member_grade;
    let member_name = location.state?.member_name;
    let contents = location.state?.contents;
    let img_url = location.state?.img_url;
    let heart = location.state?.heart;
    let comment = location.state?.comment;

    function setTitleColorEachLotto(){
        let boardType = location.state?.type;

        if(boardType === 4) {
            switch (member_grade) {
                case "daily":
                    setTitleColor(Color.ORANGE);
                    break;
                case "big" :
                    setTitleColor(Color.DARK_BLUE);
                    break;
                case "super" :
                    setTitleColor(Color.REGULAR_RED);
                    break;
            }
        }
    }
    useEffect(()=>{
        let userUid = getUserData().uid;
        setUserUid(userUid);

        setTitleColorEachLotto();
    },[])
    return (
        <section className='feedCardDetailCover'>
            <h1>
                <Title text1={category} color={Color.MAIN_RED}/>
            </h1>
            <div className='contents'>
                <div className='title' style={{backgroundColor:titleColor}}>
                    <p>{title} </p>
                    <div>
                        <UserIdWithIcon member_grade={member_grade}
                                        member_name={member_name}/>
                        <span>{convertToChineseYear(reg_date)} {getJustTime(reg_date)}</span>
                    </div>
                </div>
                <p className='desc'>
                    <img src={getImageUrl(img_url)} alt="contents images"/>
                    {contents}
                </p>
            </div>
            <footer>
                <div className='btnCover'>
                    <HeartBtn count={heart}/>
                    <CommentBtn count={comment}/>
                </div>
            </footer>
            <section className='commentCover'>
                <div className='writeCover'>
                    <FeedComment/>
                    <LineButton text={'上傳留言'} btnStyle={{borderColor: '#E5E5E5'}} fontStyle={{color: '#656565'}}/>
                </div>
            <FeedCommentsList
                userUid={userUid}
                data={data}/>
            </section>
        </section>
    );
};

export default FeedDetailContents;