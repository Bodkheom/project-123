
import React from 'react';

interface QualifyingMarksProps {
  label: string;
  value: string;
}

const QualifyingMarks: React.FC<QualifyingMarksProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[70px] h-[34px] border border-gray-500 bg-white flex items-center justify-center text-[15px] font-bold text-black rounded-sm shadow-sm">
        {value}
      </div>
      <span className="text-[11px] font-normal text-gray-800 mt-1 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default QualifyingMarks;
