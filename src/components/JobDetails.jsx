import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import banner1 from "../assets/All Images/Vector-1.png";
import banner2 from "../assets/All Images/Vector.png";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  
  const featuredData = useLoaderData();
//   console.log(featuredData);
  
  const [jobDetails, setJobDetails] = useState({});

  useEffect( () => {
    const jobData = featuredData.find(feature => feature.id === id);
    setJobDetails(jobData);
    console.log(jobData);
  } , [])
  console.log(jobDetails);
  
  return (
    <div className="my-container">
      <div className="flex h-40 justify-between items-center">
        <img src={banner2} alt="" />
        <p className="text-2xl font-bold text-center">Job Details</p>
        <img src={banner1} alt="" />
      </div>
      <div className="mt-32">
        <p>Coming soon...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim
          fugiat, molestias eaque temporibus consequuntur a rem eos, quasi
          voluptatem nisi blanditiis aut recusandae culpa architecto debitis
          cum, quia natus?
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
