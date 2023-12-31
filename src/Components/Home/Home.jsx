import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Jobcategory from '../JobCategory/Jobcategory';
import Clist from '../Clist';
import Jobfeature from '../Jobfeature';
import Showjobfeature from '../Showjobreature/Showjobfeature';
 
const Home = () => {
        const [jobs, setJob] = useState([]);
        useEffect( () => {
                fetch('jobdata.json')
                .then(res => res.json())
                .then(data => setJob(data))
        },[])
        const [features, setFeature] = useState([])
         

        useEffect(() => {
                fetch("jobfeature.json")
                .then(res => res.json())
                .then(data => setFeature(data.slice(0,4)))
        },[])
        const showAllJobs = () => {
                fetch("jobfeature.json")
                .then(res => res.json())
                .then(data => setFeature(data)) 
        }
        return (
                <div>
                        <Header></Header>
                        <Clist></Clist>
                        <div className='md:flex flex-1 justify-center mt-5 p-5 gap-24'>
                                {
                                        jobs.map(job=> 
                                        <Jobcategory
                                        key={job.id}
                                        job ={job}
                                        ></Jobcategory>
                                                )
                                }
                        </div>
                        <Jobfeature></Jobfeature>
                        <div className='grid grid-cols-1 mx-auto md:grid-cols-2  mt-12 gap-4'>
                       {
                             features.map(feature => 
                                <Showjobfeature
                                key={feature.id}
                                showfeature ={ feature}
                                ></Showjobfeature>
     
                                )
                                                        }
                  
                                        
                        <button onClick={showAllJobs} className='bg-sky-400 px-5 py-2 rounded-lg font-bold m-auto mb-4'>See All Job</button>
                        </div>
                </div>
        );
};

export default Home;