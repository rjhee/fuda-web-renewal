import React from 'react';
import ToggleGreenButton from "../Common/ToggleGreenButton";

const NotificationDetail = (props) => {
    return (
        <section className='notificationDetailCover'>
            <div className='textCover'>
                <h1>{props.title}</h1>
                <span>{props.desc}</span>
            </div>
            <ToggleGreenButton on={true}/>
        </section>
    );
};

export default NotificationDetail;