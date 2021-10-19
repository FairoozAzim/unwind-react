import React from 'react';
import {FaCalendarAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../images/bannergif1.gif'


const Appointment = () => {
    return (
        <div className='container text-center mx-auto '>
          <h1 className='header mb-5 mt-5'>Book an Appointment Today</h1>
            <div className='d-flex justify-content-around flex-column flex-lg-row'>
              <img src={image} alt='' className='w-50'></img>
            
            <div className='ms-lg-5 mt-sm-5 '>
            <form class="row g-3">
            <div class="col-md-12">
                <input type="text" class="form-control" id="inputEmail4" placeholder='Full Name'/>
              </div>
              <div class="col-md-12">
                <input type="email" class="form-control" id="inputEmail4" placeholder='Email'/>
              </div>
              <div class="col-md-12">
                <input type="password" class="form-control" id="inputPassword4"placeholder="Password"/>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" id="inputCity" placeholder='Pick a Date'/>
              </div>
              <div class="col-md-6">
                <select id="inputState" class="form-select">
                  <option selected>Reason for visit</option>
                  <option>Anxiety</option>
                  <option>Depression</option>
                  <option>Group Therapy</option>
                  <option>Anxiety</option>
                  <option>Couple Counselling</option>
                  <option>Family Counselling</option>
                  
                </select>
              </div>
          
              <div class="col-12">
              <Link to='/home'>
              <button type="submit" class="button p-3 mt-3">Book Appointment</button>
              </Link>
              </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Appointment;