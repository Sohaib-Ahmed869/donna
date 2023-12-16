import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import img1 from "../assets/images/pricing/1.jpg";
import img2 from "../assets/images/pricing/2.jpg";
import img3 from "../assets/images/pricing/3.jpg";

const Pricing = () => {
  const imgStyle = {
    borderRadius: '15px', // Set the border radius to 5px
  };
  return (
    <React.Fragment>
      <section className="section pricing" id="pricing">
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">From Beginner to super fit I have you covered</h2>
                <span className="heading"></span>
              </div>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center">
                <img src={img1} alt="" className="img-fluid mx-auto d-block" style={imgStyle} />
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center">
                <img src={img2} alt="" className="img-fluid mx-auto d-block" style={imgStyle} />
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center">
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