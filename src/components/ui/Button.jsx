import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500",
    secondary: "bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500",
    emergency: "bg-emergency text-white hover:bg-emergency-hover focus:ring-red-500 animate-pulse-slow",
    outline: "border-2 border-white text-white hover:bg-white/10 focus:ring-white",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
};
