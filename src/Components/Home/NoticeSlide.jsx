import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {getBillboard} from "../../Service/ComunityService";

const NoticeSlide = () => {
    const [wordsCnt, setWordsCnt] = useState(0);
    const [billboard, setBillboard] = useState([]);
    const [isFetching, setFetching] = useState(false);

    let billboardRender = [];
    async function getNoticeData(){
       let response = await getBillboard();
        let data = response.data;
        let words = 0;
        for(let i = 0; i<data.length; i++) {
            words+= data[i].contents.length;
            words+= 3;
        }
        setWordsCnt(words);
        for(let i = 0; i < data.length; i++){
            billboardRender.push(
                    <strong className={i%2 === 0 ? 'noticeTextPoint' : ''}> {data[i].contents} </strong>
            )
        }
        let render = [];
        setFetching(true);
        render.push(billboardRender);
        setBillboard(render);
    }
    useEffect(()=>{
        getNoticeData();
    },[wordsCnt])

    return (
        <aside className='noticeSlideCover'>
           <h1 className='noticeText'>
               {isFetching === false && billboard.length > 0 ? <span>loading</span>: billboard}
           </h1>
            <div className="headerLine"/>
        </aside>
    );
};

export default NoticeSlide;