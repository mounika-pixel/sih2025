import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const userType = localStorage.getItem('userType') || 'faculty';

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem('userType');
    }
    navigate('/login');
  };

  const facultyOptions = [
    {
      title: 'My Timetable',
      description: 'View your current teaching schedule and assignments',
      link: '/view-timetables',
      icon: '📅'
    },
    {
      title: 'Preferences',
      description: 'Set your teaching preferences and availability',
      link: '/preferences',
      icon: '⚙️'
    },
    {
      title: 'Leave Requests',
      description: 'Submit and manage your leave applications',
      link: '/leave-requests',
      icon: '📝'
    }
  ];

  const adminOptions = [
    {
      title: 'Create Timetable',
      description: 'Generate optimized timetables for classrooms, batches, and subjects',
      link: '/timetable-generation',
      icon: '📅'
    },
    {
      title: 'View Generated Timetables',
      description: 'Browse and preview all created timetables',
      link: '/view-timetables',
      icon: '👁️'
    },
    {
      title: 'Review & Approve',
      description: 'Authority section for reviewing and approving schedules',
      link: '/review-approve',
      icon: '✅'
    }
  ];

  const dashboardOptions = userType === 'admin' ? adminOptions : facultyOptions;

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Smart Timetable Scheduler
              </h1>
              <span className="bg-accent bg-opacity-20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                {userType === 'admin' ? 'Admin' : 'Faculty'}
              </span>
            </div>
            <button 
              onClick={handleLogout}
              className="text-accent hover:text-opacity-80 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {userType === 'admin' ? 'Admin Dashboard' : 'Faculty Dashboard'}
          </h2>
          <p className="text-gray-600">
            {userType === 'admin' 
              ? 'Manage your academic scheduling efficiently' 
              : 'Access your teaching schedule and preferences'
            }
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardOptions.map((option, index) => (
            <Link
              key={index}
              to={option.link}
              className="bg-white rounded-lg shadow-lg border-2 border-secondary hover:border-accent transition-all duration-200 transform hover:scale-105"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {option.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {userType === 'admin' ? (
              <>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">24</div>
                  <div className="text-sm text-gray-600">Active Timetables</div>
                </div>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">8</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">156</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-sm text-gray-600">Pending Approvals</div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">18</div>
                  <div className="text-sm text-gray-600">Classes This Week</div>
                </div>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">5</div>
                  <div className="text-sm text-gray-600">Subjects Teaching</div>
                </div>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">2</div>
                  <div className="text-sm text-gray-600">Pending Requests</div>
                </div>
                <div className="bg-white rounded-lg shadow border-2 border-secondary p-4">
                  <div className="text-2xl font-bold text-accent">7</div>
                  <div className="text-sm text-gray-600">Free Hours</div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;