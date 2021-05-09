import React from 'react';
import './educationBackground.styles.css';

const EducationBackground = () => {
    return(
        <div id="education-background-section">
            <div className="container">
                <div className="row">
                    <div className="col-11">
                        <h3 className="text-center mb-4"  style={{color: '#6886c5'}} >Background</h3>

                        <p className="text-center mb-4"> Hello, my name is Kimberly, and I would like to introduce myself to the web development community! <br/>
                        I started my coding journey in 2018 while working full time as an Office Administrator. For over a year, I learned front end technologies to build interactive and fully responsive webpages. In addition to my Administrator role, I also assisted my employer with improving the UI of the company website using HTML, CSS, and Bootstrap.

                        In January 2021, I advanced my programming skills by joining Hack Reactor, a coding bootcamp in San Francisco.

                        </p>
                        <p className="text-center mb-5">Today, I enjoy building applications with <span style={{color: '#6886c5', fontWeight: '600'}}>React</span>, <span style={{color: '#6886c5', fontWeight: '600'}}>Node.js</span>, <span style={{color: '#6886c5', fontWeight: '600'}}>Express</span>, and <span style={{color: '#6886c5', fontWeight: '600'}}>MySQL</span>. I hope to apply my Software Engineering skills to help build technologies that solve real world problems in the near future!</p>
                        <hr/>
                        <h3 className="mt-5">Education</h3>
                        <div className="intro-mobile mb-1" style={{color: '#6886c5'}}>01/2021 - 04/2021</div>
                        <p  style={{display: 'inline-block'}} >Hack Reactor</p>
                        <div className="intro-desktop float-right" style={{color: '#6886c5'}}> 01/2021 - 04/2021</div>
                        <p className="mb-4">Advanced Software Engineering</p>

                        <div className="intro-mobile mb-1" style={{color: '#6886c5'}}>09/2010 - 09/2014</div>
                        <p  style={{display: 'inline-block'}} >University of California, San Diego</p>
                        <div className="intro-desktop float-right" style={{color: '#6886c5'}}> 09/2010 - 09/2014</div>
                        <p className="mb-4">Bachelor of Science in General Biology</p>


                        <h3 className="mt-4">Work History</h3>
                        <div className="intro-mobile mb-1"  style={{color: '#6886c5'}}>05/2018 - Present</div>
                        <p style={{display: 'inline-block'}}>Office Administrator at VisitorsCoverage</p>
                        <div className="intro-desktop float-right"  style={{color: '#6886c5'}}> 05/2018 - Present</div>
                        <br/>

                        <div className="intro-mobile mb-1"  style={{color: '#6886c5'}}>04/2016 - 09/2017</div>
                        <p style={{display: 'inline-block'}}>Patient Coordinator at OB-GYN Clinic</p>
                        <div className="intro-desktop float-right"  style={{color: '#6886c5'}}>04/2016 - 09/2017</div>
                        <br/>

                        <div className="intro-mobile mb-1" style={{color: '#6886c5'}}>12/2014 - 12/2015</div>
                        <p style={{display: 'inline-block'}}>EMT at Advantage Ambulance</p>
                        <div className="intro-desktop float-right" style={{color: '#6886c5'}}>12/2014 - 12/2015</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationBackground;