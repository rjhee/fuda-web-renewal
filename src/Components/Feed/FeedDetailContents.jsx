import React, {useEffect, useState} from 'react';
import {Color} from "../../Styles/Base/color";
import {convertToChineseYear, getImageUrl, getJustTime} from "../../Service/util";
import HeartBtn from "../Common/HeartBtn";
import CommentBtn from "../Common/CommentBtn";
import {useNavigate} from "react-router-dom";
import UserIdWithIcon from "../Common/UserIdWithIcon";
import DotBtnMenu from "./DotBtnMenu";
import {deleteFeed} from "../../Service/FeedService";
import DotBtn from "./DotBtn";
import WinnerData from "./WinnerData";

const FeedDetailContents = (props) => {
    const navigate = useNavigate();
    const [titleColor, setTitleColor] = useState(Color.LIGHT_RED);
    const [menuOn, setMenuOn] = useState(false);
    let uid = props.data.uid;
    let boardType = props.data.type;
    function setTitleColorEachLotto(){
        if(props.data.board_type === 4) {
            switch (props.data.member_grade) {
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

   async function deleteFeedData(){
        let answer = window.confirm('您確認要刪除嗎?');
        if(answer) {
            await deleteFeed(props.data.uid);
            navigate(-1);
        }
        else {
            return null;
        }
    }

    function clickEditBtn(){
        let object = {
            uid : props.data.uid,
            title : props.data.title,
            reg_date : props.data.reg_date,
            // img_url : props.data.img_url,
            contents : props.data.contents,
            board_type : props.data.type,
            mode: 'edit',}
        console.log('FeedDetailContents.jsx:54 ->',props.data);
        if(boardType === 6){
            navigate(props.winnerSharePath + props.writePath +"/"+uid,
                {state: object
                });
        }
        else if(boardType === 7){
            navigate(props.wishBoardPath + props.writePath +"/"+uid,
                {state: object
                });
        }
    }

    useEffect(()=>{
        setTitleColorEachLotto();
    },[])
    return (
        <section className='feedContentCover'>
            {menuOn === true
                ?  <DotBtnMenu onDelete={deleteFeedData} onEdit={clickEditBtn}/>
                : null
            }
            <div className='contents'>
                <div className='title' style={{backgroundColor:titleColor}}>
                    <div>
                        <p>{props.data.title} </p>
                        {props.isMine(props.data.member_uid) === true
                            ? <DotBtn menuOn={menuOn} setMenuOn={setMenuOn}/>
                            : null}
                    </div>
                    <div>
                        <UserIdWithIcon member_grade={props.data.member_grade}
                                        member_name={props.data.member_name}/>
                        <span>{convertToChineseYear(props.data.reg_date)} {getJustTime(props.data.reg_date)}</span>
                    </div>
                    {boardType === 6
                        ? <WinnerData uid={uid}/>
                        : null}
                </div>
                <p className='desc'>
                    <img src={getImageUrl(props.data.img_url)} alt="contents images"/>
                    {props.data.contents}
                </p>
            </div>
            <footer>
                <div className='btnCover'>
                    <HeartBtn count={props.data.heart}/>
                    <CommentBtn count={props.data.comment}/>
                </div>
            </footer>

        </section>
    );
};

export default FeedDetailContents;