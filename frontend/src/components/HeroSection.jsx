import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    if (!query.trim()) return;
    dispatch(setSearchedQuery(query));
    navigate('/browse');
  };

  return (
    <section className="text-center py-16 px-4 bg-gradient-to-b from-white to-[#f9f7fc]">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Badge */}
        <span className="mx-auto px-5 py-2 rounded-full bg-[#f3ebff] text-[#6A38C2] font-semibold text-sm tracking-wide shadow-sm">
          🚀 India’s No. 1 NEXT HIRE Platform
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-800">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Job</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Discover thousands of job opportunities tailored to your skills. Take the next step in your career today!
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-[80%] lg:w-[70%] mx-auto shadow-lg border border-gray-200 rounded-full overflow-hidden bg-white">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your dream job"
            className="flex-1 px-5 py-3 text-sm sm:text-base outline-none"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-none rounded-b-xl sm:rounded-b-none sm:rounded-r-full bg-[#6A38C2] hover:bg-[#5b30a6] px-5 py-3"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
