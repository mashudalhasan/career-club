import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import banner1 from "../assets/All Images/Vector-1.png";
import banner2 from "../assets/All Images/Vector.png";
import dollarIcon from "../assets/Icons/Frame.png";
import locationImage from "../assets/Icons/location.png";
import jobTitleIcon from "../assets/Icons/title.png";
import phoneIcon from "../assets/Icons/phone.png";
import emailIcon from "../assets/Icons/mail.png";
import { addToDb } from "../Utilities/FakeDB";

const JobDetails = () => {
  const { _id } = useParams();
  console.log(_id);

  const featuredData = useLoaderData();
  // console.log(featuredData);

  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    // console.log(featuredData);
    // Check if featuredData is truthy
    if (featuredData) {
      // console.log(featuredData);
      const jobData = featuredData.find(feature => feature._id == _id);
      setJobDetails(jobData);
      console.log(jobData);
    }
  }, [featuredData, _id]); // Include featuredData and id in the dependencies array

  console.log(jobDetails);
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

  const applyNowButtonHandler = () => {
    addToDb(jobDetails._id);
    console.log("Clicked on Apply Now with id:", jobDetails._id);
  };

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
            <span className="text-gray-500">{jobDescription}</span>
          </p>
          <p className="mt-6 mb-6">
            <span className="font-bold">Job Responsibility: </span>
            <span className="text-gray-500">{jobResponsibilities}</span>
          </p>
          <p>
            <span className="font-bold">Educational Requirements: </span>
          </p>
          <p className="mb-6 mt-4 text-gray-500">{educationalRequirements}</p>
          <p>
            <span className="font-bold">Experiences: </span>
          </p>
          <p className="mt-4 text-gray-500">{experience}</p>
        </div>
        <div>
          <div className="bg-light-purple rounded-lg p-7">
            <p className="text-lg font-bold">Job Details</p>
            <hr className="mt-6" />
            <p className="flex mt-6">
              <img src={dollarIcon} alt="" className="mr-2" />
              <span className="mr-2 font-semibold">Salary: </span>
              <span className="text-gray-500">{salary} Per Month</span>
            </p>
            <p className="flex mt-4">
              <img src={jobTitleIcon} alt="" className="mr-2" />
              <span className="mr-2 font-semibold">Job Title: </span>
              <span className="text-gray-500">{jobTitle}</span>
            </p>
            <p className="text-lg font-bold mt-8">Contact Information</p>
            <hr className="mt-6" />
            <p className="flex mt-6">
              <img src={phoneIcon} alt="" className="mr-2" />
              <span className="mr-2 font-semibold">Phone: </span>
              <span className="text-gray-500">{Phone}</span>
            </p>
            <p className="flex mt-4">
              <img src={emailIcon} alt="" className="mr-2" />
              <span className="mr-2 font-semibold">Email: </span>
              <span className="text-gray-500">{email}</span>
            </p>
            <p className="flex mt-4">
              <img src={locationImage} alt="" className="mr-2" />
              <span className="mr-2 font-semibold">Address: </span>
              <span className="text-gray-500">{location}</span>
            </p>
          </div>
          <button
            onClick={() => applyNowButtonHandler()}
            className="w-full mt-6 btn-primary"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
