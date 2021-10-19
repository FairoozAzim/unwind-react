import React from 'react';
import './About.css';
import gif1 from '../../../images/meditation.gif';

const About = () => {
    return (
        <div id="about" className="container about mb-5">
        <h4 className="header">We Have More Than 12 Years Professional Experience in Psychology and Mental Health Counseling</h4> 
        <div className="d-flex justify-content-between mt-5">
        <img  src={gif1} alt='' width="400px"></img>
        <p className="about-text d-flex align-items-center">Mental health care centre along with its new facilities at Unwind Complex is a pioneer in this geographical area to provide comprehensive mental health services in accordance with the needs comprehended by Global Mental Health Movement. <br/>
        <br></br> Caring for psychiatric patients only when they are acutely ill and sending them back to society in an unprepared state is not being fair to them. Therefore we are getting started with rehabilitation, half way home, day care centre and psycho educational centre at Unwind Mental Health Care.</p>
        </div>

        </div>
    );
};

export default About;