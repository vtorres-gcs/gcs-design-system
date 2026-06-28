import React, { useState } from 'react';

const VARIANTS = {
  default: { bg: 'var(--muted)',        color: 'var(--foreground)',        border: 'none' },
  primary: { bg: 'var(--primary)',      color: '#fff',                     border: 'none' },
  outline: { bg: 'transparent',        color: 'var(--muted-foreground)',  border: '1px solid var(--border)' },
  filled:  { bg: 'var(--foreground)',   color: 'var(--background)',        border: 'none' },
  success: { bg: 'hsl(142 60% 18%)',   color: 'hsl(142 72% 72%)',         border: 'none' },
  warning: { bg: 'hsl(38 80% 18%)',    color: 'hsl(38 95% 68%)',          border: 'none' },
};

const SIZES = {
  sm: { fontSize: '10px', height: '20px', padding: '0 7px', gap: '4px', iconSize: '10px' },
  md: { fontSize: '11px', height: '24px', padding: '0 9px', gap: '5px', iconSize: '12px' },
};

export function Tag({
  variant = 'default',
  size = 'md',
  dismissible = false,
  onDismiss,
  icon,
  children,
  style: styleProp,
}) {
  const [hoverX, setHoverX] = useState(false);
  const v = VARIANTS[variant] ?? VARIANTS.default;
  const s = SIZES[size] ?? SIZES.md;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      background: v.bg,
      color: v.color,
      border: v.border,
      borderRadius: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 500,
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...styleProp,
    }}>
      {icon && <span style={{ display: 'flex', alignItems: 'center', fontSize: s.iconSize }}>{icon}</span>}
      {children}
      {dismissible && (
        <button
          onClick={onDismiss}
          onMouseEnter={() => setHoverX(true)}
          onMouseLeave={() => setHoverX(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            padding: 0,
            margin: '0 -2px 0 1px',
            cursor: 'pointer',
            color: 'currentColor',
            opacity: hoverX ? 1 : 0.6,
            lineHeight: 1,
          }}
          aria-label="Remove"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  );
}
