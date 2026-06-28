import React from 'react';

/**
 * GCS action element. Sharp corners, uppercase Heebo Medium 14px.
 * Primary uses Night Blue 400; hover transitions to Electric Blue 400.
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  /** Size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Icon-only square button — pass the icon node here; ignores children */
  iconOnly?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  /** Icon rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon rendered after the label */
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
