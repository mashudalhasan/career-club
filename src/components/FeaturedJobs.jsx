import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const [showAllJobs, setShowAllJobs] = useState(false);

  return (
    <div className="my-container mt-32">
      <p className="text-2xl font-bold text-center">Featured Jobs</p>
      <p className="text-gray-500 text-center mt-4 mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* {jobs.slice(0, showAllJobs ? jobs.length : 4).map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))} */}
        {Array.isArray(jobs) &&
          jobs
            .slice(0, showAllJobs ? jobs.length : 4)
            .map((job) => <JobCard key={job._id} job={job}></JobCard>)}
      </div>
      <div className="text-center mt-10 mb-32">
        <button
          onClick={() => setShowAllJobs(!showAllJobs)}
          className="btn-primary"
        >
          {showAllJobs ? "Hide Jobs" : "See All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
