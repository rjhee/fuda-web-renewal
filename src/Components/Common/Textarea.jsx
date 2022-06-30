import React from 'react';

const Textarea = (props) => {
    let placeHolder = props.placeHolder ? props.placeHolder : '';

    return (
        <div className='textareaCover'>
            <textarea placeholder={placeHolder}/>
        </div>
    );
};

export default Textarea;