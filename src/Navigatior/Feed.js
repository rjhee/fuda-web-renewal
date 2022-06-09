import React from 'react';
import {Route, Routes} from "react-router-dom";
import FeedScreen from "../Pages/Root/Feed/FeedScreen";

const Feed = () => {
    return (
        <Routes>
            <Route path="/feed" element={<FeedScreen/>}/>
        </Routes>
    );
};

export default Feed;