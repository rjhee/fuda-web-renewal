import React from 'react';
import closeBtn from '../../Assets/Images/icon/btn-close.png'
import QrImg from '../../Assets/Images/icon/QRcode.png'

import {lang} from "../../Assets/Lang/Lang";
const QrCodePopup = (props) => {
    function close(e) {
        if(e.target['className'] !== 'downBtn'){
            props.setOnQr(false);
        }
    }
    function downloadQrImg() {
        console.log('QrCodePopup.jsx:13 ->','download....');
    }
    return (
        <article className='qrPopupCover'
                 onClick={(e)=> close(e)}>
            <div className='box'>
                <header>
                    <h1 className='hidden'>QR code</h1>
                    <button>
                        <img src={closeBtn} alt="close button image"/>
                    </button>
                </header>
                <img src={QrImg} alt="QR code image"/>
                <button onClick={()=>downloadQrImg()} className='downBtn'>{lang().DOWN}</button>
            </div>
        </article>
    );
};

export default QrCodePopup;