import React, { Component } from "react";
import Slider from "react-slick";
import User1 from '../img/user1.jpg'
import QuoteIcon from '../img/QuoteIcon.svg'

export default class Testimonial extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <section className="testimonialSection">
        <div className="container">
          <div>
            <Slider {...settings}>
              <div className="testimonialContent d-flex justify-content-between">
                <div className="">
                  <img src={User1} alt="..." />
                </div>
                <div className="testimonialInfo">
                  <h2>04 <span>testimonial</span></h2>
                  <img src={QuoteIcon} alt="..." />
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <h3>Esther Howard</h3>
                  <span>CEO of Adebe</span>
                </div>

                <div className="testimonialPages">
                  <h4>01/<h4>03</h4></h4>
                </div>
              </div>

              <div className="testimonialContent d-flex justify-content-between">
                <div className="">
                  <img src={User1} alt="..." />
                </div>
                <div className="testimonialInfo">
                  <h2>04 <span>testimonial</span></h2>
                  <img src={QuoteIcon} alt="..." />
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <h3>Esther Howard</h3>
                  <span>CEO of Adebe</span>
                </div>

                <div className="testimonialPages">
                  <h4>02/<h4>03</h4></h4>
                </div>
              </div>


              <div className="testimonialContent d-flex justify-content-between">
                <div className="col-md-4 col-12">
                  <img src={User1} alt="..." />
                </div>
                <div className="testimonialInfo ">
                  <h2>04 <span>testimonial</span></h2>
                  <img src={QuoteIcon} alt="..." />
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <h3>Esther Howard</h3>
                  <span>CEO of Adebe</span>
                </div>

                <div className="testimonialPages">
                  <h4>03/<h4>03</h4></h4>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </section>
    );
  }
}