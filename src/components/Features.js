import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import features from "../assets/images/feature.png";
import mTop from "../assets/images/about/macbook-top.svg";
import mCover from "../assets/images/about/macbook-cover.svg";
import IPAD from "../assets/images/about/IPAD.mp4";
import mBottom from "../assets/images/about/macbook-bottom.svg";

AOS.init({
  duration: 1800,
});

const Features = () => {
  const [scrollingTextIndex, setScrollingTextIndex] = useState(0);
  const scrollingTextArray = [
    '5 Week Online Program',
    '20 Workouts - Over 5 weeks Cost €30',
    'Workouts start at 10 minutes & build to 20 minutes. You log in at a time that suits you',
    'You can go walking instead of doing my workouts. You need a fitness mat & 2 bottles of water as weights',
    'This program has set start dates & set end dates'
  ];



  return (
    <React.Fragment>
      <section className="section about" id="about" style={{ color: 'black', marginTop: '-10px', backgroundColor: '#FF66C4', borderRadius: '15px' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className='text-center'>
                <span className="heading"></span>
                <h2
                  className='text-center display-6'
                  style={{ color: 'white', fontSize: '6.5rem', marginBottom: '30px', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                >
                  Fitness & weight loss program
                </h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-center align-items-left">
            <Col lg={6}>
              <div className="mockup mockup-macbook loaded opened">
                <div className="part top shadow">
                  <img src={mTop} alt="" className="img-fluid top" />
                  <img src={mCover} alt="" className="img-fluid cover" />
                  <video autoPlay muted controls loop>
                    <source src={IPAD} type="video/mp4" />
                  </video>
                </div>
                <div className="part bottom shadow">
                  <img src={mCover} alt="" className="img-fluid cover" />
                  <img src={mBottom} alt="" className="img-fluid bottom" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="features-box">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-globe"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p
                    style={{ fontSize: '1rem', color: 'white' }}
                    className="mt-3">5 Week Online Program</p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-user"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p
                    style={{ fontSize: '1rem', color: 'white' }}
                    className="mt-3">20 Workouts - Over 5 weeks Cost €30</p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-globe"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p
                    style={{ fontSize: '1rem', color: 'white' }}
                    className="mt-3">You can go walking instead of doing my workouts. You need a fitness mat & 2 bottles of water as weights</p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-user"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p
                    style={{ fontSize: '1rem', color: 'white' }}
                    className="mt-3">
                    Workouts start at 10 minutes & build to 20 minutes. You log in at a time that suits you
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="scrolling-text-container">
          <Row className="justify-content-center">
            <Col lg={12}>
              
              <div className="text-center" style={{ color: 'black', marginTop: '120px' }}>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z9Y6YV6M3X5XG" className="btn btn-primary mt-2" style={{ backgroundColor: '#FF66C4', border: 'none', borderRadius: '20px' }}>Join Now</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
