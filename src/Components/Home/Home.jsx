import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Jobcategory from '../JobCategory/Jobcategory';
import Clist from '../Clist';
 
const Home = () => {
        const [jobs, setJob] = useState([]);
        useEffect( () => {
                fetch('jobdata.json')
                .then(res => res.json())
                .then(data => setJob(data))
        },[])
        return (
                <div>
                        <Header></Header>
                        <Clist></Clist>
                        <div className='flex justify-center mt-5 p-5 gap-24  '>
                                {
                                        jobs.map(job=> 
                                        <Jobcategory
                                        key={job.id}
                                        job ={job}
                                        ></Jobcategory>
                                                )
                                }
                        </div>
                </div>
        );
};

export default Home;