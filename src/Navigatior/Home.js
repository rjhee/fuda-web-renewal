import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomeScreen from "../Pages/Root/Home/HomeScreen";
import WinningScreen from "../Pages/Root/Home/Winning/WinningScreen";
import WinningListScreen from "../Pages/Root/Home/Winning/WinningListScreen";
import AnalyticsScreen from "../Pages/Root/Home/Analytics/AnalyticsScreen";
import AnalyticsListScreen from "../Pages/Root/Home/Analytics/AnalyticsListScreen";
import PressScreen from "../Pages/Root/Home/Press/PressScreen";
import YoutubeScreen from "../Pages/Root/Home/Youtube/YoutubeScreen";
import AnalyticsDailyTable from "../Pages/Root/Home/Analytics/AnalyticsDailyTable";

const Home = () => {
    const WINNING = '/winning';
    const ID = '/:id';
    const LOTTO = '/:lotto'
    const ANALYTICS = '/analytics';
    const TABLE = '/table';
    const PRESS = '/press'
    const YOUTUBE = '/youtube'

    const DAILY = '/daily';
    const BIG = '/big';
    const SUPER = '/super';
    const BASIC = '/basic';
    const ADVANCE = '/advance';
    const DISTRIBUTION = '/distribution';

    const WINNING_A = 'winning';
    const AMOUNT = 'amount';
    const CONTINUOUS = 'continuous';
    const ODD_EVEN = 'oddEven';
    const SIZE = 'size';
    const MANTISSA = 'mantissa';
    const LIAN = 'lian';
    const ADJACENT = 'adjacent';

    const QUALITY = 'quality';
    const SUM = 'sum';
    const SUM_MANTISSA = 'sumMantissa';
    const COOPERATE = 'cooperate';
    const UN_COMBINE = 'unCombine';
    const AC = 'ac';
    const FREQUENCY = 'frequency';
    const DISTRIBUTION_ = 'distribution';

    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path={WINNING} element={<WinningScreen/>}/>
            <Route path={WINNING + ID} element={<WinningListScreen/>}/>
            <Route path={ANALYTICS} element={
                <AnalyticsScreen
                    dailyPath={ANALYTICS + DAILY + BASIC}
                    bigPath={ANALYTICS + BIG + BASIC}
                    superPath={ANALYTICS + SUPER + BASIC}
                    winning={WINNING}
                />}/>
            <Route path={ANALYTICS + TABLE} element={<AnalyticsDailyTable/>}/>
            <Route path={ANALYTICS + LOTTO + ID + ID} element={
                <AnalyticsListScreen
                    dailyPath={ANALYTICS + DAILY}
                    bigPath={ANALYTICS + BIG}
                    superPath={ANALYTICS + SUPER}/>}/>
            <Route path={PRESS} element={<PressScreen/>}/>
            <Route path={YOUTUBE} element={<YoutubeScreen/>}/>
        </Routes>
    );
};

export default Home;