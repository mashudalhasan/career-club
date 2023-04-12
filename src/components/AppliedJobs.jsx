import React from "react";
import { useLoaderData } from "react-router-dom";
import { getJobCart } from "../Utilities/FakeDB";
import AppliedJobList from "./AppliedJobList";
import banner1 from "../assets/All Images/Vector-1.png";
import banner2 from "../assets/All Images/Vector.png";

const AppliedJobs = () => {
  const appliedData = useLoaderData();
  //   console.log(appliedData);
  let jobData = [];
  const appliedJobData = getJobCart();
  // console.log(appliedJobData);
  for (const _id in appliedJobData) {
    const foundJob = appliedData.find((data) => data._id === _id);
    if (foundJob) {
      jobData.push(foundJob);
    }
  }
//   console.log(jobData);
  return (
    <div className="my-container">
      <div className="flex h-36 justify-between items-center bg-light-purple -mt-20">
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner2} alt="" />
        <p className="text-2xl font-bold text-center">Applied Jobs</p>
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner1} alt="" />
      </div>
      <div className="my-32">
        <div>

        </div>
        <div>
          <ul>
            {jobData.map((job) => (
              <AppliedJobList key={job._id} job={job}></AppliedJobList>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
