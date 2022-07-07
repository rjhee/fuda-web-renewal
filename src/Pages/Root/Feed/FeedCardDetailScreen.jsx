import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {convertToChineseYear, getImageUrl, getJustTime} from "../../../Service/util";

import {useLocation} from "react-router-dom";
import HeartBtn from "../../../Components/Common/HeartBtn";
import CommentBtn from "../../../Components/Common/CommentBtn";

const FeedCardDetailScreen = (props) => {
    const location = useLocation();
    return (
        <section className='feedCardDetailCover'>
            <h1>
                <Title text1={location.state?.category} color={Color.MAIN_RED}/>
            </h1>
            <div className='contents'>
                <div className='title'>
                    <p>{location.state?.title} </p>
                    <span>{convertToChineseYear(location.state?.reg_date)} {getJustTime(location.state?.reg_date)}</span>
                </div>
                <p className='desc'>
                    <img src={getImageUrl(location.state?.img_url)} alt=""/>
                    {location.state?.contents}
                </p>
            </div>
            <footer>
                <div className='btnCover'>
                    <HeartBtn count={location.state?.heart}/>
                    <CommentBtn count={location.state?.comment}/>
                </div>
            </footer>

        </section>
    );
};

export default FeedCardDetailScreen;