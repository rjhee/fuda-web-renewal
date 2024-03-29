import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import MyPageScreen from "../Pages/Root/MyPage/MyPageScreen";
import NaviUserInfoEditScreen from "../Pages/Root/MyPage/Navi-UserInfoEditScreen";
import NaviNotificationSettingScreen from "../Pages/Root/MyPage/Navi-NotificationSettingScreen";
import NaviPaymentInfoScreen from "../Pages/Root/MyPage/Navi-PaymentInfoScreen";
import NaviCouponScreen from "../Pages/Root/MyPage/Navi-CouponScreen";
import NaviReceiptLotto from "../Pages/Root/MyPage/Navi-RecipetLottoScreen";
import NaviFAQ from "../Pages/Root/MyPage/Navi-FAQScreen";
import NaviDirectInquiryScreen from "../Pages/Root/MyPage/Navi-DirectInquiryScreen";
import MyPageScreenForGuest from "../Pages/Root/MyPage/MyPageScreenForGuest";
import UserInfoEditNameChangeScreen from "../Pages/Root/MyPage/UserInfoEdit-NameChangeScreen";
import UserInfoEditPhoneChangeScreen from "../Pages/Root/MyPage/UserInfoEdit-PhoneChangeScreen";
import UserInfoEditPwChangeScreen from "../Pages/Root/MyPage/UserInfoEdit-PwChangeScreen";
import UserInfoEditReLoginScreen from "../Pages/Root/MyPage/UserInfoEdit-ReLoginScreen";
import UserInfoEditSignOutReasonScreen from "../Pages/Root/MyPage/UserInfoEdit-SignOutReasonScreen";
import UserInfoEditSignOutScreen from "../Pages/Root/MyPage/UserInfoEdit-SignOutScreen";
import DirectInquiryDetailScreen from "../Pages/Root/MyPage/DirectInquiry-DetailScreen";
import DirectInquiryWriteScreen from "../Pages/Root/MyPage/DirectInquiry-WriteScreen";


const MyPage = (props) => {
    const MAIN = '/myPage';
    const NO_USER = '/noUser';
    const USER = '/userEdit';
    const NOTIFICATION = '/notification';
    const PAYMENT = '/payment';
    const COUPON = '/coupon';
    const RECEIPT = '/receipt';
    const FAQ = '/faq';
    const QNA = '/qna';
    const ID = '/:id';


    const NAME = '/name';
    const PHONE = '/phone';
    const PW = '/pw';
    const RE_LOGIN = '/reLogin';
    const SIGN_OUT = '/signOut';
    const REASON = '/reason';
    const DETAIL = '/detail';
    const WRITE = '/write';
    const LIST = '/list';

    const LOGIN = '/login';



    return (
        <Routes>
            <Route path={MAIN} element={
                <MyPageScreen
                    myPagePath={MAIN}
                    userPath={USER}
                    notificationPath={NOTIFICATION+LIST}
                    paymentPath={PAYMENT}
                    couponPath={COUPON}
                    receiptPath={RECEIPT}
                    faqPath={FAQ}
                    qnaPath={QNA}/>}/>
            <Route path={MAIN + NO_USER} element={
                <MyPageScreenForGuest
                    guestPath={MAIN + NO_USER}
                    userPath={MAIN}
                    myPagePath={MAIN + NO_USER}
                    receiptPath={RECEIPT}
                    faqPath={FAQ}/>}/>
            <Route path={MAIN + USER} element={<NaviUserInfoEditScreen  reLoginPath={MAIN + USER + RE_LOGIN}/>}/>
            {/*view 완료*/}
            <Route path={MAIN + NOTIFICATION + ID} element={<NaviNotificationSettingScreen path={MAIN + NOTIFICATION}/>}/>
            <Route path={MAIN + PAYMENT} element={<NaviPaymentInfoScreen/>}/>
            <Route path={MAIN + COUPON} element={<NaviCouponScreen/>}/>
            <Route path={MAIN + RECEIPT} element={<NaviReceiptLotto/>}/>
            <Route path={MAIN + FAQ} element={<NaviFAQ/>}/>
            <Route path={MAIN + QNA} element={<NaviDirectInquiryScreen detailPath={MAIN + QNA + DETAIL} writePath={MAIN + QNA + WRITE}/>}/>

            <Route path={MAIN + USER + RE_LOGIN} element={<UserInfoEditReLoginScreen/>}/>
            <Route path={MAIN + USER + NAME} element={<UserInfoEditNameChangeScreen/>}/>
            <Route path={MAIN + USER + PHONE} element={<UserInfoEditPhoneChangeScreen/>}/>
            <Route path={MAIN + USER + PW} element={<UserInfoEditPwChangeScreen/>}/>
            <Route path={MAIN + USER + SIGN_OUT} element={<UserInfoEditSignOutScreen/>}/>
            <Route path={MAIN + USER + SIGN_OUT + REASON} element={<UserInfoEditSignOutReasonScreen mainPath={MAIN} loginPath={LOGIN}/>}/>
            <Route path={MAIN + QNA + DETAIL + ID} element={<DirectInquiryDetailScreen writePath={MAIN + QNA + WRITE}/>}/>
            <Route path={MAIN + QNA + WRITE} element={<DirectInquiryWriteScreen />}/>
        </Routes>
    );
};

export default MyPage;