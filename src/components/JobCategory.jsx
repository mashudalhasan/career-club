import React from 'react';
import cardImg1 from '../assets/Icons/accounts 1.png';
import cardImg2 from '../assets/Icons/creative 1.png';
import cardImg3 from '../assets/Icons/social-media 1.png';
import cardImg4 from '../assets/Icons/chip 1.png';

const JobCategory = () => {
    return (
        <div className='my-container mt-24 mb-7'>
            <p className='text-2xl font-bold text-center'>Job Category List</p>
            <p className='text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-8'>
                <div className='bg-light-purple rounded-lg p-9'>
                    <img src={cardImg1} alt="" />
                    <p className='text-xl font-bold mt-7 mb-2'>Account & Finance</p>
                    <p className='text-gray-400'>300 Jobs Available</p>
                </div>
                <div className='bg-light-purple rounded-lg p-9'>
                    <img src={cardImg2} alt="" />
                    <p className='text-xl font-bold mt-7 mb-2'>Creative Design</p>
                    <p className='text-gray-400'>100+ Jobs Available</p>
                </div>
                <div className='bg-light-purple rounded-lg p-9'>
                    <img src={cardImg3} alt="" />
                    <p className='text-xl font-bold mt-7 mb-2'>Marketing & Sales</p>
                    <p className='text-gray-400'>150 Jobs Available</p>
                </div>
                <div className='bg-light-purple rounded-lg p-9'>
                    <img src={cardImg4} alt="" />
                    <p className='text-xl font-bold mt-7 mb-2'>Engineering Job</p>
                    <p className='text-gray-400'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;