// Mock data for student dashboard
export const studentData = {
  profile: {
    name: "John Doe",
    studentId: "STU12345",
    email: "john.doe@university.edu",
    major: "Computer Science",
    year: "Junior",
    gpa: 3.75,
    totalCredits: 90,
    expectedGraduation: "May 2026"
  },

  courses: [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CS 301",
      instructor: "Dr. Smith",
      credits: 3,
      progress: 75,
      grade: 88,
      nextAssignment: {
        title: "Binary Tree Implementation",
        dueDate: "2025-10-05"
      }
    },
    {
      id: 2,
      name: "Database Management Systems",
      code: "CS 350",
      instructor: "Prof. Johnson",
      credits: 3,
      progress: 60,
      grade: 92,
      nextAssignment: {
        title: "ER Diagram Project",
        dueDate: "2025-10-08"
      }
    },
    {
      id: 3,
      name: "Software Engineering",
      code: "CS 401",
      instructor: "Dr. Williams",
      credits: 3,
      progress: 40,
      grade: 85,
      nextAssignment: {
        title: "Requirements Analysis",
        dueDate: "2025-10-12"
      }
    },
    {
      id: 4,
      name: "Linear Algebra",
      code: "MATH 250",
      instructor: "Prof. Brown",
      credits: 4,
      progress: 80,
      grade: 78,
      nextAssignment: {
        title: "Matrix Operations Quiz",
        dueDate: "2025-10-03"
      }
    }
  ],

  assignments: [
    {
      id: 1,
      title: "Binary Tree Implementation",
      course: "CS 301",
      dueDate: "2025-10-05",
      status: "in-progress",
      priority: "high"
    },
    {
      id: 2,
      title: "Matrix Operations Quiz",
      course: "MATH 250",
      dueDate: "2025-10-03",
      status: "not-started",
      priority: "high"
    },
    {
      id: 3,
      title: "ER Diagram Project",
      course: "CS 350",
      dueDate: "2025-10-08",
      status: "not-started",
      priority: "medium"
    },
    {
      id: 4,
      title: "Requirements Analysis",
      course: "CS 401",
      dueDate: "2025-10-12",
      status: "not-started",
      priority: "medium"
    },
    {
      id: 5,
      title: "Unit Testing Lab",
      course: "CS 401",
      dueDate: "2025-09-28",
      status: "completed",
      priority: "low"
    }
  ],

  grades: [
    { course: "CS 301", midterm: 85, assignments: 90, final: null, overall: 88 },
    { course: "CS 350", midterm: 94, assignments: 89, final: null, overall: 92 },
    { course: "CS 401", midterm: 82, assignments: 88, final: null, overall: 85 },
    { course: "MATH 250", midterm: 75, assignments: 80, final: null, overall: 78 }
  ],

  notifications: [
    {
      id: 1,
      type: "assignment",
      title: "Assignment Due Tomorrow",
      message: "Matrix Operations Quiz is due tomorrow",
      timestamp: "2025-09-22T10:00:00Z",
      read: false
    },
    {
      id: 2,
      type: "grade",
      title: "New Grade Posted",
      message: "Your midterm grade for CS 350 has been posted",
      timestamp: "2025-09-21T15:30:00Z",
      read: true
    },
    {
      id: 3,
      type: "announcement",
      title: "Class Canceled",
      message: "CS 401 class on Sept 25 has been canceled",
      timestamp: "2025-09-20T09:00:00Z",
      read: true
    }
  ],

  schedule: [
    { day: "Monday", time: "9:00 AM", course: "CS 301", location: "Room 101" },
    { day: "Monday", time: "2:00 PM", course: "MATH 250", location: "Room 205" },
    { day: "Wednesday", time: "9:00 AM", course: "CS 301", location: "Room 101" },
    { day: "Wednesday", time: "11:00 AM", course: "CS 350", location: "Lab 3" },
    { day: "Friday", time: "10:00 AM", course: "CS 401", location: "Room 150" },
    { day: "Friday", time: "2:00 PM", course: "MATH 250", location: "Room 205" }
  ],

  studyRecommendations: [
    {
      course: "MATH 250",
      reason: "Low performance in recent assignments",
      resources: [
        "Khan Academy Linear Algebra",
        "MIT OpenCourseWare",
        "Study Group on Wednesdays"
      ]
    },
    {
      course: "CS 301",
      reason: "Upcoming complex topic: Graph Algorithms",
      resources: [
        "GeeksforGeeks Graph Tutorials",
        "Coursera Algorithm Specialization",
        "Office Hours with Dr. Smith"
      ]
    }
  ]
};

