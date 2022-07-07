import React, {useEffect} from 'react';
import FeedCard from "./FeedCard";
import {Link, useNavigate} from "react-router-dom";

const FeedCardLists = (props) => {
    const navigate = useNavigate();


    function moveToDetailPage(data){
        navigate(`${props.path}/${data.uid}`,{state:{ uid: data.uid, title: data.title, reg_date: data.reg_date, img_url: data.img_url ? data.img_url : '', heart: data.likeCnt, comment: data.commentCnt, contents: data.contents, category: props.category}})
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