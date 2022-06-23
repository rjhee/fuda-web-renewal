import React, {useState} from 'react';
import TitleBig from "../../Components/Login/TitleBig";
import {lang} from "../../Assets/Lang/Lang";
import LongInput from "../../Components/Login/LongInput";
import LoginButton from "../../Components/Common/LoginButton";
import {Color} from "../../Styles/Base/color";

const FindFwScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    return (
        <section className='findFwCover'>
            <h1>
                <TitleBig text={lang().TEMPORARY_PW}/>
            </h1>
            <p>{lang().SEND_TEMPORARY_PW}</p>
            <div className='inputGroup'>
                <LongInput
                    type={'number'}
                    placeHolder={lang().ENTER_CELL_USED_JOIN}
                    setValue={setPhoneNumber}/>
                <LoginButton
                    color={Color.MAIN_RED}
                    text={lang().RECEIVE_TEMPORARY_PW}/>
            </div>
        </section>
    );
};

export default FindFwScreen;