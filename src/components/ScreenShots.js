import React from 'react';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/core';
import { Link } from 'react-router-dom';


// import images
import phoneFream from "../assets/images/testi/phone-fream.png"
import img1 from "../assets/images/testi/ss/ld4.jpg";
import img2 from "../assets/images/testi/ss/ld2.jpg";
import img3 from "../assets/images/testi/ss/ld3.png";
import img4 from "../assets/images/testi/ss/ld4.jpg";
import img5 from "../assets/images/testi/ss/ld1.jpg";

const Application = () => {

  return (
    <React.Fragment>
      <section className="section app-slider" id="app" style={{ backgroundColor: '#54BCFC', color: 'white', padding: '40px' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className='text-center'>
                <span className="heading"></span>
                <h2 className="sec-title"
                style={{ color: 'white', fontSize: '2.5rem' , marginBottom:'30px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'}
                }
                >Live and On-Demand Classes</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="swiper swiper-container swiper-container1">
                <div className="fream-phone">
                  <Image src={phoneFream} alt="" fluid />
                </div>
                <div className="swiper-wrapper">
                  <Swiper
                    loop={true}
                    slidesPerView={5}
                    spaceBetween={50}
                    centeredSlides={true}
                    speed={5000}
                    autoplay={{
                      delay: 500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img1} title="" > </Link>
                        </div>
                        <div className="screenshot-img mb-4">
                          <Link to={img1} className="lightbox img-fluid" >
                            <Image src={img1} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img2} title=""></Link>
                        </div>
                        <div className="screenshot-img mb-4">
                          <Link to={img2} className="lightbox img-fluid">
                            <Image src={img2} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img3} title=""></Link>
                        </div>
                        <div className="screenshot-img mb-4">
                          <Link to={img3} className="lightbox img-fluid">
                            <Image src={img3} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img4} title=""></Link>
                        </div>
                        <div className="screenshot-img mb-4">
                          <Link to={img4} className="lightbox img-fluid">
                            <Image src={img4} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img5} title=""></Link>
                        </div>
                        <div className="screenshot-img mb-4">
                          <Link to={img5} className="lightbox img-fluid">
                            <Image src={img5} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                    
                    
                  </Swiper>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="work-pra" style={{ color: 'white' }}>
                <ul className="inline-item">
                  <li className="list-inline-item">
                    <p>LIVE workout every morning at 6.30 am
                      If joining me LIVE doesn’t suit you, the class is available on-demand via the web platform.<br></br> Over 500 workouts available at the touch of a button as well as my amazing Run-Walk Podcast.</p>
                  </li>
                  <li className="list-inline-item">
                    <p>This program is for people who want to train consistently with the best in the business all from the comfort of their own home.</p>
                  </li>
                  <li className="list-inline-item">
                    <p>You need a fitness mat & a set of dumbbells & a Kettlebell. When you are training a long time with me you can invest in a fitness step and a weighted vest to add additional resistance & challenge.</p>
                  </li>
                  <li className="list-inline-item">
                    <p>This program runs all the time so you can start whenever suits you and you are not tied into any contract or committed to any length of time – stay as long as you like</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Application;