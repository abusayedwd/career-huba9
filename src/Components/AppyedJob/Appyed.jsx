import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../utilies/jakeDb';
import Applydetail from '../ApplyDetail/Applydetail';

const Appyed = () => {

        const [applyed, setApplyed] = useState([])
        useEffect(()=> {
                fetch("jobfeature.json")
                .then(res => res.json())
                .then(data=> setApplyed(data))
        },[])
        const storedData = getAppliedJob();
        let empty = [];
        for (const id in storedData){
                const addedJob= applyed.find(job => job.id == id)
                if(addedJob){
                        empty.push(addedJob)
                }
        }
        // console.log(empty)
        return (
                <div className='mt-12'>
                        <p className='text-3xl text-green-600 font-thin text-center'>Applyed Job</p>
                         <select className='border-4 p-2 ml-60 mb-12' name='Filter by'>
                         
                        <option value="remote">All</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">Onsite</option>
                </select>
                        {
                                empty.map(apply => 
                                     <Applydetail
                                     key={apply.id}
                                     apply = {apply}
                                     ></Applydetail>
                                )
                        }
                </div>
        );
};

export default Appyed;