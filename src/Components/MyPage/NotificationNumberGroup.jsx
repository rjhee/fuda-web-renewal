import React, {useState, useEffect} from 'react';
import dailyLotto from "../../Assets/Images/icon/daily-icon-a.png";
import bigLotto from "../../Assets/Images/icon/big-icon-a.png";
import superLotto from "../../Assets/Images/icon/super-icon-a.png";

const NotificationNumberGroup = (props) => {
    const [dailyLottoValue, setDailyLottoValue] = useState(0);
    const [dailyLottoItems, setDailyLottoItems] = useState([
        {label: '6組', value: 6},
        {label: '12組', value: 12},
    ]);

    const [bigLottoValue, setBigLottoValue] = useState(0);
    const [bigLottoItems, setBigLottoItems] = useState([
        {label: '5組', value: 5},
        {label: '10組', value: 10},
    ]);

    const [superLottoValue, setSuperLottoValue] = useState(0);
    const [superLottoItems, setSuperLottoItems] = useState([
        {label: '5組', value: 5},
        {label: '10組', value: 10},
    ]);



    let onChangeValue = (type, e) => {
        let ticket_cnt = Number(e.target.value);
        switch (type) {
            case 'big':
                props.value['big_ticket_cnt'] = ticket_cnt;
                setBigLottoValue(ticket_cnt);
                break;
            case 'daily':
                props.value['daily_ticket_cnt'] = ticket_cnt;
                setDailyLottoValue(ticket_cnt);
                break;
            case 'super':
                props.value['super_ticket_cnt'] = ticket_cnt;
                setSuperLottoValue(ticket_cnt);
                break;
        }
    }

    useEffect(()=>{
        setDailyLottoValue(props?.value['daily_ticket_cnt']);
        setSuperLottoValue(props?.value['super_ticket_cnt']);
        setBigLottoValue(props?.value['big_ticket_cnt']);
    },[props.value]);

    return (
        <section className='notificationNumberGroupCover'>
            <h1>號碼接收組數設定</h1>
            <ul>
                <li>
                    <img src={dailyLotto} alt="daily lotto icon image"/>
                    <select onChange={(e)=>onChangeValue('daily', e)} value={dailyLottoValue}>
                        <option value='' selected/>
                        {dailyLottoItems.map((item)=>
                            <option value={item.value}>{item.label}</option>
                        )}
                    </select>
                    
                </li>
                <li>
                    <img src={bigLotto} alt="big lotto icon image"/>
                    <select onChange={(e)=>onChangeValue('big', e)} value={bigLottoValue}>
                        <option value='' selected/>
                        {bigLottoItems.map((item)=>
                            <option value={item.value}>{item.label}</option>
                        )}
                    </select>
                </li>
                <li>
                    <img src={superLotto} alt="super lotto icon image"/>
                    <select onChange={(e)=>onChangeValue('super', e)} value={superLottoValue}>
                        <option value='' selected/>
                        {superLottoItems.map((item)=>
                            <option value={item.value}>{item.label}</option>
                        )}
                    </select>
                </li>
            </ul>
        </section>
    );
};

export default NotificationNumberGroup;