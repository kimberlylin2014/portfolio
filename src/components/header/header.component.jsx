import React from 'react';
import './header.styles.scss';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <div className='Header'>
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <div className="container">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div>
                  <Link
                      activeClass="active"
                      to="background-img-section"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Kimberly Lin
                  </Link>
              </div>
              <div className="collapse navbar-collapse" id="navbar1">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="background-img-section"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Home
                        </Link>
                      </li>
                      <li className="nav-item"> 
                          <Link
                            className='nav-link'
                            activeClass="active"
                            to="about-section"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="rolling-background"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Projects
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="education-background-section"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}>
                            Background
                        </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </div>
  );
}

export default Header;