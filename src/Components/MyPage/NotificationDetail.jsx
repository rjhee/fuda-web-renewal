import React, {useState, useEffect} from 'react';
import ToggleGreenButton from "../Common/ToggleGreenButton";

const NotificationDetail = (props) => {
    const [on, setOn] = useState(false);

    useEffect(()=>{
       if(props?.value){
           if(props?.value[props?.data?.COLUMN] === props?.data?.TRUE) {
               setOn(true);
           }else {
               setOn(false);
           }
       }
    },[props.value]);
    return (
        <section className='notificationDetailCover'>
            <div className='textCover'>
                <h1>{props.title}</h1>
                <span>{props.desc}</span>
            </div>
            <ToggleGreenButton on={on} setOn={setOn} data={props?.data} value={props?.value}/>
        </section>
    );
};

export default NotificationDetail;