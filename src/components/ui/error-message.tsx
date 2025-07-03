import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { ErrorMessageProps } from '../../types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center min-h-64 gap-4">
    <div className="flex items-center gap-2 text-red-600">
      <AlertCircle className="w-6 h-6" />
      <span>Error: {message}</span>
    </div>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="button"
      >
        Try Again
      </button>
    )}
  </div>
);

export default ErrorMessage;