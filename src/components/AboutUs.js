import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

// import images
import features from "../assets/images/featur.png";



const AboutUs = () => {

  const featureStyle = {
    color: 'Black',
    fontSize: '1.3rem',
  };
  return (
    <React.Fragment>
      <section className="section about" id="about" style={{ backgroundColor: '#f5f5f7'}}>
        <Container>
          <Row className="justify-content-center">
            <div>
              <span className="heading"></span>
              <h1
                className="display-3 text-center"
                style={{ fontSize: '4.5rem', marginBottom: '20px', fontWeight: 'bold' }}
              >Beginners Program</h1>
              <span className="heading"></span>
            </div>
            <div className="sec-content" style={{ margin: '0', padding: '0' }}>
              <p className='text-center'
                style={{ fontSize: '1.3rem' }}
              >For those who are only at the start of their Fitness and Weight Loss Journey. You press play on the video and you copy what I am doing or You can go walking instead of doing my workouts </p>
            </div>
          </Row>
        </Container>
      </section>
      <section className="section features" style={{ backgroundColor: '#f5f5f7', color: 'white', marginTop: '-100px' }}>
      <Container>

          <Row className="justify-content-center align-items-center">
            <Col lg={4} md={10} data-aos="fade-right" >
              <div className="features-box">
                <div className="features-icon float-start ms-2">
                  <i className="uil uil-swimmer"></i>
                </div>
                <div className="me-5">
                  <p className="text"
                  style={featureStyle}

                  >5 Week Online Program<br></br>20 Workouts - Over 5 Weeks</p>
                </div>
              </div>

              <div className="features-box mt-5">
                <div className="features-icon float-start ms-2">
                {
                  // put timer icon here
                }
                  <i className="uil uil-clock"></i>
                </div>
                <div className="me-5">
                  <p className="mt-3"
                  style={featureStyle}
                  >Workouts start at 10 minutes & build to 20 minutes.</p>
                </div>
              </div>
              <div className="features-box text-start">
                <div className="features-icon float-start ms-2">
                  <i className="uil uil-globe"></i>
                </div>
                <div className="me-5 mt-5">
                  <p className="text"
                  style={featureStyle}

                  >You log in at a time that suits you</p>
                </div>
              </div>
              <div className="features-box text-start">
                <div className="features-icon float-start ms-2">
                  <i className="uil uil-dumbbell"></i>
                </div>
                <div className="me-5 mt-5">
                  <p className="text"
                  style={featureStyle}

                  >You need a fitness mat & 2 bottles of water as weights</p>
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
                  <i className="uil uil-skip-forward-alt"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p
                  style={featureStyle}
                  className="mt-3">Daily Motivational and Inspirtational content from Donna</p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-calender"></i>
                </div>
                <div className="ps-3 ms-5">
                  <p 
                  style={featureStyle}
                  className="mt-3">
                  This program has set start dates & set end dates
                  </p>
                </div>
              </div>
              <div className="features-box mt-5 justify-content-center align-items-center">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-euro"></i>
                </div>
                <div className="mt-5" >
                  <p 
                  style={featureStyle}
                  className="mt-5 justify-content-center">
                  Cost €30
                  </p>
                </div>
              </div>
              <div className="features-box mt-5 justify-content-center align-items-center">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-user"></i>
                </div>
                <div className="mt-5" >
                  <p 
                  style={featureStyle}
                  className="mt-5 justify-content-center">
                  The next Beginner Program starts on
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={12} className="mt-5">
              <div className="text-center">
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z9Y6YV6M3X5XG" className="btn btn-primary" style={{ backgroundColor: '#FF66C4', border: 'none', borderRadius:'30px',fontSize:'28px', padding:'10px 60px'
               }}>Join Now</a>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default AboutUs;