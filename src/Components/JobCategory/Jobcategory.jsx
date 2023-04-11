 

 

const Jobcategory = ( {job}) => {
        // console.log(job)
        
        return ( 
                
                <div className="bg-slate-100 mt-4 p-8 rounded-xl" >
         <img className="w-16 h-16 rounded-lg" src={job.img} alt="" />
         <p className="text-2xl"> {job.category}</p>
         <p>Vacancy : {job.vacancy}+</p>

                </div>
        );
};

export default Jobcategory;