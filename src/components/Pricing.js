import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { useState } from 'react';

import img1 from "../assets/images/pricing/1.jpg";
import img2 from "../assets/images/pricing/2.jpg";
import img3 from "../assets/images/pricing/3.jpg";

const Pricing = () => {
  const [text, setText] = useState('FROM BEGGINER TO SUPER-FIT I HAVE YOU COVERED');

  const textlocation = 300;
  //if scroll is below the position of this element, change the text
  const ScrollChange = () => {
    if (window.scrollY >= textlocation) {
      setText('3 AMAZING PROGRAMS, 1 AMAZING TRAINER');
    }
    else {
      setText('FROM BEGGINER TO SUPER-FIT I HAVE YOU COVERED');
    }
  }

  window.addEventListener('scroll', ScrollChange);
  const imgStyle = {
    borderRadius: '15px', // Set the border radius to 15px
    border: '0px solid #000000', // Add a grey border
    boxShadow: '10px 13px 14px 2px rgba(0, 0, 0, 0.4)', // Add a box shadow
  };

  return (
    <React.Fragment>
      <section className="pricing" id="pricing">
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-12 mt-4">
              <div className='text-center' style={{ marginBottom: '20px' }}>

                <h2>{text}</h2>

              </div>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center mt-4">
                <img src={img1} alt="" className="img-fluid mx-auto d-block" style={imgStyle} />
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center mt-4">
                <img src={img2} alt="" className="img-fluid mx-auto d-block " style={imgStyle} />
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center mt-4 mb-5">
                <img src={img3} alt="" className="img-fluid mx-auto d-block" style={imgStyle} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Pricing;
