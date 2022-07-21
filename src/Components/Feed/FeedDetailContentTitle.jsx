import React from 'react';
import DotBtn from "./DotBtn";
import UserIdWithIcon from "../Common/UserIdWithIcon";
import {convertToChineseYear, getJustTime} from "../../Service/util";
import WinnerData from "./WinnerData";

const FeedDetailContentTitle = (props) => {
    return (
        <div className='title' style={{backgroundColor:props.titleColor}}>
            <div>
                <p>{props.title} </p>
                {props.isMine(props.member_uid) === true
                    ? <DotBtn menuOn={props.menuOn} setMenuOn={props.setMenuOn}/>
                    : null}
            </div>
            <div>
                <UserIdWithIcon member_grade={props.member_grade}
                                member_name={props.member_name}/>
                <span>{convertToChineseYear(props.reg_date)} {getJustTime(props.reg_date)}</span>
            </div>
            {props.boardType === 6
                ? <WinnerData uid={props.uid}/>
                : null}
        </div>
    );
};

export default FeedDetailContentTitle;