import React from 'react';
import {Route, Routes} from "react-router-dom";
import MyCombineScreen from "../Pages/Root/MyCombine/MyCombineScreen";
import Result from "../Pages/Root/MyCombine/Result";
import History from "../Pages/Root/MyCombine/History";
import HomeScreen from "../Pages/Root/Home/HomeScreen";

const Combine = () => {
    const COMBINE = '/combine';
    const RESULT = '/result';
    const HISTORY = '/history';
    const ID = '/:id';

    return (
        <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route path={COMBINE} element={<MyCombineScreen pathResult={COMBINE+RESULT} pathHistory={COMBINE+HISTORY}/>}/>
            <Route path={COMBINE+RESULT+ID} element={<Result path={COMBINE+RESULT}/>}/>
            <Route path={COMBINE+HISTORY+ID} element={<History path={COMBINE+HISTORY}/>}/>
        </Routes>
    );
};

export default Combine;