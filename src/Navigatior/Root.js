import React from 'react';
import {Route, Routes} from "react-router-dom";
import NoticeScreen from "../Pages/Root/Notice/NoticeScreen";
import ShopScreen from "../Pages/Root/Shop/ShopScreen";
import MyPage from "./MyPage";
import NoticeDetailScreen from "../Pages/Root/Notice/NoticeDetailScreen";

const Root = () => {
    const NOTICE = '/notice';
    const DETAIL = '/detail';
    const SHOP = '/shop'

    return (
        <Routes>
            <Route path={NOTICE} element={<NoticeScreen detailPath={NOTICE + DETAIL}/>}/>
            <Route path={NOTICE + DETAIL} element={<NoticeDetailScreen/>}/>
            <Route path={SHOP} element={<ShopScreen/>}/>
        </Routes>
    );
};

export default Root;