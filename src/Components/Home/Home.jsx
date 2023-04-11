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
                .then(data => setFeature(data))
        },[])
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
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 '>
                       {
                             features.map(feature => 
                                <Showjobfeature
                                key={feature.id}
                                showfeature ={ feature}
                                ></Showjobfeature>
                                                )
                      }
                        </div>
                </div>
        );
};

export default Home;