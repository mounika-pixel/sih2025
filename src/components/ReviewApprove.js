import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewApprove = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [selectedTimetable, setSelectedTimetable] = useState(null);

  const mockPendingTimetables = [
    {
      id: 1,
      name: 'Computer Science - Morning Shift',
      department: 'Computer Science',
      submittedBy: 'Dr. Smith',
      submittedDate: '2024-01-15',
      priority: 'High',
      efficiency: '95%',
      conflicts: 0,
      description: 'Optimized schedule for CS department with minimal conflicts'
    },
    {
      id: 2,
      name: 'Electronics - Full Day',
      department: 'Electronics',
      submittedBy: 'Prof. Johnson',
      submittedDate: '2024-01-14',
      priority: 'Medium',
      efficiency: '88%',
      conflicts: 2,
      description: 'Full day schedule with some minor timing conflicts'
    },
    {
      id: 3,
      name: 'Mechanical - Afternoon Shift',
      department: 'Mechanical',
      submittedBy: 'Dr. Wilson',
      submittedDate: '2024-01-13',
      priority: 'Low',
      efficiency: '92%',
      conflicts: 1,
      description: 'Afternoon shift optimization with good faculty distribution'
    }
  ];

  const mockApprovedTimetables = [
    {
      id: 4,
      name: 'Civil Engineering - Morning',
      department: 'Civil',
      approvedBy: 'Dean Office',
      approvedDate: '2024-01-12',
      efficiency: '96%',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Information Technology - Evening',
      department: 'IT',
      approvedBy: 'HOD IT',
      approvedDate: '2024-01-10',
      efficiency: '90%',
      status: 'Active'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (timetableId) => {
    // In real app, this would be an API call
    alert(`Timetable ${timetableId} approved successfully!`);
  };

  const handleReject = (timetableId) => {
    // In real app, this would be an API call
    alert(`Timetable ${timetableId} rejected. Feedback sent to submitter.`);
  };

  const handleRequestChanges = (timetableId) => {
    // In real app, this would open a modal for feedback
    alert(`Change request sent for timetable ${timetableId}`);
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
                Review & Approve
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedTimetable ? (
          <>
            {/* Tabs */}
            <div className="mb-6">
              <div className="border-b border-secondary">
                <nav className="-mb-px flex space-x-8">
                  {[
                    { id: 'pending', label: 'Pending Approval', count: mockPendingTimetables.length },
                    { id: 'approved', label: 'Approved', count: mockApprovedTimetables.length }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                        selectedTab === tab.id
                          ? 'border-accent text-accent'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                      <span className="ml-2 bg-secondary bg-opacity-20 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content based on selected tab */}
            {selectedTab === 'pending' ? (
              <div className="space-y-6">
                {mockPendingTimetables.map((timetable) => (
                  <div key={timetable.id} className="bg-white rounded-lg shadow-lg border-2 border-secondary">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {timetable.name}
                          </h3>
                          <p className="text-gray-600">{timetable.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(timetable.priority)}`}>
                          {timetable.priority} Priority
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Department:</span> {timetable.department}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Submitted by:</span> {timetable.submittedBy}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Submitted:</span> {timetable.submittedDate}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Efficiency:</span> 
                            <span className="text-green-600 ml-1">{timetable.efficiency}</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Conflicts:</span>
                            <span className={`ml-1 ${timetable.conflicts === 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {timetable.conflicts}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={() => setSelectedTimetable(timetable)}
                          className="bg-secondary text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-200"
                        >
                          Review Details
                        </button>
                        <button
                          onClick={() => handleApprove(timetable.id)}
                          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
                        >
                          Quick Approve
                        </button>
                        <button
                          onClick={() => handleRequestChanges(timetable.id)}
                          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-200"
                        >
                          Request Changes
                        </button>
                        <button
                          onClick={() => handleReject(timetable.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockApprovedTimetables.map((timetable) => (
                  <div key={timetable.id} className="bg-white rounded-lg shadow-lg border-2 border-secondary">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        {timetable.name}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Department:</span> {timetable.department}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Approved by:</span> {timetable.approvedBy}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Approved:</span> {timetable.approvedDate}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Efficiency:</span>
                          <span className="text-green-600 ml-1">{timetable.efficiency}</span>
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {timetable.status}
                        </span>
                        <button
                          onClick={() => setSelectedTimetable(timetable)}
                          className="text-accent hover:text-opacity-80 text-sm font-medium"
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Detailed Review */
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Timetable Preview */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg border-2 border-secondary p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Timetable Preview</h3>
                  <div className="bg-gray-50 rounded-md p-4 text-center">
                    <p className="text-gray-600">Interactive timetable preview would be displayed here</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Showing weekly schedule with subjects, faculty, and room assignments
                    </p>
                  </div>
                </div>
              </div>

              {/* Review Panel */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg border-2 border-secondary p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Overall Rating
                      </label>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Efficiency Score
                      </label>
                      <div className="bg-green-100 rounded-full px-3 py-1 text-green-800 text-sm font-medium">
                        {selectedTimetable.efficiency}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Conflicts
                      </label>
                      <div className={`rounded-full px-3 py-1 text-sm font-medium ${
                        selectedTimetable.conflicts === 0 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedTimetable.conflicts || 0} issues
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Review Comments
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Add your review comments here..."
                    />
                  </div>

                  {selectedTab === 'pending' && (
                    <div className="space-y-3">
                      <button
                        onClick={() => handleApprove(selectedTimetable.id)}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                      >
                        Approve Timetable
                      </button>
                      <button
                        onClick={() => handleRequestChanges(selectedTimetable.id)}
                        className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-200"
                      >
                        Request Changes
                      </button>
                      <button
                        onClick={() => handleReject(selectedTimetable.id)}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
                      >
                        Reject Timetable
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ReviewApprove;