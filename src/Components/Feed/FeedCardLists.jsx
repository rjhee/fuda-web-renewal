import React, {useEffect} from 'react';
import FeedCard from "./FeedCard";
import {Link, useNavigate} from "react-router-dom";

const FeedCardLists = (props) => {
    const navigate = useNavigate();


    function moveToDetailPage(data,e){
        console.log('FeedCardLists.jsx:10 ->',data);
        if(e.target.className !== 'heartButton'){
            let path = data.type !== 4
                ? props.path
                : `${props.path}/${data.member_grade}`;
            navigate(`${path}/${data.uid}`,{state:
                    {
                        uid: data.uid,
                        title: data.title,
                        reg_date: data.reg_date,
                        img_url: data.img_url ? data.img_url : '',
                        heart: data.likeCnt,
                        comment: data.commentCnt,
                        contents: data.contents,
                        category: props.category,
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