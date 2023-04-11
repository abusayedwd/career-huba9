const JobDetaildata = async () => {
        const Loadedjobdetail = await fetch('jobfeature.json')
        const details = await Loadedjobdetail.json()
         return details

}
export default JobDetaildata;