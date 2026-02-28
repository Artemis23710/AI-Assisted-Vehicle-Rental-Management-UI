import React from 'react';
import { CalendarIcon, CarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import Button from '../../components/ui/Button';
import SearchForm from '../../components/ui/SearchForm';
const CustomerDashboard: React.FC = () => {
  // Sample bookings data
  const upcomingBookings = [
  {
    id: '1',
    vehicleName: 'Tesla Model 3',
    image:
    'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    startDate: '2023-12-15',
    endDate: '2023-12-20',
    location: 'San Francisco, CA',
    status: 'confirmed',
    price: 445
  },
  {
    id: '2',
    vehicleName: 'Jeep Wrangler',
    image:
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    startDate: '2024-01-10',
    endDate: '2024-01-15',
    location: 'Denver, CO',
    status: 'pending',
    price: 375
  }];

  // Sample recent activity
  const recentActivity = [
  {
    id: '1',
    action: 'Booking Confirmed',
    description: 'Your booking for Tesla Model 3 has been confirmed.',
    date: '2023-11-30',
    time: '14:30'
  },
  {
    id: '2',
    action: 'Payment Processed',
    description: 'Payment of $445 has been processed successfully.',
    date: '2023-11-30',
    time: '14:25'
  },
  {
    id: '3',
    action: 'Tour Recommended',
    description:
    'Based on your preferences, we recommend the City Explorer Tour.',
    date: '2023-11-29',
    time: '09:15'
  }];

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, Alex
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your bookings and explore new adventures
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button>
            <CarIcon className="h-4 w-4 mr-2" />
            New Booking
          </Button>
        </div>
      </div>
      {/* Quick Search */}
      <div className="mb-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Search
        </h2>
        <SearchForm />
      </div>
      {/* Upcoming Bookings */}
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Your Upcoming Bookings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {upcomingBookings.map((booking) =>
        <div
          key={booking.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                src={booking.image}
                alt={booking.vehicleName}
                className="w-full h-full object-cover" />

              </div>
              <div className="p-4 md:w-2/3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {booking.vehicleName}
                  </h3>
                  <span
                  className={`text-xs px-2 py-1 rounded-full ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>

                    {booking.status.charAt(0).toUpperCase() +
                  booking.status.slice(1)}
                  </span>
                </div>
                <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-500" />
                    <span>
                      {formatDate(booking.startDate)} -{' '}
                      {formatDate(booking.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-500" />
                    <span>{booking.location}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-teal-600">
                      ${booking.price}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {' '}
                      total
                    </span>
                  </div>
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Recent Activity */}
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentActivity.map((activity) =>
          <li key={activity.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {activity.description}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>
                    {activity.date}, {activity.time}
                  </span>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
      {/* Recommendations */}
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Recommended for You
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="City Explorer Tour"
            className="w-full md:w-1/4 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              City Explorer Tour
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Based on your previous bookings, you might enjoy our guided city
              tour package. Explore the city with a local guide and discover
              hidden gems.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>);

};
export default CustomerDashboard;