import React from 'react'
import aboutImg1 from '../img/aboutImg1.png'
import aboutImg2 from '../img/aboutImg2.png'

export default function About() {
  return (
    <section className='aboutSection' id='mahsulot'>
      <div className="container">
        <div className='aboutContent'>
          <div className='aboutInfos'>
            <div>
              <img src={aboutImg1} alt="..." />
              <div>
                <h2>Saticfied Customers<span>25</span></h2>
              </div>
            </div>
            <div className='about2'>
              <span>8<h2>Year of experience</h2></span>
              <img src={aboutImg2} alt="..." />
            </div>
          </div>

          <div className='aboutInfo'>
            <h2>01 <span>about me</span></h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
