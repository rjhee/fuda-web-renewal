import React from 'react';
import {lang} from '../../../Assets/Lang/Lang'

const WinningBox = (props) => {

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