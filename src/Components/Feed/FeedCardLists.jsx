import React, {useEffect} from 'react';
import FeedCard from "./FeedCard";
import {Link, useNavigate} from "react-router-dom";
import {lang} from "../../Assets/Lang/Lang";

const FeedCardLists = (props) => {
    const navigate = useNavigate();

    function setPath(type){
        switch (type){
            case 1 :
                return props.officialPath;
            case 2 :
                return props.newsPath;
            case 3 : // 이벤트 피드
                return props.eventPath;
            case 4 : // 로또 피드
                return props.resultPath;
            case 5 :
                return props.winnerPath;
            case 6 :
                return props.winnerSharePath;
            case 7 :
                return props.wishBoardPath;
                case 8 :
                    return props.mailPath;

        }
    }

    function setCategoryName(type){
        switch (type){
            case 1 :
                return lang().OFFICIAL;
            case 2 :
                return lang().FUDANEWS;
            case 3 : // 이벤트 피드
                return lang().EVENT;
            case 4 : // 로또 피드
                return lang().RESULT;
            case 5 :
                return lang().WINNER;
            case 6 :
                return lang().WINNERSHARE;
            case 7 :
                return lang().WISHBOARD;
            case 8 :
                return lang().MAIL;

        }
    }

    function moveToDetailPage(data,e){
        console.log('FeedCardLists.jsx:10 ->',data);
        let type = data.type;
        let path = type !== 4 ?  setPath(data.type) : `${setPath(data.type)}/${data.member_grade}`;

        if(e.target.className !== 'heartButton'){
            navigate(`${path}/${data.uid}`,{state:
                    {
                        uid: data.uid,
                        title: data.title,
                        reg_date: data.reg_date,
                        img_url: data.img_url ? data.img_url : '',
                        heart: data.likeCnt,
                        comment: data.commentCnt,
                        contents: data.contents,
                        category: setCategoryName(type),
                        member_uid: data.member_uid,
                        member_name: data.member_name,
                        member_grade: data.member_grade,
                        type: data.type,
                    }})
            if(e.target.className === 'commentButton') {
                    // TODO card 에서 댓글 버튼 클릭했을때 댓글 리스트로 스크롤돼서 이동
            }
        }

    }
    useEffect(()=>{

    },[props.data])
    return (
        <div className='feedContentsCover'>
            {props.data ? props.data.map((item)=>
                <div onClick={(e)=>moveToDetailPage(item, e)}>
                    <FeedCard data={item} category={props.category}/>
                </div>
            ) : null}
        </div>
    );
};

export default FeedCardLists;