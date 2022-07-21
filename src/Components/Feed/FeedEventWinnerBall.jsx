import React from 'react';

const FeedEventWinnerBall = (props) => {
    let userId = props.userId ? props.userId : 'fudalotto';
    let b1 = props.b1 ? props.b1 : '1';
    let b2 = props.b2 ? props.b2 : '2';
    let b3 = props.b3 ? props.b3 : '3';
    let b4 = props.b4 ? props.b4 : '4';
    let b5 = props.b5 ? props.b5 : '5';
    let b6 = props.b6 ? props.b6 : '6';
    const hideUseId = (id) => {
        return id.replace(id.substr(1,1),'*');
    }
    return (
        <div key={props.i} className='winnerBallCover'>
            <strong className='userId'>{hideUseId(userId)}</strong>
            <ul className='ballCover'>
                <li><span>{b1.toString().padStart(2, '0')}</span></li>
                <li><span>{b2.toString().padStart(2, '0')}</span></li>
                <li><span>{b3.toString().padStart(2, '0')}</span></li>
                <li><span>{b4.toString().padStart(2, '0')}</span></li>
                <li><span>{b5.toString().padStart(2, '0')}</span></li>
                <li><span>{b6.toString().padStart(2, '0')}</span></li>
            </ul>
        </div>
    );
};

export default FeedEventWinnerBall;