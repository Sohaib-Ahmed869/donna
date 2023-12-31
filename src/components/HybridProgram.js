import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './work.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper";

// import images
import home4 from "../assets/images/home/home-4.png";
import img1 from "../assets/images/user/img-1.jpg"
import img2 from "../assets/images/user/img-2.jpg"
import img3 from "../assets/images/user/img-3.jpg"
import img4 from "../assets/images/user/img-4.jpg"
import img5 from "../assets/images/user/img-5.jpg"
import one from '../assets/images/new.png'
import second from '../assets/images/price.png'


const work = () => {
    return (
        <React.Fragment>
            <section style={{ backgroundColor: '#FFFFFF', color: 'white', padding: '10px' }}>

                <Container>

                    <Row className="align-items-center features justify-content-center align-items-center">
                        <Col lg={12}>

                            <div className="work-pra" style={{ color: 'black', fontSize: '20px', marginLeft: '0px' }}>

                                <h1 className="my-4" style={{ color: 'black', fontSize: '3.2rem', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif' }}>Hybrid Program</h1>
                                <h3 className='sub-title' style={{ color: '#FE75C9', fontSize: '2.2rem', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif' }}>Best of Both</h3>

                                <Row className="justify-content-center align-items-center mt-5">
                                    <Col lg={4}>
                                        <h2 style={{ color: 'black', fontSize: '2.5rem' }}>Fitness and Weight Loss Program</h2>
                                    </Col>
                                    
                                    <Col lg={4}>
                                        <img src={one} alt="" style={{ width: '100%', height: '100%' }} />
                                        
                                    </Col>
                                  
                                    <Col lg={4}>
                                        <h2 style={{ color: 'black', fontSize: '2.5rem', textAlign:'right' }}>Live and On-demand Classes Program</h2>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className='float-end' style={{ marginTop: '50px' }}>
                                <img src={second} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default work;