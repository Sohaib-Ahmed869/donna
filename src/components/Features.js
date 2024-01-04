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
      <section className="section about justify-content-center align-items-center" id="about" style={{ color: 'black', marginTop: '-10px', backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
        <Container>
          <Row className="">
            <Col lg={12}>
              <div className='text-center'>
                <span className="heading"></span>
                <div>
                  <h1
                    className="display-3 text-center"
                    style={{ fontSize: '4.8rem', marginBottom: '20px', fontWeight: 'bold', marginTop: '-70px' }}
                  >Fitness & Weight Loss Program</h1>
                </div>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-center align-items-center mt-5">
            <Col lg={5}>
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
              <Col lg={12} className="mt-5">
                <div className="text-center">
                  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z9Y6YV6M3X5XG" className="btn btn-primary" style={{
                    backgroundColor: '#FF66C4', border: 'none', borderRadius: '30px', fontSize: '22px', padding: '10px 60px'
                  }}>Join Now</a>
                </div>
              </Col>
            </Col>

            <Col lg={6}>
              <section className="section features" style={{ marginTop: '-80px' }}>
                <div className="features-box justify-content-center">
                  <div className="features-icon float-start me-2">
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="ps-3 ms-5">
                    <p
                      style={{ fontSize: '1.2rem', color: 'black', lineHeight: '1.5' }}
                      className="mt-3">The best plan, with the best advice all designed to help you get into the best shape of your life</p>
                  </div>
                </div>
                <div className="features-box mt-3">
                  <div className="features-icon float-start me-2">
                    <i className="uil uil-skip-forward-alt"></i>
                  </div>
                  <div className="ps-3 ms-5">
                    <p
                      style={{ fontSize: '1.2rem', color: 'black' , lineHeight: '1.5'}}
                      className="mt-3">Over 300+ workout videos with me and my amazing Run-walk podcast</p>
                  </div>
                </div>
                <div className="features-box mt-3">
                  <div className="features-icon float-start me-2">
                    <i className="uil uil-clock"></i>
                  </div>
                  <div className="ps-3 ms-5">
                    <p
                      style={{ fontSize: '1.2rem', color: 'black' , lineHeight: '1.5'}}
                      className="mt-3">Workouts start at 10 minutes & build to 30 minutes. You log in at a time that suits you & train step by step with Donna in the video</p>
                  </div>
                </div>
                <div className="features-box mt-3">
                  <div className="features-icon float-start me-2">
                    <i className="uil uil-weight"></i>
                  </div>
                  <div className="ps-3 ms-5">
                    <p
                      style={{ fontSize: '1.2rem', color: 'black', lineHeight: '1.5' }}
                      className="mt-3">
                      Calorie Calculator, Calorie Tracker  & Nutritional Advice as well as 100s of recipes.
                    </p>
                  </div>
                </div>
                <div className="features-box mt-3">
                  <div className="features-icon float-start me-2">
                    <i className="uil uil-dumbbell"></i>
                  </div>
                  <div className="ps-3 ms-5">
                    <p
                      style={{ fontSize: '1.2rem', color: 'black', lineHeight: '1.5' }}
                      className="mt-3">
                      You need a fitness mat<br></br> & a set of weights.
                    </p>
                  </div>
                </div>
                <div className="features-box mt-3">
                  <div className="features-icon float-start me-2">
                    <i className="uil uil-calender"></i>
                  </div>
                  <div className="ps-3 ms-5">
                    <p
                      style={{ fontSize: '1.2rem', color: 'black', lineHeight: '1.5' }}
                      className="mt-3">
                      This program runs all the time so you can start whenever suits you.
                    </p>
                  </div>
                </div>
                <div className="features-box mt-3">
                  <div className="features-icon float-start me-2">
                    <i className="uil uil-euro"></i>
                  </div>
                  <div className="ps-3 ms-5">
                    <p
                      style={{ fontSize: '1.2rem', color: 'black', lineHeight: '1.5' }}
                      className="mt-3">
                      €6 cancel any time weekly subscription or   €54.99 per month
                    </p>
                  </div>
                </div>
              </section>
            </Col>
          </Row>

        </Container>


      </section>
    </React.Fragment>
  );
};

export default Features;
