'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary';
};

export function Button({
  className,
  variant = 'default',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium',
        'transition-[background-color,box-shadow,border-color,opacity] duration-400 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',
        'active:opacity-90',

        variant === 'default' && [
          'bg-foreground text-background',
          'shadow-[0_2px_10px_rgba(0,0,0,0.08)]',
          'hover:bg-foreground/90',
          'hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
        ],

        variant === 'secondary' && [
          'border border-border/80 bg-background/80 text-foreground',
          'shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-xl',
          'hover:bg-muted/50',
          'hover:border-border',
          'hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]',
        ],

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}