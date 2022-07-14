import React, {useState, useEffect} from 'react';
import {Color} from "../../Styles/Base/color";
import UserIdWithIcon from "../Common/UserIdWithIcon";
import {getCommentList} from "../../Service/FeedService";
import {getJustTime, convertToChineseYear} from "../../Service/util";
import {getUserData} from "../../Service/AuthService";
import Pagination from "../Common/Pagination";

const FeedCommentsList = (props) => {
    const[page, setPage] = useState(0);
    const[lastPage, setLastPage] = useState(1);
    const[commentData, setCommentData] = useState([]);

    const pageCount = 5; //한번에 보여줄 댓글 수량
    async function getData(){

        let result = await getCommentList(props.data?.uid, pageCount * page, pageCount);
        let data = result.data;

        if(result.data !== null){
            setCommentData(data);
        }
    }
    function getCommentCount(){
        if(!!props.data?.comment === true) {
            setLastPage(Math.ceil(parseInt(props.data?.comment)/5));
        }
    }

    useEffect(()=>{
        getCommentCount();
        getData();
    },[page])

    function onPrev() {
        if(page+1 === 1) return null;
        else setPage(page-1);
    }

    function onNext() {
        if(page+1 === lastPage)return null;
        else setPage(page+1);
    }

    return (
        <section className='commentsListCover'>
            <h1 style={{backgroundColor: props.titleColor}}>回覆</h1>
            <div className='list'>
                <ul>
                    {commentData.length !== 0
                        ? commentData.map((item)=>
                            <li>
                                <div className='title'>
                                    <UserIdWithIcon member_grade={item.member_grade}
                                                    member_name={item.member_name}/>
                                    {props.userUid === item.member_uid
                                        ? <button className='settingBtn'/>
                                        : null}
                                </div>
                                <p className='contents'>{item.comment}</p>
                                <span className='date'>{convertToChineseYear(item.reg_date)}&nbsp;&nbsp;{getJustTime(item.reg_date)}</span>
                            </li>)
                        : <li className='noData'>目前沒有留言</li>}
                </ul>
                <Pagination onPrev={onPrev} onNext={onNext} current={page} last={lastPage}/>
            </div>
        </section>
    );
};

export default FeedCommentsList;