import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Link} from 'react-router-dom';
import * as AuthService from "../../Service/AuthService";

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
            <Link to='/combine' className='QRBtn'>
                <div/>
                <span>{lang().CENTER}</span>
            </Link>
            <Link to='/game'  className='miniGameBtn'>
                <div/>
                <span>{lang().MINI_GAME}</span>
            </Link>
            <Link to='/myPage/noUser' className='myPageBtn'>
                <div/>
                <span>{lang().MY_PAGE}</span>
            </Link>
        </section>
    );
};



export default HomeBottomTab;