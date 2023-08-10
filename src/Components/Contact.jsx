import React, { useState } from 'react'
import NavInsta from '../img/navInsta.svg'
import NavFcBook from '../img/NavFsBook.svg'
import NavLN from '../img/NavLN.svg'
import NavSite from '../img/NavSite.svg'
import Call from '../img/Call.svg'
import MessageContact from '../img/MessageContact.svg'
import loationContact from '../img/locationContact.svg'
// import toast from 'react-hot-toast';
import { toast } from 'react-hot-toast'
import axios from 'axios'

export default function Contact() {
  const BOT_TOKEN = "6189574670:AAF6_AfceRuiuG3ZrSo_CSwfYyiY4hrpPb8";
  const CHAT_ID = "-1001892280247"

  function formValidationChacking(name, number) {
    let isBoolean = false;

    if (!name) {
      setError(p => ({ ...p, name: [true, 'F.I.O. kiritilmadi!'] }))
      isBoolean = true

    } else if (name?.length < 6) {
      setError(p => ({ ...p, name: [true, "Bunchalik qisqa F.I.O. bo'lmaydi"] }))
      isBoolean = true
    }

    if (!number) {
      setError(p => ({ ...p, phone: [true, 'Telefon raqam kiritilmadi!'] }))
      isBoolean = true
    }
    return isBoolean;
  }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value

    if (formValidationChacking(name, number)) return
    setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        toast.success("Habar yuborildi 🙂")
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error("Habar yuborilmadi! Qaytadan urinib ko'ring 😞")
        setDisbl(false)
      })

    let style = {}
    if (inputValue === '') {
      style = {
        border: '2px solid red'
      }
    }
    else {
      style = {
        border: '2px solid green'
      }
    }
    setStyled(style)
  }

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '2px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""],
  })


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

          <form className='row' onSubmit={sendForm}>
            <h2>I’m always open to discussing <span>product design work</span> or partnership </h2>

            <div className='col-md-6 col-12'>
              <input type="text" id='name' required placeholder='Enter your name here' onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} />
              {error.name[0] && <p style={{ color: 'red' }}>{error.name[1]}</p>}
              <br />

                <input onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} type="tel" id='number' 
                  autocomplete="on" maxlength="13" minlength="4" data-intl-tel-input-id="1" placeholder='+998 (__)___-__-__' 
                  onChange={(e) => {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                      e.target.setCustomValidity(
                        "Raqamni noto'g'ri kiritdingiz! Misol: +998977770777"
                      );
                    }
                    setError(p => ({ ...p, phone: [false, ''] }))
                  }} pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                /> 
              {error.phone[0] && <p style={{ color: 'red' }}>{error.phone[1]}</p>}
            </div>
            <div className='col-md-12 col-12'>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Write your message here'></textarea>
            </div>
              <button disabled={disbl}>send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
