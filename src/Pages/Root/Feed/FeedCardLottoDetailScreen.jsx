import React, {useEffect, useState} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {convertToChineseYear, getImageUrl, getJustTime} from "../../../Service/util";
import HeartBtn from "../../../Components/Common/HeartBtn";
import CommentBtn from "../../../Components/Common/CommentBtn";
import FeedCommentForm from "../../../Components/Feed/FeedCommentForm";
import LineButton from "../../../Components/Common/LineButton";
import FeedCommentsList from "../../../Components/Feed/FeedCommentsList";
import {useLocation} from "react-router-dom";
import {getUserData} from "../../../Service/AuthService";
import {lang} from "../../../Assets/Lang/Lang";
import {getLottoDetail} from "../../../Service/LottoService"
import LottoDetailRankList from "../../../Components/Feed/LottoDetailRankList";

const FeedCardLottoDetailScreen = (props) => {
    const location = useLocation();
    const [userUid, setUserUid] = useState(null);
    const [titleColor, setTitleColor] = useState(Color.LIGHT_RED);
    const [commentColor, setCommentColor] = useState(Color.LIGHT_RED);
    const [titleText, setTitleText] = useState('');
    const [lottoArr, setLottoArr] = useState([]);



    let data = location?.state;
    let category = location?.state?.category;
    let issue = location?.state?.title;
    let reg_date = location?.state?.reg_date;
    let lotto_type = location?.state?.member_grade;
    let member_name = location?.state?.member_name;
    let contents = location?.state?.contents;
    let img_url = location?.state?.img_url;
    let heart = location?.state?.heart;
    let comment = location?.state?.comment;

    function createLottoArr(){
        let arr = location.state?.contents.split(',');
        setLottoArr(arr);
    }

    function setTitleColorEachLotto(){
        switch (lotto_type) {
            case "daily":
                setTitleColor(Color.ORANGE);
                setTitleText(lang().DAILY_LOTTO);
                setCommentColor(Color.REGULAR_ORANGE);
                break;
            case "big" :
                setTitleColor(Color.DARK_BLUE);
                setCommentColor(Color.LIGHT_BLUE);
                setTitleText(lang().BIG_LOTTO);
                break;
            case "super" :
                setTitleColor(Color.REGULAR_RED);
                setCommentColor(Color.LIGHT_RED);
                setTitleText(lang().SUPER_LOTTO);
                break;
        }
    }



    useEffect(()=>{
        let userUid = getUserData().uid;
        setUserUid(userUid);
        console.log('FeedCardLottoDetailScreen.jsx:51 ->',contents);
        createLottoArr();
        setTitleColorEachLotto();

    },[titleText])

    return (
        <section className='feedCardLottoDetailCover'>
            <h1>
                <Title text1={category} color={Color.MAIN_RED}/>
            </h1>
            <div className='contents'>
                <div className='title' style={{backgroundColor:titleColor}}>
                    <p>{titleText}</p>
                    <div>
                        <span>{convertToChineseYear(reg_date)} 第{issue}期 開獎結果</span>
                    </div>
                </div>
                <p className='desc'>
                    <ul className='lottoNum'>
                        {lottoArr.map((num,i)=>
                        {
                            if(i < 6){
                                return <li className='num'>{num}</li>
                            }else {
                                return <li className='bonusNum'>{num}</li>
                            }
                        }

                        )}
                    </ul>
                    <LottoDetailRankList lotto_type={lotto_type} issue={issue}/>
                </p>
            </div>
            <footer>
                <div className='btnCover'>
                    <HeartBtn count={heart}/>
                    <CommentBtn count={comment}/>
                </div>
            </footer>
            <section className='commentCover'>
                <div className='writeCover'>
                    <FeedCommentForm/>
                    <LineButton text={'上傳留言'} btnStyle={{borderColor: '#E5E5E5'}} fontStyle={{color: '#656565'}}/>
                </div>
                <FeedCommentsList
                    titleColor={commentColor}
                    userUid={userUid}
                    data={data}/>
            </section>
        </section>
    );
};

export default FeedCardLottoDetailScreen;