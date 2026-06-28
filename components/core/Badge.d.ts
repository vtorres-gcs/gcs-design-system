import React from 'react';

/**
 * Inline status indicator. Use to label record states (Approved, Pending, Rejected),
 * categories, or notification counts. Always pill-shaped (full border-radius).
 */
export interface BadgeProps {
  /** Colour semantic — maps to status meaning */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
  /** Compact (11px) or default (12px) */
  size?: 'sm' | 'md';
  /** Renders a filled circle before the label text */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
