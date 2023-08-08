import React from 'react'
import NavInsta from '../img/navInsta.svg'
import NavFcBook from '../img/NavFsBook.svg'
import NavLN from '../img/NavLN.svg'
import NavSite from '../img/NavSite.svg'
import Call from '../img/Call.svg'

export default function Contact() {
  return (
    <section className='contactSection'>
      <div className="container">
        <div className="contactContent">
          <div className='contactInfo'>
            <h2> 05 <span>contact</span></h2>
            <div>
              {/* <img src={Call} alt="..." /> */}
              <div>
                <h3>Phone</h3>
                <a href="tel:+998977770777">(219) 555-0114</a>
              </div>
            </div>

            <div>
              <h3>Email</h3>
              <a href="tel:+998977770777">robertfox@example.com</a>
            </div>

            <div>
              <h3>Address</h3>
              <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
            </div>

            <ul>
              <li>
                <a href="#">
                  <div>
                    <img src={NavInsta} alt="..." />
                  </div>
                </a></li>
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
              {/* <label htmlFor="name">Your name*</label> <br /> */}
              <input type="text" id='name' required placeholder='Enter your name here' /><br />

              {/* <label htmlFor="address">Email Address*</label> <br /> */}
              <input type="number" id='number' required placeholder='Enter your phone number' /> 
            </div>
            <div className='col-md-12 col-12'>
              {/* <label htmlFor="message">Message</label> <br /> */}
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Write your message here'></textarea>
            </div>
              <button>send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
