import React from "react";
import locationIcon from "../assets/Icons/Location Icon.png";
import dollarIcon from "../assets/Icons/Frame.png";

const JobCard = ({ job }) => {
  // console.log(job);
  const { jobTitle, companyName, companyLogo, location, salary } = job;
  return (
    <div className="border-2 border-light-grey rounded-lg p-10">
      <img className="h-10" src={companyLogo} alt="" />
      <p className="mt-8 mb-2 font-bold text-gray-900">{jobTitle}</p>
      <p className="text-gray-500">{companyName}</p>
      <div className="flex justify-start items-center gap-4">
        <div className="btn-outlined">Remote</div>
        <div className="btn-outlined">Full Time</div>
      </div>
      <div className="flex justify-start items-center gap-6 mb-4">
        <p className="inline-flex -ml-1"><img src={locationIcon} alt="" /> <span className="text-gray-500">{location}</span></p>
        <p className="inline-flex -ml-1"><img className="filter grayscale" src={dollarIcon} alt="" />  <span className="text-gray-500">{salary}</span></p>
      </div>
      <button className="btn-primary">View Details</button>
    </div>
  );
};

export default JobCard;
