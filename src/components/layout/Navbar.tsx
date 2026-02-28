import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, MoonIcon, SunIcon, CarIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';
interface NavbarProps {
  minimal?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ minimal = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <CarIcon className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-teal-600">Ride Hive</span>
          </Link>
          {/* Desktop Navigation */}
          {!minimal &&
          <nav className="hidden md:flex items-center space-x-8">
              <a
              href="/#home"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">

                Home
              </a>
              <a
              href="/#about"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">

                About
              </a>
              <a
              href="/#vehicles"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">

                Vehicles
              </a>
              <a
              href="/#tours"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">

                Tours
              </a>
            </nav>
          }
          {/* Right Side - Auth & Theme */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>

              {theme === 'light' ?
              <MoonIcon className="h-5 w-5 text-gray-600" /> :

              <SunIcon className="h-5 w-5 text-gray-300" />
              }
            </button>
            {/* Auth Buttons */}
            {!minimal &&
            <div className="hidden md:flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="secondary">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            }
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

              {mobileMenuOpen ?
              <XIcon className="h-6 w-6" /> :

              <MenuIcon className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && !minimal &&
        <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-gray-800">
            <a
            href="/#home"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}>

              Home
            </a>
            <a
            href="/#about"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}>

              About
            </a>
            <a
            href="/#vehicles"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}>

              Vehicles
            </a>
            <a
            href="/#tours"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}>

              Tours
            </a>
            <div className="px-4 pt-2 flex flex-col space-y-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" fullWidth>
                  Log in
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth>Sign up</Button>
              </Link>
            </div>
          </div>
        }
      </div>
    </header>);

};
export default Navbar;