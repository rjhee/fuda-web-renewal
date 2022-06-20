import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";

import LottoNumList from "./LottoNumList";
import QrCodePopup from "./QrCodePopup";
import * as LocalStorageService from "../../Service/LocalStorageService"

const HistoryNumRow = (props) => {
    const [onQr, setOnQr] = useState(false);
    const [qrCode, setQrCode] = useState('');
    const [onSwitch, setOnSwitch] = useState(false);

    function getPurchasedState(result){
        if(result){
            return <span style={{color:props.color}}>{lang().PURCHASED}</span>
        }else {
            return <span>{lang().NO_PURCHASE}</span>
        }
    }

    function getSelectedCheckBox(e, i){
        let savedData = [...props.historyData];
        console.log('HistoryNumRow.jsx:22 ->', savedData);

        if(savedData[i].purchased === true){
            savedData[i]['purchased'] = false;
        }else {
            savedData[i]['purchased'] = true;
        }

        switch (props.type){
            case 'daily':
                LocalStorageService.set('qrHistoryListDaily', JSON.stringify(savedData))
                break;
            case 'big':
                LocalStorageService.set('qrHistoryListBig', JSON.stringify(savedData))
                break;
            case 'super':
                LocalStorageService.set('qrHistoryListSuper', JSON.stringify(savedData))
                break;
        }
        setOnSwitch(!onSwitch);
    }

    return (
        <ol className='historyGroup'>
            {props.historyData.map((items, i)=>
              <li>
                  {onQr === true ?
                      <QrCodePopup setOnQr={setOnQr} value={qrCode}/>
                      : null}
                  <div className='index'>
                      <span style={{color: props.color}}>{props.historyData.length-i}{lang().TEAM}</span>
                      <button className='qrBtn' onClick={()=> {
                          setOnQr(true);
                          setQrCode(items.qr);
                      }}>{lang().VIEW2}</button>
                  </div>
                  <ul className='lottoNum'>
                      <li>
                          {items.data.map((item)=>
                              <LottoNumList
                                  b1={item.b1}
                                  b2={item.b2}
                                  b3={item.b3}
                                  b4={item.b4}
                                  b5={item.b5}
                                  b6={item.b6 ? item.b6 : false}
                                  sn={item.sn ? item.sn : false}/>
                          )}
                      </li>
                  </ul>
                  <label className='purchaseBtn' for={'checkBox'+i}>
                      {getPurchasedState(items.purchased)}
                    <input
                        type="checkbox"
                        id={'checkBox'+i}
                        onClick={(e)=>getSelectedCheckBox(e, i)}
                        checked={items.purchased === true ? true : false}
                    />
                  </label>
              </li>
            )}
        </ol>
    );
};

export default HistoryNumRow;