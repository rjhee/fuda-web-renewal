import React from 'react';
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


function App() {
  return (
    <div className="App">
        <Header/>
           <Routes>
               <Route exact path="/" element={<HomeScreen/>}/>
               <Route path="/feed" element={<FeedScreen/>}/>
               <Route path="/miniGame" element={<MiniGameScreen/>}/>
               <Route path="/myCombine" element={<MyCombineScreen/>}/>
               <Route path="/notice" element={<NoticeScreen/>}/>
               <Route path="/shop" element={<ShopScreen/>}/>
           </Routes>
        <HomeBottomTab/>
    </div>
  );
}

export default App;
