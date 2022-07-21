import React from 'react';

const FeedEventResultBall = (props) => {
    const convertToChineseYear = (date) => {
        if(!!date === true){
            let krDay = new Date(date);
            let krDay2 = krDay.toISOString().split("T")[0];
            let krDay3 = krDay2.split('-');
            krDay3[0] = krDay3[0] - 1911;

            let CnDay = `${krDay3[0]}年${krDay3[1]}月${krDay3[2]}日開獎`;
            return CnDay;
        }
    }
    let issue = props.issue ? props.issue : '111000008';
    let date = props.date ? props.date : '2022-01-29T12:46:13.000Z';
    let chinesDate = convertToChineseYear(date);
    let b1 = props.b1 ? props.b1 : '1';
    let b2 = props.b2 ? props.b2 : '2';
    let b3 = props.b3 ? props.b3 : '3';
    let b4 = props.b4 ? props.b4 : '4';
    let b5 = props.b5 ? props.b5 : '5';
    let b6 = props.b6 ? props.b6 : '6';
    let b7 = props.b7 ? props.b7 : '7';
    let b8 = props.b8 ? props.b8 : '8';
    let b9 = props.b9 ? props.b9 : '9';

    return (
        <div key={props.i} className='resultBallCover'>
            <p className='issueCover'>
                <span className='issue'>開獎期別:第{issue}期</span>
                <span className='issue'>{chinesDate}</span>
            </p>
            <ul className='lottoBallCover'>
                <li><span>{b1.toString().padStart(2, '0')}</span></li>
                <li><span>{b2.toString().padStart(2, '0')}</span></li>
                <li><span>{b3.toString().padStart(2, '0')}</span></li>
                <li><span>{b4.toString().padStart(2, '0')}</span></li>
                <li><span>{b5.toString().padStart(2, '0')}</span></li>
                <li><span>{b6.toString().padStart(2, '0')}</span></li>
                <li><span>{b7.toString().padStart(2, '0')}</span></li>
                <li><span>{b8.toString().padStart(2, '0')}</span></li>
                <li><span>{b9.toString().padStart(2, '0')}</span></li>
            </ul>
        </div>
    );
};

export default FeedEventResultBall;