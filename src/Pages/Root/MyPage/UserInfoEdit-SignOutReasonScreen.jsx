import React,{useState} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import CheckBoxWithText from "../../../Components/Common/CheckBoxWithText";
import LoginButton from "../../../Components/Common/LoginButton";
import {useNavigate} from "react-router-dom";
import {signOut} from "../../../Service/UserService";
import {logout} from "../../../Service/AuthService";

const UserInfoEditSignOutReasonScreen = (props) => {
    let navigate = useNavigate();
    const [reason, setReason] = useState([-1,-1,-1,-1,-1,-1]);
    const [index, setIndex] = useState(-1);

    function checked(index) {
        let reasonCopy = [...reason];
        for(let i = 0; i < reasonCopy.length; i++){
            reasonCopy[i] = -1;
        }
        reasonCopy[index] = true;
        setReason(reasonCopy)
        setIndex(index+1);
    }

    let signOutProcess = async () => {
        let res = await signOut(index);
        if (res.data !== null) {
            alert('signOut');
            await logout();
            navigate(props.loginPath);
        }
    }

    let cancel = () => {
        navigate(props.mainPath);
    }

    return (
        <section className='userInfoEditSignOutReasonCover'>
            <h1>
                <Title text1={'退出會員'} color={Color.MAIN_RED}/>
            </h1>
            <div className='descCover'>
                <p>感謝您使用富達樂透</p>
                <div className='line'/>
                <span>
                     請讓我們知道您退出的原因，幫助我們改進服品質。
                </span>
            </div>
            <div className='checkbox'>
                <CheckBoxWithText i={0} onClick={checked} checked={reason[0]} text={'不滿意的地方'}/>
                <CheckBoxWithText i={1} onClick={checked} checked={reason[1]} text={'使用其他服務'}/>
                <CheckBoxWithText i={2} onClick={checked} checked={reason[2]} text={'創建新ID'}/>
                <CheckBoxWithText i={3} onClick={checked} checked={reason[3]} text={'考慮到個人資料與安全'}/>
                <CheckBoxWithText i={4} onClick={checked} checked={reason[4]} text={'不舒服的使用體驗'}/>
                <CheckBoxWithText i={5} onClick={checked} checked={reason[5]} text={'不滿意的服務內容'}/>
                <CheckBoxWithText i={6} onClick={checked} checked={reason[6]} text={'其他原因'}/>
            </div>
            <div className='btnCover'>
                <LoginButton
                    onClick={signOutProcess}
                    text={'退出'} color={Color.MAIN_RED}/>
                <LoginButton
                    onClick={cancel}
                    text={'取消'} color={Color.LIGHT_GREY}/>
            </div>
        </section>
    );
};

export default UserInfoEditSignOutReasonScreen;