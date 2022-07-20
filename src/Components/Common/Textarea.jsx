import React, {useEffect, useState, useRef} from 'react';

const Textarea = (props) => {
    let placeHolder = props.placeHolder ? props.placeHolder : '';
    let [commentLength, setCommentLength] = useState(0);

    const inputFocus = useRef(null);
    const onChange = (e) => {
        props.setValue(e.target.value);
        setCommentLength(e.target.value.length);
    }

    useEffect(()=>{
        inputFocus.current.focus();
        setCommentLength(props.value.length);
        document.getElementById("textareaCover").scroll(0,0);
    },[props.value])

    return (
        <div className='textareaCover' id='textareaCover'>
            <textarea
                ref={inputFocus}
                placeholder={placeHolder}
                onChange={onChange}
                value={props.value}/>
            <span className='commentLength'>{commentLength}/200</span>
        </div>
    );
};

export default Textarea;