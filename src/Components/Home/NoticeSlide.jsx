import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {getNoticeTitle} from "../../Service/ComunityService";

const NoticeSlide = () => {
    const [title, setTitle] = useState([]);
    async function getNoticeData(){
       let response = await getNoticeTitle(3);
       let data = response.data;
        let titleArr = [];
        for(let i = 0; i < data.length; i++){
            titleArr.push({uid: data[i].uid, title: data[i].title})
        }
        setTitle(titleArr);
        console.log('NoticeSlide.jsx:15 ->',titleArr);
    }
    useEffect(()=>{
        getNoticeData();
    },[])
    return (
        <aside className='noticeSlideCover'>
           <h1 className='noticeText'>
               {title.map((item)=>
                   <>
                       <strong> {item.title} </strong>
                       <strong className='noticeTextPoint'> {item.title} </strong>
                   </>
               )}
           </h1>
            <div className="headerLine"/>
        </aside>
    );
};

export default NoticeSlide;