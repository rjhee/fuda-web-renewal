import React,{useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import FeedDetailContents from "../../../Components/Feed/FeedDetailContents";
import FeedCommentForm from "../../../Components/Feed/FeedCommentForm";
import FeedCommentsList from "../../../Components/Feed/FeedCommentsList";
import {useLocation} from "react-router-dom";
import {getUserData} from "../../../Service/AuthService";
import {getFeedDetail} from "../../../Service/FeedService";
import FeedEventWinnerBall from "../../../Components/Feed/FeedEventWinnerBall";
import FeedEventResultBall from "../../../Components/Feed/FeedEventResultBall";
import HeartBtn from "../../../Components/Common/HeartBtn";
import CommentBtn from "../../../Components/Common/CommentBtn";


const FeedCardEventDetailScreen = (props) => {
    const location = useLocation();
    const [userUid, setUserUid] = useState(null);
    const [editComment, setEditComment] = useState({});
    const [mode, setMode] = useState('');
    let data = location.state;
    let category = location.state?.category;

    function isMine(thisUid){
        if(getUserData().uid === thisUid) {
            return true;
        }else {
            return false;
        }
    }


    function getCommentData(data){
        setEditComment(data);
    }

    const [renderList, setRenderList] = useState([]);
    let renderData = [];
    const imgRoot = 'https://sg.object.ncloudstorage.com/fuda-v2/';

    useEffect(() => {
        getData().then(result => {
            makeContents(result);
            setRenderList(renderData);
        });
    }, []);

    let getData = () => {
        return getFeedDetail(data.uid, data.type);
    }

    let makeContents = (r) => {
        let eventData = r.data[0];
        switch (eventData.event_type) {
            case 1:
                renderData.push(<img width={'100%'} src={(eventData.header_img).indexOf('https://') === -1 ? imgRoot + eventData.header_img : eventData.header_img}/>);
                break;

            case 2:
                renderData.push(<img width={'100%'} key={1} src={(eventData.header_img).indexOf('https://') === -1 ?imgRoot + eventData.header_img: eventData.header_img}/>)
                if ( eventData.eventData.winner &&eventData.eventData.winner.length > 0 ){
                    let winnerCount = eventData.eventData.winner.length;


                    //text parsing from db
                    let parseText =eventData.body_text;
                    let checkVariableStart =eventData.body_text.indexOf('${') , checkVariableEnd = eventData.body_text.indexOf('}');
                    if ( checkVariableStart !== -1 && checkVariableEnd !== -1 ){
                        parseText = parseText.substr(0,checkVariableStart) + winnerCount + parseText.substr(checkVariableEnd +1  , parseText.length);
                    }

                    renderData.push(
                        <div className='winnerCover'>
                            <div className='winnerContainer'>
                                <img width={'100%'} key={2} src={(eventData.body_img).indexOf('https://') === -1 ?imgRoot + eventData.body_img: eventData.body_img}/>
                                <span className='winnerText'>
                                    {parseText}
                                </span>
                            </div>
                            {eventData.eventData.winner
                                .sort((a, b)=> b['issue'] - a['issue'])
                                .map((item)=>
                                    <FeedEventWinnerBall
                                        i={item.idx}
                                        userId={item.member_name}
                                        b1={item.b1}
                                        b2={item.b2}
                                        b3={item.b3}
                                        b4={item.b4}
                                        b5={item.b5}
                                        b6={item.b6}/>
                                )}
                        </div>
                    );
                }


                if ( eventData.eventData.result &&eventData.eventData.result.length > 0 ){
                    console.log("check event data = " ,eventData.event_id );
                    renderData.push(
                        <div className='resultContainer'>
                            <img width={'100%'} key={3} src={(eventData.footer_img).indexOf('https://') === -1 ?imgRoot + eventData.footer_img: eventData.footer_img}/>
                            {eventData.event_id === '20220608' ? <></> :
                                <span className='resultText'>
                                    每期於9碼中<br/>
                                        對中任6碼即為中獎
                                </span>}
                            { eventData.event_id === '20220608'? <></> :
                                eventData.eventData.result
                                    .sort((a, b)=> b['issue'] - a['issue'])
                                    .map((item)=>
                                        <FeedEventResultBall
                                            i={item.idx}
                                            date={item.reg_date}
                                            issue={item.issue}
                                            b1={item.b1}
                                            b2={item.b2}
                                            b3={item.b3}
                                            b4={item.b4}
                                            b5={item.b5}
                                            b6={item.b6}
                                            b7={item.b7}
                                            b8={item.b8}
                                            b9={item.b9}/>
                                    )}
                        </div>
                    );
                }

                break;
        }
    }

    useEffect(()=>{
        let userUid = getUserData().uid;
        setUserUid(userUid);
        window.scrollTo(0, 0);
    },[])
    return (
        <section className='feedCardEventDetailCover'>
            <h1>
                <Title text1={category} color={Color.MAIN_RED}/>
            </h1>
            <section className='contents'>
                <h1 className='hidden'>contents list</h1>
                {renderList}
            </section>
            <footer>
                <div className='btnCover'>
                    <HeartBtn count={data.heart}/>
                    <CommentBtn count={data.comment}/>
                </div>
            </footer>
            <section className='commentCover'>
                <div className='writeCover'>
                    <FeedCommentForm
                        mode={mode}
                        editComment={editComment}
                        setMode={setMode}
                        data={data}/>
                </div>
                <FeedCommentsList
                    setMode={setMode}
                    getCommentData={getCommentData}
                    wishBoardPath={props.wishBoardPath}
                    winnerSharePath={props.winnerSharePath}
                    isMine={isMine}
                    userUid={userUid}
                    data={data}/>
            </section>
        </section>
    );
};

export default FeedCardEventDetailScreen;