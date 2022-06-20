import React, {useEffect} from 'react';
import LottoNumList from "./LottoNumList";
import {lang} from "../../Assets/Lang/Lang";
import {bigWinDefine, dailyWinDefine, superWinDefine} from "../../Service/util";
import * as LocalStorageService from "../../Service/LocalStorageService";
import {Color} from "../../Styles/Base/color";

const LottoNumRow = (props) => {
    function setWinNumColor(i, num){
        if(props?.winNumData.indexOf(num) !== -1){
            return {backgroundColor:Color.LIGHT_RED, color:Color.WHITE};
        }
    }

    function setResultRankText(i) {
        let price =  props?.buyData[i].price;

        if(price === 0) {
            return <strong>{lang().WAITING}</strong>;
        } else if(price === -99){
            return <strong>{lang().WORK_HARD}</strong>;

        }else {
            switch (props.type){
                case 'daily':
                    return <strong style={{color:props.color}}>{dailyWinDefine[price-1].rate}</strong>;
                case 'super':
                    return <strong style={{color:props.color}}>{superWinDefine[price-1].rate}</strong>;
                case 'big':
                    return <strong style={{color:props.color}}>{bigWinDefine[price-1].rate}</strong>;
            }
        }

    }

    function getQrHistory(type){
        let data = null;
        switch (type){
            case 'daily':
                data = LocalStorageService.get('qrHistoryListDaily');
                return data && JSON.parse(data);
            case 'big':
                data = LocalStorageService.get('qrHistoryListBig');
                return data && JSON.parse(data);
            case 'super':
                data = LocalStorageService.get('qrHistoryListSuper');
                return data && JSON.parse(data);
        }
    }

    function setResultIsQrText(i){
        let isQr = props?.buyData[i].isUse;
        let idx = props?.buyData[i].idx;
        if(isQr === 'Y') {
            return <span style={{color:props.color}}>{lang().QR_MAKE}</span>;
        }else {
            return checkPurchase(idx);
        }
    }

    function checkPurchase(idx){
        let historyData = getQrHistory(props.type);
        if(historyData === null){
            return;
        }else {
            for(let i = 0; i < historyData.length; i++){
                for(let j = 0; j < historyData[i].data.length; j++){
                    if(historyData[i].purchased === true){
                        // TODO
                        //  안맞음
                        if(historyData[i].data[j].idx === idx){
                            return  <span style={{color:props.color}}> {lang().QR_PURCHASE} </span>;
                        }
                    }
                }
            }
        }
    }
    useEffect(()=>{

    },[props?.buyData])

    return (
        <ol>
            {props?.buyData?.map((item,i)=>
                (i !== props?.buyData?.length-1 ?
                        <li key={i}>
                            <input
                                type="checkbox"
                                onClick={(e)=> props.getSelectedCheckBox(e)}
                                value={i+1} name='number'
                                defaultChecked={props.isChecked[i+1]}/>
                            <div>
                                <LottoNumList
                                    b1={item.b1}
                                    b2={item.b2}
                                    b3={item.b3}
                                    b4={item.b4}
                                    b5={item.b5}
                                    b6={item.b6 ? item.b6 : false}
                                    sn={item.sn ? item.sn : false}
                                    setColor={setWinNumColor}
                                    setSnColor={setWinNumColor}/>
                            </div>
                            <span>
                                {setResultRankText(i)}
                                {setResultIsQrText(i)}
                            </span>
                            {/* TODO */}
                            {/*    1. QR생성후 'QR생성완료' 문구추가*/}
                            {/*    2. 구매체크 후 '구매완료' 문구추가*/}

                        </li>
                        : null
                ))}
        </ol>
    );
};

export default LottoNumRow;