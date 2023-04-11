import React from 'react';
import { PieChart, Pie, Legend, Tooltip,  } from 'recharts';

 

const data = [
        { name: 'Assignment-1', value: 60 },
        { name: 'Assignment-2', value: 57 },
        { name: 'Assignment-3', value: 58 },
        { name: 'Assignment-4', value: 60 },
        { name: 'Assignment-5', value: 60 },
        { name: 'Assignment-6', value: 60 },
        { name: 'Assignment-7', value: 60 },
        { name: 'Assignment-8', value: 60 },
      ];
const Statistics = () => {

              return (
                 
                <div>
                 <PieChart className='mx-auto' width={400} height={400}>
                    <Pie
                      dataKey="value"
                      
                      isAnimationActive={true}
                      data={data}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Pie dataKey="name" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                  </PieChart>
                </div>
                
              );
};

export default Statistics;