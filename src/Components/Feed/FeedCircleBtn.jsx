import React, {useEffect} from 'react';
import CircleButton from "../Common/CircleButton";
import {Link} from "react-router-dom";
import {Color} from "../../Styles/Base/color";

const FeedCircleBtn = (props) => {

    return (
        <div className='feedCircleBtnCover'>
            {props?.data?.map((item)=>
                <Link to={item.path}>
                    <CircleButton color={item.on === true ? Color.LIGHT_RED : null} titleImg={item.icon} iconSize={item.iconSize} subTitle={item.subTitle}/>
                </Link>
            )}
        </div>
    );
};

export default FeedCircleBtn;