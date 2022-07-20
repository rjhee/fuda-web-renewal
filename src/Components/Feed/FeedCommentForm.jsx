import React, {useEffect, useState} from 'react';
import Textarea from "../Common/Textarea";
import LineButton from "../Common/LineButton";
import {editComment, writeComment} from "../../Service/FeedService";
import {isGuest} from "../../Service/AuthService";


const FeedCommentForm = (props) => {
    const [comment, setComment] = useState('');
    let mode = props.mode;

    function createCommentData(){
        if(isGuest() === true) {
        //    TODO 게스트 로그인 팝업
            alert('로그인 하세요');
            return;
        }
        if (comment.length === 0) {
            alert('請輸入內文'); //내용을 입력해주세요
        }
        else if (comment.length <= 200) {
            writeComment(props.data.uid, comment)
                .then(r => {
                setComment('');
                window.location.reload();
            });
        }
        else {
            alert('字數超過上限'); //글자수 제한 추가
        }
    }

    function updateCommentData(){
        if (comment.length === 0) {
            alert('請輸入內文'); //댓글을 입력해주세요
        }
        else if (comment.length <= 200) {
            editComment(props.editComment.uid, comment)
                .then(r =>{
                    props.setMode('');
                    setComment('');
                    window.location.reload();
                });
        } else {
            alert('字數超過上限'); //글자수 제한 초과
        }
    }

    function checkBeforeSubmit(text, okFunction){
        alert(text);
        okFunction();
    }

    useEffect(()=>{
        if(mode === 'edit'){
            setComment(props.editComment.comment);
        }
    },[props.editComment]);

    return (
        <div>
            <Textarea
                value={comment}
                placeHolder={'請在此填寫您的留言\n' +
                '\n' +
                '如果您的貼文內容是捏造的，誹謗的，不准確的，辱罵性的，粗俗的，憤恨的，騷擾性的，淫穢的，褻瀆性的，性暗示的，威脅性的，侵犯個人隱私的，或以其他方式違反任何法律的，您的貼文將可能被移除。'}
                setValue={setComment}/>
            <LineButton
                text={'上傳留言'}
                btnStyle={{borderColor: '#E5E5E5'}}
                onClick={mode === 'edit' ? ()=>checkBeforeSubmit('您確認要修改嗎?', updateCommentData) : ()=>checkBeforeSubmit('您確認要輸入嗎?', createCommentData)}/>
        </div>
    );
};

export default FeedCommentForm;