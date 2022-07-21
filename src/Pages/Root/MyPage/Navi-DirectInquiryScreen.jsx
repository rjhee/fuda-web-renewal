import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";

import LineButton from "../../../Components/Common/LineButton";
import Pagination from "../../../Components/Common/Pagination";
import {getUserQnAList, getUserQnAListCnt} from "../../../Service/UserService";
import {convertToChineseYear} from "../../../Service/util";
import {useNavigate} from "react-router-dom";

const NaviDirectInquiryScreen = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);
    const [data, setData] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    let navigate = useNavigate();
    const pageCount = 5;

    let getData = async () => {
        getUserQnAList((currentPage) * pageCount, pageCount).then(result => {
            console.log('Navi-DirectInquiryScreen.jsx:20 ->',result.data);
            if (result.data !== null && result.data.length !== 0) {
                    setData(result.data);
            }
        });
        getUserQnAListCnt().then(result => {
            if(result.data !== null && result.data !== undefined) {
                let maxPage = parseInt((result.data[0].cnt-1) / pageCount) + 1;
                setMaxPage(maxPage < 1? 1: maxPage);
            }

        });

    }
    function setQnaState(state) {
        switch(state) {
            case 'wait' :
            case 'process' :
              return <span className='response_n'>回覆中</span>
            case 'end' :
               return <span className='response_y'>回覆完成</span>
        }
    }

    function onPrev() {
        if(currentPage+1 === 1)return;
        else setCurrentPage(currentPage-1);
    }

    function onNext() {
        if(currentPage+1 === maxPage)return;
        else setCurrentPage(currentPage+1);
    }

    let openMail = () => {
       window.open('mailto:cs@fudalotto.com.tw');
    }
    function mowWriteQnaPage() {
        navigate(props.writePath);
    }

    function moveQnaDetailPage(uid){
        navigate(props.detailPath + "/uid=" +uid,{state:{uid: uid}});
    }

    useEffect(()=>{
       getData();
    },[currentPage])
    return (
        <section className='qnaCover'>
            <h1>
                <Title text1={'一對一諮詢'} color={Color.MAIN_RED}/>
            </h1>
            <div className='desc'>
                <h1>一旦收到您的詢問，我們會盡快回覆</h1>
            </div>
            <p>一對一諮詢僅限週一至週五 09:00 至 18:00 提供服務，<br/>
                18:00 後之諮詢將於次日回覆。</p>
            <ul className='qnaHeader'>
                <li className='title'>標題</li>
                <li className='date'>日期</li>
                <li className='response'>回覆</li>
            </ul>
            {data.length === 0 ?
                <div className='nodata'>
                    您尚未提出問題
                </div>
            :
                <ul className='qnaBody'>
                    {data.map((data)=>
                        <li onClick={()=>moveQnaDetailPage(data.uid)}>
                            <span className='title'>{data.title}</span>
                            <span className='date'>{convertToChineseYear(data.reg_date)}</span>
                            {setQnaState(data.state)}
                        </li>
                    )}
                </ul>
            }
            <footer>
                <Pagination
                    current={currentPage}
                    last={maxPage}
                    onPrev={onPrev}
                    onNext={onNext}/>
                <LineButton
                    onClick={mowWriteQnaPage}
                    text={'詢問'} btnStyle={{borderColor: Color.MAIN_RED, width:'100px'}} fontStyle={{color: Color.MAIN_RED}}/>
            </footer>
            <div className='emailQna'>
                <strong>客服信箱</strong>
                <span>cs@fudalotto.com.tw</span>
                <LineButton
                    onClick={openMail}
                    text={'寄信'} btnStyle={{borderColor: Color.MAIN_RED, width:'100px'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default NaviDirectInquiryScreen;