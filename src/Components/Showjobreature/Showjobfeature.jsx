import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSackDollar, faLocation, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Showjobfeature = ({showfeature}) => {
        const {img, id, title, name, remote,fulltime,location,salary} = showfeature;
        return (
                <div className='mx-auto border w-[60%] p-12'>
                    
                        <img className='h-16 rounded-lg  w-44' src={img} alt="" />
                        <p>{title}</p>
                        <p>{name}</p>
                        <div className='flex'>
                                <p className='text-blue-400 border mr-4'>{remote}</p>
                                <p className='text-blue-400 border'>{fulltime}</p>
                        </div>
                        <div className='flex'>
                        <p className='mr-3'>< FontAwesomeIcon icon={faLocation} /> {location}</p>
                        <p><FontAwesomeIcon icon={faSackDollar} />  slary: {salary}</p>
                        </div>
                        <p><Link to ={`/detail/${id}`}>show detail</Link></p>

                        
                </div>
        );
};

export default Showjobfeature;