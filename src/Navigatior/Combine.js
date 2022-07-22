import React from 'react';
import {Route, Routes} from "react-router-dom";
import MyCombineScreen from "../Pages/Root/MyCombine/MyCombineScreen";
import LottoMyResultScreen from "../Pages/Root/MyCombine/LottoMyResultScreen";
import QrHistoryScreen from "../Pages/Root/MyCombine/QrHistoryScreen";
import HomeScreen from "../Pages/Root/Home/HomeScreen";

const Combine = () => {
    const COMBINE = '/combine';
    const RESULT = '/result';
    const HISTORY = '/history';
    const ID = '/:id';

    return (
        <Routes>
            <Route path={COMBINE}
                   element={
                <MyCombineScreen
                    pathResult={COMBINE + RESULT}
                    pathHistory={COMBINE+HISTORY}/>}/>
            <Route path={COMBINE + RESULT + ID} element={<LottoMyResultScreen path={COMBINE + RESULT}/>}/>
            <Route path={COMBINE + HISTORY + ID} element={<QrHistoryScreen path={COMBINE + HISTORY}/>}/>
        </Routes>
    );
};

export default Combine;