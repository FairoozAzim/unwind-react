import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Schedule from '../Schedule/Schedule';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css'
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>
            <Testimonials></Testimonials>
            <Schedule></Schedule>
        </div>
    );
};

export default Home;