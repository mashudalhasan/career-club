import React from "react";
import { useLoaderData } from "react-router-dom";
import { getJobCart } from "../Utilities/FakeDB";
import AppliedJobList from "./AppliedJobList";

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
  console.log(jobData);
  return (
    <div className="my-container">
      <h1 className="font-bold text-center">Applied Jobs</h1>
      <ul>
        {jobData.map((job) => (
          <AppliedJobList key={job._id} job={job}></AppliedJobList>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
