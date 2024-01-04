import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';


const Pricing = () => {
  return (
    <React.Fragment>
      <section className="pricing" id="pricing" style={{marginTop:'-130px' ,marginBottom:'100px'}}>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className='text-center' style={{ marginBottom: '20px' }}>
                <span className="heading"></span>
                <h2
                  style={{ color: 'Black', fontSize: '5rem', marginBottom: '30px', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                >Costing</h2>
                <span className="heading"></span>
              </div>
            </div>
          </div>
          <Row className="justify-content-center">
          <Col lg={3} md={6} mt={4}>
              <div className="pricing-box text-center" style={{height:'350px'}}>
                <div className="px-4 py-5">
                <h2>Beginner</h2>
                  <div className="pricing-icon text-primary">
                    <h3>30<sup>€</sup></h3>
                  </div>
                  <h5 className="my-4 box-heading">5 Weeks</h5>
                  <ul className="pricing-team pricing-list list-unstyled mt-2 mb-0">
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Cancel Anytime</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> 5 Week Online Program</li>

                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} mt={4}>
              <div className="pricing-box text-center" style={{height:'350px'}}>
                <div className="px-4 py-5">
                <h4>Fitness & Weight</h4>
                  <div className="pricing-icon text-primary">
                    <h3>6<sup>€</sup></h3>
                  </div>
                  <h5 className="my-4 box-heading">Weekly Subscription</h5>
                  <ul className="pricing-team pricing-list list-unstyled mt-2 mb-0">
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Cancel Anytime</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> 54.99 for three Months</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} mt={4}>
              <div className="pricing-box text-center" style={{height:'350px'}}>
                <div className="px-4 py-5">
                <h4>Live & On-Demand</h4>
                  <div className="pricing-icon text-primary">
                    <h3>10<sup>€</sup></h3>
                  </div>
                  <h5 className="my-4 box-heading">Weekly</h5>
                  <ul className="pricing-team pricing-list list-unstyled mt-2 mb-0">
                    <li className="pricing-item">
                      <i className="uil uil-check-circle text-primary">
                      </i>Cancel Anytime</li>
                    <li className="pricing-item">
                      <i className="uil uil-check-circle text-primary">
                      </i>Weekly Subscription</li>

                  </ul>
                </div>
              </div>
            </Col>
           
            <Col lg={3} md={6} mt={4}>
              <div className="pricing-box text-center" style={{height:'350px'}}>
                <div className="px-4 py-5">
                  <h2>Hybrid</h2>
                  <div className="pricing-icon text-primary">

                    <h3>12<sup>€</sup></h3>
                  </div>
                  <h5 className="my-4 box-heading">5 Weeks</h5>
                  <ul className="pricing-team pricing-list list-unstyled mt-2 mb-0">
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Cancel Anytime</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Weekly Subscription</li>

                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Pricing;