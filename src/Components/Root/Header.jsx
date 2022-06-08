import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Link} from "react-router-dom";
import {getNotice} from "../../Service/ComunityService";
import * as LocalStorageService from '../../Service/LocalStorageService'

const Header = () => {
    const [newNoticeCount , setNewNoticeCount] = useState(0);
    let CURRENT_UID = "noticeCurrentUid";
    let NEW_UID = "noticeNewUid";

    function countNoReadNewNotice (){
        const newNoticeUid = LocalStorageService.get(NEW_UID);

        if(0 < Number(newNoticeUid)){
            setNewNoticeCount(newNoticeUid);
        }else {
            return null;
        }
    }
    function deleteReadNewNotice(){
        setNewNoticeCount(0);
        LocalStorageService.set(NEW_UID, JSON.stringify(0));
    }

    useEffect(()=>{
        countNoReadNewNotice();
    })




    return (
        <header className='header'>
            <div className="headerCover">
                <Link to='/'>
                    <h1 className="logo">{lang().FUDA_LOTTO}</h1>
                </Link>
                <div className="sideMenuCover">
                    <Link to='/shop'>
                        <button>
                            <div className="shopBtn"/>
                        </button>
                    </Link>
                    <Link to='/notice'>
                        <button className="noticeBtnCover" onClick={()=>deleteReadNewNotice()}>
                            <span className="newNotice" style={(newNoticeCount === 0) ? {display: 'none'} : null}>{newNoticeCount}</span>
                            <div className="noticeBtn"/>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="headerLine"/>
        </header>
    );
};

export default Header;