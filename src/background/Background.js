import React from "react";
import "../styles/background.css";
import video from "../assets/motion.mp4";
import fallbackImage from "../assets/fallBackImage.png";


const Background = () => {
    return (
        <>
        <div className="shadow-overlay"></div>

        <video 
        playsInline 
        autoPlay 
        muted
        loop
        preload="auto" 
        id="bg"
        poster={fallbackImage}
        >
        
        <source src={video} type="video/mp4" />
            
        </video>
        </>
    );
}

export default Background;