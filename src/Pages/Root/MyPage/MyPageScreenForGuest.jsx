import React from 'react';
import NaviList from "../../../Components/MyPage/NaviList";
import InfoBox from "../../../Components/MyPage/InfoBox";
import {Link} from "react-router-dom";
import LoginButton from "../../../Components/Common/LoginButton";
import {Color} from "../../../Styles/Base/color";

const MyPageScreenForGuest = (props) => {
    return (
        <section className='myPageScreenForGuestCover'>
            <div className='loginBtn'>
                <Link to={'/login'}>
                    <LoginButton type={'FULL'} color={Color.MAIN_RED} text={'登入'}/>
                </Link>
            </div>
            <NaviList
                myPagePath={props.myPagePath}
                userPath={'no'}
                notificationPath={'no'}
                paymentPath={'no'}
                couponPath={'no'}
                receiptPath={props.receiptPath}
                faqPath={props.faqPath}
                qnaPath={'no'}/>
            <InfoBox/>
        </section>
    );
};

export default MyPageScreenForGuest;