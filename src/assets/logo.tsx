import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'mono';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MmmLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  // Responsive height sizes that preserve the original proportions of the logo image
  const sizeClasses = {
    sm: 'h-8 sm:h-9 md:h-10',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-12 sm:h-14 md:h-16',
    xl: 'h-16 sm:h-20 md:h-24',
  }[size];

  // The official logo file has a white background. Enclosing it in a refined container
  // guarantees crisp contrast and visibility on both dark navy backgrounds (navbar, footer)
  // and light backgrounds (boarding pass, modals).
  const containerClasses =
    variant === 'dark'
      ? 'bg-white rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 border border-slate-200 shadow-sm'
      : 'bg-white rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-md border border-white/40 ring-1 ring-black/5';

  return (
    <div
      className={`inline-flex items-center justify-center select-none overflow-hidden transition-all duration-200 ${containerClasses} ${className}`}
    >
      <img
        src="/images/mmm-airways-logo.jpeg"
        alt="MMM Airways Logo"
        className={`${sizeClasses} w-auto object-contain max-w-full`}
        loading="eager"
      />
    </div>
  );
};
