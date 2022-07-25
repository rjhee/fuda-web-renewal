import React from 'react';
import {Color} from "../../../Styles/Base/color";
import CircleButton from "../../Common/CircleButton";

const AnalyticsCircleBtn = (props) => {
    return (
        <div className='analyticsCircleBtnCover'>
            {props?.data?.map((item, i)=>
                <div key={i}>
                    <CircleButton onClick={()=>props.moveToSection( props.staticsLevel, item.type, 'type')}  color={item.on === true ? props.color : null} fontColor={item.on === true ? Color.WHITE : null} title={item.S} subTitle={item.L}/>
                </div>
            )}
        </div>
    );
};

export default AnalyticsCircleBtn;