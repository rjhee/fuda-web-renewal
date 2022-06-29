import React from 'react';
import {getUserData} from "../../Service/AuthService";

const GradeText = () => {

    let grade = getUserData().grade;
    let getGradeText = () =>{
        switch (grade) {
            case 'FREE':
                return '一般會員';
            case 'Silver':
                return '白銀會員(1個月/非自動續訂)';
            case 'Gold':
                return '黃金會員(1個月)';
            case 'Diamond':
                return '鑽石會員(6個月)';
            case 'VIP':
                return 'VIP會員(12個月)';
            case 'VVIP':
                return 'VVIP會員(12+贈送2個月)';
            case 'admin':
                return 'ADMIN';
            default:
                return '一般會員';
        }
    }
    return (
        <div className='gradeTextCover'>
            <h1>您現在是</h1>
            <h2>{getGradeText()}</h2>
        </div>
    );
};

export default GradeText;