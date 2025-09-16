# Smart Timetable Scheduler

A modern React frontend application for optimizing academic timetable scheduling with AI assistance.

## Features

- **Secure Login**: Authentication for authorized personnel
- **Dashboard**: Overview with quick navigation to key features
- **Timetable Generation**: Comprehensive form for creating optimized schedules
- **Multi-department Support**: Handle different departments and shifts
- **Dynamic Input Fields**: Add/remove subjects, faculty, and constraints
- **AI Suggestions**: Smart recommendations for optimization
- **Review & Approval**: Authority workflow for schedule approval
- **Responsive Design**: Works seamlessly across all devices

## Technology Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **TailwindCSS**: Utility-first CSS framework
- **Custom Color Palette**: Professional academic theme

## Color Scheme

- Primary: `#ECEEDF` (Light sage)
- Secondary: `#D9C4B0` (Warm beige)  
- Accent: `#CFAB8D` (Muted terracotta)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view in browser

## Project Structure

```
src/
├── components/
│   ├── Login.js              # Authentication page
│   ├── Dashboard.js          # Main dashboard
│   ├── TimetableGeneration.js # Form for creating timetables
│   ├── ViewTimetables.js     # Browse and preview schedules
│   └── ReviewApprove.js      # Authority approval workflow
├── App.js                    # Main app with routing
├── index.js                  # Entry point
└── index.css                 # Global styles with TailwindCSS
```

## Key Components

### Login
- Clean authentication form
- Email and password validation
- Professional academic styling

### Dashboard  
- Navigation cards for main features
- Quick stats overview
- Responsive grid layout

### Timetable Generation
- Multi-step form with dynamic fields
- Department and shift selection
- Subject, faculty, and constraint management
- AI-powered optimization suggestions
- Multiple timetable options display

### View Timetables
- Filter by status (Active, Draft, Under Review)
- Card-based timetable listing
- Detailed preview with weekly grid
- Export functionality

### Review & Approve
- Tabbed interface for pending/approved items
- Detailed review panel with scoring
- Approval workflow actions
- Comment system for feedback

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for tablets and desktops

## Future Enhancements

- Real API integration
- Advanced conflict resolution
- Drag-and-drop schedule editing
- Calendar integration
- Email notifications
- Advanced analytics dashboard