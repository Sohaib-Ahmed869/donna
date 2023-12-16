import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './work.css'

// import images
import home4 from "../assets/images/home/home-4.png";
import img1 from "../assets/images/user/img-1.jpg"
import img2 from "../assets/images/user/img-2.jpg"
import img3 from "../assets/images/user/img-3.jpg"
import img4 from "../assets/images/user/img-4.jpg"
import img5 from "../assets/images/user/img-5.jpg"
import working from "../assets/images/pricing/hybrid.png"


const work = () => {
    return (
        <React.Fragment>
            <section style={{ backgroundColor: '#c7c7c9', color: 'white', padding: '10px' }}>
                <Container>
                    
                    <Row className="align-items-center">
                        <Col lg={6}>
                            
                            <div className="work-pra" style={{ color: 'black', fontSize: '20px', marginLeft: '0px' }}>

                                <h1 className="my-4" style={{ color: 'white', fontSize: '2.5rem' ,  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'}}>Hybrid Program</h1>

                                <ul className="inline-item">
                                    <li className="list-inline-item" style={{ color: 'black' }}>
                                        <p
                                        style={{fontSize:'1.1rem'}}
                                        >LIVE workout every morning at 6.30 am
                                            If joining me LIVE doesn’t suit you, the class is available on-demand via the web platform.<br></br> Over 500 workouts available at the touch of a button as well as my amazing Run-Walk Podcast.</p>
                                    </li>
                                    <li className="list-inline-item" style={{ color: 'black' }}>
                                        <p
                                        style={{fontSize:'1.1rem'}}
                                        >This program is for people who want to train consistently with the best in the business all from the comfort of their own home.</p>
                                    </li>
                                    <li className="list-inline-item" style={{ color: 'black' }}>
                                        <p
                                        style={{fontSize:'1.1rem'}}
                                        >You need a fitness mat & a set of dumbbells & a Kettlebell. When you are training a long time with me you can invest in a fitness step and a weighted vest to add additional resistance & challenge.</p>
                                    </li>
                                    <li className="list-inline-item" style={{ color: 'black' }}>
                                        <p
                                        style={{fontSize:'1.1rem'}}
                                        >This program runs all the time so you can start whenever suits you and you are not tied into any contract or committed to any length of time – stay as long as you like</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <div>
                                    <img src={working} style={{ height: '600px', width: '1000px' }} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default work;