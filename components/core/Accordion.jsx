import React, { useState } from 'react';

function ChevronIcon({ open }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 18 18" fill="none"
      style={{
        transition: 'transform 200ms ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        flexShrink: 0,
        color: 'var(--muted-foreground)',
      }}
    >
      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionItem({ title, children, open, onToggle, isLast }) {
  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid var(--border)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontWeight: 400,
          color: 'var(--foreground)',
          textAlign: 'left',
          gap: '12px',
        }}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronIcon open={open} />
      </button>
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '500px' : '0',
        transition: 'max-height 250ms ease',
      }}>
        {children && (
          <div style={{
            paddingBottom: '16px',
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--muted-foreground)',
          }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export function Accordion({
  items = [],
  multiOpen = false,
  style: styleProp,
}) {
  const [openSingle, setOpenSingle] = useState(null);
  const [openMulti, setOpenMulti] = useState({});

  const isOpen = (idx) => multiOpen ? !!openMulti[idx] : openSingle === idx;
  const toggle = (idx) => {
    if (multiOpen) {
      setOpenMulti(prev => ({ ...prev, [idx]: !prev[idx] }));
    } else {
      setOpenSingle(prev => (prev === idx ? null : idx));
    }
  };

  return (
    <div style={{
      width: '100%',
      borderTop: '1px solid var(--border)',
      ...styleProp,
    }}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          open={isOpen(idx)}
          onToggle={() => toggle(idx)}
          isLast={idx === items.length - 1}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
