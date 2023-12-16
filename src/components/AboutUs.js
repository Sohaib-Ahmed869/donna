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

const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="section about" id="about" style={{ backgroundColor: '#FF66C4', color: 'white' }}>
        <Container>
          <Row className="justify-content-center">
            <div>
              <span className="heading"></span>
              <h1
                className="display-3 text-center"
                style={{ color: 'white' , fontSize: '2.5rem', marginBottom:'20px',  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'}}
              >Beginners Program</h1>
              <span className="heading"></span>
            </div>
            <div className="sec-content" style={{margin: '0', padding: '0'}}>
              <p className='text-center'
                style={{ color: 'white', fontSize: '1.2rem' }}
              >You press play on the video and you copy what I am doing You can go walking instead of doing my workouts You need a fitness mat & 2 bottles of water as weights This program has set start dates & set end dates </p>
            </div>
          </Row>
        </Container>
      </section>
      <section className="section about" id="about" style={{ backgroundColor: '#FF66C4', color: 'white' , marginTop: '-100px' }}>
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
      </section>
    </React.Fragment>
  )
}

export default AboutUs;