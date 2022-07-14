import React from 'react';
import Textarea from "../Common/Textarea";

const FeedComment = () => {
    return (
        <div>
            <Textarea placeHolder={'請在此填寫您的留言\n' +
                '\n' +
                '如果您的貼文內容是捏造的，誹謗的，不准確的，辱罵性的，粗俗的，憤恨的，騷擾性的，淫穢的，褻瀆性的，性暗示的，威脅性的，侵犯個人隱私的，或以其他方式違反任何法律的，您的貼文將可能被移除。'}/>
        </div>
    );
};

export default FeedComment;