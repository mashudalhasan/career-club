import React from "react";
import coverImage from "../assets/All Images/job-interview-character.jpg";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="my-container flex flex-col md:flex-row justify-evenly items-center">
          <div className="mt-3 md:mt-0 flex flex-col justify-evenly items-start text-left text-gray-900">
            <p className="text-4xl md:text-5xl font-extrabold">
              One Step<br />Closer To Your<br /><span className="title-text">Dream Job</span>
            </p>
            <p className="ml-1 py-7 text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button type="button" className="btn-primary">
              Get Started
            </button>
          </div>
          <img className="w-3/4 md:w-1/2 mt-3 md:mt-0" src={coverImage} alt="" />
        </div>
      </div>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </section>
  );
};

export default Home;
