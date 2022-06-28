import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {lang} from "../../../Assets/Lang/Lang";
import LineButton from "../../../Components/Common/LineButton";

const NaviUserInfoEditScreen = () => {
    const [userInfo, setUserInfo] = useState([
        {key:lang().USER_ID, value: 'test', isBtn: true, path: '/'},
        {key:lang().ACCOUNT, value: 'test@google.com', isBtn: false, path: '/'},
        {key:lang().PHONE, value: '0110101010', isBtn: true, path: '/'},
        {key:lang().PASSWORD, value: '8888888888', isBtn: true, path: '/'},
    ]);

    return (
        <section className='userInfoEditCover'>
            <h1>
                <Title text1={lang().ACCOUNT_SETTING} color={Color.MAIN_RED}/>
            </h1>
            <ul>
                {userInfo.map((data)=>
                    <li>
                        <div className='infoCover'>
                            <span>{data.key}</span>
                            <strong>{data.value}</strong>
                        </div>
                        {data.isBtn ?
                            <Link to={data.path}>
                                <LineButton text={lang().CHANGE}/>
                            </Link>
                            : null}
                    </li>
                )}
            </ul>
            <p>
                如果您想放棄成為頭獎得主的機會
            </p>
            <LineButton text={lang().SIGN_OUT} btnStyle={{width: '50%'}}/>
        </section>
    );
};

export default NaviUserInfoEditScreen;