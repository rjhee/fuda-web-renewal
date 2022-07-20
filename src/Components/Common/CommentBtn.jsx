import React from 'react';
import commentIcon from "../../Assets/Images/icon/comment-icon.png";

const CommentBtn = (props) => {
    let count = props.count ? props.count : 0;
    return (
        <button className='comment commentButton'>
            <img className='commentButton' src={commentIcon} alt="comment button icon"/>
            <span className='commentButton'>{count}</span>
        </button>
    );
};

export default CommentBtn;