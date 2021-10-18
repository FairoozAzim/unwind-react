import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const {name,description,icon} = props.service;
   
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card course-info h-100">
            <div className="img-div">
            <img src={icon} alt="" className="card-img-top img-fluid w-25"></img>
            </div>
            <div className="container card-body">
            <h3 className="course-name mt-5 fw-bold card-title">{name}</h3>
            <p className="card-text">{description}</p>
            </div>
           <div className="cardfooter ms-3"> 
               
               <Link>Read More ... </Link>
               </div>
            
            
            </div>
        </div>
    );
};

export default SingleService;