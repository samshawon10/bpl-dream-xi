import React from 'react';
import footerLogo from '../assets/logo-footer.png';
import Newsletter from './Newsletter';
function Footer() {
  return (
    <>
         <div className="relative z-0 bg-gray-900 pt-36 sm:pt-40">
  
      <div className="absolute -top-24 left-0 right-0 flex justify-center z-50">
        <div className="w-full max-w-7xl px-4 sm:px-0">
          <Newsletter />
        </div>
      </div>
        </div>
    <footer className="bg-gray-900 text-white px-6 py-10 sm:px-12">
         <div className="flex items-center justify-center mb-16">
          <img
            src={footerLogo}
            alt="UrbanClick Logo"
            className="w-36 h-auto"
          />
        </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between mb-10 gap-6">
       
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
       
          <div>
            <h6 className="text-lg font-semibold mb-4">About Us</h6>
            <p className="text-sm text-gray-300 leading-relaxed">
              We are a team of passionate cricket enthusiasts dedicated to bringing you the best fantasy cricket experience. Join us in the excitement of the game!
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <label htmlFor="email" className="block text-sm text-white-300 mb-1">
                Enter your email address
              </label>
              <div className="flex ">
                <input
                  type="email"
                  id="email"
                  placeholder="username@site.com"
                  className="w-full p-2 rounded-l-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sam Shawon. All rights reserved.
      </div>
    </footer>
    </>
  
  );
}

export default Footer;
