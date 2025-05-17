import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: "Location",
    options: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    options: ["Frontend Developer", "Backend Developer", "FullStack Developer","Data Scientist","UI/UX Designer","Mobile Developer","DevOps Engineer","Graphic Designer","QA Engineer"]
  },
  {
    filterType: "Salary",
    options: ["0-40k", "42k-1L", "1L-5L"]
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    if (selectedValue) dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filter Jobs</h2>
      <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-6">
        {filterData.map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">{section.filterType}</h3>
            {section.options.map((item, idx) => {
              const itemId = `${section.filterType}-${idx}`;
              return (
                <div key={itemId} className="flex items-center gap-3">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId} className="text-gray-600 cursor-pointer">
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
