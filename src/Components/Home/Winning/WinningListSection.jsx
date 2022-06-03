import React from 'react';
import {lang} from "../../../Assets/Lang/Lang";

const WinningListSection = (props) => {
    return (
        <ul className='listCover'>
            {props?.data.map((item)=>
                <li>
                    <span className='date'>{item.date}</span>
                    <span className='awards'>{item.awards}</span>
                    <span className='bonus'>{item.reward}{lang().YUAN}</span>
                    <span className='id'>{item.user_id}</span>
                </li>
            )}
        </ul>
    );
};

export default WinningListSection;