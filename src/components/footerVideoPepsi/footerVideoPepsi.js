import React from 'react';

import PepsiVideo from '../../recourses/video/pepsi_video.mp4';

function FooterVideoPepsi() {
    return(
        <>
            <video controls controlsList="nodownload noremoteplayback" autoPlay loop playsInline muted>
                <source src={PepsiVideo} type="video/mp4"></source>
            </video>
        </>
    )
}

export default FooterVideoPepsi;