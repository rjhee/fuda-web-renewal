import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomeScreen from "../Pages/Root/Home/HomeScreen";
import WinningScreen from "../Pages/Root/Home/Winning/WinningScreen";
import WinningListScreen from "../Pages/Root/Home/Winning/WinningListScreen";
import AnalyticsScreen from "../Pages/Root/Home/Analytics/AnalyticsScreen";
import AnalyticsListScreen from "../Pages/Root/Home/Analytics/AnalyticsListScreen";
import PressScreen from "../Pages/Root/Home/Press/PressScreen";
import YoutubeScreen from "../Pages/Root/Home/Youtube/YoutubeScreen";

const Home = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/winning" element={<WinningScreen/>}/>
            <Route path="/winning/:id" element={<WinningListScreen/>}/>
            <Route path="/analytics" element={<AnalyticsScreen/>}/>
            <Route path="/analytics/:id" element={<AnalyticsListScreen/>}/>
            <Route path="/press" element={<PressScreen/>}/>
            <Route path="/youtube" element={<YoutubeScreen/>}/>
        </Routes>
    );
};

export default Home;