import React from 'react';

const CircleButton = (props) => {
    return (
        <button className='circleBtnCover'>
            <div className='line' style={props.color ? {borderColor:props.color} : null}>
                <div className='circle' style={props.color ? {backgroundColor:props.color} : null}>
                    <strong className='title'>{props.title ? props.title : 'Title'}</strong>
                </div>
            </div>
            <p className='subTitle'>{props.subTitle ? props.subTitle : 'subTitle'}</p>
        </button>
    );
};

export default CircleButton;