// Mock data for faculty dashboard
export const facultyData = {
  profile: {
    name: "Dr. Sarah Johnson",
    title: "Associate Professor",
    employeeId: "FAC567",
    email: "sarah.johnson@university.edu",
    department: "Computer Science",
    position: "Associate Professor",
    officeHours: "Mon/Wed 2-4 PM",
    office: "CS Building, Room 301",
    totalStudents: 193,
    researchHours: 25
  },

  classes: [
    {
      id: 1,
      name: "Database Management Systems",
      code: "CS 350",
      semester: "Fall 2025",
      enrolled: 45,
      schedule: "MWF 11:00 AM - 12:00 PM",
      time: "11:00 AM",
      room: "Lab 3",
      averageGrade: 87.5,
      nextClass: "2025-09-23"
    },
    {
      id: 2,
      name: "Introduction to Programming",
      code: "CS 101",
      semester: "Fall 2025",
      enrolled: 120,
      schedule: "TTh 9:00 AM - 10:30 AM",
      time: "9:00 AM",
      room: "Auditorium A",
      averageGrade: 82.3,
      nextClass: "2025-09-24"
    },
    {
      id: 3,
      name: "Advanced Database Design",
      code: "CS 450",
      semester: "Fall 2025",
      enrolled: 28,
      schedule: "MWF 2:00 PM - 3:00 PM",
      time: "2:00 PM",
      room: "Room 205",
      averageGrade: 91.2,
      nextClass: "2025-09-23"
    }
  ],

  students: [
    {
      id: 1,
      name: "John Doe",
      studentId: "STU12345",
      email: "john.doe@university.edu",
      courses: ["CS 350"],
      gpa: 3.75,
      status: "active",
      riskLevel: "low",
      lastActivity: "2025-09-22"
    },
    {
      id: 2,
      name: "Jane Smith",
      studentId: "STU12346",
      email: "jane.smith@university.edu",
      courses: ["CS 101", "CS 350"],
      gpa: 2.8,
      status: "active",
      riskLevel: "high",
      lastActivity: "2025-09-20"
    },
    {
      id: 3,
      name: "Mike Johnson",
      studentId: "STU12347",
      email: "mike.johnson@university.edu",
      courses: ["CS 450"],
      gpa: 3.9,
      status: "active",
      riskLevel: "low",
      lastActivity: "2025-09-22"
    }
  ],

  pendingGrading: 23,

  recentActivity: [
    {
      id: 1,
      type: "submission",
      description: "John Doe submitted ER Diagram Project for CS 350",
      timestamp: "2025-09-22T10:30:00Z"
    },
    {
      id: 2,
      type: "grade",
      description: "Graded Programming Assignment #2 for CS 101",
      timestamp: "2025-09-22T09:15:00Z"
    },
    {
      id: 3,
      type: "message",
      description: "Received question from Jane Smith about database normalization",
      timestamp: "2025-09-21T16:45:00Z"
    },
    {
      id: 4,
      type: "submission",
      description: "Mike Johnson submitted Query Optimization project for CS 450",
      timestamp: "2025-09-21T14:20:00Z"
    },
    {
      id: 5,
      type: "announcement",
      description: "Posted class cancellation notice for CS 401",
      timestamp: "2025-09-20T11:00:00Z"
    }
  ],

  assignments: [
    {
      id: 1,
      title: "ER Diagram Project",
      course: "CS 350",
      dueDate: "2025-10-08",
      submitted: 23,
      total: 45,
      avgGrade: 0 // Not graded yet
    },
    {
      id: 2,
      title: "Basic Programming Assignment",
      course: "CS 101",
      dueDate: "2025-10-01",
      submitted: 98,
      total: 120,
      avgGrade: 85.5
    },
    {
      id: 3,
      title: "Advanced Query Optimization",
      course: "CS 450",
      dueDate: "2025-10-15",
      submitted: 0,
      total: 28,
      avgGrade: 0 // Not due yet
    }
  ],

  analytics: {
    classPerformance: [
      {
        className: "Database Management Systems",
        students: 45,
        averageGrade: "B+",
        attendance: 95,
        completionRate: 89,
        strugglingStudents: ["Jane Smith", "Alex Wilson"]
      },
      {
        className: "Introduction to Programming", 
        students: 120,
        averageGrade: "B",
        attendance: 87,
        completionRate: 92,
        strugglingStudents: ["Tom Brown", "Lisa Davis", "Mark Johnson"]
      },
      {
        className: "Advanced Database Design",
        students: 28,
        averageGrade: "A-",
        attendance: 98,
        completionRate: 96,
        strugglingStudents: ["Chris Lee"]
      }
    ],
    studentEngagement: {
      highRisk: 8,
      mediumRisk: 15,
      lowRisk: 170
    },
    attendanceRate: 92
  },

  communications: [
    {
      id: 1,
      type: "announcement",
      title: "Class Cancellation Notice",
      recipient: "CS 401 Students",
      date: "2025-09-20",
      content: "Class on Sept 25 is canceled due to conference"
    },
    {
      id: 2,
      type: "reminder",
      title: "Assignment Reminder",
      recipient: "CS 350 Students",
      date: "2025-09-19",
      content: "ER Diagram project is due next week"
    }
  ],

  pendingTasks: [
    { task: "Grade CS 101 midterm exams", priority: "high", dueDate: "2025-09-25" },
    { task: "Prepare CS 350 lecture materials", priority: "medium", dueDate: "2025-09-23" },
    { task: "Review CS 450 project proposals", priority: "medium", dueDate: "2025-09-30" },
    { task: "Update course syllabus", priority: "low", dueDate: "2025-10-01" }
  ]
};

// Utility functions
export const getGradeColor = (grade) => {
  if (grade >= 90) return "text-green-600";
  if (grade >= 80) return "text-blue-600";
  if (grade >= 70) return "text-yellow-600";
  return "text-red-600";
};

export const getRiskLevelColor = (level) => {
  switch (level) {
    case "low": return "text-green-600";
    case "medium": return "text-yellow-600";
    case "high": return "text-red-600";
    default: return "text-gray-600";
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getDaysUntilDue = (dueDate) => {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};