import React from "react";
import HeroPepsi from '../../recourses/video/hero_pepsi.mp4';

function HeroVideoPepsi() {
    return (
        <>
        <video controls controlsList="nodownload noremoteplayback" autoPlay loop playsInline muted>
             <source src={HeroPepsi} type="video/mp4"></source>     
             </video>
        </>
    )
}

export default HeroVideoPepsi;