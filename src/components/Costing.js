import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from "../assets/images/pricing/costing.png";


AOS.init({
    duration: 1800,
});



const Costing = () => {
    return (
        <React.Fragment>
            <section className="section features" id="features">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className='text-center'>
                                <h2
                                className='text-center display-6'
                                style={{ color: 'black', fontSize: '2.5rem' ,  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'}}

                                >The Cost</h2>
                            </div>
                            <div className="sec-content">
                                <p className='text-center'>I don’t believe in locking people in for a set period of time & that is why I run My Fitness & Weight loss, My Live & On-demand Programs and My Hybrid Program as a cancel any time weekly subscription service. My Beginner Program you pay up front so that you are a bit more motivated to do it.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center">

                        <Col lg={10}>
                            <div className="text-center">
                                <img src={img} className="img-fluid" data-aos="zoom-in" alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Costing;