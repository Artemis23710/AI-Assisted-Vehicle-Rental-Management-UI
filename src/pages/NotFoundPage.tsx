import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';
import Button from '../components/ui/Button';
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-teal-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
          Page not found
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-6">
          <Link to="/">
            <Button className="inline-flex items-center">
              <HomeIcon className="h-5 w-5 mr-2" />
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </div>);

};
export default NotFoundPage;