import React from 'react';
import logo from './logo.svg';
import aboutVid from './images/media.png'

import './AboutUs.css';


function AboutUs() {
  return (

      <div id="AboutUs" className="AboutUs">
        <div className="about-header">
          <p className='title'>Who We Are</p>

          <p className='subtitle'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className="about-vid">
          <img src={aboutVid}></img>
        </div>

      </div>
  );
}

export default AboutUs;
