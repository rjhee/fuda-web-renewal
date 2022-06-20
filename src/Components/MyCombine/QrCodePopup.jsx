import React from 'react';
import closeBtn from '../../Assets/Images/icon/btn-close.png'

import QRCode from "qrcode.react";

import {lang} from "../../Assets/Lang/Lang";
const QrCodePopup = (props) => {
    function close(e) {
        if(e.target['className'] !== 'downBtn'){
            props.setOnQr(false);
        }
    }
    function downloadQrImg() {
        const qr = document.getElementById("qrCode");
        const pngUrl = qr
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${props.value}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();

        console.log('QrCodePopup.jsx:24 ->', `download : ${props.value}.png`);
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
                <div className="qrImg">
                    <QRCode value={props.value} size={250} level={'M'} includeMargin={true} renderAs={'svg'}/>
                    <QRCode id='qrCode' className='hidden' value={props.value} size={200} level={'M'} includeMargin={true} renderAs={'canvas'}/>
                </div>
                <button onClick={()=>downloadQrImg()} className='downBtn'>{lang().DOWN}</button>
            </div>
        </article>
    );
};

export default QrCodePopup;