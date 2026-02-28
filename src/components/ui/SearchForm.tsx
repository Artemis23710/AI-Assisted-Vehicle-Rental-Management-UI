import React, { useState } from 'react';
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  SearchIcon,
  CarIcon } from
'lucide-react';
import Button from './Button';
const SearchForm: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    startDate: '',
    endDate: '',
    vehicleType: '',
    passengers: ''
  });
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
  {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
    // Handle search logic
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-5xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Location */}
        <div className="md:col-span-1">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

            Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="location"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
              placeholder="Where are you going?"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />

          </div>
        </div>
        {/* Start Date */}
        <div className="md:col-span-1">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

            Start Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={searchParams.startDate}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />

          </div>
        </div>
        {/* End Date */}
        <div className="md:col-span-1">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

            End Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={searchParams.endDate}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />

          </div>
        </div>
        {/* Vehicle Type */}
        <div className="md:col-span-1">
          <label
            htmlFor="vehicleType"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

            Vehicle Type
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="vehicleType"
              name="vehicleType"
              value={searchParams.vehicleType}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">

              <option value="">Any Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="luxury">Luxury</option>
              <option value="convertible">Convertible</option>
            </select>
          </div>
        </div>
        {/* Search Button */}
        <div className="md:col-span-1 flex items-end">
          <Button type="submit" fullWidth className="h-10 mt-6">
            <SearchIcon className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </form>);

};
export default SearchForm;