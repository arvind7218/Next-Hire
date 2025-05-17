import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{job?.company?.name}</h3>
        <p className="text-sm text-gray-500">India</p>
      </div>

      <div className="my-3">
        <h2 className="text-xl font-bold text-[#6A38C2]">{job?.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3 mt-1">{job?.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge variant="outline" className="text-blue-700 border-blue-200 font-medium">{job?.position} Positions</Badge>
        <Badge variant="outline" className="text-[#F83002] border-red-200 font-medium">{job?.jobType}</Badge>
        <Badge variant="outline" className="text-[#7209b7] border-purple-200 font-medium">{job?.salary} LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
