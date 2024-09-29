'use client';

import { useId } from 'react';

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glowColor?: string;
  [key: string]: any;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className = '',
  glowColor = 'rgba(255, 255, 255, 0.6)', // Glowing color
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
      {...props}
    >
      <defs>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            id="pattern-circle"
            cx={cx}
            cy={cy}
            r={cr}
            fill="white"
            style={{
              filter: `drop-shadow(0px 0px 8px ${glowColor})`,
            }} // Add drop shadow for glowing effect
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
