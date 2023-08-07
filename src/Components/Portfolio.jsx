import React, { Component } from "react";
import Slider from "react-slick";
import Portfolio1 from '../img/portfolio1.jpg'

export default class Portfolio extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    };
    return (
      <section className="portfolioSection">
        <div className="container">
          <div className="portfolioContent">
            <h2>03 <span>portfolio</span></h2>
            <Slider {...settings}>
              <div className="portfolioInfo">
                <img src={Portfolio1} alt="..." />
                <div className="portfolioText">
                  <h3>MOBILE DESIGN</h3>
                  <p>UI/UX Design</p>
                </div>
              </div>

              <div className="portfolioInfo">
                <img src={Portfolio1} alt="..." />
                <div className="portfolioText">
                  <h3>MOBILE DESIGN</h3>
                  <p>UI/UX Design</p>
                </div>
              </div>

              <div className="portfolioInfo">
                <img src={Portfolio1} alt="..." />
                <div className="portfolioText">
                  <h3>MOBILE DESIGN</h3>
                  <p>UI/UX Design</p>
                </div>
              </div>

              <div className="portfolioInfo">
                <img src={Portfolio1} alt="..." />
                <div className="portfolioText">
                  <h3>MOBILE DESIGN</h3>
                  <p>UI/UX Design</p>
                </div>
              </div>

              <div className="portfolioInfo">
                <img src={Portfolio1} alt="..." />
                <div className="portfolioText">
                  <h3>MOBILE DESIGN</h3>
                  <p>UI/UX Design</p>
                </div>
              </div>

              <div className="portfolioInfo">
                <img src={Portfolio1} alt="..." />
                <div className="portfolioText">
                  <h3>MOBILE DESIGN</h3>
                  <p>UI/UX Design</p>
                </div>
              </div>
            </Slider>
          </div>

        </div>
      </section>
    );
  }
}