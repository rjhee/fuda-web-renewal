import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {lang} from "../../Assets/Lang/Lang";
import setting from '../../Assets/Images/icon/setting-icon.png';
import alert from '../../Assets/Images/icon/alert-icon.png';
import money from '../../Assets/Images/icon/money-icon.png';
import coupon from '../../Assets/Images/icon/coupon-icon.png';
import recipe from '../../Assets/Images/icon/recipe-icon.png';
import faq from '../../Assets/Images/icon/faq-icon.png';
import qnq from '../../Assets/Images/icon/qna-icon.png';
import arrow from '../../Assets/Images/icon/arrow-icon.png'

const NaviList = (props) => {
    let navigate = useNavigate();

    const [menuList, setMenuList] = useState([
        {img: setting, title: lang().ACCOUNT_SETTING, title_kr: '정보수정', path: props.userPath, imgSize:{ width: '32px', height: '32px',}},
        {img: alert, title: lang().NOTIFICATION_SETTING, title_kr: '알림설정', path: props.notificationPath, imgSize:{ width: '28.25px', height: '32.28px',} },
        {img: money, title: lang().PAYMENT_SETTING, title_kr: '', path: props.paymentPath, imgSize:{ width: '37px', height: '26px',} },
        {img: coupon, title: lang().LOGIN_SETTING, title_kr: '', path: props.couponPath, imgSize:{ width: '35.98px', height: '23.4px',} },
        {img: recipe, title: lang().UNIFORM_INVOICE, title_kr: '', path: props.receiptPath,  imgSize:{ width: '42.48px', height: '28px',} },
        {img: faq, title: lang().COMMON_PROBLEM, title_kr: 'FAQ', path: props.faqPath, imgSize:{ width: '32px', height: '26.14px',} },
        {img: qnq, title: lang().DIRECT_SOLUTION, title_kr: '1대1문의', path: props.qnaPath, imgSize:{ width: '31.8px', height: '26px',} },
    ]);

    function moveToScreen(moveType, path) {
            navigate(path);
            console.log('NaviList.jsx:29 ->', path);
        // if(moveType === 'LINK'){
        // }else if(moveType === 'MODAL') {
        // }
    }

    return (
        <ul className='naviListCover'>
            {menuList.map((menu)=>
                <li>
                    <button onClick={()=>moveToScreen('MODAL', props.myPagePath + menu.path)}>
                        <div className='title'>
                            <div className='imgCover'>
                                <img src={menu.img} style={menu.imgSize} alt="user info edit screen icon"/>
                            </div>
                            <span>{menu.title}</span>
                        </div>
                        <img src={arrow} alt="arrow button"/>
                    </button>
                </li>)}
        </ul>
    );
};

export default NaviList;