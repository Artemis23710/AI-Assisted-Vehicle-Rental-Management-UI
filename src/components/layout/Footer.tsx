import React from 'react';
import { Link } from 'react-router-dom';
import { CarIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <CarIcon className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-bold text-teal-600">Ride Hive</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Perfect for vehicle rentals, tours, and fleet booking management.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-teal-600">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#careers"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/#blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/#vehicles"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Vehicle Rentals
                </a>
              </li>
              <li>
                <a
                  href="/#tours"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Guided Tours
                </a>
              </li>
              <li>
                <a
                  href="/#fleet-management"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Fleet Management
                </a>
              </li>
              <li>
                <a
                  href="/#business"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  For Business
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/help"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500">

                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Ride Hive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

};
export default Footer;