import React from 'react';
import {Route, Routes} from "react-router-dom";
import MyPageScreen from "../Pages/Root/MyPage/MyPageScreen";

const MyPage = ({authService}) => {
    return (
        <Routes>
            <Route path="/myPage" element={<MyPageScreen authService={authService}/>}/>
        </Routes>
    );
};

export default MyPage;