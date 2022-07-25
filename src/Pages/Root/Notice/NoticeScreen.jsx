import React, {useEffect, useState} from 'react';
import Title from "../../../Components/Common/Title";
import {lang} from "../../../Assets/Lang/Lang";
import {Color} from "../../../Styles/Base/color";
import {getNotice, getNoticeNum} from "../../../Service/ComunityService";
import Pagination from "../../../Components/Common/Pagination";
import {useNavigate} from "react-router-dom";

const NoticeScreen = (props) => {
    const navigate = useNavigate();
    const [noticeData, setNoticeData] = useState([]);
    const [page, setPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);
    const noticeDataCopy = [];


    async function getData(){
        let result = await getNotice(page);
        if(result.data.length === 0 || result.data === false) {
            return
        }else {
            result.data.forEach((item, i)=>{
                let dayFull = new Date(item.reg_date);
                let day = dayFull.toISOString().split("T")[0];
                let time = dayFull.toISOString().split("T")[1].substr(0,5);
                let day3 = day.split('-');
                day3[0] = day3[0] - 1911;
                item.reg_date = day3.join('.')+" "+time;
                let listData = { key: item.uid, date: item.reg_date, title: item.title, contents: item.contents, img: item.image, read_count: item.read_count};
                noticeDataCopy.push(listData)
            });
            setNoticeData(noticeDataCopy);
        }
        result = await getNoticeNum();
        setLastPage(Math.ceil(result.data.count/10));
    }

    const onPrev = () => {
        if(page+1 === 1) return true;
        else setPage(page-1);
    }

    const onNext = () => {
        if(page+1 === lastPage) return true;
        else setPage(page+1);
    }

    function moveToDetailPage(data){
        navigate(props.detailPath, {state:
                {
                    uid: data.uid,
                    title: data.title,
                    contents: data.contents,
                    img: data.img,
                    view: data.read_count,
                    date: data.date
                }})
    }

    useEffect(()=>{

    },[])

    useEffect(()=>{
      getData();
        window.scrollTo(0, 0);
    },[page])

    return (
        <section className='NoticeScreen'>
            <h1>
                <Title text1={lang().ANNOUNCEMENT} color={Color.MAIN_RED}/>
            </h1>
            <ul className='list'>
                {noticeData?.map((item)=>
                    <li key={item.key}>
                        <button onClick={()=> moveToDetailPage(item)}>
                            <strong className='title'>{item.title}</strong>
                            <div className='dateBox'>
                                <span>{item.date}</span>
                                <span>{lang().VIEW} {item.read_count}</span>
                            </div>
                        </button>
                    </li>
                )}
            </ul>
            <Pagination current={page} last={lastPage} onNext={onNext} onPrev={onPrev}/>
        </section>
    );
};

export default NoticeScreen;