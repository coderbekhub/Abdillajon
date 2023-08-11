import React, {useState, useEffect} from 'react'
import NavInsta from '../img/navInsta.svg'
import NavFcBook from '../img/NavFsBook.svg'
import NavSite from '../img/NavSite.svg'
import NavBrand from '../img/navBrand.png'

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
                  {/* <img src={NavBrand} alt="..." /> */}
                  <h1>Mirzohidov</h1>
                </div>
              </a>

              <ul className={active}>
                <li>
                  <a onClick={navToggle}  className='nav-link navActive' href="/">Bosh sahifa</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#mahsulot">Biz haqimizda</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#loyiha">Xizmatlar</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#portfolio">portfel</a>
                </li>
                <li>
                  <a className='NavBtnList' href="#">aloqa</a>
                </li>
              </ul>
              <a className='NavBtn' href="tel:+998977770777">aloqa</a>  

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
            <h2>Salom, men</h2>
            <h3>Mirzohidov Mirsodiq</h3>
            <span>Tajribali veb dasturchi</span>
            <a href="#">keling gaplashamiz</a> 
          </div>

          <ul>
            <li>
              <a href="https://www.instagram.com/reel/CmvL5erJZvM/?igshid=Yzg5MTU1MDY=">
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
                  <i class='bx bxl-telegram'></i>
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
