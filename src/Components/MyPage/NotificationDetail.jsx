import React, {useState} from 'react';
import ToggleGreenButton from "../Common/ToggleGreenButton";

const NotificationDetail = (props) => {
    const [on, setOn] = useState(false);

    return (
        <section className='notificationDetailCover'>
            <div className='textCover'>
                <h1>{props.title}</h1>
                <span>{props.desc}</span>
            </div>
            <ToggleGreenButton on={on} setOn={setOn}/>
        </section>
    );
};

export default NotificationDetail;