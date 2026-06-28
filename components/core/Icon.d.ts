import * as React from 'react';

export type IconVariant = 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';

export interface IconProps {
  /**
   * Material Icon ligature name — use underscores, e.g. "check_circle", "arrow_forward".
   * Full list: https://fonts.google.com/icons
   */
  name: string;
  /** Visual variant. Default: "filled" */
  variant?: IconVariant;
  /** Size in px — sets font-size. Default: 20 */
  size?: number;
  /** CSS color value. Defaults to currentColor (inherits from parent). */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Accessible label. When provided, role="img" is set; omit for decorative icons. */
  'aria-label'?: string;
}

/**
 * Renders a Google Material Icon using the icon ligature font.
 * Requires Material Icons fonts loaded via tokens/fonts.css.
 *
 * @example
 * <Icon name="home" />
 * <Icon name="notifications" variant="outlined" size={24} />
 * <Icon name="check_circle" size={16} color="var(--success)" />
 */
export declare const Icon: React.FC<IconProps> & {
  /** All supported variant names */
  VARIANTS: IconVariant[];
};
