import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import features from "../assets/images/feature.png";


AOS.init({
  duration: 1800,
});



const Features = () => {
  return (
    <React.Fragment>
      <section className="section features" id="features">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className='text-center'>

                <span className="heading"></span>
                <h2 

                className='text-center display-6'
                style={{ color: 'black', fontSize: '2.5rem' , marginBottom:'30px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'}}
                >Fitness & weight loss program</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col lg={4} md={10} data-aos="fade-right" >
              <div className="features-box text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-users-alt"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">Podcast</h5>
                  <p className="text-muted mt-3">Personal Development, Nutrition & Lifestyle Over 300+ workout videos with me and my amazing Run-walk podcast</p>
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
                  <h5 className="f-15 text-uppercase">Duration</h5>
                  <p className="text-muted mt-3">Workouts start at 10 minutes & build to 30 minutes.</p>
                </div>
              </div>

              <div className="features-box mt-5 text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-bolt"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">Flexible</h5>
                  <p className="text-muted mt-3">You log in at a time that suits you
You need a fitness mat & a set of weights</p>
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
                  <h5 className="f-15 text-uppercase">Equipment</h5>
                  <p className="text-muted mt-3">You need a fitness mat & a set of weights</p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-user"></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">No Contract</h5>
                  <p className="text-muted mt-3">
                  This program runs all the time so you can start whenever suits you and you are not tied into any contract or committed to any length of time –
stay as long as you like.
                  </p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-money-bill"></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">Pricing</h5>
                  <p className="text-muted mt-3">
                  €6 cancel anytime weekly subscription <br></br>
                  €54.99 three month membership
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Features;