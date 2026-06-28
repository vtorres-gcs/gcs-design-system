import React, { useState } from 'react';

// GCS Button — recompile trigger
// Specs from GCS button reference
// Primary  : Night Blue 400 bg → Electric Blue 400 on hover
// Secondary: Electric Blue 400 bg → white bg + Night Blue text on hover
// Outline  : Night Blue 50 border+text → white bg + Night Blue text on hover
// Ghost    : transparent + Night Blue text → Electric Blue bg on hover
// Link     : transparent + Night Blue text, underline on hover
// Destructive: red bg, slight opacity on hover

const VARIANTS = {
  primary: {
    bg:       'hsl(233 100% 17%)',
    color:    '#fff',
    border:   'transparent',
    hoverBg:  'hsl(216 100% 62%)',
    hoverColor: '#fff',
    hoverBorder: 'transparent',
  },
  secondary: {
    bg:       'hsl(216 100% 62%)',
    color:    '#fff',
    border:   'transparent',
    hoverBg:  '#fff',
    hoverColor: 'hsl(233 100% 17%)',
    hoverBorder: 'transparent',
  },
  outline: {
    bg:       'transparent',
    color:    'hsl(233 22% 75%)',
    border:   'hsl(233 22% 75%)',
    hoverBg:  '#fff',
    hoverColor: 'hsl(233 100% 17%)',
    hoverBorder: 'transparent',
  },
  ghost: {
    bg:       'transparent',
    color:    'hsl(233 100% 17%)',
    border:   'transparent',
    hoverBg:  'hsl(216 100% 62%)',
    hoverColor: '#fff',
    hoverBorder: 'transparent',
  },
  link: {
    bg:       'transparent',
    color:    'hsl(233 100% 17%)',
    border:   'transparent',
    hoverBg:  'transparent',
    hoverColor: 'hsl(233 100% 17%)',
    hoverBorder: 'transparent',
  },
  destructive: {
    bg:       'hsl(0 84% 60%)',
    color:    '#fff',
    border:   'transparent',
    hoverBg:  'hsl(0 84% 60%)',
    hoverColor: '#fff',
    hoverBorder: 'transparent',
    hoverOpacity: 0.9,
  },
};

const SIZES = {
  sm:   { height: '36px', padding: '0 12px', fontSize: '13px' },
  md:   { height: '40px', padding: '0 16px', fontSize: '14px' },
  lg:   { height: '44px', padding: '0 32px', fontSize: '14px' },
  xl:   { height: '48px', padding: '0 40px', fontSize: '16px' },
  icon: { height: '40px', width: '40px',     fontSize: '14px', padding: '0' },
};

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  iconOnly = null,
  fullWidth = false,
  type = 'button',
  onClick,
  children,
  style: styleProp,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const isIconOnly = Boolean(iconOnly);
  const s = isIconOnly ? SIZES.icon : (SIZES[size] ?? SIZES.md);
  const isDisabled = disabled || loading;
  const isLink = variant === 'link';

  const bg        = isDisabled && !isLink ? 'hsl(233 100% 17%)' : (hovered ? v.hoverBg    : v.bg);
  const color     = isDisabled && !isLink ? '#fff'               : (hovered ? v.hoverColor : v.color);
  const border    = hovered ? v.hoverBorder : v.border;
  const opacity   = isDisabled ? (isLink ? 0.4 : 0.5) : (hovered && v.hoverOpacity ? v.hoverOpacity : 1);

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0.02em',
    height: s.height,
    width: isIconOnly ? s.width : (fullWidth ? '100%' : 'auto'),
    padding: s.padding,
    background: bg,
    color,
    border: `1px solid ${border}`,
    borderRadius: 0,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity,
    transition: 'background-color .2s ease, color .2s ease, border-color .2s ease, opacity .2s ease',
    userSelect: 'none',
    outline: 'none',
    textDecoration: isLink && hovered ? 'underline' : 'none',
    textUnderlineOffset: isLink ? '4px' : undefined,
    flexShrink: 0,
    ...styleProp,
  };

  return (
    <>
      <style>{`
        @keyframes gcs-btn-spin { to { transform: rotate(360deg); } }
        .gcs-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring, 233 100% 17%));
        }
      `}</style>
      <button
        className="gcs-btn"
        type={type}
        style={btnStyle}
        disabled={isDisabled}
        onClick={!isDisabled ? onClick : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...rest}
      >
        {loading && (
          <svg width="15" height="15" viewBox="0 0 16 16"
            style={{ animation: 'gcs-btn-spin 0.75s linear infinite', flexShrink: 0 }}>
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none"
              strokeDasharray="24" strokeDashoffset="8" strokeLinecap="round" />
          </svg>
        )}
        {!loading && iconLeft && (
          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{iconLeft}</span>
        )}
        {isIconOnly && !loading ? iconOnly : children}
        {!loading && iconRight && (
          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{iconRight}</span>
        )}
      </button>
    </>
  );
}
