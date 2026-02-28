import React from 'react';
import {
  StarIcon,
  UsersIcon,
  GaugeIcon,
  BatteryIcon,
  BadgeCheckIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
interface VehicleCardProps {
  id: string;
  name: string;
  image: string;
  type: string;
  price: number;
  rating: number;
  seats: number;
  isAI?: boolean;
  isElectric?: boolean;
}
const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  name,
  image,
  type,
  price,
  rating,
  seats,
  isAI = false,
  isElectric = false
}) => {
  return (
    <Link to={`/vehicles/${id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          {isAI &&
          <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <BadgeCheckIcon className="h-3 w-3 mr-1" />
              AI Smart Pick
            </div>
          }
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
            {type}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {name}
            </h3>
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {rating}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <UsersIcon className="h-4 w-4 mr-1" />
              <span>{seats} seats</span>
            </div>
            {isElectric ?
            <div className="flex items-center">
                <BatteryIcon className="h-4 w-4 mr-1" />
                <span>Electric</span>
              </div> :

            <div className="flex items-center">
                <GaugeIcon className="h-4 w-4 mr-1" />
                <span>Automatic</span>
              </div>
            }
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-lg font-bold text-teal-600">${price}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {' '}
                /day
              </span>
            </div>
            <button className="text-sm text-teal-600 hover:text-teal-800 dark:hover:text-teal-400 font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>);

};
export default VehicleCard;