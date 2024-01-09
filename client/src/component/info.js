import React from 'react';
import admin from '../img/admin.jpg'

const Info = () => {
    return(
        <div className='main-frame'>
            <div className='picture'>
                <img src={admin} alt='Admin'></img>
            </div>
            <div className='info'>
                <p>Bondhon Shahriar Alam</p>
                <p>Biträdande Rektor</p>
                <p>Mobil: +46 76 108 78 89</p>
                <p>Mejl: bondhon.shahriaralam@ntig.se</p>
            </div>
        </div>
    )
}

export default Info;