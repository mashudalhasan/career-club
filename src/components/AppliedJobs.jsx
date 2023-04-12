import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteJobCart, getJobCart } from "../Utilities/FakeDB";
import AppliedJobList from "./AppliedJobList";
import banner1 from "../assets/All Images/Vector-1.png";
import banner2 from "../assets/All Images/Vector.png";
import { toast } from "react-hot-toast";
import FilterMenu from "./FilterMenu";

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

  const deleteCartHandler = () => {
    toast.success("Cleared! Apply Again 🚀");
    deleteJobCart();
  };

  const [onsite, setOnsite] = useState([]);
  const [remote, setRemote] = useState([]);

  const onsiteHandler = () => {
    const onsiteData = jobData.filter((d) => d.jobLocationType === "Onsite");
    setOnsite(onsiteData);
    setRemote([]); // Reset remote data
  };

  const remoteHandler = () => {
    const remoteData = jobData.filter((d) => d.jobLocationType === "Remote");
    setRemote(remoteData);
    setOnsite([]); // Reset onsite data
  };

  return (
    <div className="my-container mb-32">
      <div className="flex h-36 justify-between items-center bg-light-purple -mt-20">
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner2} alt="" />
        <p className="text-2xl font-bold text-center">Applied Jobs</p>
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner1} alt="" />
      </div>
      <div className="mt-32 relative">
        <div className="absolute -top-24 right-40">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 bg-base-300 border-none text-gray-900 hover:text-white"
            >
              Filter By:
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => onsiteHandler()}>Onsite</a>
              </li>
              <li>
                <a onClick={() => remoteHandler()}>Remote</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            {onsite.map((job) => (
              <AppliedJobList key={job._id} job={job}></AppliedJobList>
            ))}
          </ul>
          <ul>
            {remote.map((job) => (
              <AppliedJobList key={job._id} job={job}></AppliedJobList>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {jobData.length > 0 ? (
          <button onClick={() => deleteCartHandler()} className="btn-primary">
            Clear All
          </button>
        ) : (
          <Link to="/">
            <button className="btn-primary">Back to Home</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
