import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Link} from 'react-router-dom';
import Tooltip from "../Common/Tooltip";
import {showTooltip} from "../../Service/util";

const HomeBottomTab = () => {
    const [tooltipMiniGame, setTooltipMiniGame] = useState(false);


    return (
        <section className="tapCover">
            <Link as={Link} to='/' className='homeBtn'>
                <div className='bg'/>
                <span>{lang().HOME}</span>
            </Link>
            <Link as={Link} to='/feed/all' className='feedBtn'>
                <div className='bg'/>
                <span>{lang().FEED}</span>
            </Link>
            <Link to='/combine' className='QRBtn'>
                <div className='bg'/>
                <span>{lang().CENTER}</span>
            </Link>
            <button onClick={()=>showTooltip(setTooltipMiniGame)}  className='miniGameBtn' style={{position: 'relative'}}>
                {tooltipMiniGame === true ?  <Tooltip down={true}  top={'-75px'} left={'-55%'}/> : null}
                <div className='bg'/>
                <span>{lang().MINI_GAME}</span>
            </button>
            <Link to='/myPage/noUser' className='myPageBtn'>
                <div className='bg'/>
                <span>{lang().MY_PAGE}</span>
            </Link>
        </section>
    );
};



export default HomeBottomTab;