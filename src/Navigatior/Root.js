import React from 'react';
import {Route, Routes} from "react-router-dom";
import NoticeScreen from "../Pages/Root/Notice/NoticeScreen";
import ShopScreen from "../Pages/Root/Shop/ShopScreen";

const Root = () => {
    return (
        <Routes>
            <Route path="/notice" element={<NoticeScreen/>}/>
            <Route path="/shop" element={<ShopScreen/>}/>
        </Routes>
    );
};

export default Root;