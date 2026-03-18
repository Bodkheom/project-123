
import React from 'react';

interface ResultFieldProps {
  label: string;
  value: string;
  isHighlight?: boolean;
}

const ResultField: React.FC<ResultFieldProps> = ({ label, value, isHighlight = false }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <div className={`
        w-full p-2 border border-gray-300 rounded-sm bg-white text-sm font-bold text-gray-900 shadow-sm
        ${isHighlight ? 'max-w-xs' : ''}
      `}>
        {value}
      </div>
    </div>
  );
};

export default ResultField;
