import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function GlassCard({ children, className, as: Component = 'div' }: GlassCardProps) {
  return (
    <Component
      className={cn(
        'bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg',
        className
      )}
    >
      {children}
    </Component>
  );
}
