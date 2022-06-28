import React from 'react';
import NotificationNumberTime from "./NotificationNumberTime";
import NotificationNumberGroup from "./NotificationNumberGroup";
import LineButton from "../Common/LineButton";
import {Color} from "../../Styles/Base/color";

const NotificationNumber = () => {
    return (
        <div className='notificationNumberCover'>
            <NotificationNumberTime/>
            <NotificationNumberGroup/>
            <LineButton text={'更改資訊'} btnStyle={{borderColor: Color.MAIN_RED, width:'150px'}} fontStyle={{color: Color.MAIN_RED}}/>
        </div>
    );
};

export default NotificationNumber;