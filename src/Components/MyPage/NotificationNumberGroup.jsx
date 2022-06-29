import React, {useState, useEffect} from 'react';
import dailyLotto from "../../Assets/Images/icon/daily-icon-a.png";
import bigLotto from "../../Assets/Images/icon/big-icon-a.png";
import superLotto from "../../Assets/Images/icon/super-icon-a.png";

const NotificationNumberGroup = (props) => {
    const [dailyLottoOpen, setDailyLottoOpen] = useState(false);
    const [dailyLottoValue, setDailyLottoValue] = useState(null);
    const [dailyLottoItems, setDailyLottoItems] = useState([
        {label: '6組', value: 6},
        {label: '12組', value: 12},
    ]);

    const [bigLottoOpen, setBigLottoOpen] = useState(false);
    const [bigLottoValue, setBigLottoValue] = useState(null);
    const [bigLottoItems, setBigLottoItems] = useState([
        {label: '5組', value: 5},
        {label: '10組', value: 10},
    ]);

    const [superLottoOpen, setSuperLottoOpen] = useState(false);
    const [superLottoValue, setSuperLottoValue] = useState(null);
    const [superLottoItems, setSuperLottoItems] = useState([
        {label: '5組', value: 5},
        {label: '10組', value: 10},
    ]);



    let onChangeValue = (type, e) => {
        switch (type) {
            case 'big':
                props.value['big_ticket_cnt'] = e.target.value;
                setBigLottoValue(e.target.value);
                break;
            case 'daily':
                props.value['daily_ticket_cnt'] = e.target.value;
                setDailyLottoValue(e.target.value);
                break;
            case 'super':
                props.value['super_ticket_cnt'] = e.target.value;
                setSuperLottoValue(e.target.value);
                break;
        }
    }

    useEffect(()=>{
        // TODO
        // 업데이트 후 저장 잘 됐는지 확인
        setDailyLottoValue(props?.value['daily_ticket_cnt']);
        setSuperLottoValue(props?.value['super_ticket_cnt']);
        setBigLottoValue(props?.value['big_ticket_cnt']);
    },[]);

    return (
        <section className='notificationNumberGroupCover'>
            <h1>號碼接收組數設定</h1>
            <ul>
                <li>
                    <img src={dailyLotto} alt="daily lotto icon image"/>
                    <select onChange={(e)=>onChangeValue('daily', e)} value={dailyLottoValue}>
                        {dailyLottoItems.map((item)=>
                            <option value={item.value}>{item.label}</option>
                        )}
                    </select>
                    
                </li>
                <li>
                    <img src={bigLotto} alt="big lotto icon image"/>
                    <select onChange={(e)=>onChangeValue('big', e)} value={bigLottoValue}>
                        {bigLottoItems.map((item)=>
                            <option value={item.value}>{item.label}</option>
                        )}
                    </select>
                </li>
                <li>
                    <img src={superLotto} alt="super lotto icon image"/>
                    <select onChange={(e)=>onChangeValue('super', e)} value={superLottoValue}>
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