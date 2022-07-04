import React from 'react';

const Tooltip = (props) => {
    let text = props.text ? props.text : 'Coming Soon!'
    return (
        <div className='tooltipCover' style={{top: props.top, left: props.left}}>
            <div className='background'>
                <div className={props.up ? 'arrowUp' : 'hidden'}/>
                <p>
                    <span>{text}</span>
                </p>
                <div className={props.down ? 'arrowDown' : 'hidden'}/>
            </div>
        </div>
    );
};

export default Tooltip;