import React, {useEffect} from 'react';
import FeedCard from "./FeedCard";
import {Link, useNavigate} from "react-router-dom";

const FeedCardLists = (props) => {
    const navigate = useNavigate();
//http://localhost:3000/feed/result/lotto/big/2206
    //http://localhost:3000/feed/result/detail/2237

    function moveToDetailPage(data){
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
                    member_name: data.member_name,
                    member_grade: data.member_grade,
                    type: data.type,
                }})
    }
    useEffect(()=>{

    },[props.data])
    return (
        <div className='feedContentsCover'>
            {props.data ? props.data.map((item)=>
                <button onClick={()=>moveToDetailPage(item)}>
                    <FeedCard data={item} category={props.category}/>
                </button>
            ) : null}
        </div>
    );
};

export default FeedCardLists;