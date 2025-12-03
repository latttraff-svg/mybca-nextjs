import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function BcaLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 130 30"
      width="130"
      height="30"
      aria-label="myBCA Logo"
      {...props}
    >
      <text
        x="0"
        y="22"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        className={cn('fill-primary', className)}
      >
        myBCA
      </text>
    </svg>
  );
}
