import React from 'react';

const SIZES = {
  xs:  { size: 24, fontSize: 9  },
  sm:  { size: 32, fontSize: 12 },
  md:  { size: 40, fontSize: 14 },
  lg:  { size: 48, fontSize: 17 },
  xl:  { size: 64, fontSize: 22 },
  '2xl': { size: 80, fontSize: 28 },
};

const PALETTE = [
  ['#1a3a5c', '#fff'],
  ['#1e4a6e', '#fff'],
  ['#215a80', '#fff'],
  ['#236a92', '#fff'],
  ['#2580a8', '#fff'],
  ['#1a4a6e', '#fff'],
  ['#163358', '#fff'],
  ['#0e2440', '#fff'],
];

function hashName(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % PALETTE.length;
}

function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({
  src,
  name = '',
  size = 'md',
  shape = 'circle',
  style: styleProp,
}) {
  const s = SIZES[size] ?? SIZES.md;
  const [bg, fg] = PALETTE[hashName(name)];
  const radius = shape === 'circle' ? '50%' : 0;

  const base = {
    width: s.size,
    height: s.size,
    borderRadius: radius,
    flexShrink: 0,
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 600,
    letterSpacing: '0.03em',
    userSelect: 'none',
    ...styleProp,
  };

  if (src) {
    return (
      <div style={{ ...base }}>
        <img
          src={src}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }

  return (
    <div style={{ ...base, background: bg, color: fg }}>
      {initials(name)}
    </div>
  );
}
