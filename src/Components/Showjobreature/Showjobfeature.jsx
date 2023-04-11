import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSackDollar, faLocation, } from '@fortawesome/free-solid-svg-icons'

const Showjobfeature = ({showfeature}) => {
        console.log(showfeature)
        return (
                <div className='mx-auto border w-[60%] p-12'>
                    
                        <img className='h-16 rounded-lg  w-44' src={showfeature.img} alt="" />
                        <p>{showfeature.title}</p>
                        <p>{showfeature.name}</p>
                        <div className='flex'>
                                <p className='text-blue-400 border mr-4'>{showfeature.remote}</p>
                                <p className='text-blue-400 border'>{showfeature.fulltime}</p>
                        </div>
                        <div className='flex'>
                        <p className='mr-3'>< FontAwesomeIcon icon={faLocation} /> {showfeature.location}</p>
                        <p><FontAwesomeIcon icon={faSackDollar} />  slary: {showfeature.salary}</p>
                        </div>
                        <button className='bg-blue-500 px-4 py-1 rounded-lg text-white font-bold'>View Details</button>
                        
                </div>
        );
};

export default Showjobfeature;