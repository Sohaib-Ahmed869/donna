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
import phone from '../assets/images/testi/ss/phone.mp4';

const Application = () => {


  return (
    <React.Fragment>
      <section className="section app-slider" id="app" style={{ color: 'black', padding: '40px' , backgroundColor: '#F5F5F7'}}>
        <Container>
          <Row className="justify-content-center align-items-center">
          <Col lg={12}>
              <div className='text-center'>
                <span className="heading"></span>
                <h2 className="sec-title"
                  style={{ color: 'black', fontSize: '2.5rem', marginBottom: '30px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif' }
                  }
                >Live and On-Demand Classes</h2>
                <span className="heading"></span>
              </div>
            </Col>
            
            <Col lg={7}>
              <div className="work-pra" style={{ color: 'black' }}>
                
                <p className='text-black' style={{ fontSize: '1.2rem'}}>
                If you love working out and training hard then this program is for you. LIVE workout every weekday morning at 6.30 am but If joining me LIVE doesn't suit you, the class is available on-demand via the web platform. With over 500 workouts available at the touch of a button as well as my amazing Run-Walk Podcast this program is the best out there. I am a gifted and talented trainer who knows how to push people to their max. This program is for people who want to train consistently with the best in the business all from the comfort of their own home. You need a fitness mat & a set of dumbbells & a Kettlebell for this program. When you are training a long time with me you can invest in a fitness step and a weighted vest to add additional resistance & challenge. This program costs €10 per week that is done as a cancel anytime subscription service and it runs all the time so you can start whenever suits you.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className='text-center' style={{ marginTop: '50px', position: 'relative' }}>
                <div className="fream-phone">
                  <Image src={phoneFream} alt="" fluid style={{ height: '400px', width: 'auto', marginBottom:'100px' }} />
                </div>
                <div className="swiper-wrapper" style={{ position: 'absolute', top: '25px', left: '0', width: '100%', height: '100%' }}>
                  <Swiper
                    loop={true}
                    slidesPerView={1}
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
                          <Link className="mfp-image img-fluid" to={phone} title="" > </Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={phone} className="lightbox img-fluid" >
                            <video autoPlay muted controls loop style={{
                              width: '180px', height: '368px',
                              borderRadius: '15px', // Set the border radius to 15px
                              objectFit: 'cover'
                            }}>

                              <source src={phone} type="video/mp4" />
                            </video>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="text-center">
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z9Y6YV6M3X5XG" className="btn btn-primary mt-2" style={{ backgroundColor: '#FF66C4', border: 'none', borderRadius:'30px',fontSize:'28px', padding:'10px 60px'
               }}>Join Now</a>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </React.Fragment>
  )
}

export default Application;