import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import HistoryNumRow from "./HistoryNumRow";

const HistoryList = (props) => {
    return (
        <section>
            <div className='groupIndex' style={{backgroundColor: props.color}}>
                <span>{lang().GENERATED_QR_G}</span>
                <div>
                    <span>{lang().STATE}</span>
                    <button style={{color: props.color}}>?</button>
                </div>
            </div>
            <div>
                <HistoryNumRow
                    type={props.type}
                    color={props.color}
                    historyData={props.historyData}/>
            </div>
        </section>
    );
};

export default HistoryList;