import React from 'react';
import logo from './logo.svg';
import facebookP from './images/facebook.png'
import instagramP from './images/instagram.png'
import twitterP from './images/twitter.png'
import youtubeP from './images/youtube.png'
import './Footer.css';
import { LinkType } from './adviceType';

const links: Array<LinkType> = [
  {
    title: 'Company Info',
    links: ['About Us',
    'Carrier',
    'We are hiring',
    'Blog']
  },
  {
    title: 'Legal',
    links: ['About Us',
    'Carrier',
    'We are hiring',
    'Blog']
  },
  {
    title: 'Features',
    links: ['Business Marketing',
    'User Analytic',
    'Live Chat',
    'Unlimited Support']
  },
  {
    title: 'Resources',
    links: ['IOS & Android',
    'Watch a Demo',
    'Customers',
    'API']
  }
]

function Footer() {
  return (

      <div id="Footer" className="Footer">
        <div className="footer-head">

          <h1>Litigade</h1>

            
            <ul id="socials">

              <li style={{marginLeft:"150px"}}>
                <a >
                  <img src={facebookP}/>
                </a>
              </li>
              <li>
                <a >
                  <img src={instagramP}/>
                </a>
              </li>

              <li>
                <a >
                  <img src={twitterP}/>
                </a>
              </li>

              <li>
                <a >
                  <img src={youtubeP}/>
                </a>
              </li>

            </ul>

        </div>

        <br/>
        <br/>
        <hr/>

        <div className="footer-grid">
          
          {links.map((link: LinkType) =>(
            <div className="footer-item">
              <p className='footer-item-title'>{link.title}</p>
              <ul className='footer-list'>
                {link.links.map((desc) => (
                  <li><a>{desc}</a></li>
                ))}
              </ul>

            </div>
          ))}
          <div className="footer-item">
              <p className='footer-item-title'>Get in Touch</p>
              <ul className='footer-list'>
                  <input placeholder='Your Email'></input>
                  <li><a>Lorem impsum dolor amit</a></li>
              </ul>

            </div>
        </div>

        <br></br>

        <p className="rights">Made With Love By Figmaland All Right Reserved </p>

      </div>
  );
}

export default Footer;
