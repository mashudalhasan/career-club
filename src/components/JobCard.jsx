import React from "react";
import locationIcon from "../assets/Icons/Location Icon.png";

const JobCard = ({ job }) => {
  // console.log(job);
  const { jobTitle, companyName, companyLogo, location, salary } = job;
  return (
    <div className="border-2 border-light-grey rounded-lg p-10">
      <img className="h-10" src={companyLogo} alt="" />
      <p className="mt-8 mb-2">{jobTitle}</p>
      <p>{companyName}</p>
      <div className="flex justify-start items-center gap-4">
        <button className="btn-outlined">Remote</button>
        <button className="btn-outlined">Full Time</button>
      </div>
      <div className="flex justify-start items-center gap-6 mb-4">
        <p className="inline-flex -ml-1"><img src={locationIcon} alt="" /> <span></span>{location}</p>
        <p>{salary}</p>
      </div>
      <button className="btn-primary">View Details</button>
    </div>
  );
};

export default JobCard;
