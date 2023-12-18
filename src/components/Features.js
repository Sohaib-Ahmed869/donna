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

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const textContainer = document.querySelector('.scrolling-text');
    const lineHeight = textContainer.clientHeight / scrollingTextArray.length;
  
    const newIndex = Math.floor(scrollPosition / lineHeight);
    setScrollingTextIndex(newIndex);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <section className="section about" id="about" style={{ color: 'black', marginTop: '-10px', backgroundColor: '#FF66C4', borderRadius: '15px' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className='text-center'>
                <span className="heading"></span>
                <h2
                  className='text-center display-6'
                  style={{ color: 'black', fontSize: '2.5rem', marginBottom: '30px', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                >
                  Fitness & weight loss program
                </h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="text-center">
            <Col lg={12}>
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
            </Col>
          </Row>
        </Container>

        <Container className="scrolling-text-container">
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="text-center scrolling-text" style={{ color: 'black', marginTop: '120px' }}>
                {scrollingTextArray.map((text, index) => (
                  <p key={index} className={index === scrollingTextIndex ? 'active' : ''}>{text}</p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
