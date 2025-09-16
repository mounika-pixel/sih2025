import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewTimetables = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTimetable, setSelectedTimetable] = useState(null);

  const mockTimetables = [
    {
      id: 1,
      name: 'Computer Science - Morning Shift',
      department: 'Computer Science',
      shift: 'Morning',
      status: 'Active',
      createdDate: '2024-01-15',
      efficiency: '95%',
      conflicts: 0
    },
    {
      id: 2,
      name: 'Electronics - Full Day',
      department: 'Electronics',
      shift: 'Full Day',
      status: 'Draft',
      createdDate: '2024-01-14',
      efficiency: '88%',
      conflicts: 2
    },
    {
      id: 3,
      name: 'Mechanical - Afternoon Shift',
      department: 'Mechanical',
      shift: 'Afternoon',
      status: 'Under Review',
      createdDate: '2024-01-13',
      efficiency: '92%',
      conflicts: 1
    }
  ];

  const mockTimetableData = {
    Monday: [
      { time: '9:00-10:00', subject: 'Data Structures', faculty: 'Dr. Smith', room: 'CS-101' },
      { time: '10:00-11:00', subject: 'Algorithms', faculty: 'Dr. Johnson', room: 'CS-102' },
      { time: '11:30-12:30', subject: 'Database Systems', faculty: 'Prof. Wilson', room: 'CS-103' },
      { time: '2:00-3:00', subject: 'Software Engineering', faculty: 'Dr. Brown', room: 'CS-104' }
    ],
    Tuesday: [
      { time: '9:00-10:00', subject: 'Operating Systems', faculty: 'Dr. Davis', room: 'CS-105' },
      { time: '10:00-11:00', subject: 'Computer Networks', faculty: 'Prof. Miller', room: 'CS-106' },
      { time: '11:30-12:30', subject: 'Web Development', faculty: 'Dr. Taylor', room: 'CS-107' }
    ],
    Wednesday: [
      { time: '9:00-10:00', subject: 'Machine Learning', faculty: 'Dr. Anderson', room: 'CS-108' },
      { time: '10:00-11:00', subject: 'Data Mining', faculty: 'Prof. White', room: 'CS-109' },
      { time: '11:30-12:30', subject: 'AI Fundamentals', faculty: 'Dr. Clark', room: 'CS-110' }
    ]
  };

  const filteredTimetables = selectedFilter === 'all' 
    ? mockTimetables 
    : mockTimetables.filter(t => t.status.toLowerCase().replace(' ', '-') === selectedFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
                View Timetables
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedTimetable ? (
          <>
            {/* Filters */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {['all', 'active', 'draft', 'under-review'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                      selectedFilter === filter
                        ? 'bg-accent text-white'
                        : 'bg-white text-gray-700 border border-secondary hover:bg-secondary hover:bg-opacity-20'
                    }`}
                  >
                    {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Timetables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTimetables.map((timetable) => (
                <div key={timetable.id} className="bg-white rounded-lg shadow-lg border-2 border-secondary">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {timetable.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(timetable.status)}`}>
                        {timetable.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Department:</span> {timetable.department}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Shift:</span> {timetable.shift}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Created:</span> {timetable.createdDate}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm">
                        <span className="text-green-600 font-medium">Efficiency: {timetable.efficiency}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-red-600 font-medium">Conflicts: {timetable.conflicts}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedTimetable(timetable)}
                      className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Timetable Preview */
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{selectedTimetable.name}</h2>
              <button
                onClick={() => setSelectedTimetable(null)}
                className="bg-secondary text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-90"
              >
                ← Back to List
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-secondary overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-secondary bg-opacity-20">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Time
                      </th>
                      {Object.keys(mockTimetableData).map((day) => (
                        <th key={day} className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {['9:00-10:00', '10:00-11:00', '11:30-12:30', '2:00-3:00'].map((timeSlot) => (
                      <tr key={timeSlot}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {timeSlot}
                        </td>
                        {Object.keys(mockTimetableData).map((day) => {
                          const classData = mockTimetableData[day].find(c => c.time === timeSlot);
                          return (
                            <td key={day} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {classData ? (
                                <div className="bg-accent bg-opacity-10 rounded-md p-2">
                                  <div className="font-medium text-gray-800">{classData.subject}</div>
                                  <div className="text-xs text-gray-600">{classData.faculty}</div>
                                  <div className="text-xs text-gray-500">{classData.room}</div>
                                </div>
                              ) : (
                                <div className="bg-gray-50 rounded-md p-2 text-center text-gray-400">
                                  Free
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90">
                Download PDF
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Export to Excel
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Share Timetable
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ViewTimetables;