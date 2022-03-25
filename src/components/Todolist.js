import React, { useState } from "react";

import { useEffect } from "react";

function Calculator() {

  const storageJob = JSON.parse(localStorage.getItem('jobs'))
  console.log(storageJob);


  const [jobs,setJobs]= useState(storageJob ?? []);
  const [job,setJob]= useState('');
  const [storage,setStorage] = useState(storageJob ??[]);
  
  // const handleSubmit = ()=> {
  //   const newJobs = [...jobs,job];

  //   setJobs(newJobs);
  //   const jsonJobs = JSON.stringify(newJobs);
  //   localStorage.setItem('jobs',jsonJobs)
  //   setJob('')
  // }

  useEffect (()=> {
    

  },[storage]) 
  // save local storage
  // luu 1 state de biet thay doi local storage-> ben ngoai check lai de biet va cap nhat update change local storage
  // get data storage



  return (
    <div>
      <input 
      value={job}
      onChange={(e)=> setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
      <ul>
        {jobs.map((job,index)=>{
          return <li 
            key={index}
            >{job}</li>
        })}
      </ul>
      

    </div>
  )
}

export default Calculator