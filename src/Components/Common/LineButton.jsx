import React from 'react';

const LineButton = (props) => {
    let text = props.text ? props.text : 'button';
    return (
        <button
            className='LineButtonCover'
            onClick={props.onClick}
            style={props.btnStyle}>
            <span className='text' style={props.fontStyle}>{text}</span>
        </button>
    );
};

export default LineButton;