'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [holyBooksOpen, setHolyBooksOpen] = useState(false);
  const [trueWorshipOpen, setTrueWorshipOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const topBarIcons = [
    { name: 'Phone', path: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
    { name: 'Video', path: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { name: 'Download', path: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
    { name: 'Location', path: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  ];

  return (
    <header className="bg-gradient-to-b from-red-800 to-red-900">
      {/* Top Bar with Icons and Links */}
      <div className="bg-red-950 text-red-100">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Desktop Logo and Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Guruji Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
            </div>
            
            {/* Mobile Logo */}
            <div className="md:hidden w-full flex justify-center mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Guruji Logo"
                  width={100}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Mobile Top Bar */}
            <div className="w-full md:hidden">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {topBarIcons.map((icon) => (
                  <div key={icon.name} className="flex flex-col items-center group">
                    <div className="p-2 bg-red-800 rounded-lg mb-1 hover:bg-red-700 transition-colors">
                      <svg className="h-5 w-5 text-white group-hover:text-yellow-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
                      </svg>
                    </div>
                    <span className="text-xs">{icon.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                <Link href="/naam-diksha" className="px-3 py-1 bg-red-800 rounded-full text-sm hover:bg-red-700">
                  Naam Diksha
                </Link>
                <Link href="/uk" className="px-3 py-1 bg-red-800 rounded-full text-sm hover:bg-red-700">
                  UK
                </Link>
                <Link href="/usa" className="px-3 py-1 bg-red-800 rounded-full text-sm hover:bg-red-700">
                  USA
                </Link>
              </div>
            </div>

            {/* Desktop Top Bar */}
            <div className="hidden md:flex items-center space-x-6">
              <span className="cursor-pointer hover:text-yellow-200 text-base font-medium px-4 py-1 bg-red-800 rounded-full">हिंदी</span>
              {topBarIcons.map((icon) => (
                <div key={icon.name} className="flex items-center group">
                  <div className="p-2 bg-red-800 rounded-lg hover:bg-red-700 transition-colors">
                    <svg className="h-5 w-5 text-white group-hover:text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/naam-diksha" className="hover:text-yellow-200">Naam Diksha</Link>
              <span>|</span>
              <Link href="/uk" className="hover:text-yellow-200">UK</Link>
              <span>|</span>
              <Link href="/usa" className="hover:text-yellow-200">USA</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl sm:text-xl whitespace-nowrap font-bold tracking-tight">
              <span className="sacred-text">Saint Rampal Ji Maharaj</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-red-100 hover:text-yellow-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <Link href="/about" className="text-red-100 hover:text-yellow-500">About</Link>
            <Link href="/blog" className="text-red-100 hover:text-yellow-500">Blog</Link>
            <Link href="/debate" className="text-red-100 hover:text-yellow-500">Debate</Link>
            
            {/* Stories Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-red-100 hover:text-yellow-500"
                onClick={() => setStoriesOpen(!storiesOpen)}
              >
                Stories
                <svg className="ml-1.5 h-5 w-5 transition-transform group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute z-10 hidden group-hover:block w-48 pt-4 -left-4">
                <div className="bg-white rounded-xl shadow-lg py-2">
                  <Link href="/stories/hindu-deities" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Hindu Deities
                  </Link>
                  <Link href="/stories/muslim-devotees" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Muslim Devotees
                  </Link>
                  <Link href="/stories/great-devotees" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Great Devotees
                  </Link>
                </div>
              </div>
            </div>

            {/* Media Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-red-100 hover:text-yellow-500"
                onClick={() => setMediaOpen(!mediaOpen)}
              >
                Media
                <svg className="ml-1.5 h-5 w-5 transition-transform group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute z-10 hidden group-hover:block w-48 pt-4 -left-4">
                <div className="bg-white rounded-xl shadow-lg py-2">
                  <Link href="/media/video" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Video
                  </Link>
                  <Link href="/media/audio" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Audio
                  </Link>
                  <Link href="/media/images" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Images
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/e-books" className="text-red-100 hover:text-yellow-500">E-Books</Link>

            {/* Holy Books Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-red-100 hover:text-yellow-500"
                onClick={() => setHolyBooksOpen(!holyBooksOpen)}
              >
                Holy Books
                <svg className="ml-1.5 h-5 w-5 transition-transform group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute z-10 hidden group-hover:block w-64 pt-4 -left-4">
                <div className="bg-white rounded-xl shadow-lg py-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="px-4">
                      <h3 className="font-semibold text-red-800 text-sm mb-2">Sacred Texts</h3>
                      <Link href="/holy-books/hinduism" className="block px-2 py-1 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                        Hinduism
                      </Link>
                      <Link href="/holy-books/bhagavad-gita" className="block px-2 py-1 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                        Bhagavad Gita
                      </Link>
                      <Link href="/holy-books/vedas" className="block px-2 py-1 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                        Vedas
                      </Link>
                      <Link href="/holy-books/upanishads" className="block px-2 py-1 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                        Upanishads
                      </Link>
                    </div>
                    <div className="px-4">
                      <h3 className="font-semibold text-red-800 text-sm mb-2">Religious Texts</h3>
                      <Link href="/holy-books/quran" className="block px-2 py-1 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                        Quran
                      </Link>
                      <Link href="/holy-books/bible" className="block px-2 py-1 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                        Bible
                      </Link>
                      <Link href="/holy-books/guru-granth-sahib" className="block px-2 py-1 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                        Guru Granth Sahib
                      </Link>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                    <Link href="/holy-books/all" className="block text-sm text-red-600 hover:text-red-800">
                      View All Holy Books →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* True Worship Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-red-100 hover:text-yellow-500"
                onClick={() => setTrueWorshipOpen(!trueWorshipOpen)}
              >
                True Worship
                <svg className="ml-1.5 h-5 w-5 transition-transform group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute z-10 hidden group-hover:block w-48 pt-4 -left-4">
                <div className="bg-white rounded-xl shadow-lg py-2">
                  <Link href="/true-worship/way" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Way of Worship
                  </Link>
                  <Link href="/true-worship/mantras" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Mantras
                  </Link>
                  <Link href="/true-worship/meditation" className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-800">
                    Meditation
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-red-100 hover:text-yellow-500">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-red-100 hover:text-yellow-500 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-red-900/95 backdrop-blur-sm rounded-lg mt-2 p-4 shadow-lg">
            <nav className="space-y-4">
              <Link href="/" className="flex items-center text-red-100 hover:text-yellow-500">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <Link href="/about" className="block text-red-100 hover:text-yellow-500">About</Link>
              <Link href="/blog" className="block text-red-100 hover:text-yellow-500">Blog</Link>
              <Link href="/debate" className="block text-red-100 hover:text-yellow-500">Debate</Link>
              
              {/* Mobile Dropdowns */}
              <div>
                <button
                  onClick={() => setStoriesOpen(!storiesOpen)}
                  className="flex items-center justify-between w-full text-red-100 hover:text-yellow-500"
                >
                  <span>Stories</span>
                  <svg className={`h-5 w-5 transform ${storiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {storiesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/stories/hindu-deities" className="block text-red-200 hover:text-yellow-500">Hindu Deities</Link>
                    <Link href="/stories/muslim-devotees" className="block text-red-200 hover:text-yellow-500">Muslim Devotees</Link>
                    <Link href="/stories/great-devotees" className="block text-red-200 hover:text-yellow-500">Great Devotees</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setMediaOpen(!mediaOpen)}
                  className="flex items-center justify-between w-full text-red-100 hover:text-yellow-500"
                >
                  <span>Media</span>
                  <svg className={`h-5 w-5 transform ${mediaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mediaOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/media/video" className="block text-red-200 hover:text-yellow-500">Video</Link>
                    <Link href="/media/audio" className="block text-red-200 hover:text-yellow-500">Audio</Link>
                    <Link href="/media/images" className="block text-red-200 hover:text-yellow-500">Images</Link>
                  </div>
                )}
              </div>

              <Link href="/e-books" className="block text-red-100 hover:text-yellow-500">E-Books</Link>

              <div>
                <button
                  onClick={() => setHolyBooksOpen(!holyBooksOpen)}
                  className="flex items-center justify-between w-full text-red-100 hover:text-yellow-500"
                >
                  <span>Holy Books</span>
                  <svg className={`h-5 w-5 transform ${holyBooksOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {holyBooksOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-red-300 mb-2">Sacred Texts</h3>
                      <Link href="/holy-books/hinduism" className="block text-red-200 hover:text-yellow-500 py-1">Hinduism</Link>
                      <Link href="/holy-books/bhagavad-gita" className="block text-red-200 hover:text-yellow-500 py-1">Bhagavad Gita</Link>
                      <Link href="/holy-books/vedas" className="block text-red-200 hover:text-yellow-500 py-1">Vedas</Link>
                      <Link href="/holy-books/upanishads" className="block text-red-200 hover:text-yellow-500 py-1">Upanishads</Link>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-red-300 mb-2">Religious Texts</h3>
                      <Link href="/holy-books/quran" className="block text-red-200 hover:text-yellow-500 py-1">Quran</Link>
                      <Link href="/holy-books/bible" className="block text-red-200 hover:text-yellow-500 py-1">Bible</Link>
                      <Link href="/holy-books/guru-granth-sahib" className="block text-red-200 hover:text-yellow-500 py-1">Guru Granth Sahib</Link>
                    </div>
                    <Link href="/holy-books/all" className="block text-yellow-500 hover:text-yellow-400 pt-2">
                      View All Holy Books →
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setTrueWorshipOpen(!trueWorshipOpen)}
                  className="flex items-center justify-between w-full text-red-100 hover:text-yellow-500"
                >
                  <span>True Worship</span>
                  <svg className={`h-5 w-5 transform ${trueWorshipOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {trueWorshipOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/true-worship/way" className="block text-red-200 hover:text-yellow-500">Way of Worship</Link>
                    <Link href="/true-worship/mantras" className="block text-red-200 hover:text-yellow-500">Mantras</Link>
                    <Link href="/true-worship/meditation" className="block text-red-200 hover:text-yellow-500">Meditation</Link>
                  </div>
                )}
              </div>
              <Link href="/contact" className="block text-red-100 hover:text-yellow-500">Contact</Link>
            </nav>
          </div>
        )}
      </div>

      {/* Bottom Border Gradient */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500"></div>
    </header>
  );
};

export default Header;
