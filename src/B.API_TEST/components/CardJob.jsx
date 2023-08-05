import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../../fakedata/fakedata';
import JobDetail from '../pages/JobDetail';

const CardJob = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleJobDetailClick = (jobId) => {
    const job = data.find((item) => item.id === jobId);
    setSelectedJob(job);
  };

  return (
    <>
        <div className="grid grid-cols-2 mt-5">
        {data.map((item) => (
            <button onClick={() => handleJobDetailClick(item.id)} key={item.id}>
            <div className="bg-[#F6F4EB] flex justify-between rounded-md p-4 items-center mx-6 my-5" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <h2 className="text-[#557A46] font-semibold">{item.title}</h2>
                <div>
                <p className="text-right bg-orange-500 rounded-md py-2 px-4 text-white">See Job</p>
                </div>
            </div>
            </button>
        ))}
        </div>
        
            {selectedJob && <JobDetail job={selectedJob} />}
    </>
  );
};

export default CardJob;
