import React from 'react';
import NotificationDetail from "./NotificationDetail";

const NotificationList = (props) => {

    return (
        <div className='toggleBtnCover'>
            {/*free user*/}
            {props.grade !== 'FREE'
                ?
                <>
                    <NotificationDetail title={'威力彩最新消息'} desc={'最新預測號碼及開獎通知'} value={props?.value} data={props?.data.vip[0]}/>
                    <NotificationDetail title={'大樂透最新消息'} desc={'最新預測號碼及開獎通知'} value={props?.value} data={props?.data.vip[1]}/>
                    <NotificationDetail title={'今彩539最新消息'} desc={'最新預測號碼及開獎通知'} value={props?.value} data={props?.data.vip[2]}/>
                    <NotificationDetail title={'最新消息'} desc={'最新開獎結果及其他樂透相關資訊'} value={props?.value} data={props?.data.vip[3]}/>
                </>
                :
                <>
                    <NotificationDetail title={'免費富達號碼'} desc={'一般會員最新預測號碼通知'} value={props?.value} data={props?.data.free[0]}/>
                    <NotificationDetail title={'最新消息'} desc={'最新開獎結果及其他樂透相關資訊'} value={props?.value} data={props?.data.free[1]}/>
                </>}
            {/*silver ~ vvip*/}
        </div>
    );
};

export default NotificationList;