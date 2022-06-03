import React from 'react';
import {lang} from '../../../Assets/Lang/Lang'

const WinningBox = (props) => {
    // if(!props.firstIndex) props.firstIndex = 'jackpot';
    // if(!props.firstUser) props.firstUser = 1;
    // if(!props.firstAmount) props.firstAmount = 10000;
    // if(!props.secondIndex) props.secondIndex = 'second';
    // if(!props.secondUser) props.secondUser = 2;
    // if(!props.secondAmount) props.secondAmount = 20000;
    // if(!props.thirdIndex) props.thirdIndex = 'third';
    // if(!props.thirdUser) props.thirdUser = 3;
    // if(!props.thirdAmount) props.thirdAmount = 30000;
    // if(!props.bonusIndex) props.bonusIndex = 'bonus';
    // if(!props.bonusUser) props.bonusUser = 4;
    // if(!props.bonusAmount) props.bonusAmount = 40000;
    console.log('WinningBox.jsx:17 ->', props?.firstUser??"");

    return (
        <div className="boxSectionCover">
            <img src={props.titleImg} className="titleIcon" alt="title icon"/>
            <ul className="boxCover">
                <li>
                    <span>{props.firstIndex} </span>
                    <div className="firstUser">
                        <strong>{(props?.firstUser??"").toLocaleString('en')} </strong>
                        <span> {lang().RANK}</span>
                    </div>
                    <div className="firstAmount">
                        <strong>{(props?.firstAmount??"").toLocaleString('en')} </strong>
                        <span> {lang().YUAN}</span>
                    </div>
                </li>
                <li>
                    <span>{props.secondIndex} </span>
                    <div className="secondUser">
                        <strong>{(props?.secondUser??"").toLocaleString('en')} </strong>
                        <span> {lang().RANK}</span>
                    </div>
                    <div className="secondAmount">
                        <strong>{(props?.secondAmount??"").toLocaleString('en')}</strong>
                        <span> {lang().YUAN}</span>
                    </div>
                </li>
                {props.bonusIndex ?
                    <li>
                        <span>{props.bonusIndex} </span>
                        <div className="bonusUser">
                            <strong>{(props?.bonusUser??"").toLocaleString('en')} </strong>
                            <span> {lang().RANK}</span>
                        </div>
                        <div className="bonusAmount">
                            <strong>{(props?.bonusAmount??"").toLocaleString('en')}</strong>
                            <span> {lang().YUAN}</span>
                        </div>
                    </li> : null}
                <li>
                    <span>{props.thirdIndex} </span>
                    <div className="thirdUser">
                        <strong>{(props?.thirdUser??"").toLocaleString('en')} </strong>
                        <span> {lang().RANK}</span>
                    </div>
                    <div className="thirdAmount">
                        <strong>{(props?.thirdAmount??"").toLocaleString('en')} </strong>
                        <span> {lang().YUAN}</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WinningBox;