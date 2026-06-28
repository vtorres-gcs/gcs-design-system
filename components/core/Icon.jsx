import React from 'react';

const FONT_MAP = {
  filled:   'Material Icons',
  outlined: 'Material Icons Outlined',
  round:    'Material Icons Round',
  sharp:    'Material Icons Sharp',
  'two-tone': 'Material Icons Two Tone',
};

export const Icon = Object.assign(
  function Icon({
    name,
    variant = 'filled',
    size = 20,
    color,
    className,
    style: styleProp,
    'aria-label': ariaLabel,
    ...rest
  }) {
    const fontFamily = FONT_MAP[variant] ?? FONT_MAP.filled;
    return (
      <span
        className={className}
        aria-label={ariaLabel}
        role={ariaLabel ? 'img' : undefined}
        aria-hidden={ariaLabel ? undefined : true}
        style={{
          fontFamily,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: size,
          lineHeight: 1,
          letterSpacing: 'normal',
          textTransform: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
          direction: 'ltr',
          WebkitFontFeatureSettings: '"liga"',
          WebkitFontSmoothing: 'antialiased',
          color: color ?? 'currentColor',
          userSelect: 'none',
          flexShrink: 0,
          ...styleProp,
        }}
        {...rest}
      >
        {name}
      </span>
    );
  },
  { VARIANTS: ['filled', 'outlined', 'round', 'sharp', 'two-tone'] }
);
