import React, {useState} from "react";
import SocialMedia from "./SocialMedia";
import faceImg from '../assets/Image.png';
import skyscraperLogo from '../assets/skyscraperIcon.svg';
import pinLogo from '../assets/pinLogo.svg';




const Card = ({media, addContacts, email, counter}) => {

    

      window.addEventListener('DOMContentLoaded', counter("followers", 0, 850, 1000));
      window.addEventListener('DOMContentLoaded', counter("references", 0, 50, 3000));
      window.addEventListener('DOMContentLoaded', counter("works", 0, 105, 4000));
   

return (
    <div className="profile-card">
        <figure className="profile-card__img">
            <img className="profile-pic" src={faceImg} alt="" />
            
        </figure>
        <div className="profile-card__desc">
            <h1>Bartosz Kwasecki</h1>
            <p>Junior Frontend Developer</p>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center'}}>
                <img src={skyscraperLogo} alt='logo' style={{ height: 24, width: 24 }}/>
                <span>Mindfit ltd</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center'}}>
                <img src={pinLogo} alt='logo' style={{ height: 24, width: 24 }}/>
                <span>London, United Kingdom</span>
            </div>
        </div>
        <div className="profile-card__info">
            <div>
                <div  id="followers">850</div>
                <div>Followers</div>
            </div>
            <div>
                <div  id="references">50</div>
                <div>References</div>
            </div>
            <div>
                <div  id="works">105</div>
                <div>Works</div>
            </div>
        </div>
        <div className="profile-card__social">
            {media.map(medium => {
          return <SocialMedia key={medium.id} {...medium} />;
        })}
        </div>
        <div className="profile-card__actions">
            <button onClick={addContacts} className="blue">Add to contacts</button>
            <button onClick={email} className="orange">Send mail</button>
        </div>
    </div>
)
}

export default Card;


        