import React from 'react';

const CircleButton = (props) => {
    return (
        <button className='circleBtnCover' onClick={props.onClick}>
            <div className='line' style={props.color ? {borderColor:props.color} : null}>
                <div className='circle' style={props.color ? {backgroundColor:props.color} : null}>
                    {props.titleImg
                        ? <img className={props.color ? 'clickedImg' : ''} src={props.titleImg ? props.titleImg : ''} alt="Title" style={props.iconSize}/>
                        : <strong className='title' style={props.fontColor ? {color:props.fontColor} : null}>{props.title ? props.title : 'Title'}</strong>}
                </div>
            </div>
            <p className='subTitle'>{props.subTitle ? props.subTitle : 'subTitle'}</p>
        </button>
    );
};

export default CircleButton;