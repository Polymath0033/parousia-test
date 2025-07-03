import React from 'react';
import { Loader2 } from 'lucide-react';
import type { LoadingSpinnerProps } from '../../types';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center min-h-64">
      <div className="flex items-center gap-2">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
        <span className="text-gray-600">{message}</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;