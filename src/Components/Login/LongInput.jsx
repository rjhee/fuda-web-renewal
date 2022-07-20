import React, {useState} from 'react';

const LongInput = (props) => {

    let placeHolder = props.placeHolder ? props.placeHolder : '이름을 입력해주세요.';
    let type = props.type ? props.type : 'text';

    const onChange = (e) => {
        props.setValue(e.target.value);
    }

    return (
        <input
            autoFocus={true}
            className='longInput'
            type={type}
            value={props.value}
            placeholder={placeHolder}
            onChange={onChange}/>
    );
};

export default LongInput;