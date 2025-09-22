// Reusable dashboard card component
export const DashboardCard = ({ title, children, className = '', action }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {action && action}
      </div>
      {children}
    </div>
  );
};

// Stats card component
export const StatsCard = ({ title, value, change, changeType, icon }) => {
  const isPositive = changeType === 'positive';
  const isNegative = changeType === 'negative';
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${
              isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-600'
            }`}>
              {isPositive && '↗ '}
              {isNegative && '↘ '}
              {change}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Progress bar component
export const ProgressBar = ({ progress, color = 'blue', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600'
  };

  return (
    <div className="w-full">
      <div className={`bg-gray-200 rounded-full ${sizeClasses[size]}`}>
        <div
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full transition-all duration-300`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600 mt-1">{progress}%</span>
    </div>
  );
};

// Course card component
export const CourseCard = ({ course, progress, grade, nextAssignment }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{course.name}</h4>
          <p className="text-sm text-gray-600">{course.code}</p>
          <p className="text-sm text-gray-500">{course.instructor}</p>
        </div>
        <div className="text-right">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            grade >= 90 ? 'bg-green-100 text-green-800' :
            grade >= 80 ? 'bg-blue-100 text-blue-800' :
            grade >= 70 ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {grade}%
          </span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {nextAssignment && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-900">Next Assignment</p>
          <p className="text-sm text-gray-600">{nextAssignment.title}</p>
          <p className="text-xs text-gray-500">Due: {nextAssignment.dueDate}</p>
        </div>
      )}
    </div>
  );
};

// Assignment card component
export const AssignmentCard = ({ assignment }) => {
  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntilDue = getDaysUntilDue(assignment.dueDate);
  const isOverdue = daysUntilDue < 0;
  const isDueSoon = daysUntilDue <= 3 && daysUntilDue >= 0;

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 ${
      isOverdue ? 'border-red-200 bg-red-50' :
      isDueSoon ? 'border-yellow-200 bg-yellow-50' :
      'border-gray-200'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
          <p className="text-sm text-gray-600">{assignment.course}</p>
          <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
        </div>
        <div className="text-right">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
            assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {assignment.status}
          </span>
          <div className="mt-2">
            {isOverdue && (
              <span className="text-xs text-red-600 font-medium">Overdue</span>
            )}
            {isDueSoon && !isOverdue && (
              <span className="text-xs text-yellow-600 font-medium">Due Soon</span>
            )}
            {!isOverdue && !isDueSoon && (
              <span className="text-xs text-gray-600">{daysUntilDue} days left</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Quick actions component
export const QuickActions = ({ actions }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
            {action.icon}
          </div>
          <span className="text-sm font-medium text-gray-900">{action.label}</span>
        </button>
      ))}
    </div>
  );
};