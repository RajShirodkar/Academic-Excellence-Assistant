'use client';

import { useState } from 'react';
import DashboardSidebar from '../../../components/dashboard/DashboardSidebar';
import { 
  DashboardCard, 
  StatsCard, 
  CourseCard, 
  QuickActions 
} from '../../../components/dashboard/DashboardComponents';
import { facultyData } from '../../../components/dashboard/mockData';

export default function FacultyDashboard() {
  const [data] = useState(facultyData);

  const recentActivity = data.recentActivity.slice(0, 5);
  const upcomingClasses = data.classes
    .filter(cls => cls.nextClass)
    .sort((a, b) => new Date(a.nextClass) - new Date(b.nextClass))
    .slice(0, 3);

  const quickActions = [
    {
      label: "Create Assignment",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      onClick: () => console.log("Create assignment")
    },
    {
      label: "Grade Submissions",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      onClick: () => console.log("Grade submissions")
    },
    {
      label: "Message Students",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      onClick: () => console.log("Message students")
    },
    {
      label: "Analytics",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      onClick: () => console.log("View analytics")
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar userType="faculty" />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {data.profile.name}
              </h1>
              <p className="text-gray-600">
                {data.profile.title} • {data.profile.department}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2z" />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Students"
              value={data.profile.totalStudents}
              change="+12 from last semester"
              changeType="positive"
              icon={
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              }
            />
            <StatsCard
              title="Active Classes"
              value={data.classes.length}
              change="3 this semester"
              changeType="positive"
              icon={
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <StatsCard
              title="Pending Grading"
              value={data.pendingGrading}
              change="5 assignments due"
              changeType="neutral"
              icon={
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
            />
            <StatsCard
              title="Research Hours"
              value={data.profile.researchHours}
              change="+8 this week"
              changeType="positive"
              icon={
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />
          </div>

          {/* Quick Actions */}
          <DashboardCard title="Quick Actions" className="mb-8">
            <QuickActions actions={quickActions} />
          </DashboardCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Upcoming Classes */}
            <DashboardCard 
              title="Upcoming Classes" 
              action={
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Schedule
                </button>
              }
            >
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.id} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{cls.name}</h4>
                        <p className="text-sm text-gray-600">{cls.code}</p>
                        <p className="text-sm text-blue-600 mt-1">
                          Next: {new Date(cls.nextClass).toLocaleDateString()} at {cls.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{cls.enrolled} students</p>
                        <p className="text-sm text-gray-500">Room {cls.room}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* Recent Activity */}
            <DashboardCard 
              title="Recent Activity"
              action={
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </button>
              }
            >
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'submission' ? 'bg-green-400' :
                        activity.type === 'grade' ? 'bg-blue-400' :
                        activity.type === 'message' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.description}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(activity.timestamp).toLocaleDateString()} at{' '}
                        {new Date(activity.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Current Classes */}
          <DashboardCard title="Current Classes" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.classes.map((cls) => (
                <div key={cls.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">{cls.name}</h3>
                    <span className="text-sm text-gray-500">{cls.code}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Students:</span>
                      <span className="font-medium">{cls.enrolled}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Schedule:</span>
                      <span className="font-medium">{cls.schedule}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Room:</span>
                      <span className="font-medium">{cls.room}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Manage
                    </button>
                    <button className="flex-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                      Grade
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Student Performance Analytics */}
          <DashboardCard title="Student Performance Analytics">
            <div className="space-y-6">
              {data.analytics.classPerformance.map((performance, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{performance.className}</h4>
                    <span className="text-sm text-gray-500">{performance.students} students</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{performance.averageGrade}</p>
                      <p className="text-sm text-gray-600">Class Average</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{performance.attendance}%</p>
                      <p className="text-sm text-gray-600">Attendance Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-600">{performance.completionRate}%</p>
                      <p className="text-sm text-gray-600">Assignment Completion</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="font-medium text-gray-900 mb-2">Students Needing Attention:</h5>
                    <div className="flex flex-wrap gap-2">
                      {performance.strugglingStudents.map((student, studentIndex) => (
                        <span key={studentIndex} className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                          {student}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </main>
      </div>
    </div>
  );
}