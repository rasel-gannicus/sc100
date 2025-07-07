'use client' ;
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="School Logo"
                width={400}
                height={400}
                className=" h-15   w-full md:w-full"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/notice" className="text-gray-700 hover:text-gray-900">
              Notice
            </Link>
            <Link href="/batch-profile" className="text-gray-700 hover:text-gray-900">
              Batch Profile
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-gray-900">
              Gallery
            </Link>
            <Link href="/committee" className="text-gray-700 hover:text-gray-900">
              Committee
            </Link>
            <Link
              href="/registration"
              className="bg-[#E9BD1F] text-white px-6 py-2 rounded-full hover:bg-[#d4ad1c] transition-colors"
            >
              Registration
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block text-gray-700 hover:text-gray-900 py-2">
                Home
              </Link>
              <Link href="/notice" className="block text-gray-700 hover:text-gray-900 py-2">
                Notice
              </Link>
              <Link href="/batch-profile" className="block text-gray-700 hover:text-gray-900 py-2">
                Batch Profile
              </Link>
              <Link href="/gallery" className="block text-gray-700 hover:text-gray-900 py-2">
                Gallery
              </Link>
              <Link href="/committee" className="block text-gray-700 hover:text-gray-900 py-2">
                Committee
              </Link>
              <Link
                href="/registration"
                className="block bg-[#E9BD1F] text-white px-6 py-2 rounded-full hover:bg-[#d4ad1c] transition-colors mt-4"
              >
                Registration
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;