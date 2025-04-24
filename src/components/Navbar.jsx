import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = ({ coin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 relative">
      <div className="flex items-center justify-between md:mx-25 mx-auto">
      
        <div>
          <img src={logo} alt="BPL Logo" className="h-auto w-auto" />
        </div>

        <div className="flex items-center justify-end gap-4 w-full">
     
          <div className={`md:flex justify-right mt-4 ${isOpen ? 'hidden' : 'hidden'} md:mt-0`}>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="/fixture" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Fixture</a>
              <a href="/teams" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Teams</a>
              <a href="/schedules" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Schedules</a>
            </div>
          </div>

        
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-semibold border border-yellow-300 shadow-sm">
              💰 Coin: <span>{coin}</span>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <>
          
          <div
            className="fixed inset-0 bg-transparent bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

      
          <div className="fixed top-0 right-0 h-full w-2/3 bg-white z-50 p-6 shadow-lg transition-transform duration-300 ease-in-out">
           
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>
          
            <div className="flex flex-col gap-6">
              <a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</a>
              <a href="/fixture" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Fixture</a>
              <a href="/teams" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Teams</a>
              <a href="/schedules" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Schedules</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
