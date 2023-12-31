import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper";


// import images
import img1 from "../../assets/images/testi/ss/imgg1.png"
import img2 from "../../assets/images/testi/ss/imgg2.png"


const section = () => {
  return (
    <React.Fragment>

        
        <Container style={{marginTop: '200px'}}>
          <Row className="align-items-center justify-content-between">
            <Col md={7}>
              <div>
                <h3
                
                 style={{fontSize: '2.5rem', color:'#FE75C9' }}
                >
                  ONLINE FITNESS PROGRAMS</h3>
                <h4
                  style={{fontSize: '2.2rem',color:'#FE75C9'}}
                >
                  Real Programs for Real People</h4>
                <p className="home-title"  style={{fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
                fontSize: '1.5rem'
              }}></p>
                <p  style={{
                fontSize: '1.2rem',
                color: 'black'
              }}>My concept is simple; I show people how to lose weight & get fit with easy-to-follow programs designed for you to do from the comfort of your own home</p>
              </div>
            </Col>
            <Col md={5}>
              <div className="swiper swiper-container homeSwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    loop={true}
                    effect={"coverflow"}
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={2}
                    speed={5000}
                    autoplay={{
                      delay: 500,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img1} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img1} className="lightbox img-fluid">
                            <img src={img1} alt="" className='img-fluid' />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img2} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img2} className="lightbox img-fluid">
                            <img src={img2} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img1} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img1} className="lightbox img-fluid">
                            <img src={img1} alt="" className='img-fluid' />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img2} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img2} className="lightbox img-fluid">
                            <img src={img2} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

    </React.Fragment>
  )
}

export default section;