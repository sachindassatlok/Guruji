'use client';

import Header from '@/components/headers/Header';

export default function Teachings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-800 mb-4">Daily Teachings</h1>
          <p className="text-xl text-red-600">Wisdom for spiritual growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Teaching */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <span className="text-red-600 text-sm font-semibold">Featured Teaching</span>
                <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">The Path of Dharma</h2>
                <p className="text-gray-600 leading-relaxed">
                  Understanding and following one's dharma is essential for spiritual progress. 
                  Dharma is not just duty, but the very essence of our existence...
                </p>
                <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Daily Wisdom Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Morning Reflection</h3>
            <p className="text-gray-600 mb-4">
              "Peace comes from within. Do not seek it without."
            </p>
            <span className="text-red-600 text-sm">- Spiritual Quote of the Day</span>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sacred Texts</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Bhagavad Gita</li>
              <li>• Upanishads</li>
              <li>• Vedas</li>
              <li>• Spiritual Commentaries</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Teachings</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Morning Meditation</h4>
                  <p className="text-gray-600 text-sm">20 min • Guided Practice</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Evening Discourse</h4>
                  <p className="text-gray-600 text-sm">45 min • Spiritual Talk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
