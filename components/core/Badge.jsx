import React from 'react';

const VARIANTS = {
  default:     { bg: 'var(--muted)',       color: 'var(--foreground)',         border: 'none' },
  primary:     { bg: 'var(--primary)',     color: '#fff',                      border: 'none' },
  secondary:   { bg: 'hsl(216 100% 40%)', color: '#fff',                      border: 'none' },
  success:     { bg: 'hsl(142 60% 18%)',  color: 'hsl(142 72% 72%)',          border: 'none' },
  warning:     { bg: 'hsl(38 80% 18%)',   color: 'hsl(38 95% 68%)',           border: 'none' },
  destructive: { bg: 'hsl(0 72% 18%)',    color: 'hsl(0 84% 72%)',            border: 'none' },
  outline:     { bg: 'transparent',       color: 'var(--muted-foreground)',   border: '1px solid var(--border)' },
};

const SIZES = {
  sm: { fontSize: '10px', padding: '1px 7px', height: '18px' },
  md: { fontSize: '11px', padding: '2px 9px', height: '22px' },
};

export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  style: styleProp,
}) {
  const v = VARIANTS[variant] ?? VARIANTS.default;
  const s = SIZES[size] ?? SIZES.md;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      height: s.height,
      padding: s.padding,
      background: v.bg,
      color: v.color,
      border: v.border,
      borderRadius: '999px',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 500,
      letterSpacing: '0.03em',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...styleProp,
    }}>
      {dot && (
        <span style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'currentColor',
          flexShrink: 0,
          display: 'inline-block',
        }} />
      )}
      {children}
    </span>
  );
}
