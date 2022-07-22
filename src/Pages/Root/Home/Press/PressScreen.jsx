import React, {useEffect, useState} from 'react';
import {getPress, getPressNum} from "../../../../Service/ComunityService";
import Title from "../../../../Components/Common/Title";
import {lang} from "../../../../Assets/Lang/Lang";
import {Color} from "../../../../Styles/Base/color";
import {Link} from "react-router-dom";
import Pagination from "../../../../Components/Common/Pagination";
import * as LoadingService from "../../../../Service/LoadingService"

const PressScreen = () => {
    const [press, setPress] = useState([]);
    const [page, setPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);

    async function getPressData(){
        let result = await getPress(page);
        result.data.map((item)=>{
            let day = new Date(item.reg_date);
            let day2 = day.toISOString().split("T")[0];
            let day3 = day2.split('-');
            day3[0] = day3[0] - 1911;
            item.reg_date = day3.join('.');
        })
        setPress(result.data);
    }

    async function getPressDataNum(){
        let result = await getPressNum();
        setLastPage(Math.ceil(result.data.count/5));
    }

    function onPrev() {
        if(page+1 === 1) return null;
        else setPage(page-1);
    }

    function onNext() {
        if(page+1 === lastPage)return null;
        else setPage(page+1);
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    useEffect(()=>{
        getPressData();
        getPressDataNum();
    },[page])


    return (
       <section className='pressCover'>
           <h1>
               <Title color={Color.MAIN_RED} text1={lang().MEDIA_REPORTS}/>
           </h1>
           {press.map((item)=>
               <a href={item.press_url} target="_blank">
                   <article className='pressBox'>
                       <div className='titleCover'>
                           <h1 className='title'>
                               <img src={item.press_logo} alt="press icon"/>
                           </h1>
                           <Link to={item.press_url}>
                               <span className='moreBtn'>MORE+</span>
                           </Link>
                       </div>
                       <div className='contents'>
                           <strong className='title'>{item.title.length > 19 ? item.title.substr(0, 19)+'...' : item.title}</strong>
                           <p className='content'>{item.contents}</p>
                       </div>
                       <div className='date'>
                           <strong>{item.press_name}</strong>
                           <span>{item.reg_date}</span>
                       </div>
                   </article>
               </a>
           )

           }
           <Pagination
               current={page}
               last={lastPage}
               onPrev={onPrev}
               onNext={onNext}/>
       </section>
    );
};

export default PressScreen;