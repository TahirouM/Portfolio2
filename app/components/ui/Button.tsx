import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick
}: ButtonProps) {
  const variants = {
    primary: 'bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200',
    secondary: 'bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700',
    outline: 'border border-zinc-300 text-black hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900',
  };

  const baseClasses = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
