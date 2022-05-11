import React from 'react';
import useWindowDimensions from "../../Styles/Base/windowDimensions";

const GuideBanner = (props) => {
    const { height, width } = useWindowDimensions();
    return (
        <div className='guideBannerSection'>
            <img style={{width:width-42}} src={props.imgPath} alt="guide banner"/>
        </div>
    );
};

export default GuideBanner;