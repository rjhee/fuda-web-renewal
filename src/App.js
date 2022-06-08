import React, {useEffect, useState} from 'react';
import './App.css';
import HomeBottomTab from "../src/Components/Root/HomeBottomTab"
import Header from "./Components/Root/Header";
import {Router, Routes, Route, Switch} from 'react-router-dom';
import HomeScreen from "./Pages/Root/Home/HomeScreen";
import FeedScreen from "./Pages/Root/Feed/FeedScreen";
import MiniGameScreen from "./Pages/Root/MiniGame/MiniGameScreen"
import MyCombineScreen from "./Pages/Root/MyCombine/MyCombineScreen";
import NoticeScreen from "./Pages/Root/Notice/NoticeScreen";
import ShopScreen from "./Pages/Root/Shop/ShopScreen";
import WinningScreen from "./Pages/Root/Home/Winning/WinningScreen";
import WinningListScreen from "./Pages/Root/Home/Winning/WinningListScreen";
import * as LoadingService from "./Service/LoadingService"
import * as LocalStorageService from "./Service/LocalStorageService"
import Loading from "./Components/Common/Loading";
import AnalyticsScreen from "./Pages/Root/Home/Analytics/AnalyticsScreen";
import PressScreen from "./Pages/Root/Home/Press/PressScreen";
import YoutubeScreen from "./Pages/Root/Home/Youtube/YoutubeScreen";


function App() {
    const [loading, setLoading] = useState(false);
    LoadingService.initialize(setLoading);
    LocalStorageService.initialize();



  return (
    <div className="App">
        <Loading on={loading}/>
        <Header/>
           <Routes>
               <Route exact path="/" element={<HomeScreen/>}/>
               <Route path="/notice" element={<NoticeScreen/>}/>
               <Route path="/shop" element={<ShopScreen/>}/>
               <Route path="/winning" element={<WinningScreen/>}/>
               <Route path="/winning/:id" element={<WinningListScreen/>}/>
               <Route path="/analytics" element={<AnalyticsScreen/>}/>
               <Route path="/press" element={<PressScreen/>}/>
               <Route path="/youtube" element={<YoutubeScreen/>}/>
               <Route path="/feed" element={<FeedScreen/>}/>
               <Route path="/myCombine" element={<MyCombineScreen/>}/>
               <Route path="/miniGame" element={<MiniGameScreen/>}/>
           </Routes>
        <HomeBottomTab/>
    </div>
  );
}

export default App;
