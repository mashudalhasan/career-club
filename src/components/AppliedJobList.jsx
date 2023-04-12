import React from "react";
import dollarIcon from "../assets/Icons/Frame.png";
import locationImage from "../assets/Icons/location.png";
import { Link } from "react-router-dom";

const AppliedJobList = ({ job }) => {
  console.log(job);
  const {
    jobTitle,
    companyName,
    companyLogo,
    location,
    salary,
    jobLocationType,
  } = job;
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-3 lg:gap-5 border-2 border-gray-300 rounded-lg w-full lg:w-3/4 mx-auto py-4 pl-4 pr-6 lg:py-8 lg:pl-8 lg:pr-12">
      <div className="flex justify-center items-center w-20 h-14 lg:w-36 lg:h-36 rounded-lg bg-gray-200">
        <img src={companyLogo} alt="" className="w-1/2 mx-auto" />
      </div>
      <div className="flex-grow">
        <p className="font-bold">{jobTitle}</p>
        <p className="text-gray-500 mt-2">{companyName}</p>
        <div className="flex justify-start items-center gap-4 m-0">
          <div className="btn-outlined">{jobLocationType}</div>
          <div className="btn-outlined">Full Time</div>
        </div>
        <div className="lg:flex justify-start items-center gap-4">
          <p className="flex">
            <img src={locationImage} alt="" className="mr-2 filter grayscale" />
            <span className="text-gray-500">{location}</span>
          </p>
          <p className="flex">
            <img src={dollarIcon} alt="" className="mr-2 filter grayscale" />
            <span className="mr-2 text-gray-500">Salary: </span>
            <span className="text-gray-500">{salary} Per Month</span>
          </p>
        </div>
      </div>
      <button className="btn-primary">View Details</button>
    </div>
  );
};

export default AppliedJobList;
