import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Discover great opportunities tailored to your career interests.
        </p>
      </div>

      {allJobs.length <= 0 ? (
        <div className="text-center text-gray-500 mt-8">No Job Available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestJobs;
