import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
  MapIcon } from
'lucide-react';
import Button from '../components/ui/Button';
import SearchForm from '../components/ui/SearchForm';
import VehicleCard from '../components/ui/VehicleCard';
const LandingPage: React.FC = () => {
  // Sample vehicle data
  const featuredVehicles = [
  {
    id: '1',
    name: 'Tesla Model 3',
    image:
    'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    type: 'Electric',
    price: 89,
    rating: 4.9,
    seats: 5,
    isAI: true,
    isElectric: true
  },
  {
    id: '2',
    name: 'Jeep Wrangler',
    image:
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'SUV',
    price: 75,
    rating: 4.7,
    seats: 5,
    isAI: false,
    isElectric: false
  },
  {
    id: '3',
    name: 'BMW 3 Series',
    image:
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    type: 'Luxury',
    price: 110,
    rating: 4.8,
    seats: 5,
    isAI: false,
    isElectric: false
  },
  {
    id: '4',
    name: 'Ford Mustang',
    image:
    'https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'Convertible',
    price: 95,
    rating: 4.6,
    seats: 4,
    isAI: true,
    isElectric: false
  }];

  // Sample testimonials
  const testimonials = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Business Traveler',
    content:
    'Ride Hive made my business trip seamless. The AI pricing was fair and the vehicle was exactly what I needed.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'Family Vacation',
    content:
    'We booked an SUV for our family vacation and it was perfect! The check-in process was quick and the vehicle was clean.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Tour Guide',
    content:
    'As a tour operator, I rely on Ride Hive for my fleet needs. Their management system has saved me countless hours.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
  }];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Ride for Any Journey
            </h1>
            <p className="text-xl opacity-90 mb-8">
              AI-powered vehicle rentals and tours with transparent pricing and
              trusted service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <a href="#tours">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20">

                  Explore Tours
                </Button>
              </a>
            </div>
          </div>
          {/* Search Form */}
          <div className="relative z-10 mt-8">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Ride Hive
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform makes vehicle rentals and tour bookings
              simple, transparent, and reliable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI-Powered Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get the best rates with our dynamic pricing algorithm that
                adjusts to market conditions.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Trusted Rentals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All vehicles undergo rigorous inspection and cleaning before
                each rental.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community Marketplace
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join thousands of travelers and vehicle owners in our trusted
                community.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MapIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Guided Tours
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover new destinations with our curated selection of guided
                tours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              At Ride Hive, we're on a mission to make vehicle rentals and tour
              bookings more accessible, transparent, and enjoyable. We believe
              that everyone deserves a seamless travel experience, whether
              you're renting a car for a weekend getaway or managing a fleet of
              vehicles for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team working together"
                className="rounded-lg shadow-lg" />

            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Ride Hive was founded in 2023 by a team of travel enthusiasts
                and technology experts who saw an opportunity to improve the
                vehicle rental experience. After facing frustrating experiences
                with traditional rental companies, we decided to build a
                platform that puts users first.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, Ride Hive connects thousands of travelers with vehicle
                owners and tour operators across the globe, powered by
                cutting-edge AI technology that ensures fair pricing and optimal
                matching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do at Ride Hive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We constantly push the boundaries of what's possible with AI and
                technology.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Trust
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We build relationships based on reliability, transparency, and
                security.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We foster a diverse and inclusive marketplace that benefits
                everyone.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MapIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Adventure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We empower people to explore the world with confidence and
                excitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind Ride Hive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sarah Johnson
              </h3>
              <p className="text-teal-600 dark:text-teal-400 mb-2">
                CEO & Co-founder
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Former tech executive with a passion for travel and
                sustainability.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/42.jpg"
                alt="Michael Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Michael Chen
              </h3>
              <p className="text-teal-600 dark:text-teal-400 mb-2">
                CTO & Co-founder
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AI expert with background in building marketplace platforms.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Aisha Patel"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Aisha Patel
              </h3>
              <p className="text-teal-600 dark:text-teal-400 mb-2">COO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Operations specialist with experience in the travel industry.
              </p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/29.jpg"
                alt="David Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                David Rodriguez
              </h3>
              <p className="text-teal-600 dark:text-teal-400 mb-2">
                Head of Product
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Product designer focused on creating intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section id="vehicles" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Vehicles
            </h2>
            <a
              href="#vehicles"
              className="text-teal-600 hover:text-teal-800 dark:hover:text-teal-400 font-medium">

              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle) =>
            <VehicleCard key={vehicle.id} {...vehicle} />
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't take our word for it — hear from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) =>
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">

                <div className="flex items-center mb-4">
                  <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4" />

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="tours" className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Ride Hive today and experience the future of vehicle rentals
            and tour bookings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100">

                Sign Up Now
              </Button>
            </Link>
            <a href="#about">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-teal-700">

                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>);

};
export default LandingPage;