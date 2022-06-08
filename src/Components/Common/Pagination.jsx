import React from 'react';
import arrowIconL from '../../Assets/Images/icon/icon-arrow-left.png'
import arrowIconR from '../../Assets/Images/icon/icon-arrow-right.png'

const Pagination = (props) => {
    return (
        <div className='paginationCover'>
            <button className='btnCover' onClick={props.onPrev}>
                <img src={arrowIconL} alt='left arrow icon'/>
            </button>
            <div className='numCover'>
                <span className='current'>{props.current+1}</span>
                <span className='line'/>
                <span className='last'>{props.last}</span>
            </div>
            <button className='btnCover' onClick={props.onNext}>
                <img src={arrowIconR} alt='right arrow icon'/>
            </button>
        </div>
    );
};

export default Pagination;