import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "FullStack Developer",
  "Data Scientist",
  "UI/UX Designer",
  "Mobile Developer",
  "DevOps Engineer",
  "Graphic Designer",
  "QA Engineer"
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate('/browse');
  };

  return (
    <section className="w-full py-16 px-4 bg-[#f9f7fc]">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Explore Jobs by Category
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Quickly discover job listings tailored to your career path.
        </p>
      </div>

      <Carousel className="max-w-6xl mx-auto">
        <CarouselContent>
          {categories.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="w-full rounded-xl py-4 border-gray-300 shadow-sm hover:bg-[#6A38C2] hover:text-white transition-all duration-300"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-2" />
        <CarouselNext className="mr-2" />
      </Carousel>
    </section>
  );
};

export default CategoryCarousel;
