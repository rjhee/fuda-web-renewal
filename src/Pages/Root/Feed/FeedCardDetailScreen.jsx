import React, {useEffect, useState} from 'react';
import FeedDetailContents from "../../../Components/Feed/FeedDetailContents";
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {useLocation} from "react-router-dom";
import FeedCommentForm from "../../../Components/Feed/FeedCommentForm";
import LineButton from "../../../Components/Common/LineButton";
import FeedCommentsList from "../../../Components/Feed/FeedCommentsList";
import {getUserData} from "../../../Service/AuthService";

const FeedCardDetailScreen = (props) => {
    const location = useLocation();
    const [userUid, setUserUid] = useState(null);
    const [editComment, setEditComment] = useState({});
    const [mode, setMode] = useState('');
    let data = location.state;
    let category = location.state?.category;
    // let uid = location.state?.uid;
    // let title = location.state?.title;
    // let reg_date = location.state?.reg_date;
    // let member_grade = location.state?.member_grade;
    // let member_name = location.state?.member_name;
    // let member_uid = location.state?.member_uid;
    // let contents = location.state?.contents;
    // let img_url = location.state?.img_url;
    // let heart = location.state?.heart;
    // let comment = location.state?.comment;
    // let board_type = location.state?.type;

    function isMine(thisUid){
        if(getUserData().uid === thisUid) {
            return true;
        }else {
            return false;
        }
    }


    function getCommentData(data){
        setEditComment(data);
    }

    useEffect(()=>{
        let userUid = getUserData().uid;
        setUserUid(userUid);
        window.scrollTo(0, 0);
    },[])

    return (
        <section className='feedCardDetailCover'>
            <h1>
                <Title text1={category} color={Color.MAIN_RED}/>
            </h1>
            <FeedDetailContents
                isMine={isMine}
                data={data}
                writePath={props.writePath}
                winnerSharePath={props.winnerSharePath}
                wishBoardPath={props.wishBoardPath}/>
            <section className='commentCover'>
                <div className='writeCover'>
                    <FeedCommentForm
                        mode={mode}
                        editComment={editComment}
                        setMode={setMode}
                        data={data}/>
                </div>
                <FeedCommentsList
                    setMode={setMode}
                    getCommentData={getCommentData}
                    wishBoardPath={props.wishBoardPath}
                    winnerSharePath={props.winnerSharePath}
                    isMine={isMine}
                    userUid={userUid}
                    data={data}/>
            </section>
        </section>
    );
};

export default FeedCardDetailScreen;