import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
        return (
                <div className='flex justify-around bg-slate-50 h-20 items-center' >
                      <div><p className='text-2xl font-bold'>Job-Opportunity</p></div>
                      <div className=''>
                       
                     <Link className='mr-6' to = "/">Home</Link> 
                     <Link className='mr-6 text-blue-400' to = "/statistics">Statistics</Link> 
                     <Link className='mr-6' to = "/appyed">Appyed Job</Link> 
                     <Link className='mr-6' to = "/blog">Blog</Link> 
                     
                      </div>
                      <div> 
                        <button className='bg-sky-400 px-6 py-3 rounded-lg font-bold'>Start Applying</button>
                        </div>  
                </div>
        );
};

export default Navbar;