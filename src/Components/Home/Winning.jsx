import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import useWindowDimensions from "../../Styles/Base/windowDimensions";
import trophy from "../../Assets/Images/icon/trophy.png"
import medal from "../../Assets/Images/icon/goldmedal.png"

const Winning = (props) => {
    const { height, width } = useWindowDimensions();
    return (
        <aside className='winningSection' style={{width:width-42}}>
            <div className='cover'>
                <div className='subCover'>
                    <img src={medal} alt="winning amount"/>
                    <div className='textCover'>
                       <span>{lang().FUDA_LOTTO}</span>
                       <strong>{lang().WIN_MEMBER}</strong>
                       <div className='numberCover'>
                           <strong>{props.winner}</strong>
                           <span>{lang().RANK}</span>
                       </div>
                    </div>
                </div>
                <div className='subCover'>
                    <img src={trophy} alt="winning member"/>
                    <div className='textCover'>
                        <span>{lang().FUDA_LOTTO}</span>
                        <strong>{lang().TOTAL_AMOUNT}</strong>
                        <div className='numberCover'>
                            <strong>{props.amount}</strong>
                            <span>{lang().YUAN}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className='moreBtn'>{lang().MORE}</button>
        </aside>
    );
};

export default Winning;