'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would get the user type from authentication context
    // For now, we'll simulate this with localStorage or redirect to a selection page
    const userType = localStorage.getItem('userType');
    
    if (userType === 'student') {
      router.push('/dashboard/student');
    } else if (userType === 'faculty') {
      router.push('/dashboard/faculty');
    } else {
      // If no user type is set, redirect to a role selection page
      router.push('/dashboard/select-role');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading your dashboard...</p>
      </div>
    </div>
  );
}