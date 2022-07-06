import React, {useEffect} from 'react';
import FeedCard from "./FeedCard";
import {Link, useNavigate} from "react-router-dom";

const FeedContents = (props) => {
    const navigate = useNavigate();
    console.log('FeedContents.jsx:7 ->',props);
    function moveToDetailPage(data){
        navigate(`${props.path}/${data.uid}`,{state:{ uid: data.uid, title: data.title, reg_date: data.reg_date, img_url: data.img_url ? data.img_url : '', contents: data.contents}})
    }
    useEffect(()=>{

    },[props.data])
    return (
        <div className='feedContentsCover'>
            {props.data ? props.data.map((item)=>
                <button onClick={()=>moveToDetailPage(item)}>
                    <FeedCard data={item}/>
                </button>
            ) : null}
        </div>
    );
};

export default FeedContents;