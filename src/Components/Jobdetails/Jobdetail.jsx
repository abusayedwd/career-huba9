import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailInfo from '../detailInfo/DetailInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone, faEnvelope, faAddressBook, } from '@fortawesome/free-solid-svg-icons'
 
 
 

const Jobdetail = () => {
         const {id} = useParams()
        //  console.log(id)
         const details = useLoaderData()
        //  console.log(details)
       const detail = details.find(dt =>  dt.id === id );
//        console.log(detail.name)
         
        

        
        return (
                <div>  
                        <h1 className='text-3xl text-center mt-16'>Job Details : </h1>
         <div className=' flex justify-between mt-12'>
                 <div className='w-[60%] p-16'>
                             <p><span className='text-1xl font-bold'>Description: </span>{detail.reaponsibility}</p>    
                             <p className='mt-4'><span className='text-1xl font-bold'>Responsibility: </span>{detail.reaponsibility}</p>    
                             <p className='mt-4'><span className='text-1xl font-bold'>Educatonal Requierment: </span>{detail.educational}</p>    
                             <p className='mt-4'><span className='text-1xl font-bold'>Experience: </span>{detail.experience}</p>    
              </div>
               <div className='w-[40%] bg-orange-100 p-12 relative'>
                         <p className='text-center text-2xl font-mono'>Job Detail</p>

                         <p className='mt-4'><span className='text-1xl font-bold'>slary: </span>{detail.salary} (per mounth)</p> 
                         <p className='mt-4'><span className='text-1xl font-bold'>Job Title: </span>{detail.title} </p> 

                         <p className='text-center text-2xl mt-4 font-mono'>Contact info:</p>

                         <p className='mt-4'><span className='text-1xl font-bold'>Phone: </span>
                         <FontAwesomeIcon icon={faPhone} />
                         {detail.phone} </p> 
                         <p className='mt-4'><span className='text-1xl font-bold'>Email: </span>
                         <FontAwesomeIcon icon={faEnvelope} />
                         {detail.email} </p> 
                         <p className='mt-4'><span className='text-1xl font-bold'>Email: </span>
                         <FontAwesomeIcon icon={faAddressBook } />
                          Address : Dhaka, Uttara</p> 
                         
              <button className='bg-sky-400 w-3/5 px-4 py-1 absolute font-mono font-bold text-white mx-auto bottom-0 '>Apply Now</button>
              </div>
        </div>
                </div>
        );
};

export default Jobdetail;