'use client';

import Header from '@/components/headers/Header';

export default function Darshan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-800 mb-4">Virtual Darshan</h1>
          <p className="text-xl text-red-600">Experience the divine presence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Stream Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800">
              {/* Placeholder for live stream */}
              <div className="flex items-center justify-center text-white">
                Live Stream Placeholder
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Live Darshan</h2>
              <p className="text-gray-600">Join us for live darshan and receive divine blessings.</p>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Morning Aarti</span>
                  <span className="text-red-600">6:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Afternoon Darshan</span>
                  <span className="text-red-600">12:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Evening Aarti</span>
                  <span className="text-red-600">7:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Events</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday Satsang</span>
                  <span className="text-red-600">9:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Full Moon Meditation</span>
                  <span className="text-red-600">8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
