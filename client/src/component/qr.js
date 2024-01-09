import React from 'react';
import qr from '../img/bokning-qr.png'

const QR = () => {
    return(
        <div className='qr'>
            <img src={qr} alt='QR-Kod'></img>
        </div>
    )
}

export default QR;