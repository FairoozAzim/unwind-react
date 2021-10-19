import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [singleService, setSingleService] = useState([]);
    const [serviceDetails, setServiceDetails ] = useState({});


    useEffect(()=>{
        fetch('/serviceDetails.json')
        .then(res => res.json())
        .then(data => setSingleService(data.services));
    },[])
    // console.log(singleService);


    useEffect(() => {
      const selectedService = singleService.find
       (s => s.id == serviceId)
        setServiceDetails(selectedService);
    },[singleService, serviceId])
    
    return (
        <div className='container'>
            <h1 className='header mb-5'>{serviceDetails?.name}</h1>
           <div className='container d-flex justify-content-around'>
           <img className='w-50 me-3' src={serviceDetails?.image} alt=''></img>
           <p className='w-50 mt-3'>{serviceDetails?.moreInfo}</p>
           </div>

           <h3 className='header mt-5'>How to Cure</h3>
           <p>{serviceDetails?.cure}</p>

           <div className="text-center mt-4">
           <Link to='/home'>
             <button className="button text-center p-2">Back to Home</button>
           </Link>
           </div>
            
        </div>
    );
};

export default ServiceDetails;