import React, {useEffect, useState} from 'react';
import './App.css';
import HomeBottomTab from "../src/Components/Root/HomeBottomTab"
import Header from "./Components/Root/Header";
import * as LoadingService from "./Service/LoadingService"
import * as LocalStorageService from "./Service/LocalStorageService"
import Loading from "./Components/Common/Loading";
import Home from "./Navigatior/Home";
import Combine from "./Navigatior/Combine";
import MyPage from "./Navigatior/MyPage";
import Root from "./Navigatior/Root";
import Login from "./Navigatior/Login";


function App() {
    const [loading, setLoading] = useState(false);
    LoadingService.initialize(setLoading);
    LocalStorageService.initialize();



  return (
    <div className="App">
        <Loading on={loading}/>
        <Header/>
        <Home/>
        <Combine/>
        <MyPage/>
        <Login/>
        <Root/>
        <HomeBottomTab/>
    </div>
  );
}

export default App;
