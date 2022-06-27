import React from 'react';
import {lang} from "../../Assets/Lang/Lang";

const UserIdWithIcon = (props) => {
    let name = props.member_name ? props.member_name : 'test user';
    let grade = props.member_grade ? props.member_grade : 'FREE';

    function getGradeURL(grade){
        switch (grade) {
            case 'FREE':
                return require('../../Assets/Images/icon/grade-free.png');
            case 'Silver':
                return require('../../Assets/Images/icon/grade-silver.png');
            case 'Gold':
                return require('../../Assets/Images/icon/grade-gold.png');
            case 'Diamond':
                return require('../../Assets/Images/icon/grade-diamond.png');
            case 'VIP':
                return require('../../Assets/Images/icon/grade-vip.png');
            case 'VVIP':
                return require('../../Assets/Images/icon/grade-vvip.png');
            case 'admin':
                return require('../../Assets/Images/icon/icon-grade-master.png');
            case 'Admin':
                return require('../../Assets/Images/icon/icon-grade-master.png');
            case 'FUDALOTTO':
                return require('../../Assets/Images/icon/icon-grade-master.png');
            default:
                return require('../../Assets/Images/icon/grade-free.png');
        }
    }

    function changeAdmin(name) {
        if((name === 'FUDALOTTO' || name === 'fuda lotto') &&
            (grade === 'admin' || grade === 'Admin')) {
            return lang().FUDA_LOTTO;
        }
        return name;
    }

    return (
        <div className='userIdWithIcon'>
            <img className='icon' src={getGradeURL(grade)} alt='user grade icon'/>
            <span className='userId'>{changeAdmin(name)}</span>
        </div>
    );
};

export default UserIdWithIcon;