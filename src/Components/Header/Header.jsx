import React from 'react';

const Header = () => {
        return (
                <div>
                   <section className='p-12 md:flex flex-1 justify-around  bg-slate-50 items-center'>
                                <div>
                                 <p className='text-4xl font-bold'>New career <br /> reality for the new  <br /><span className='text-blue-500'>
                                 decade
                                        </span></p>
                                        <p className='mt-4'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                                        <button className=' mt-4 font-bold px-4 py-1 bg-sky-400 rounded-md'>Get Started</button>
                                </div>
                                <div>
                                       <img className=' w-[100%]  h-96 mx-auto' src="public/image.jpg" alt="" /> 
                                </div>
                        </section>
                </div>
        );
};

export default Header;