import React, {useState} from 'react';
import Card from './components/Card';
import vCard from './assets/vCard.vcf';



function App() {

const social = [
{"id": "1", "name": "facebook", "url": "https://www.facebook.com/didevme/", "image": "https://svgur.com/i/njm.svg"}, 
{"id": "2", "name": "twitter", "url": "https://twitter.com/dashbg", "image": "https://svgshare.com/i/nkx.svg"}, 
{"id": "3", "name": "instagram", "url": "https://www.instagram.com/dimitar.ivanov_dash/", "image": "https://svgshare.com/i/nkg.svg"}, 
{"id": "4", "name": "linkedin", "url": "https://www.linkedin.com/in/dimitar-ivanov-1727691a3/", "image": "https://svgshare.com/i/nks.svg"},
{"id": "5", "name": "github", "url": "https://github.com/didevme", "image": "https://svgshare.com/i/nir.svg"} 
];

const [media, setMedia] = useState(social);

const addToContacts = () => {
  window.location = vCard;
}

const sendMail = () => {
            window.location = 'mailto:mitko@pressstart.bg';
        }

function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                clearInterval(timer);
                }
            }, step);
            }
            


  return (
    <>
        <Card media={media} addContacts={addToContacts} email={sendMail} counter={counter}/>
    </>
  );
}

export default App;
