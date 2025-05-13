# BRR Dashboard

A comprehensive internal dashboard for BRR Media, providing tools for staff management, IT request handling, task management, and team collaboration.

## Overview

The BRR Dashboard is a centralized platform designed to streamline internal operations and improve team collaboration. It provides a user-friendly interface for managing staff information, handling IT requests, tracking tasks, and maintaining team organization.

## My approach
My approach to this task was to break down what the ideal user journey was and determine the heirachy of information. Then it became a matter of determining the most user friendly way of displaying the information and creating the wireframes so I could better understand how I could stack components effectively. Finally, after creating a cohesive brand identity I could begin by building out all the pages except the homepage so I could ensure the information that needed to be sent up to the home page was clearly structured and organised.

## Features

### Home Dashboard
- Overview of submitted IT support requests, to-do list, and company-wide updates
- Quick access to all main features

## Tickets 
- List of current tickets to be worked on by the Engineering team, submitted externally via public submission portal 
- Future: Change status of tickets within dashboard 
- Future: Respond to submitter via email pop up 
- Future: Daily email summary of tickets and status to team members 

### To-Do List
- Create and manage tasks
- Track task status and progress
- Organize tasks by priority
- Future: Reordering functionality and pop-out task creation card


### Staff Directory
- Comprehensive list of team members
- Basic profile information for each staff member
- Quick access to contact details
- Future: Click-through to detailed profile cards


### IT Request System
- Submit and track your submitted IT support tickets
- Real-time status updates (as JSON file is updated from external source)
- **Note**: Currently, tickets are only visible on the dashboard when submitted using rhiannon.lind@gmail.com as the email address. This is a temporary solution until user authentication is implemented.



## User Journey

1. **Access**: Users land on the home dashboard, providing an overview of all features
2. **Navigation**: Intuitive navigation between different sections using the sidebar
3. **Staff Directory**: Browse team members and their contact information
4. **IT Requests**: Submit support tickets and track their progress
5. **Task Management**: Create and manage to-do items for better organization

## Technical Implementation

- Built with React.js
- Modern, responsive design using Tailwind CSS
- Component-based architecture
- Context-based state management
- Utility-first CSS framework for rapid UI development
- Custom Tailwind configuration for BRR Media's design system
- Responsive breakpoints and mobile-first approach

## Responsive Design Implementation

### Navigation
- Collapsible sidebar that transforms into a burger menu on mobile devices
- Persistent navigation header on mobile for easy access to menu

### Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

### Responsive Features
- Grid layouts that adapt from single column (mobile) to multi-column (desktop)
- Card components that stack on mobile and display in grid on larger screens
- Responsive tables that scroll horizontally on mobile
- Optimized spacing and padding for different screen sizes

## Future Features (V2)

### Authentication & Authorization
- User login system
- Role-based access control
- Admin view vs. client view separation

### Enhanced Filtering
- Advanced filters for staff directory
- Ticket database filtering capabilities

### Task Management Improvements
- Kanban view for tasks
- Drag-and-drop reordering
- Pop-out card for task creation
- Task assignment to team members

### Calendar Integration
- Team calendar view
- Meeting scheduling
- Deadline tracking

### Staff Directory Enhancements
- Detailed profile cards
- Manager category as a separate heading
- Enhanced team member information

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Tailwind CSS and its peer dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
4. Generate Tailwind config file (if not already present):
   ```bash
   npx tailwindcss init -p
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request


## Contact

For any questions or support, please contact rhiannon.lind@gmail.com
