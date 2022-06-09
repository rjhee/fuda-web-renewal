import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import useWindowDimensions from "../../Styles/Base/windowDimensions";
import arrowR from '../../Assets/Images/icon/arrow-icon.png'
import arrowL from '../../Assets/Images/icon/arrow-icon.png'
import {getBanner} from "../../Service/ComunityService";

const AdBanner = () => {
    const { height, width } = useWindowDimensions();
    const [imgIndex, setImgIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [bannerData, setBannerData] = useState([]);

    let bannerInterval = null;
    async function getData(){
        let bannerList = [];
        let response = await getBanner();
        let data = response.data;
        if(data.length === 0 || data === false) {
            return
        }else {
            data.sort((a, b)=> b['uid'] - a['uid'])
            data.forEach((item, i)=>{
                let banner = { key: item.uid, imgPath: item.image_url, urlPath: item.target_url_w};
                let bannerImg = {img :item.image_url, url: item.target_url_w};
                bannerList.push(banner);
            })
        }
        setBannerData(bannerList);
        setLastIndex(bannerList.length)
    }

    function onPrev(){
        setImgIndex(imgIndex);
        if(imgIndex+1 === 1) return null;
        else setImgIndex(imgIndex-1);
    }

    function onNext(){
        setImgIndex(imgIndex);
        if(imgIndex+1 === bannerData?.length) return null;
        else setImgIndex(imgIndex+1);
    }


    const Banner = (props) => {
        let i  = (!!props.index === false) ?  0 : props.index;
        return (
            <li key={i} className='AdBannerCover'>
                <Link as={Link} to={bannerData[i].urlPath}>
                    <img style={{width:width-42, minWidth:width-42, minHeight:(width-42)/2.18}} src={bannerData[i].imgPath} alt='banner images'/>
                    <span className='index'>{i+1} | {lastIndex}</span>
                </Link>
            </li>
        )
    }



    useEffect(()=>{
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        bannerInterval = setInterval(()=>{
            if(imgIndex+1 === lastIndex) setImgIndex(0);
            else setImgIndex(imgIndex+1);
        },2000)
        return (()=>{
            clearInterval(bannerInterval)
        })

    },[imgIndex])

    return (
        <ul className='AdBannerSection'>
            <button onClick={()=>onPrev()} className='arrowR'>
                <img src={arrowR} alt="arrow right button"/>
            </button>
            {bannerData.length !== 0 ? <Banner index={imgIndex}/> : null}
            <button onClick={()=> onNext()} className='arrowL'>
                <img src={arrowL} alt="arrow left button"/>
            </button>
        </ul>
    );
};

export default AdBanner;