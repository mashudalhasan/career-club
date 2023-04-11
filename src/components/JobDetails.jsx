import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import banner1 from "../assets/All Images/Vector-1.png";
import banner2 from "../assets/All Images/Vector.png";
import dollarIcon from "../assets/Icons/Frame.png";
import locationImage from "../assets/Icons/location.png";
import jobTitleIcon from "../assets/Icons/title.png";
import phoneIcon from "../assets/Icons/phone.png";
import emailIcon from "../assets/Icons/mail.png";

const JobDetails = () => {
  const { _id } = useParams();
  //   console.log(id);

  const featuredData = useLoaderData();

  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    if (featuredData) {
      // Check if featuredData is truthy
      const jobData = featuredData.find((feature) => feature.id === _id);
      setJobDetails(jobData);
    }
  }, [featuredData, _id]); // Include featuredData and id in the dependencies array

  //   console.log(jobDetails);
  const {
    jobTitle,
    companyName,
    location,
    salary,
    jobDescription,
    jobResponsibilities,
    educationalRequirements,
    experience,
    Phone,
    email,
  } = jobDetails;

  return (
    <div className="mb-32">
      <div className="flex h-36 justify-between items-center bg-light-purple -mt-20">
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner2} alt="" />
        <p className="text-2xl font-bold text-center">Job Details</p>
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner1} alt="" />
      </div>
      <div className="my-container mt-32 grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-10">
        <div className="col-span-2">
          <p>
            <span className="font-bold">Job Description: </span>
            {jobDescription}
          </p>
          <p className="mt-6 mb-6">
            <span className="font-bold">Job Responsibility: </span>
            {jobResponsibilities}
          </p>
          <p>
            <span className="font-bold">Educational Requirements: </span>
          </p>
          <p className="mb-6 mt-4">{educationalRequirements}</p>
          <p>
            <span className="font-bold">Experiences: </span>
          </p>
          <p className="mt-4">{experience}</p>
        </div>
        <div>
          <div className="bg-light-purple rounded-lg p-7">
            <p className="text-lg font-bold">Job Details</p>
            <hr className="mt-6" />
            <p className="flex mt-6">
              <img src={dollarIcon} alt="" className="mr-2" />
              <span className="mr-2">Salary: {salary}</span> Per Month
            </p>
            <p className="flex mt-4">
              <img src={jobTitleIcon} alt="" className="mr-2" />
              <span className="mr-2">Job Title: </span>
              {jobTitle}
            </p>
            <p className="text-lg font-bold mt-8">Contact Information</p>
            <hr className="mt-6" />
            <p className="flex mt-6">
              <img src={phoneIcon} alt="" className="mr-2" />
              <span className="mr-2">Phone: </span>
              {Phone}
            </p>
            <p className="flex mt-4">
              <img src={emailIcon} alt="" className="mr-2" />
              <span className="mr-2">Email: </span>
              {email}
            </p>
            <p className="flex mt-4">
              <img src={locationImage} alt="" className="mr-2" />
              <span className="mr-2">Address: </span>
              {location}
            </p>
          </div>
          <button className="w-full mt-6 btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
