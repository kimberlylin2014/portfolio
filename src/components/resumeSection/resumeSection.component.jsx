import React from 'react';
import './resumeSection.styles.scss';
import CityLogo from '../../images/freepik-city.svg';
import GitHubLogo from '../../images/freepik-github.svg';
import GmailLogo from '../../images/freepik_gmail.svg';
import LinkedLogo from '../../images/freepik-linkedin.png';

const ResumeSection = () => {
    return (
    <div id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 align-self-center" id="profile-contact">
                <div id="profile-img" ></div>
                <div className="d-flex profile-detail mt-4 mb-2">
                  <img src={CityLogo} alt="location-img" className="contact-icons" />
                  <p className="contact-details">Santa Clara, CA</p>
                </div>
                <div className="d-flex profile-detail mb-2">
                  <img src={GmailLogo} alt="gmail-img" className="contact-icons"></img>
                  <p className="contact-details email-link"><a href="mailto:kimberlylin2014@gmail.com">kimberlylin2014@gmail.com</a> </p>
                </div>
                <div className="d-flex profile-detail">
                    <img src={LinkedLogo} alt="linkedin-img"  className="contact-icons"></img>
                    <p className="contact-details linkedin-link"><a href="https://www.linkedin.com/in/k91/" target='_blank'>www.linkedin.com/in/k91</a> </p>
                </div>
                <div className="d-flex mb-4 mt-2 profile-detail">
                  <img src={GitHubLogo} alt="github-img" className="contact-icons"></img>
                  <p className="contact-details github-link"><a href="https://github.com/kimberlylin2014" target='_blank'>www.github.com/kimberlylin2014</a> </p>
                </div>
            </div>

            <div className="col-12 col-md-7" id="intro">
              <h3 className="subt-title mb-2" style={{color: '#6886c5'}}>Technical Skills</h3>
              <ul style={{listStyle: "none", paddingLeft: "3px"}} >
                <div className="row mb-4">
                  <div className="col-4">
                    <li className="technical-skill"><span>Javascript</span> </li>
                    <li className="technical-skill"><span>HTML5/CSS3</span> </li>
                    <li className="technical-skill"><span>Bootstrap</span> </li>
                    <li className="technical-skill"><span>jQuery</span> </li>
                  </div>
                  <div className="col-4">
                    <li className="technical-skill"><span>React</span> </li>
                    <li className="technical-skill"><span>Redux</span> </li>
                    <li className="technical-skill"><span>React Router</span> </li>
                    <li className="technical-skill"><span>JSON Web Token</span></li>
                  </div>
                  <div className="col-4">
                    <li className="technical-skill"><span>Node.js</span> </li>
                    <li className="technical-skill"><span>Express</span> </li>
                    <li className="technical-skill"><span>MySQL</span> </li>
                    <li className="technical-skill"><span>REST APIs</span></li>
                  </div>
                </div>
              </ul>
              <h3 className="subt-title mb-2" style={{color: "#6886c5"}} >Related Experience</h3>

              <div className="intro-mobile mb-1" style={{color: "#6886c5"}} ></div>
              <div className="intro-desktop float-right" style={{color: "#6886c5"}}></div>
              <h5 className="mb-2 display: inline-block" >VisitorsCoverage Inc.</h5>

              <ul>
                <li>Work with Marketing and Product to manage the front-end of all articles on the company website</li>
                <li>Translate graphic designer's wireframes to fully responsive websites using HTML, CSS, Bootstrap</li>
                <li>Build a business model website that is utilized as a demo for prospective clients </li>
                <li className="mb-4">Develop the following UI components: Login Form, Tables and Charts for Product Comparison, Career Layout, Email Templates and a Product Details Page </li>
              </ul>
              <h3 className="subt-title mb-2" style={{color: "#6886c5"}} >Personal Projects</h3>
              <ul>
                <li>Build scalable front-end applications using React</li>
                <li>Handle asynchronous calls and manage application state with Redux-Saga</li>
                <li>Develop REST APIs to handle multiple client requests</li>
                <li>Use React Router to build single page applications without page refresh as the user navigates</li>
                <li>Persist application data using PostgreSQL and Knex.js</li>
                <li>Authenticate backend API routes with JSON Web Token and Redis</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    )
}

export default ResumeSection