import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    preferredDays: [],
    preferredTimes: {
      morning: false,
      afternoon: false,
      evening: false
    },
    maxClassesPerDay: 4,
    subjects: ['Data Structures', 'Algorithms', 'Database Systems'],
    unavailableDays: [],
    specialRequirements: ''
  });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = [
    { id: 'morning', label: 'Morning (8:00 AM - 12:00 PM)' },
    { id: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)' },
    { id: 'evening', label: 'Evening (4:00 PM - 8:00 PM)' }
  ];

  const handleDayToggle = (day) => {
    setPreferences(prev => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter(d => d !== day)
        : [...prev.preferredDays, day]
    }));
  };

  const handleTimeToggle = (timeSlot) => {
    setPreferences(prev => ({
      ...prev,
      preferredTimes: {
        ...prev.preferredTimes,
        [timeSlot]: !prev.preferredTimes[timeSlot]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Preferences updated successfully!');
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-accent hover:text-opacity-80">
                ← Back
              </Link>
              <h1 className="text-2xl font-bold text-gray-800">
                Teaching Preferences
              </h1>
              <span className="bg-accent bg-opacity-20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                Faculty
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg border-2 border-secondary p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Preferred Days */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Preferred Teaching Days</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {days.map((day) => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.preferredDays.includes(day)}
                      onChange={() => handleDayToggle(day)}
                      className="rounded border-secondary text-accent focus:ring-accent"
                    />
                    <span className="ml-2 text-sm text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred Time Slots */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Preferred Time Slots</h3>
              <div className="space-y-3">
                {timeSlots.map((slot) => (
                  <label key={slot.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.preferredTimes[slot.id]}
                      onChange={() => handleTimeToggle(slot.id)}
                      className="rounded border-secondary text-accent focus:ring-accent"
                    />
                    <span className="ml-2 text-sm text-gray-700">{slot.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Max Classes Per Day */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Maximum Classes Per Day</h3>
              <select
                value={preferences.maxClassesPerDay}
                onChange={(e) => setPreferences(prev => ({ ...prev, maxClassesPerDay: parseInt(e.target.value) }))}
                className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} classes</option>
                ))}
              </select>
            </div>

            {/* Special Requirements */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Special Requirements</h3>
              <textarea
                value={preferences.specialRequirements}
                onChange={(e) => setPreferences(prev => ({ ...prev, specialRequirements: e.target.value }))}
                rows="4"
                className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Any special scheduling requirements, room preferences, or constraints..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white font-medium py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-200"
            >
              Save Preferences
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Preferences;