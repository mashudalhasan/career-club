import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  return (
    <div className="my-container grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job}></JobCard>
      ))}
    </div>
  );
};

export default FeaturedJobs;
