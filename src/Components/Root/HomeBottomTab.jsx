import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Link} from 'react-router-dom';
import * as AuthService from "../../Service/AuthService";

const HomeBottomTab = () => {
    let guest = AuthService.isGuest();
    const [MY_PAGE, setMY_PAGE] = useState('/myPage');

    useEffect(()=>{
        console.log('HomeBottomTab.jsx:11 ->',guest);
        if(guest){
            setMY_PAGE('/myPage/noUser');
        }else {
            setMY_PAGE('/myPage');
        }
    },[guest, MY_PAGE])

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
            <Link to={MY_PAGE} className='myPageBtn'>
                <div/>
                <span>{lang().MY_PAGE}</span>
            </Link>
        </section>
    );
};



export default HomeBottomTab;