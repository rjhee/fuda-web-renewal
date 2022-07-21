import React from 'react';
import {getImageUrl} from "../../Service/util";

const FeedDetailContentContent = (props) => {
    return (
        <p className='desc'>
            <img src={getImageUrl(props.img_url)} alt="contents images"/>
            {props.contents}
        </p>
    );
};

export default FeedDetailContentContent;