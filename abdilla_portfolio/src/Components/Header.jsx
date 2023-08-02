import React, {useState, useEffect} from 'react'
import NavBrand from '../img/NavBrand.svg'
import NavInsta from '../img/navInsta.svg'
import NavFcBook from '../img/NavFsBook.svg'
import NavLN from '../img/NavLN.svg'
import NavSite from '../img/NavSite.svg'


export default function Header() {
  const [active, setActive] = useState('nav-list')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav__active')
      : setActive('nav-list')

    toggleIcon === 'nav__toggler'
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

  const[navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  useEffect(() => {
  }, [])

  return (
    <section className='headerSection'>
      <div className="container">
        {/* NAVBAR START */}
        <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
            <div className="navBody">
              <a href='/'>
                <div className='nav-logo'>
                  <img src={NavBrand} alt="..." />
                </div>
              </a>

              <ul className={active}>
                <li>
                  <a onClick={navToggle}  className='nav-link navActive' href="/">Home</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#mahsulot">about</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#loyiha">about</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#aloqa">portfolio</a>
                </li>
                <li>
                  <a className='NavBtnList' href="#">contact</a>
                </li>
              </ul>
              <a className='NavBtn' href="#">contact</a>  

              <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
        </nav>

        {/* HERO START */}

        <div className='heroContent d-flex'>
          <div className='heroInfo'>
            <h2>Hello, I’m</h2>
            <h3>robert fox</h3>
            <span>Professional Product Designer</span>
            <a href="#">let’s talk</a> 
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
              </a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
