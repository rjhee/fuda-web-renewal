import React, {useState, useEffect} from 'react';
import heartIcon from "../../Assets/Images/icon/hart-icon.png";
import fullHeartIcon from "../../Assets/Images/icon/full-hart-icon.png";
import {isGuest} from "../../Service/AuthService";
import * as Heart from "../../Service/FeedLoveService"
import {iLoveFeed} from "../../Service/FeedService";
import {useParams} from "react-router-dom";

const HeartBtn = (props) => {
    const [count, setCount] = useState(props.count);
    const [on, setOn] = useState(false);

    useEffect(()=>{
        let love = Heart.get(props?.board_uid);
        let loveCnt = Heart.getCnt(props?.board_uid);
        setOn(love);
        setCount(loveCnt);
    })

    function turnLove (){
        if(isGuest() === true) {
            // checkUserType('loginFeed');
        }else {
            Heart.set(props.board_uid, !on);
            iLoveFeed(props.board_uid, !on).then((r)=>{
                console.log('HeartBtn.jsx:26 ->',r);
                console.log('LoveBtn.js::18 ->',r?.data[0][0]['likeCnt']);
                let cnt = r?.data[0][0]['likeCnt'];
                setCount(cnt);
                console.log('LoveBtn.js::22 ->',cnt);
                Heart.setCnt(props.board_uid, cnt);
            });
            setOn(!on)
        }
    }


    return (
        <button className='heart heartButton' onClick={()=>turnLove()}>
            <img className='heartButton' src={on ? fullHeartIcon : heartIcon} alt="heart button icon"/>
            <span className='heartButton'>{count}</span>
        </button>
    );
};

export default HeartBtn;