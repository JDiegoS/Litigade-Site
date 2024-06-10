import React from 'react';
import logo from './logo.svg';
import searchP from './images/search.png'
import shoppingP from './images/shopping-cart.png'
import navP from './images/navbar-toggler.png'
import './Home.css';

function Home() {
  return (

      <div id="Home" className="Home">
        <div className="navbar">

          <h1>Litigade</h1>

          <div className="menu-options">
            
            <ul id="mainNav">
              <li>
                <a href="#Home" >Home</a>
              </li>
              <li>
                <a href="#Home" >Product</a>
              </li>
              <li>
                <a href="#Home" >Pricing</a>
              </li>
              <li>
                <a href="#Home" >Contact</a>
              </li>

              <li style={{marginLeft:"150px"}}>
                <a >
                  <img src={searchP}/>
                </a>
              </li>
              <li>
                <a >
                  <img src={shoppingP}/>
                </a>
              </li>

              <li style={{marginLeft:"200px"}}>
                <a >
                  <img src={navP}/>
                </a>
              </li>

            </ul>

            

          </div>
        </div>

        <div className="home-content">
          <div className="item1">
            <p className='motto'>
              Help reclaim your life and freedom
            </p>

            <p className='subtext'>
              We know how large objects will act, but things on a small scale
            </p>

            <div className="home-buttons">
              <button className='hBtn1'>Get Quote Now</button>
              <button className='hBtn2'>Learn More</button>
            </div>
          </div>


          <div className="item2">
            <h2>Book Appointment</h2>

            <form className="home-form">
              <div>
                <p>
                Name*
                </p>
                <input type="text" placeholder='Full Name'  />
              </div>
              <div>
                <p>
                Email*
                </p>
                <input type="text" placeholder='example@gmail.com' />
              </div>
              <div>
                <p>
                Department*
                </p>
                <select >
                  <option value="1">Please Select</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div>
                <p>
                Time*
                </p>
                <select >
                  <option value="1">4:00 Available</option>
                  <option value="2">5:00</option>
                </select>
              </div>
              <input className='submitBtn' type="submit" value="Book Appointment" />
            </form>
          </div>

        </div>


      </div>
  );
}

export default Home;
