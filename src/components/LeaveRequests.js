import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LeaveRequests = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [leaveForm, setLeaveForm] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    leaveType: 'sick',
    adjustmentRequired: false,
    adjustmentDetails: '',
    substitutePreference: ''
  });

  const [leaveHistory] = useState([
    {
      id: 1,
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      days: 3,
      reason: 'Medical emergency',
      leaveType: 'sick',
      status: 'Approved',
      adjustmentMade: true,
      adjustmentDetails: 'Dr. Sarah Johnson covered Data Structures classes, Prof. Mike Wilson handled Database Systems lab',
      submittedDate: '2024-01-15',
      approvedBy: 'HOD Computer Science'
    },
    {
      id: 2,
      startDate: '2024-01-10',
      endDate: '2024-01-12',
      days: 3,
      reason: 'Family function',
      leaveType: 'personal',
      status: 'Pending',
      adjustmentMade: false,
      adjustmentDetails: '',
      submittedDate: '2024-01-08',
      approvedBy: ''
    },
    {
      id: 3,
      startDate: '2023-12-23',
      endDate: '2023-12-25',
      days: 3,
      reason: 'Conference attendance - AI in Education',
      leaveType: 'academic',
      status: 'Approved',
      adjustmentMade: true,
      adjustmentDetails: 'Dr. Emily Chen conducted Machine Learning lectures, assignments rescheduled to next week',
      submittedDate: '2023-12-15',
      approvedBy: 'Dean Academic Affairs'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLeaveForm({
      ...leaveForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const calculateDays = () => {
    if (leaveForm.startDate && leaveForm.endDate) {
      const start = new Date(leaveForm.startDate);
      const end = new Date(leaveForm.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays;
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const days = calculateDays();
    alert(`Leave request submitted successfully!\nDuration: ${days} days\nFrom: ${leaveForm.startDate} to ${leaveForm.endDate}`);
    // Reset form
    setLeaveForm({
      startDate: '',
      endDate: '',
      reason: '',
      leaveType: 'sick',
      adjustmentRequired: false,
      adjustmentDetails: '',
      substitutePreference: ''
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLeaveTypeColor = (type) => {
    switch (type) {
      case 'sick': return 'bg-red-100 text-red-800';
      case 'personal': return 'bg-blue-100 text-blue-800';
      case 'academic': return 'bg-purple-100 text-purple-800';
      case 'emergency': return 'bg-orange-100 text-orange-800';
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
                Leave Requests
              </h1>
              <span className="bg-accent bg-opacity-20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                Faculty
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-secondary">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'submit', label: 'Submit Request', icon: '📝' },
                { id: 'history', label: 'Leave History', icon: '📋' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'submit' ? (
          /* Submit Leave Request Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg border-2 border-secondary p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Submit Leave Request</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={leaveForm.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={leaveForm.endDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Duration Display */}
                {leaveForm.startDate && leaveForm.endDate && (
                  <div className="bg-secondary bg-opacity-10 rounded-md p-3">
                    <p className="text-sm font-medium text-gray-800">
                      Duration: {calculateDays()} days
                    </p>
                  </div>
                )}

                {/* Leave Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Leave Type
                  </label>
                  <select
                    name="leaveType"
                    value={leaveForm.leaveType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="sick">Sick Leave</option>
                    <option value="personal">Personal Leave</option>
                    <option value="academic">Academic Leave</option>
                    <option value="emergency">Emergency Leave</option>
                  </select>
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Leave
                  </label>
                  <textarea
                    name="reason"
                    value={leaveForm.reason}
                    onChange={handleInputChange}
                    rows="3"
                    required
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Please provide a detailed reason for your leave request..."
                  />
                </div>

                {/* Class Adjustment Required */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="adjustmentRequired"
                      checked={leaveForm.adjustmentRequired}
                      onChange={handleInputChange}
                      className="rounded border-secondary text-accent focus:ring-accent"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      Class adjustment/substitution required
                    </span>
                  </label>
                </div>

                {/* Adjustment Details */}
                {leaveForm.adjustmentRequired && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Classes/Subjects Affected
                      </label>
                      <textarea
                        name="adjustmentDetails"
                        value={leaveForm.adjustmentDetails}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="List the classes, subjects, and timings that will be affected during your absence..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Substitute Faculty Preference (Optional)
                      </label>
                      <input
                        type="text"
                        name="substitutePreference"
                        value={leaveForm.substitutePreference}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Suggest faculty members who could cover your classes..."
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-accent text-white font-medium py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-200"
                >
                  Submit Leave Request
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Leave History */
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Leave History</h2>
              <div className="text-sm text-gray-600">
                Total leaves this year: {leaveHistory.filter(leave => leave.status === 'Approved').length}
              </div>
            </div>

            <div className="grid gap-6">
              {leaveHistory.map((leave) => (
                <div key={leave.id} className="bg-white rounded-lg shadow-lg border-2 border-secondary p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-800">
                          {leave.startDate} to {leave.endDate}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(leave.status)}`}>
                          {leave.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLeaveTypeColor(leave.leaveType)}`}>
                          {leave.leaveType.charAt(0).toUpperCase() + leave.leaveType.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Duration:</strong> {leave.days} days
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Reason:</strong> {leave.reason}
                      </p>
                    </div>
                  </div>

                  {leave.adjustmentMade && (
                    <div className="bg-accent bg-opacity-10 rounded-md p-4 mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Class Adjustments Made:</h4>
                      <p className="text-sm text-gray-700">{leave.adjustmentDetails}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <strong>Submitted:</strong> {leave.submittedDate}
                    </div>
                    {leave.approvedBy && (
                      <div>
                        <strong>Approved by:</strong> {leave.approvedBy}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LeaveRequests;