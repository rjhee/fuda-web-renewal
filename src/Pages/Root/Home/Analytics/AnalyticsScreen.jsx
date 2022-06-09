import React from 'react';

import {Link} from "react-router-dom";
import {lang} from "../../../../Assets/Lang/Lang";
import dailyLotto from '../../../../Assets/Images/banner/title_daily_aos.png'
import bigLotto from '../../../../Assets/Images/banner/title_big_aos.png'
import superLotto from '../../../../Assets/Images/banner/title_super_aos.png'
import analyticsSystem from '../../../../Assets/Images/icon/icon-analysis-search.png'
import Caution from "../../../../Components/Common/Caution";

const AnalyticsScreen = () => {
    return (
        <div className='analyticsCover'>
            <div className='lottoCover'>
                <Link to='daily/basic'>
                    <div className='box'>
                        <img src={dailyLotto} alt="daily lotto title image"/>
                        <strong>{lang().STATISTICAL_DATA}</strong>
                    </div>
                </Link>
                <Link to='big'>
                    <div className='box'>
                        <img src={bigLotto} alt="big lotto title image"/>
                        <strong>{lang().STATISTICAL_DATA}</strong>
                    </div>
                </Link>
                <Link to='super'>
                    <div className='box'>
                        <img src={superLotto} alt="super lotto title image"/>
                        <strong>{lang().STATISTICAL_DATA}</strong>
                    </div>
                </Link>
            </div>
            <Link to='system'>
                <div className='systemBox'>
                    <img src={analyticsSystem} alt="super lotto title image"/>
                    <strong>{lang().FUDA_LOTTO} {lang().ANALYSIS_SYSTEM}</strong>
                </div>
            </Link>
            <Caution/>
        </div>
    );
};

export default AnalyticsScreen;