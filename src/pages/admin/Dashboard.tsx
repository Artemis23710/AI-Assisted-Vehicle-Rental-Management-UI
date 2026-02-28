import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import {
  CarIcon,
  UsersIcon,
  DollarSignIcon,
  TrendingUpIcon,
  AlertCircleIcon } from
'lucide-react';
import Button from '../../components/ui/Button';
const AdminDashboard: React.FC = () => {
  // Sample data for charts
  const bookingData = [
  {
    name: 'Jan',
    bookings: 40
  },
  {
    name: 'Feb',
    bookings: 30
  },
  {
    name: 'Mar',
    bookings: 45
  },
  {
    name: 'Apr',
    bookings: 50
  },
  {
    name: 'May',
    bookings: 65
  },
  {
    name: 'Jun',
    bookings: 75
  },
  {
    name: 'Jul',
    bookings: 85
  }];

  // Sample KPIs
  const kpis = [
  {
    title: 'Total Bookings',
    value: '1,254',
    change: '+12%',
    positive: true,
    icon: <CarIcon className="h-6 w-6 text-teal-600" />
  },
  {
    title: 'Active Users',
    value: '842',
    change: '+5%',
    positive: true,
    icon: <UsersIcon className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Revenue',
    value: '$84,210',
    change: '+18%',
    positive: true,
    icon: <DollarSignIcon className="h-6 w-6 text-green-600" />
  },
  {
    title: 'Fleet Utilization',
    value: '78%',
    change: '-2%',
    positive: false,
    icon: <TrendingUpIcon className="h-6 w-6 text-orange-600" />
  }];

  // Sample alerts
  const alerts = [
  {
    id: '1',
    title: 'Low Inventory Alert',
    message:
    'SUV category is running low on available vehicles for the upcoming weekend.',
    type: 'warning',
    time: '10 minutes ago'
  },
  {
    id: '2',
    title: 'New AI Price Suggestion',
    message:
    'AI suggests increasing weekend rates by 8% based on demand forecast.',
    type: 'info',
    time: '1 hour ago'
  },
  {
    id: '3',
    title: 'Maintenance Required',
    message:
    'Vehicle #A123 is due for maintenance check before next booking.',
    type: 'danger',
    time: '3 hours ago'
  }];

  // Sample recent bookings
  const recentBookings = [
  {
    id: 'B1001',
    customer: 'Alex Johnson',
    vehicle: 'Tesla Model 3',
    startDate: '2023-11-30',
    endDate: '2023-12-05',
    status: 'confirmed',
    amount: '$445'
  },
  {
    id: 'B1002',
    customer: 'Sarah Williams',
    vehicle: 'Jeep Wrangler',
    startDate: '2023-12-01',
    endDate: '2023-12-03',
    status: 'pending',
    amount: '$225'
  },
  {
    id: 'B1003',
    customer: 'Michael Chen',
    vehicle: 'BMW 3 Series',
    startDate: '2023-12-02',
    endDate: '2023-12-06',
    status: 'confirmed',
    amount: '$550'
  }];

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Overview of your fleet and booking operations
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button>
            <CarIcon className="h-4 w-4 mr-2" />
            Add Vehicle
          </Button>
          <Button variant="secondary">Generate Report</Button>
        </div>
      </div>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, index) =>
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {kpi.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {kpi.value}
                </h3>
              </div>
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-3">
                {kpi.icon}
              </div>
            </div>
            <div
            className={`text-sm ${kpi.positive ? 'text-green-600' : 'text-red-600'}`}>

              {kpi.change} from last month
            </div>
          </div>
        )}
      </div>
      {/* Charts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Booking Trends
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={bookingData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#008080" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Alerts */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Alerts
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {alerts.map((alert) =>
            <div
              key={alert.id}
              className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/10 p-4 rounded-r-lg">

                <div className="flex">
                  <AlertCircleIcon className="h-5 w-5 text-orange-500 mr-2" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {alert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {alert.time}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Bookings
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                    Vehicle
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                    Dates
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {recentBookings.map((booking) =>
                <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {booking.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {booking.vehicle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(booking.startDate)} -{' '}
                      {formatDate(booking.endDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                      className={`text-xs px-2 py-1 rounded-full ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>

                        {booking.status.charAt(0).toUpperCase() +
                      booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {booking.amount}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* AI Suggestions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
            <TrendingUpIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            AI Pricing Suggestions
          </h2>
        </div>
        <div className="p-4 border border-teal-200 dark:border-teal-900/50 rounded-lg bg-teal-50 dark:bg-teal-900/10">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Based on historical data and upcoming events, our AI suggests the
            following price adjustments:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-2 py-1 rounded-full mr-2">
                +12%
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                SUVs during the upcoming holiday weekend (Dec 24-26)
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 text-xs px-2 py-1 rounded-full mr-2">
                -8%
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Sedans during weekdays next month to increase utilization
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-2 py-1 rounded-full mr-2">
                +5%
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                All luxury vehicles due to increased demand
              </span>
            </li>
          </ul>
          <div className="flex space-x-2">
            <Button size="sm">Apply All</Button>
            <Button variant="outline" size="sm">
              Review Details
            </Button>
          </div>
        </div>
      </div>
    </div>);

};
export default AdminDashboard;