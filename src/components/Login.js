import React, { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
  const [userType, setUserType] = useState('faculty'); // 'faculty' or 'admin'
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Default credentials for testing
    const defaultCredentials = {
      faculty: {
        email: 'faculty@university.edu',
        password: 'faculty123'
      },
      admin: {
        email: 'admin@university.edu',
        password: 'admin123'
      }
    };

    // Check credentials
    const validCredentials = defaultCredentials[userType];
    if (formData.email === validCredentials.email && formData.password === validCredentials.password) {
      // Store user type in localStorage for role-based access
      localStorage.setItem('userType', userType);
      localStorage.setItem('userEmail', formData.email);
      setIsAuthenticated(true);
    } else {
      alert(`Invalid credentials! Use:\nEmail: ${validCredentials.email}\nPassword: ${validCredentials.password}`);
    }
  };

  // Set default credentials when user type changes
  React.useEffect(() => {
    const defaultCredentials = {
      faculty: {
        email: 'faculty@university.edu',
        password: 'faculty123'
      },
      admin: {
        email: 'admin@university.edu',
        password: 'admin123'
      }
    };
    
    setFormData(defaultCredentials[userType]);
  }, [userType]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-800">
            Smart Timetable Scheduler
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>

        {/* User Type Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-secondary">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">Select Login Type</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType('faculty')}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition duration-200 ${
                  userType === 'faculty'
                    ? 'border-accent bg-accent bg-opacity-10 text-accent'
                    : 'border-secondary hover:border-accent hover:bg-accent hover:bg-opacity-5'
                }`}
              >
                <div className="text-2xl mb-2">👨‍🏫</div>
                <span className="font-medium">Faculty</span>
                <span className="text-xs text-gray-600 mt-1">Teaching Staff</span>
              </button>
              
              <button
                type="button"
                onClick={() => setUserType('admin')}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition duration-200 ${
                  userType === 'admin'
                    ? 'border-accent bg-accent bg-opacity-10 text-accent'
                    : 'border-secondary hover:border-accent hover:bg-accent hover:bg-opacity-5'
                }`}
              >
                <div className="text-2xl mb-2">👨‍💼</div>
                <span className="font-medium">Admin</span>
                <span className="text-xs text-gray-600 mt-1">Administrative Staff</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-secondary">
          <div className="mb-4 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              {userType === 'faculty' ? 'Faculty Login' : 'Admin Login'}
            </h4>
            <p className="text-sm text-gray-600">
              {userType === 'faculty' 
                ? 'Access your teaching schedule and preferences' 
                : 'Manage timetables and approve schedules'
              }
            </p>
          </div>

          {/* Default Credentials Display */}
          <div className="mb-4 bg-blue-50 border border-blue-200 rounded-md p-3">
            <p className="text-xs font-medium text-blue-800 mb-1">Default Credentials:</p>
            <p className="text-xs text-blue-700">
              Email: {userType === 'faculty' ? 'faculty@university.edu' : 'admin@university.edu'}
            </p>
            <p className="text-xs text-blue-700">
              Password: {userType === 'faculty' ? 'faculty123' : 'admin123'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {userType === 'faculty' ? 'Faculty Email' : 'Admin Email'}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder={userType === 'faculty' ? 'faculty@university.edu' : 'admin@university.edu'}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Role-specific additional info */}
            {userType === 'faculty' && (
              <div className="bg-secondary bg-opacity-10 rounded-md p-3">
                <p className="text-xs text-gray-600">
                  <strong>Faculty Access:</strong> View your assigned classes, submit scheduling preferences, 
                  and access your teaching timetable.
                </p>
              </div>
            )}

            {userType === 'admin' && (
              <div className="bg-accent bg-opacity-10 rounded-md p-3">
                <p className="text-xs text-gray-600">
                  <strong>Admin Access:</strong> Create and manage timetables, approve schedules, 
                  manage faculty assignments, and oversee department scheduling.
                </p>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-accent hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Sign In as {userType === 'faculty' ? 'Faculty' : 'Admin'}
            </button>
          </form>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-500">
            For authorized {userType} personnel only
          </p>
          <button 
            onClick={() => setUserType(userType === 'faculty' ? 'admin' : 'faculty')}
            className="text-xs text-accent hover:text-opacity-80 mt-1"
          >
            Switch to {userType === 'faculty' ? 'Admin' : 'Faculty'} Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;