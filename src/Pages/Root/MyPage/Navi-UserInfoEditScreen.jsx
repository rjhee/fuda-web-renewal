import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {lang} from "../../../Assets/Lang/Lang";
import LineButton from "../../../Components/Common/LineButton";
import {getUserSignType} from "../../../Service/UserService";
import {getUserSimple} from "../../../Service/AuthService";
const NaviUserInfoEditScreen = (props) => {
    let navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([
        {key:lang().USER_ID, value: 'test', isBtn: true, path: '/'},
        {key:lang().ACCOUNT, value: 'test@google.com', isBtn: false, path: '/'},
        {key:lang().PHONE, value: '0110101010', isBtn: true, path: '/'},
        {key:lang().PASSWORD, value: '***********', isBtn: true, path: '/'},
    ]);

    async function getUserType() {
        let result = await getUserSignType();
        console.log('MyPage.js:50 ->',result.data);
        let signInType = result.data;
        if(signInType === 'SNS') {
            return true;
        }else {
            navigate(props.reLoginPath);
        }
    }
    function movePath(type, path){
        console.log('Navi-UserInfoEditScreen.jsx:29 ->',path);
        if(type === 'PATH') {
            return navigate(path);
        }else {
            getUserSignType().then(r=>{
                if(r.data === 'SNS') {
                    return alert('非電子信箱登入之使用者\n' +
                        '無法變更密碼');
                }else {
                    return navigate(path);
                }
            });
        }
    }

    function getUser(){
        getUserSimple().then(r=>{
            console.log('Navi-UserInfoEditScreen.jsx:34 ->',r.data);
            if(r.data !== null) {
                setUserInfo([
                    {key:lang().USER_ID, value: r.data[0].name, isBtn: true, onClick: ()=> movePath('PATH', 'name')},
                    {key:lang().ACCOUNT, value: r.data[0].email, isBtn: false, },
                    {key:lang().PHONE, value: r.data[0].phone, isBtn: true, onClick: ()=> movePath('PATH', 'phone')},
                    {key:lang().PASSWORD, value: '***********', isBtn: true, onClick:()=> movePath('', 'pw')},
                ])
            }
        });
    }

    useEffect(()=>{
        getUserType();
        getUser();
    },[])

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
                            <LineButton text={lang().CHANGE} onClick={data.onClick}/>
                            : null}
                    </li>
                )}
            </ul>
            <p>
                如果您想放棄成為頭獎得主的機會
            </p>
            <LineButton
                onClick={()=>navigate('signOut')}
                text={lang().SIGN_OUT} btnStyle={{width: '50%'}}/>
        </section>
    );
};

export default NaviUserInfoEditScreen;