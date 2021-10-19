import React from 'react';
import doctor1 from '../../../images/doctor 1.jpg'
import doctor2 from '../../../images/doctor 2.jpg'
import doctor3 from '../../../images/doctor 3.jpg'
import doctor4 from '../../../images/doctor 4.jpg'
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"

import './Doctors.css'

const Doctors = () => {
    
    return (
        <div id="doctors" className="container">
                        <h1 className="text-center header mt-5">Our Specialists</h1>
                        <div className="container mt-5 row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 doctor-card">
                            <img src={doctor1} className="card-img-top card-image" alt="..."/>
                            <div className="details">
                            <div className="card-body ">
                                <h5 className="card-title text-white">Psychologist</h5>
                            </div>
                            <div className="footer">
                                <a href="/home"><FaFacebookF className="text-white ms-3 bg"></FaFacebookF></a>
                                <a href="/home"><FaTwitter className="text-white ms-3 bg"/></a>
                                <a href="/home"><AiOutlineMail className="text-white ms-3 bg"/></a>

                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 doctor-card">
                            <img src={doctor2} className="card-img-top card-image" alt="..."/>
                            <div className="details">
                            <div className="card-body">
                                <h5 className="card-title text-white">Psychologist</h5>
                            </div>
                            <div className="footer">
                            <a href="/home"><FaFacebookF className="text-white ms-3 bg"></FaFacebookF></a>
                                <a href="/home"><FaTwitter className="text-white ms-3 bg"/></a>
                                <a href="/home"><AiOutlineMail className="text-white ms-3 bg"/></a>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 doctor-card">
                            <img src={doctor3} className="card-img-top card-image" alt="..."/>
                            <div className="details">
                            <div className="card-body ">
                                <h5 className="card-title text-white">Psychologist</h5>
                            </div>
                            <div className="footer">
                            <a href="/home"><FaFacebookF className="text-white ms-3 bg"></FaFacebookF></a>
                                <a href="/home"><FaTwitter className="text-white ms-3 bg"/></a>
                                <a href="/home"><AiOutlineMail className="text-white ms-3 bg"/></a>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 doctor-card">
                            <img src={doctor4} className="card-img-top card-image" alt="..."/>
                            <div className="details">
                            <div className="card-body ">
                                <h5 className="card-title text-white">Psychologist</h5>
                            </div>
                            <div className="footer">
                            <a href="/home"><FaFacebookF className="text-white ms-3 bg"></FaFacebookF></a>
                                <a href="/home"><FaTwitter className="text-white ms-3 bg"/></a>
                                <a href="/home"><AiOutlineMail className="text-white ms-3 bg"/></a>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
        </div>
    );
};

export default Doctors;