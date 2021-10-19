import React from 'react';
import { Link } from 'react-router-dom';
import './Schedule.css'

const Schedule = () => {
    return (
        <div id="schedule" className="container">
            <h1 className="text-center header mt-5 ">Working hours</h1>
            <div className="schedule text-center container">
              <h3 className="mt-3">UNWIND</h3>
              <p className="mb-5 mt-3 text-white">We are available everyday.</p>
              <div className="d-flex justify-content-around mt-3">
                  <div className="d-flex flex-column hours ">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>

                  </div>
                  <div className="hours">
                    <p>9.00am - 8.00pm</p>
                    <p>9.00am - 8.00pm</p>
                    <p>9.00am - 8.00pm</p>
                    <p>9.00am - 8.00pm</p>
                    <p>9.00am - 8.00pm</p>
                    <p>11.00am - 8.00pm</p>
                    <p>11.00am - 8.00pm</p>
                  </div>

              </div>
              
              <Link to='/appointment'> <button className="appointment mt-3">Book an Appointment</button></Link>
            </div>
        </div>
    );
};

export default Schedule;