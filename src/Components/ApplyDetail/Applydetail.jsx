import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faLocation, faDollarSign, } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Applydetail = ({apply}) => {
        // console.log(apply)
       const {img, id, title, name, remote,fulltime,location,salary} = apply;

       const navigate = useNavigate()
       const Back = () => {
               navigate(-1)
       }

        return (
                <div className='flex mt-5 justify-between items-center w-[65%] mx-auto gap-4 border-2'>
               
                <div className='flex justify-center items-center p-5'>
                        <div> 
                               <img className='h-32 w-32' src={img} alt="" /> 
                        </div>
                        <div className='ml-5'>
                        <p className='text-2xl'>{title}</p>
                        <p>{name}</p>
                        <div className='flex gap-2'>
                        <p className='border p-1 text-blue-500'>{remote}</p>
                        <p className='border p-1 text-blue-500'>{fulltime}</p>

                        </div>
                        <div className='flex'>
                        <p className='mr-3'>< FontAwesomeIcon icon={faLocation} /> {location}</p>
                        <p><FontAwesomeIcon icon={faDollarSign} />  slary: {salary}</p>
                        </div>
                        </div>
                 </div>
                 <div>
                      <button onClick={Back} className='bg-sky-400 px-5 py-1 rounded-xl mr-6 text-yellow-50 font-bold'>view details</button>  
                </div>  
        </div>
        );
};

export default Applydetail;