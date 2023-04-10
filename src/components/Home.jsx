import React from "react";
import coverImage from "../assets/All Images/P3OLGJ1 copy 1.png";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <section>
      <div className="bg-sky-50">
        <div className="my-container flex flex-col md:flex-row justify-evenly items-center">
          <div className="flex flex-col justify-evenly items-start text-left text-gray-900">
            <p className="text-4xl md:text-5xl font-extrabold title-text">
              One Step<br />Closer To Your<br />Dream Job
            </p>
            <p className="ml-1 py-7">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button type="button" className="btn-primary">
              Get Started
            </button>
          </div>
          <img className="w-full mx-auto" src={coverImage} alt="" />
        </div>
      </div>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </section>
  );
};

export default Home;
