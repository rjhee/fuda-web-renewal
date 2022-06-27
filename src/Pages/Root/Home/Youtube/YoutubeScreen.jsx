import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import Title from '../../../../Components/Common/Title'
import {Color} from "../../../../Styles/Base/color";
import useWindowDimensions from "../../../../Styles/Base/windowDimensions";

const YoutubeScreen = () => {
const { height, width } = useWindowDimensions();
    return (
        <section className='youtubeCover'>
            <h1>
                <Title text1={lang().YOUTUBE} color={Color.MAIN_RED}/>
            </h1>
            <div className='contentsCover'>
                <p className='subTitleCover'>
                    {lang().YOUTUBE_DESC_1}
                    <span className='subTitlePoint'>{lang().YOUTUBE_DESC_2}</span>
                    {lang().YOUTUBE_DESC_3}
                </p>
                <div className='descCover'>
                    <strong>{lang().SHOW_TIME}</strong>
                    <p>{lang().SHOW_TIME_NUMBER}</p>
                    <span>* {lang().CAN_CHANGE_SCHEDULE}</span>
                </div>
                <a href="https://youtu.be/CZzPB2D7TKY" target='_blank' className='youtubeLink'>{lang().GOOD_LUCK} !</a>
                <div className='videoCover' style={{width:width-21*2, height:(width-21*2)/1.85}}>
                    <iframe src="https://youtube.com/embed/CZzPB2D7TKY" width={width-21*2} height={(width-21*2)/1.85}></iframe>
                </div>
            </div>
        </section>
    );
};

export default YoutubeScreen;