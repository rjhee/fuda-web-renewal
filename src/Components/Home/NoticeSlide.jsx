import React from 'react';
import {lang} from "../../Assets/Lang/Lang";

const NoticeSlide = () => {
    return (
        <aside className='noticeSlideCover'>
           <h1 className='noticeText'>
               <strong>{lang().NOTICE}</strong>
               <strong className='noticeTextPoint'>{lang().NOTICE_POINT} </strong>
               <strong>{lang().NOTICE}</strong>
               <strong className='noticeTextPoint'>{lang().NOTICE_POINT} </strong>
           </h1>
            <div className="headerLine"/>
        </aside>
    );
};

export default NoticeSlide;