import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TimetableGeneration = () => {
  const [formData, setFormData] = useState({
    department: '',
    shift: '',
    numberOfClassrooms: '',
    numberOfBatches: '',
    maxClassesPerDay: '',
    facultyLeavesPerMonth: ''
  });

  const [subjects, setSubjects] = useState([{ name: '', classesPerWeek: '' }]);
  const [faculties, setFaculties] = useState([{ name: '', department: '', subjects: '' }]);
  const [fixedSlots, setFixedSlots] = useState([{ day: '', time: '', subject: '', faculty: '' }]);
  const [generatedTimetables, setGeneratedTimetables] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', classesPerWeek: '' }]);
  };

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const addFaculty = () => {
    setFaculties([...faculties, { name: '', department: '', subjects: '' }]);
  };

  const removeFaculty = (index) => {
    setFaculties(faculties.filter((_, i) => i !== index));
  };

  const addFixedSlot = () => {
    setFixedSlots([...fixedSlots, { day: '', time: '', subject: '', faculty: '' }]);
  };

  const removeFixedSlot = (index) => {
    setFixedSlots(fixedSlots.filter((_, i) => i !== index));
  };

  const generateTimetables = () => {
    // Mock timetable generation
    const mockTimetables = [
      {
        id: 1,
        name: 'Optimized Schedule A',
        efficiency: '95%',
        conflicts: 0,
        description: 'Balanced workload distribution with minimal gaps'
      },
      {
        id: 2,
        name: 'Optimized Schedule B',
        efficiency: '88%',
        conflicts: 2,
        description: 'Faculty preference optimized with slight time conflicts'
      },
      {
        id: 3,
        name: 'Optimized Schedule C',
        efficiency: '82%',
        conflicts: 1,
        description: 'Classroom utilization optimized'
      }
    ];

    const mockSuggestions = [
      'Consider adding one more classroom to reduce scheduling conflicts',
      'Faculty workload can be better distributed by adjusting subject allocation',
      'Morning slots show better attendance - prioritize core subjects'
    ];

    setGeneratedTimetables(mockTimetables);
    setSuggestions(mockSuggestions);
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
                Timetable Generation
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg border-2 border-secondary p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Configuration</h2>
              
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select Department</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="electronics">Electronics</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="civil">Civil</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shift
                  </label>
                  <select
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select Shift</option>
                    <option value="morning">Morning (8:00 AM - 2:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM - 8:00 PM)</option>
                    <option value="full-day">Full Day (8:00 AM - 6:00 PM)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Classrooms
                  </label>
                  <input
                    type="number"
                    name="numberOfClassrooms"
                    value={formData.numberOfClassrooms}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., 10"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Batches
                  </label>
                  <input
                    type="number"
                    name="numberOfBatches"
                    value={formData.numberOfBatches}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., 6"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Classes per Day
                  </label>
                  <input
                    type="number"
                    name="maxClassesPerDay"
                    value={formData.maxClassesPerDay}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., 8"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Faculty Leaves per Month
                  </label>
                  <input
                    type="number"
                    name="facultyLeavesPerMonth"
                    value={formData.facultyLeavesPerMonth}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., 2"
                  />
                </div>
              </div>

              {/* Subjects Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Subjects</h3>
                  <button
                    onClick={addSubject}
                    className="bg-accent text-white px-3 py-1 rounded-md hover:bg-opacity-90 text-sm"
                  >
                    + Add Subject
                  </button>
                </div>
                {subjects.map((subject, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Subject name"
                      value={subject.name}
                      onChange={(e) => {
                        const newSubjects = [...subjects];
                        newSubjects[index].name = e.target.value;
                        setSubjects(newSubjects);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="number"
                      placeholder="Classes per week"
                      value={subject.classesPerWeek}
                      onChange={(e) => {
                        const newSubjects = [...subjects];
                        newSubjects[index].classesPerWeek = e.target.value;
                        setSubjects(newSubjects);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button
                      onClick={() => removeSubject(index)}
                      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Faculties Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Faculty</h3>
                  <button
                    onClick={addFaculty}
                    className="bg-accent text-white px-3 py-1 rounded-md hover:bg-opacity-90 text-sm"
                  >
                    + Add Faculty
                  </button>
                </div>
                {faculties.map((faculty, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Faculty name"
                      value={faculty.name}
                      onChange={(e) => {
                        const newFaculties = [...faculties];
                        newFaculties[index].name = e.target.value;
                        setFaculties(newFaculties);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      placeholder="Department"
                      value={faculty.department}
                      onChange={(e) => {
                        const newFaculties = [...faculties];
                        newFaculties[index].department = e.target.value;
                        setFaculties(newFaculties);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      placeholder="Subjects (comma separated)"
                      value={faculty.subjects}
                      onChange={(e) => {
                        const newFaculties = [...faculties];
                        newFaculties[index].subjects = e.target.value;
                        setFaculties(newFaculties);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button
                      onClick={() => removeFaculty(index)}
                      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Fixed Slots Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Fixed Time Slots</h3>
                  <button
                    onClick={addFixedSlot}
                    className="bg-accent text-white px-3 py-1 rounded-md hover:bg-opacity-90 text-sm"
                  >
                    + Add Fixed Slot
                  </button>
                </div>
                {fixedSlots.map((slot, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-2">
                    <select
                      value={slot.day}
                      onChange={(e) => {
                        const newSlots = [...fixedSlots];
                        newSlots[index].day = e.target.value;
                        setFixedSlots(newSlots);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Day</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                    <input
                      type="time"
                      value={slot.time}
                      onChange={(e) => {
                        const newSlots = [...fixedSlots];
                        newSlots[index].time = e.target.value;
                        setFixedSlots(newSlots);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      value={slot.subject}
                      onChange={(e) => {
                        const newSlots = [...fixedSlots];
                        newSlots[index].subject = e.target.value;
                        setFixedSlots(newSlots);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      placeholder="Faculty"
                      value={slot.faculty}
                      onChange={(e) => {
                        const newSlots = [...fixedSlots];
                        newSlots[index].faculty = e.target.value;
                        setFixedSlots(newSlots);
                      }}
                      className="px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button
                      onClick={() => removeFixedSlot(index)}
                      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Generate Button */}
              <button
                onClick={generateTimetables}
                className="w-full bg-accent text-white font-medium py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-200"
              >
                Generate Timetable
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            {generatedTimetables.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg border-2 border-secondary p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Options</h2>
                <div className="space-y-4">
                  {generatedTimetables.map((timetable) => (
                    <div key={timetable.id} className="border border-secondary rounded-md p-4">
                      <h3 className="font-medium text-gray-800">{timetable.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{timetable.description}</p>
                      <div className="mt-2 flex justify-between text-sm">
                        <span className="text-green-600">Efficiency: {timetable.efficiency}</span>
                        <span className="text-red-600">Conflicts: {timetable.conflicts}</span>
                      </div>
                      <button className="w-full mt-3 bg-secondary text-gray-800 py-1 px-3 rounded-md hover:bg-opacity-90 text-sm">
                        Select This Option
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {suggestions.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg border-2 border-secondary p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Suggestions</h2>
                <div className="space-y-3">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="bg-secondary bg-opacity-20 rounded-md p-3">
                      <p className="text-sm text-gray-700">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TimetableGeneration;