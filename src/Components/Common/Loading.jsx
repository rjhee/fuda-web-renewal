import React from 'react';
import icon from '../../Assets/Images/banner/chara.png'

const Loading = (props) => {
    return (
        <div className='loadingCover' style={props.on === true ? {display:'flex'} : {display: 'none'}} >
            <img className='loadingImg' src={icon} alt="icon image"/>
        </div>
    );
};

export default Loading;