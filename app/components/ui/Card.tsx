import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 ${
        hover ? 'transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
