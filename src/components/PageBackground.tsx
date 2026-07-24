import React, { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
  variant?: 'default' | 'darker';
  className?: string;
}

const PageBackground: React.FC<PageBackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`min-h-screen w-full bg-[#060910] text-white ${className}`}>
      {children}
    </div>
  );
};

export default PageBackground;
