import React, {useEffect, useState} from 'react';
import heartIcon from "../../Assets/Images/icon/hart-icon.png"
import commentIcon from "../../Assets/Images/icon/comment-icon.png"
import {getImageUrl} from "../../Service/util";
import {convertToChineseYear, getJustTime} from "../../Service/util";
import UserIdWithIcon from "../Common/UserIdWithIcon";
import {Color} from "../../Styles/Base/color";
import HeartBtn from "../Common/HeartBtn";
import CommentBtn from "../Common/CommentBtn";

const FeedCard = (props) => {
    // feed type
    // 1. full img
    // 2. half img
    // 3. only text
    // 4. lotto
    // 5. mail
    // 6. only text + no writer
    const [feedType, setFeedType] = useState('');


    function setTitle(title){
        if(feedType === 'lotto'){
            switch (props.data.member_grade) {
                case 'daily' :
                    return '今彩539';
                case 'big' :
                    return '大樂透';
                case 'super' :
                    return '威力彩';
            }


        }else {
            return title;
        }
    }

    function setColor(){
        switch (props.data.member_grade) {
            case 'daily' :
                return Color.ORANGE;
            case 'big' :
                return Color.DARK_BLUE;
            case 'super' :
                return Color.MAIN_RED;
        }
    }

    function setContents(content) {
        switch (feedType) {
            case 'halfImgType' :
                return props.data.contents.length > 80 ? props.data.contents.substr(0, 100)+'...' : props.data.contents;
            case 'fullImgType' :
                return '';
            case 'lotto' :
                let contentArr = content.split(',');
                 let number = contentArr.map((num, i)=>{
                     if(i < 6){
                        return <span className='num'>{num}</span>
                     }else {
                         return <span className='bonusNum'>{num}</span>
                     }
                })
                return number;
            default :
                return props.data.contents.length > 200 ? props.data.contents.substr(0, 200)+'...' : props.data.contents;
        }
    }

    useEffect(()=>{
        switch (props.data.type){
            case 1 :
                setFeedType('noWriter');
                break;
            case 2 :
                setFeedType('halfImgType');
                break;
            case 3 :
                setFeedType('fullImgType');
                break;
            case 4 :
                setFeedType('lotto');
                break;
            case 5 :
                setFeedType('halfImgType');
                break;
            case 6 :
                setFeedType('halfImgType');
                break;
            case 7 :
                setFeedType('halfImgType');
                break;
            case 8 :
                setFeedType('mail');
                break;


        }
    },[props.data.type])
    return (
        <article className={`feedCardCover ${feedType}`} style={{borderColor: setColor()}}>
            <header>
                <h1 className='title' style={{color: setColor()}}>{setTitle(props.data.title)}</h1>
                <div className='subTitle'>
                    <UserIdWithIcon member_grade={props.data.member_grade}
                                    member_name={props.data.member_name}/>
                    <span className='dateCover'>
                        <span className='date'>{convertToChineseYear(props.data.reg_date)}&nbsp;&nbsp;</span>
                        <span className='time'>{getJustTime(props.data.reg_date)}</span>
                    </span>
                    <span className='issueCover'>
                        <span className='issue'>&nbsp;第{props.data.title}期</span>
                        <span className='text'>&nbsp;開獎結果</span>
                    </span>
                </div>
            </header>
            <div className='main'>

                {props.data.img_url !== ''
                    ?
                    <>
                        <p>
                            {setContents(props.data.contents)}
                        </p>
                        <div className='img'>
                            <img src={getImageUrl(props.data.img_url)} alt='board contents image'/>
                        </div>
                    </>
                    :
                    <>
                        <p style={{width:'100%'}}>
                            {setContents(props.data.contents)}
                        </p>
                    </>
                }
                <div className='count'>
                    <span className='text'>頭獎</span>
                    <span className='num'>0 位</span>
                    <span className='money'>8,000,000 元</span>
                </div>
            </div>
            <footer>
                <div className='btnCover'>
                    <HeartBtn count={props.data.likeCnt}/>
                    <CommentBtn count={props.data.commentCnt}/>
                </div>
                <span className='category'># {props.category}</span>
            </footer>
        </article>
    );
};

export default FeedCard;