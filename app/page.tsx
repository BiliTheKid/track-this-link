'use client';

import React, { useState } from 'react';
import { Bell, DollarSign, Heart, PiggyBank, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

// Custom Alert Component (replacing shadcn/ui Alert)
const CustomAlert = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 p-4 rounded-lg bg-green-500/10 text-green-500 border border-green-500/20">
    {children}
  </div>
);

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="w-8 h-8 text-green-500">
      <path 
        d="M140 80L180 80L100 160L100 120L60 120L140 40L140 80Z" 
        fill="currentColor"
        stroke="none"
      />
    </svg>
    <span className="text-white text-xl font-bold">PriceTrack</span>
  </div>
);

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  const features = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      title: "Save Money",
      description: "Track price drops and save hundreds of dollars annually on your favorite products"
    },
    {
      icon: <Bell className="w-12 h-12 text-green-500" />,
      title: "Price Alerts",
      description: "Get instant notifications when prices drop to your target range"
    },
    {
      icon: <Heart className="w-12 h-12 text-green-500" />,
      title: "Wishlist",
      description: "Create personalized wishlists for you and your family members"
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-green-500" />,
      title: "Smart Shopping",
      description: "Buy at the right time and maximize your savings"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}
                className="text-green-500 hover:text-green-400 font-semibold transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Track & Save on Your
            <span className="text-green-500"> Favorite Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Save hundreds of dollars annually by buying at the right time
          </p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Saving Today
          </button>
        </header>

        {/* Features Section */}
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our <span className="text-green-500">Price Tracker</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-black p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section id="signup" className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Join Our <span className="text-green-500">Waitlist</span>
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Be the first to know when we launch and get exclusive early access
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </form>

          {submitted && (
            <CustomAlert>
              Thanks for joining! We&apos;ll notify you when we launch.
            </CustomAlert>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Logo />
              <p className="text-gray-400">
                Track prices, save money, and shop smarter with PriceTrack.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PriceTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;