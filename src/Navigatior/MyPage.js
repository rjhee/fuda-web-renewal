import React from 'react';
import {Route, Routes} from "react-router-dom";
import MyPageScreen from "../Pages/Root/MyPage/MyPageScreen";


const MyPage = ({authService}) => {
    const MY_PAGE = '/myPage';

    return (
        <Routes>
            <Route path={MY_PAGE} element={<MyPageScreen authService={authService}/>}/>
        </Routes>
    );
};

export default MyPage;