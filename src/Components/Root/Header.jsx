import React, {useEffect} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Link} from "react-router-dom";
import NoticeSlide from "../Home/NoticeSlide";
import {getNoticeData} from "../../Service/ComunityService";

const Header = () => {


    return (
        <header className='header'>
            <div className="headerCover">
                <Link to='/'>
                    <h1 className="logo">{lang().FUDA_LOTTO}</h1>
                </Link>
                <div className="sideMenuCover">
                    <button>
                        <div className="shopBtn"/>
                    </button>
                    <button className="noticeBtnCover">
                        <span className="newNotice">1</span>
                        <div className="noticeBtn"/>
                    </button>
                </div>
            </div>
            <div className="headerLine"/>
        </header>
    );
};

export default Header;