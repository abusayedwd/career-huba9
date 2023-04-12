const addToDb = (id) => {
        let appliedJobs = {};
        const storedJobs = localStorage.getItem("applied-job");
        if (storedJobs) {
          appliedJobs = JSON.parse(storedJobs);
        }
        const quantity = appliedJobs[id];
        if (quantity) {
          const newQuantity = quantity + 1;
          appliedJobs[id] = newQuantity;
        } else {
          appliedJobs[id] = 1;
        }
        localStorage.setItem("applied-job", JSON.stringify(appliedJobs));
      };
      const getAppliedJob = () => {
        let appliedJobs = {};
        const storedJobs = localStorage.getItem("applied-job");
        if (storedJobs) {
          appliedJobs = JSON.parse(storedJobs);
        }
        return appliedJobs;
      };
      
      export { addToDb , getAppliedJob};
      