import React from 'react';
import {Route, Routes} from "react-router-dom";
import MiniGameScreen from "../Pages/Root/MiniGame/MiniGameScreen";

const MiniGame = () => {
    return (
        <Routes>
            <Route path="/miniGame" element={<MiniGameScreen/>}/>
        </Routes>
    );
};

export default MiniGame;