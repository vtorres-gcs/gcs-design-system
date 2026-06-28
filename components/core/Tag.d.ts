import React from 'react';

/**
 * Compact label chip. Use for selected filter values, multi-select items,
 * country/program labels, and categorisation tags. Dismissible variant
 * includes a remove button.
 */
export interface TagProps {
  children?: React.ReactNode;
  /** Visual variant */
  variant?: 'default' | 'primary' | 'outline' | 'filled' | 'success' | 'warning';
  /** Compact or default size */
  size?: 'sm' | 'md';
  /** Renders a × dismiss button on the right */
  dismissible?: boolean;
  /** Called when the dismiss button is clicked */
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  /** Icon rendered before the label */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
