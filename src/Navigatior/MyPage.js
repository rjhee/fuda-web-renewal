import React from 'react';
import {Route, Routes} from "react-router-dom";
import MyPageScreen from "../Pages/Root/MyPage/MyPageScreen";
import NaviUserInfoEdit from "../Pages/Root/MyPage/Navi-UserInfoEdit";
import NaviNotificationSetting from "../Pages/Root/MyPage/Navi-NotificationSetting";
import NaviPaymentInfo from "../Pages/Root/MyPage/Navi-PaymentInfo";
import NaviCoupon from "../Pages/Root/MyPage/Navi-Coupon";
import NaviReceiptLotto from "../Pages/Root/MyPage/Navi-ReceiptLotto";
import NaviFAQ from "../Pages/Root/MyPage/Navi-FAQ";
import NaviDirectInquiry from "../Pages/Root/MyPage/Navi-DirectInquiry";


const MyPage = () => {
    const MY_PAGE = '/myPage';
    const USER = '/user';
    const NOTIFICATION = '/notification';
    const PAYMENT = '/payment';
    const COUPON = '/coupon';
    const RECEIPT = '/receipt';
    const FAQ = '/faq';
    const QNA = '/qna';

    return (
        <Routes>
            <Route path={MY_PAGE} element={
                <MyPageScreen
                    myPagePath={MY_PAGE}
                    userPath={USER}
                    notificationPath={NOTIFICATION}
                    paymentPath={PAYMENT}
                    couponPath={COUPON}
                    receiptPath={RECEIPT}
                    faqPath={FAQ}
                    qnaPath={QNA}/>}/>
            <Route path={USER} element={<NaviUserInfoEdit/>}/>
            <Route path={NOTIFICATION} element={<NaviNotificationSetting/>}/>
            <Route path={PAYMENT} element={<NaviPaymentInfo/>}/>
            <Route path={COUPON} element={<NaviCoupon/>}/>
            <Route path={RECEIPT} element={<NaviReceiptLotto/>}/>
            <Route path={FAQ} element={<NaviFAQ/>}/>
            <Route path={QNA} element={<NaviDirectInquiry/>}/>
        </Routes>
    );
};

export default MyPage;