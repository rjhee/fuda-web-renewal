import React, {useState, useEffect} from 'react';
import {Color} from "../../Styles/Base/color";
import UserIdWithIcon from "../Common/UserIdWithIcon";
import {getCommentList} from "../../Service/FeedService";
import {getJustTime, convertToChineseYear} from "../../Service/util";
import {getUserData} from "../../Service/AuthService";
import Pagination from "../Common/Pagination";
import FeedComment from "./FeedComment";

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
    function getCommentDataCount(){
        if(!!props.data?.comment === true) {
            setLastPage(Math.ceil(parseInt(props.data?.comment)/5));
        }
    }

    useEffect(()=>{
        getCommentDataCount();
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
                            <FeedComment
                                setMode={props.setMode}
                                getCommentData={props.getCommentData}
                                item={item}
                                isMine={props.isMine}
                                wishBoardPath={props.wishBoardPath}
                                winnerSharePath={props.winnerSharePath}
                                board_type={props.data.type}/>)
                        : <li className='noData'>目前沒有留言</li>}
                </ul>
                <Pagination onPrev={onPrev} onNext={onNext} current={page} last={lastPage}/>
            </div>
        </section>
    );
};

export default FeedCommentsList;