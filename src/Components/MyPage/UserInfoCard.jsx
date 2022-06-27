import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import { Link, useNavigate } from 'react-router-dom';
import UserIdWithIcon from "../Common/UserIdWithIcon";


const UserInfoCard = (props) => {
    let userId = props.userId ? props.userId : 'facebook12345';
    let grade = props.grade ? props.grade : 'Silver會員期間';
    let dueDate = props.dueDate ? props.dueDate : '111.02.13 ~ 111.03.13';
    let fc = props.fc ? props.fc : '0';

    return (
        <section className='userInfoCardCover'>
            <h1 className='userId'>
                <UserIdWithIcon/>
            </h1>
            <div className='userGrade'>
                <p>
                   <strong>{grade}</strong>
                   <span>{dueDate}</span>
                </p>
                <Link to='/shop'>
                    <button>{lang().SHOP}</button>
                </Link>
            </div>
            <div className='userFc'>
                <p>
                    <strong>{fc} </strong>
                    <span>FC</span>
                </p>
                <button>{lang().EXCHANGE}</button>
            </div>
        </section>
    );
};

export default UserInfoCard;