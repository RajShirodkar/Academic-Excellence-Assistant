'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SelectRole() {
  const [selectedRole, setSelectedRole] = useState('');
  const router = useRouter();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    // Store the role in localStorage (in a real app, this would be handled by authentication)
    localStorage.setItem('userType', role);
    // Redirect to the appropriate dashboard
    router.push(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">AE</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Select Your Role
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Choose how you'd like to access the Academic Excellence Assistant
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            {/* Student Option */}
            <div
              onClick={() => handleRoleSelection('student')}
              className="relative cursor-pointer group"
            >
              <div className="border-2 border-gray-300 group-hover:border-blue-500 rounded-lg p-6 transition-colors">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Student Dashboard</h3>
                    <p className="text-sm text-gray-500">
                      Track your progress, manage assignments, and get personalized insights
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Course progress tracking
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Assignment management
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      GPA analytics
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Study recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Faculty Option */}
            <div
              onClick={() => handleRoleSelection('faculty')}
              className="relative cursor-pointer group"
            >
              <div className="border-2 border-gray-300 group-hover:border-blue-500 rounded-lg p-6 transition-colors">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Faculty Dashboard</h3>
                    <p className="text-sm text-gray-500">
                      Monitor student progress, manage classes, and provide guidance
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Class management
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Student progress overview
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Performance analytics
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Communication tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-center">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}