import React from 'react';
import commentIcon from "../../Assets/Images/icon/comment-icon.png";

const CommentBtn = (props) => {
    let count = props.count ? props.count : 0;
    return (
        <button className='comment'>
            <img src={commentIcon} alt="comment button icon"/>
            <span>{count}</span>
        </button>
    );
};

export default CommentBtn;