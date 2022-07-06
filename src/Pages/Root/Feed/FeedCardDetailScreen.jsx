import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {convertToChineseYear, getImageUrl, getJustTime} from "../../../Service/util";

import {useLocation} from "react-router-dom";

const FeedCardDetailScreen = (props) => {
    const location = useLocation();
    return (
        <section className='qnaDetailCover'>
            <h1>
                <Title text1={'一對一諮詢'} color={Color.MAIN_RED}/>
            </h1>
            <div className='question'>
                <div className='title'>
                    <p>{location.state?.title} </p>
                    <span>{convertToChineseYear(location.state?.reg_date)} {getJustTime(location.state?.reg_date)}</span>
                </div>
                <p className='desc'>
                    <img src={getImageUrl(location.state?.img_url)} alt=""/>
                    {location.state?.contents}
                </p>
            </div>

        </section>
    );
};

export default FeedCardDetailScreen;