import React from 'react'
import Activity from '../img/Activity.svg'
import Chart from '../img/Chart.svg'
import Category from '../img/Category.svg'
import EditSquare from '../img/EditSquare.svg'

export default function Service() {
  return (
    <section className='serviceSection'>
      <div className="container">
        <h2>02 <span>my service</span></h2>
        <div className='serviceContent'>
          <div className='serviceCard'>
            <img src={Activity} alt="..." />
            <h2>UI/UX Design</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>
        </div>
      </div>
    </section>
  )
}
