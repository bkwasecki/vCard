import React, {useState} from "react";
import SocialMedia from "./SocialMedia";
import faceImg from '../assets/Image.png';
import logo from '../assets/logo-2.png';
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
            <a href="https://www.pressstart.bg" target="_blank" className="company-logo">
                <img src={logo} alt="" />
            </a>
        </figure>
        <div className="profile-card__desc">
            <h1>Dimitar Ivanov</h1>
            <p>Full Stack Developer</p>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center'}}>
                <img src={skyscraperLogo} alt='logo' style={{ height: 24, width: 24 }}/>
                <span>Press Start ltd</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center'}}>
                <img src={pinLogo} alt='logo' style={{ height: 24, width: 24 }}/>
                <span>Sofia, Bulgaria</span>
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


        