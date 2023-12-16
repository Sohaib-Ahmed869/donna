import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import Images
import logoLight from "../assets/images/logo.png";
import logoDark from "../assets/images/logo.png";

const Navbar1 = () => {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top" style={{ backgroundColor: '#fff' }}>
        <Container fluid style={{ backgroundColor: '#fff', marginTop: '-40px' }}>
          <Navbar.Brand href="index-1.html" className="logo text-uppercase">
            <img src={logoLight} className="logo-light" alt="" height="100" />
            <img src={logoDark} className="logo-dark" alt="" height="100" />
          </Navbar.Brand>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto" id="navbar-navlist">
              <li className="nav-item">
                <Link to="#home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="#about" className="nav-link">Beginner Program</Link>
              </li>
              <li className="nav-item">
                <Link to="#features" className="nav-link">Fitness & Weight Loss Plan</Link>
              </li>
              <li className="nav-item">
                <Link to="#pricing" className="nav-link">Live & On-demand Program</Link>
              </li>
              <li className="nav-item">
                <Link to="#app" className="nav-link">Hybrid Program</Link>
              </li>
            </ul>
            <div className="ms-auto">
              <Link to="#" className="btn bg-gradiant"
                style={{color: '#fff', borderRadius: '50px', backgroundColor: '#FF66C4', padding: '10px 30px'}}
              >My Account</Link>
            </div>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
}

export default Navbar1;
