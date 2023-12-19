import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

// import images
import mTop from "../assets/images/about/macbook-top.svg";
import mCover from "../assets/images/about/macbook-cover.svg";
import IPAD from "../assets/images/about/IPAD.mp4";
import mBottom from "../assets/images/about/macbook-bottom.svg";
import features from "../assets/images/featur.png";



const AboutUs = () => {

  const featureStyle = {
    color: 'Black',
    fontSize: '1.3rem',
  };
  return (
    <React.Fragment>
      <section className="section about" id="about" style={{ backgroundColor: '#c9c9c9', color: 'white' }}>
        <Container>
          <Row className="justify-content-center">
            <div>
              <span className="heading"></span>
              <h1
                className="display-3 text-center"
                style={{ color: 'white', fontSize: '6.5rem', marginBottom: '20px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif' }}
              >Beginners Program</h1>
              <span className="heading"></span>
            </div>
            <div className="sec-content" style={{ margin: '0', padding: '0' }}>
              <p className='text-center'
                style={{ color: 'white', fontSize: '1.5rem' }}
              >You press play on the video and you copy what I am doing You can go walking instead of doing my workouts You need a fitness mat & 2 bottles of water as weights This program has set start dates & set end dates </p>
            </div>
          </Row>
        </Container>
      </section>
      <section className="section features" style={{ backgroundColor: '#c9c9c9', color: 'white', marginTop: '-100px' }}>
      <Container>

          <Row className="justify-content-center align-items-center">
            <Col lg={4} md={10} data-aos="fade-right" >
              <div className="features-box text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-users-alt"></i>
                </div>
                <div className="pe-3 me-5">
                  <p className="text"
                  style={featureStyle}

                  >5 Week Online Program<br></br>20 Workouts - Over 5 Weeks <br></br>Cost 30</p>
                </div>
              </div>

              <div className="features-box mt-5 text-end">
                <div className="features-icon float-end ms-2">
                {
                  // put timer icon here
                }
                  <i className="uil uil-clock"></i>
                </div>
                <div className="pe-3 me-5">
                  <p className="mt-3"
                  style={featureStyle}
                  >Workouts start at 10 minutes & build to 20 minutes. You log in at a time that suits you</p>
                </div>
              </div>

            </Col>
            <Col lg={4}>
              <div className="text-center">

                <img src={features} className="img-fluid" data-aos="zoom-in" alt="" />
              </div>
            </Col>
            <Col lg={4} md={10} data-aos="fade-left">
              <div className="features-box">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-globe"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p
                  style={featureStyle}
                  className="mt-3">You can go walking instead of doing my workouts. You need a fitness mat & 2 bottles of water as weights</p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-user"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p 
                  style={featureStyle}
                  className="mt-3">
                  This program has set start dates & set end dates
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={12} className="mt-5">
              <div className="text-center">
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z9Y6YV6M3X5XG" className="btn btn-primary mt-2" style={{ backgroundColor: '#FF66C4', border: 'none', borderRadius:'20px' }}>Join Now</a>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
      {/* <section className="section about" id="about" style={{ backgroundColor: '#C8C4bf', color: 'white' , marginTop: '-100px' }}>
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <div className="mockup mockup-macbook loaded opened">
                <div className="part top">
                  <img src={mTop} alt="" className="img-fluid top" />
                  <img src={mCover} alt="" className="img-fluid cover" />
                  <video autoPlay muted controls loop>
                    <source src={IPAD} type="video/mp4" />
                  </video>
                </div>
                <div className="part bottom">
                  <img src={mCover} alt="" className="img-fluid cover" />
                  <img src={mBottom} alt="" className="img-fluid bottom" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </React.Fragment>
  )
}

export default AboutUs;