import React from 'react';
import heartIcon from "../../Assets/Images/icon/hart-icon.png"
import commentIcon from "../../Assets/Images/icon/comment-icon.png"
import {getImageUrl} from "../../Service/util";
import {convertToChineseYear, getJustTime} from "../../Service/util";
import UserIdWithIcon from "../Common/UserIdWithIcon";

const FeedCard = (props) => {
    let cardType = props.cardType ? props.cardType : 'halfImg';
    return (
        <article className='feedCardCover'>
            <header>
                <h1 className='title'>{props.data.title}</h1>
                <div className='subTitle'>
                    <UserIdWithIcon member_grade={props.data.member_grade}
                                    member_name={props.data.member_name}/>
                    <span>{convertToChineseYear(props.data.reg_date) + " " + getJustTime(props.data.reg_date)}</span>
                </div>
            </header>
            <div className={'main '+cardType}>
                <p>
                    {props.data.contents.length > 100 ? props.data.contents.substr(0, 100)+'...' : props.data.contents}
                </p>
                <div className='img' style={{backgroundImage:props.data.img_url}}/>
            </div>
            <footer>
                <div className='btnCover'>
                    <button className='heart'>
                        <img src={heartIcon} alt="heart button icon"/>
                        <span>{props.data.likeCnt ? props.data.likeCnt : '0'}</span>
                    </button>
                    <button className='comment'>
                        <img src={commentIcon} alt="comment button icon"/>
                        <span>{props.data.commentCnt ? props.data.commentCnt : '0'}</span>
                    </button>
                </div>
                <span className='category'># 官方新聞</span>
            </footer>
        </article>
    );
};

export default FeedCard;