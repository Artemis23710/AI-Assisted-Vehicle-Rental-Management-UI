import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
interface LayoutProps {
  children: React.ReactNode;
  minimal?: boolean;
}
const Layout: React.FC<LayoutProps> = ({ children, minimal = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <Navbar minimal={minimal} />
      <main className="flex-grow">{children}</main>
      {!minimal && <Footer />}
    </div>);

};
export default Layout;