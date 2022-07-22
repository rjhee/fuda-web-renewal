import React, {useState, useEffect} from 'react';
import {lang} from "../../Assets/Lang/Lang";
import { Link, useNavigate } from 'react-router-dom';
import UserIdWithIcon from "../Common/UserIdWithIcon";
import * as AuthService from "../../Service/AuthService"
import {showTooltip} from "../../Service/util";
import Tooltip from "../Common/Tooltip";

const UserInfoCard = (props) => {
    const [grade, setGrade] = useState('FREE');
    const [name, setName] = useState('google1545');
    const [date, setDate] = useState('110.08.13 ~ 111.08.13');
    const [money, setMoney] = useState('0');
    const [uid, setUid] = useState(0);
    const [tooltipFc, setTooltipFc] = useState(false);

    let refreshUserData = async function(){
        let userInfo = await AuthService.getUserData();
        setGrade(userInfo['grade']);
        setName(userInfo['name']);
        setUid(userInfo['uid'])
        setDate(_calculateExpireDate(userInfo['grade'], userInfo['vip_date']));
        if(date === '') {
            setDate('No VIP');
        }
        setMoney(0);
    }

    useEffect(() => {

        refreshUserData().then();
    }, []);

    function _calculateExpireDate( grade, end_date ){
        if ( !!end_date === false )
            return "";


        let endDate = new Date(end_date);
        let startDate =  new Date(end_date);

        if ( grade === "FREE" )
            startDate.setDate( startDate.getDate() - 7);
        else if ( grade === "Silver" || grade === "Gold")
            startDate.setMonth( startDate.getMonth() - 1);
        else if ( grade === "Diamond" )
            startDate.setMonth( startDate.getMonth() - 6);
        else if ( grade === "VIP" )
            startDate.setMonth( startDate.getMonth() - 12);
        else if ( grade === "VVIP" )
            startDate.setMonth( startDate.getMonth() - 14);


        function stringDate( dateFormat ){
            let date = new Date(dateFormat);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear() - 2022 + 111;
            return `${year}.${month}.${day}`;
        }

        let resStr = `${stringDate(startDate)} ~ ${stringDate(endDate)}`;
        return resStr
    }

    function getGradeDate(){
        if((grade === 'FREE') && (!!grade.vip_date === false)){
            return(
                <strong>您現在是一般會員</strong>
            )
        } else {
            return(
                <strong>{grade+'會員期間'}</strong>
            )
        }
    }

    return (
        <section className='userInfoCardCover'>
            <h1 className='userId'>
                <UserIdWithIcon member_name={name} member_grade={grade}/>
            </h1>
            <div className='userGrade'>
                <p>
                   <strong>{getGradeDate()}</strong>
                   <span>{date}</span>
                </p>
                {/* shop 이동 버튼*/}
                {/*<Link to='/shop'>*/}
                {/*    <button>{lang().SHOP}</button>*/}
                {/*</Link>*/}
            </div>
            <div className='userFc'>
                <p>
                    <strong>{money} </strong>
                    <span>FC</span>
                </p>
                <button onClick={()=>showTooltip(setTooltipFc)}>{lang().EXCHANGE}</button>
                {tooltipFc === true ? <Tooltip down={true} top={'-50px'} left={'58%'}/> : null}
            </div>
        </section>
    );
};

export default UserInfoCard;