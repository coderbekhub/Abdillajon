import React, { useState } from 'react'
import NavInsta from '../img/navInsta.svg'
import NavFcBook from '../img/NavFsBook.svg'
import NavLN from '../img/NavLN.svg'
import NavSite from '../img/NavSite.svg'
import Call from '../img/Call.svg'
import MessageContact from '../img/MessageContact.svg'
import loationContact from '../img/locationContact.svg'
import toast from 'react-hot-toast';

export default function Contact() {
  const BOT_TOKEN = "6189574670:AAF6_AfceRuiuG3ZrSo_CSwfYyiY4hrpPb8";
  const CHAT_ID = "-1001892280247"
  return (
    <section className='contactSection'>
      <div className="container">
        <div className="contactContent">
          <div className='contactInfo'>
            <h2> 05 <span>contact</span></h2>
            <div>
              <img src={Call} alt="..." />
              <h3>Phone:</h3>
              <a href="tel:+998977770777">(219) 555-0114</a>
            </div>

            <div>
              <img src={MessageContact} alt="..." />
              <h3>Email:</h3>
              <a href="tel:+998977770777">robertfox@example.com</a>
            </div>

            <div>
              <img src={loationContact} alt="..." />
              <h3>Address:</h3>
              <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
            </div>

            <ul>
              <li>
                <a href="#">
                  <div>
                    <img src={NavInsta} alt="..." />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <img src={NavFcBook} alt="..." />
                  </div>
                </a></li>
              <li>
              <a href="#">
                <div>
                  <img src={NavLN} alt="..." />
                </div>
              </a></li>
              <li>
                <a href="#">
                  <div>
                    <img src={NavSite} alt="..." />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <form className='row'>
            <h2>I’m always open to discussing <span>product design work</span> or partnership </h2>

            <div className='col-md-6 col-12'>
              <input type="text" id='name' required placeholder='Enter your name here' /><br />

              <input type="number" id='number' required placeholder='Enter your phone number' /> 
            </div>
            <div className='col-md-12 col-12'>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Write your message here'></textarea>
            </div>
              <button>send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
