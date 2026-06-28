import React from 'react';

/**
 * User identity thumbnail. Shows a photo when `src` is provided; falls back to
 * coloured initials derived from `name`. Colour is stable per name — the same
 * person always gets the same tint across the app.
 */
export interface AvatarProps {
  /** URL of the avatar image */
  src?: string;
  /** Full name — used for initials fallback and colour hashing */
  name?: string;
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Circular (default) or square */
  shape?: 'circle' | 'square';
  style?: React.CSSProperties;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
