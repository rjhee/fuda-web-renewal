import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Link} from 'react-router-dom';

const HomeBottomTab = () => {
    return (
        <section className="tapCover">
            <Link as={Link} to='/' className='homeBtn'>
                <div/>
                <span>{lang().HOME}</span>
            </Link>
            <Link as={Link} to='/feed' className='feedBtn'>
                <div/>
                <span>{lang().FEED}</span>
            </Link>
            <Link to='/qr' className='QRBtn'>
                <div/>
                <span>{lang().CENTER}</span>
            </Link>
            <Link to='/game'  className='miniGameBtn'>
                <div/>
                <span>{lang().MINI_GAME}</span>
            </Link>
            <Link to='/myPage' className='myPageBtn'>
                <div/>
                <span>{lang().MY_PAGE}</span>
            </Link>
        </section>
    );
};



export default HomeBottomTab;