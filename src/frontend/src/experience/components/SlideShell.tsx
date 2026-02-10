import { ReactNode } from 'react';

interface SlideShellProps {
  children: ReactNode;
  className?: string;
}

export function SlideShell({ children, className = '' }: SlideShellProps) {
  return (
    <div className={`relative z-10 w-full h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
