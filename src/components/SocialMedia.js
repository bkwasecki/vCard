import React from "react";

const SocialMedia = ({id, name, image, url}) => {

    
    return (
        <div>
            <a href={url} target="_blank" className={name}>
                <img src={image} alt={name} style={{filter: "brightness(0) invert(1)"}}/>
            </a>
        </div>
    )
}

export default SocialMedia;