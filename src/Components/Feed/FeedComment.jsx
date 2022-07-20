import React, {useEffect, useState} from 'react';
import UserIdWithIcon from "../Common/UserIdWithIcon";
import {convertToChineseYear, getJustTime} from "../../Service/util";
import DotBtn from "./DotBtn";
import DotBtnMenu from "./DotBtnMenu";
import {deleteComment, deleteFeed} from "../../Service/FeedService";


const FeedComment = (props) => {
    const [menuOn, setMenuOn] = useState(false);

    async function deleteCommentData(){
        let answer = window.confirm('您確認要刪除嗎?');
        if(answer) {
            // TODO await 랑 then 같이? 물어보기
            await deleteComment(props.item.uid).then(r => {
                window.location.reload();
            });
        }
        else {
            return null;
        }


    }

    function clickEditBtn(){
        props.setMode('edit');
        props.getCommentData(props.item);
        setMenuOn(false);
    }

    return (
        <li>
            {menuOn === true
                ? <DotBtnMenu onDelete={deleteCommentData} onEdit={clickEditBtn}/>
                : null}
            <div className='title'>
                <UserIdWithIcon member_grade={props.item.member_grade}
                                member_name={props.item.member_name}/>
                {props.isMine(props.item.member_uid)
                    ? <DotBtn grey={true} menuOn={menuOn} setMenuOn={setMenuOn}/>
                    : null}
            </div>
            <p className='contents'>{props.item.comment}</p>
            <span className='date'>{convertToChineseYear(props.item.up_date)}&nbsp;&nbsp;{getJustTime(props.item.up_date)}</span>
        </li>
    );
};

export default FeedComment;