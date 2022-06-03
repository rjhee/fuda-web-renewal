import React from 'react';
import {Link} from "react-router-dom";
import useWindowDimensions from "../../Styles/Base/windowDimensions";

const AdBanner = (props) => {
    const { height, width } = useWindowDimensions();
    const bannerList = props.homeBanner && props.homeBanner.map((item, i)=>
        (
            <li key={i} className='AdBannerCover'>
                <Link as={Link} to={item.urlPath} >
                    <img style={{width:width-42, minWidth:width-42, minHeight:(width-42)/2.18}} src={item.imgPath} alt='banner images'/>
                    <spna className='index'>{i+1} | {props.homeBanner.length}</spna>
                </Link>
            </li>
        ));
    return (
        <ul className='AdBannerSection'>
            {bannerList}
        </ul>
    );
};

export default AdBanner;