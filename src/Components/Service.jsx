import React from 'react'
import Activity from '../img/Activity.svg'
import Chart from '../img/Chart.svg'
import Category from '../img/Category.svg'
import EditSquare from '../img/EditSquare.svg'

export default function Service() {
  return (
    <section className='serviceSection'>
      <div className="container">
        <h2 className='serviceTitle'>02 <span>my service</span></h2>
        <div className='serviceContent row'>
          <div className='serviceCard col-md-3 col-12'>
            <i class='bx bx-edit'></i>
            <h2>UI/UX Design</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>

          <div className='serviceCard col-md-3 col-12'>
            <i class='bx bx-category' ></i>
            <h2>UI/UX Design</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>

          <div className='serviceCard col-md-3 col-12'>
            <i class='bx bx-bar-chart-square' ></i>
            <h2>UI/UX Design</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>

          <div className='serviceCard col-md-3 col-12'>
            <i class='bx bxs-universal-access'></i>
            <h2>UI/UX Design</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>
        </div>
      </div>
    </section>
  )
}
