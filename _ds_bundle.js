/* @ds-bundle: {"format":3,"namespace":"GCSDesignSystem_43c089","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"BarChart","sourcePath":"components/core/Chart.jsx"},{"name":"LineChart","sourcePath":"components/core/Chart.jsx"},{"name":"Chart","sourcePath":"components/core/Chart.jsx"},{"name":"PieChart","sourcePath":"components/core/Chart.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"ad8d6d1119c7","components/core/Avatar.jsx":"ed888295502c","components/core/Badge.jsx":"c7faecdcdc02","components/core/Button.jsx":"66105f21d86b","components/core/Chart.jsx":"643ace1175c8","components/core/Icon.jsx":"8f2487e1bf09","components/core/Tag.jsx":"680bfbc62afd","uploads/ds-base.js":"bce239044dd4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GCSDesignSystem_43c089 = window.GCSDesignSystem_43c089 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function ChevronIcon({
  open
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      transition: 'transform 200ms ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      flexShrink: 0,
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 6.75L9 11.25L13.5 6.75",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function AccordionItem({
  title,
  children,
  open,
  onToggle,
  isLast
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: isLast ? 'none' : '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
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
      gap: '12px'
    },
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement(ChevronIcon, {
    open: open
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: open ? '500px' : '0',
      transition: 'max-height 250ms ease'
    }
  }, children && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: '16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--muted-foreground)'
    }
  }, children)));
}
function Accordion({
  items = [],
  multiOpen = false,
  style: styleProp
}) {
  const [openSingle, setOpenSingle] = useState(null);
  const [openMulti, setOpenMulti] = useState({});
  const isOpen = idx => multiOpen ? !!openMulti[idx] : openSingle === idx;
  const toggle = idx => {
    if (multiOpen) {
      setOpenMulti(prev => ({
        ...prev,
        [idx]: !prev[idx]
      }));
    } else {
      setOpenSingle(prev => prev === idx ? null : idx);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderTop: '1px solid var(--border)',
      ...styleProp
    }
  }, items.map((item, idx) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: idx,
    title: item.title,
    open: isOpen(idx),
    onToggle: () => toggle(idx),
    isLast: idx === items.length - 1
  }, item.content)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  xs: {
    size: 24,
    fontSize: 9
  },
  sm: {
    size: 32,
    fontSize: 12
  },
  md: {
    size: 40,
    fontSize: 14
  },
  lg: {
    size: 48,
    fontSize: 17
  },
  xl: {
    size: 64,
    fontSize: 22
  },
  '2xl': {
    size: 80,
    fontSize: 28
  }
};
const PALETTE = [['#1a3a5c', '#fff'], ['#1e4a6e', '#fff'], ['#215a80', '#fff'], ['#236a92', '#fff'], ['#2580a8', '#fff'], ['#1a4a6e', '#fff'], ['#163358', '#fff'], ['#0e2440', '#fff']];
function hashName(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return h % PALETTE.length;
}
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  src,
  name = '',
  size = 'md',
  shape = 'circle',
  style: styleProp
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
    ...styleProp
  };
  if (src) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...base
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      background: bg,
      color: fg
    }
  }, initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const VARIANTS = {
  default: {
    bg: 'var(--muted)',
    color: 'var(--foreground)',
    border: 'none'
  },
  primary: {
    bg: 'var(--primary)',
    color: '#fff',
    border: 'none'
  },
  secondary: {
    bg: 'hsl(216 100% 40%)',
    color: '#fff',
    border: 'none'
  },
  success: {
    bg: 'hsl(142 60% 18%)',
    color: 'hsl(142 72% 72%)',
    border: 'none'
  },
  warning: {
    bg: 'hsl(38 80% 18%)',
    color: 'hsl(38 95% 68%)',
    border: 'none'
  },
  destructive: {
    bg: 'hsl(0 72% 18%)',
    color: 'hsl(0 84% 72%)',
    border: 'none'
  },
  outline: {
    bg: 'transparent',
    color: 'var(--muted-foreground)',
    border: '1px solid var(--border)'
  }
};
const SIZES = {
  sm: {
    fontSize: '10px',
    padding: '1px 7px',
    height: '18px'
  },
  md: {
    fontSize: '11px',
    padding: '2px 9px',
    height: '22px'
  }
};
function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  style: styleProp
}) {
  const v = VARIANTS[variant] ?? VARIANTS.default;
  const s = SIZES[size] ?? SIZES.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...styleProp
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React; // GCS Button — recompile trigger
// Specs from GCS button reference
// Primary  : Night Blue 400 bg → Electric Blue 400 on hover
// Secondary: Electric Blue 400 bg → white bg + Night Blue text on hover
// Outline  : Night Blue 50 border+text → white bg + Night Blue text on hover
// Ghost    : transparent + Night Blue text → Electric Blue bg on hover
// Link     : transparent + Night Blue text, underline on hover
// Destructive: red bg, slight opacity on hover
const VARIANTS = {
  primary: {
    bg: 'hsl(233 100% 17%)',
    color: '#fff',
    border: 'transparent',
    hoverBg: 'hsl(216 100% 62%)',
    hoverColor: '#fff',
    hoverBorder: 'transparent'
  },
  secondary: {
    bg: 'hsl(216 100% 62%)',
    color: '#fff',
    border: 'transparent',
    hoverBg: '#fff',
    hoverColor: 'hsl(233 100% 17%)',
    hoverBorder: 'transparent'
  },
  outline: {
    bg: 'transparent',
    color: 'hsl(233 22% 75%)',
    border: 'hsl(233 22% 75%)',
    hoverBg: '#fff',
    hoverColor: 'hsl(233 100% 17%)',
    hoverBorder: 'transparent'
  },
  ghost: {
    bg: 'transparent',
    color: 'hsl(233 100% 17%)',
    border: 'transparent',
    hoverBg: 'hsl(216 100% 62%)',
    hoverColor: '#fff',
    hoverBorder: 'transparent'
  },
  link: {
    bg: 'transparent',
    color: 'hsl(233 100% 17%)',
    border: 'transparent',
    hoverBg: 'transparent',
    hoverColor: 'hsl(233 100% 17%)',
    hoverBorder: 'transparent'
  },
  destructive: {
    bg: 'hsl(0 84% 60%)',
    color: '#fff',
    border: 'transparent',
    hoverBg: 'hsl(0 84% 60%)',
    hoverColor: '#fff',
    hoverBorder: 'transparent',
    hoverOpacity: 0.9
  }
};
const SIZES = {
  sm: {
    height: '36px',
    padding: '0 12px',
    fontSize: '13px'
  },
  md: {
    height: '40px',
    padding: '0 16px',
    fontSize: '14px'
  },
  lg: {
    height: '44px',
    padding: '0 32px',
    fontSize: '14px'
  },
  xl: {
    height: '48px',
    padding: '0 40px',
    fontSize: '16px'
  },
  icon: {
    height: '40px',
    width: '40px',
    fontSize: '14px',
    padding: '0'
  }
};
function Button({
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
  const s = isIconOnly ? SIZES.icon : SIZES[size] ?? SIZES.md;
  const isDisabled = disabled || loading;
  const isLink = variant === 'link';
  const bg = isDisabled && !isLink ? 'hsl(233 100% 17%)' : hovered ? v.hoverBg : v.bg;
  const color = isDisabled && !isLink ? '#fff' : hovered ? v.hoverColor : v.color;
  const border = hovered ? v.hoverBorder : v.border;
  const opacity = isDisabled ? isLink ? 0.4 : 0.5 : hovered && v.hoverOpacity ? v.hoverOpacity : 1;
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
    width: isIconOnly ? s.width : fullWidth ? '100%' : 'auto',
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
    ...styleProp
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes gcs-btn-spin { to { transform: rotate(360deg); } }
        .gcs-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring, 233 100% 17%));
        }
      `), /*#__PURE__*/React.createElement("button", _extends({
    className: "gcs-btn",
    type: type,
    style: btnStyle,
    disabled: isDisabled,
    onClick: !isDisabled ? onClick : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, rest), loading && /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    style: {
      animation: 'gcs-btn-spin 0.75s linear infinite',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    strokeDasharray: "24",
    strokeDashoffset: "8",
    strokeLinecap: "round"
  })), !loading && iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, iconLeft), isIconOnly && !loading ? iconOnly : children, !loading && iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, iconRight)));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chart.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React; // ============================================================
// GCS Design System — Chart Components
// BarChart · LineChart · PieChart
// Uses design token CSS variables from colors.css
// ============================================================
const SVG_NS = 'http://www.w3.org/2000/svg';

// Shared color palette from GCS tokens
const CHART_COLORS = ['var(--night-blue-400)', 'var(--electric-blue-400)', 'var(--night-blue-200)', 'var(--electric-blue-50)', 'var(--night-blue-100)'];

// Shared axis/grid styles
const AXIS_STYLE = {
  fontFamily: 'var(--font-sans, "Heebo", sans-serif)',
  fontSize: '12px',
  fill: 'var(--muted-foreground)'
};

// ────────────────────────────────────────────────────────────
// Utilities
// ────────────────────────────────────────────────────────────

function nice(max) {
  const exp = Math.floor(Math.log10(max));
  const f = max / Math.pow(10, exp);
  const nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return nf * Math.pow(10, exp);
}
function useTicks(data, keys, tickCount = 5) {
  const allVals = data.flatMap(d => keys.map(k => d[k] ?? 0));
  const rawMax = Math.max(...allVals, 0);
  const yMax = nice(rawMax || 10);
  const step = yMax / tickCount;
  const ticks = Array.from({
    length: tickCount + 1
  }, (_, i) => Math.round(step * i));
  return {
    yMax,
    ticks
  };
}

// ────────────────────────────────────────────────────────────
// Shared Axes renderer (React)
// ────────────────────────────────────────────────────────────

function Axes({
  data,
  ticks,
  yMax,
  M,
  W,
  H,
  xKey
}) {
  const innerW = W - M.left - M.right;
  const innerH = H - M.top - M.bottom;
  const yScale = v => M.top + innerH - v / yMax * innerH;
  const band = innerW / data.length;
  return /*#__PURE__*/React.createElement("g", null, ticks.map(v => {
    const y = yScale(v);
    return /*#__PURE__*/React.createElement("g", {
      key: v
    }, /*#__PURE__*/React.createElement("line", {
      x1: M.left,
      x2: M.left + innerW,
      y1: y,
      y2: y,
      stroke: "var(--border)",
      strokeDasharray: "3 3",
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("text", {
      x: M.left - 10,
      y: y + 4,
      textAnchor: "end",
      style: AXIS_STYLE
    }, v));
  }), /*#__PURE__*/React.createElement("line", {
    x1: M.left,
    x2: M.left + innerW,
    y1: M.top + innerH,
    y2: M.top + innerH,
    stroke: "var(--border)",
    strokeWidth: 1
  }), data.map((d, i) => {
    const cx = M.left + band * i + band / 2;
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: cx,
      y: M.top + innerH + 20,
      textAnchor: "middle",
      style: AXIS_STYLE
    }, d[xKey]);
  }));
}

// ────────────────────────────────────────────────────────────
// Legend
// ────────────────────────────────────────────────────────────

function ChartLegend({
  series
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '12px',
      paddingLeft: '0'
    }
  }, series.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      flexShrink: 0,
      background: s.color ?? CHART_COLORS[i % CHART_COLORS.length]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans, "Heebo", sans-serif)',
      fontSize: '13px',
      color: 'var(--foreground)'
    }
  }, s.label))));
}

// ────────────────────────────────────────────────────────────
// Tooltip
// ────────────────────────────────────────────────────────────

function Tooltip({
  tip
}) {
  if (!tip) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: tip.x + 12,
      top: tip.y - 8,
      background: 'var(--foreground)',
      color: 'var(--primary-foreground)',
      fontFamily: 'var(--font-sans, "Heebo", sans-serif)',
      fontSize: '13px',
      padding: '6px 10px',
      pointerEvents: 'none',
      zIndex: 9999,
      whiteSpace: 'nowrap',
      boxShadow: '0 2px 8px rgba(0,0,0,.18)'
    }
  }, tip.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)));
}

// ────────────────────────────────────────────────────────────
// BarChart
// ────────────────────────────────────────────────────────────

function BarChart({
  data = [],
  series = [],
  xKey = 'name',
  width = 800,
  height = 320,
  tickCount = 5,
  showLegend = true,
  gap = 4,
  groupPadding = 12,
  style
}) {
  const [tip, setTip] = useState(null);
  const M = {
    top: 16,
    right: 16,
    bottom: 40,
    left: 52
  };
  const innerW = width - M.left - M.right;
  const innerH = height - M.top - M.bottom;
  const keys = series.map(s => s.key);
  const {
    yMax,
    ticks
  } = useTicks(data, keys, tickCount);
  const yScale = v => M.top + innerH - v / yMax * innerH;
  const band = innerW / data.length;
  const barW = Math.max(4, (band - groupPadding * 2 - gap * (series.length - 1)) / series.length);
  const handleMouse = (e, lines) => setTip({
    x: e.clientX,
    y: e.clientY,
    lines
  });
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement(Axes, {
    data: data,
    ticks: ticks,
    yMax: yMax,
    M: M,
    W: width,
    H: height,
    xKey: xKey
  }), data.map((d, i) => {
    const groupX = M.left + band * i + groupPadding;
    return series.map((s, si) => {
      const val = d[s.key] ?? 0;
      const y = yScale(val);
      const h = M.top + innerH - y;
      const color = s.color ?? CHART_COLORS[si % CHART_COLORS.length];
      return /*#__PURE__*/React.createElement("rect", {
        key: `${i}-${si}`,
        x: groupX + si * (barW + gap),
        y: y,
        width: barW,
        height: h,
        fill: color,
        style: {
          cursor: 'pointer',
          transition: 'opacity 160ms'
        },
        onMouseMove: e => handleMouse(e, [`${d[xKey]} · ${s.label}: ${val}`]),
        onMouseLeave: () => setTip(null)
      });
    });
  })), showLegend && series.length > 1 && /*#__PURE__*/React.createElement(ChartLegend, {
    series: series
  }), /*#__PURE__*/React.createElement(Tooltip, {
    tip: tip
  }));
}

// ────────────────────────────────────────────────────────────
// LineChart
// ────────────────────────────────────────────────────────────

function LineChart({
  data = [],
  series = [],
  xKey = 'name',
  width = 800,
  height = 320,
  tickCount = 5,
  showLegend = true,
  dotRadius = 4,
  style
}) {
  const [tip, setTip] = useState(null);
  const M = {
    top: 16,
    right: 16,
    bottom: 40,
    left: 52
  };
  const innerW = width - M.left - M.right;
  const innerH = height - M.top - M.bottom;
  const keys = series.map(s => s.key);
  const {
    yMax,
    ticks
  } = useTicks(data, keys, tickCount);
  const yScale = v => M.top + innerH - v / yMax * innerH;
  const band = innerW / data.length;
  const px = i => M.left + band * i + band / 2;
  const handleMouse = (e, lines) => setTip({
    x: e.clientX,
    y: e.clientY,
    lines
  });
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement(Axes, {
    data: data,
    ticks: ticks,
    yMax: yMax,
    M: M,
    W: width,
    H: height,
    xKey: xKey
  }), series.map((s, si) => {
    const color = s.color ?? CHART_COLORS[si % CHART_COLORS.length];
    const points = data.map((d, i) => `${px(i)},${yScale(d[s.key] ?? 0)}`).join(' ');
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, /*#__PURE__*/React.createElement("polyline", {
      points: points,
      fill: "none",
      stroke: color,
      strokeWidth: 2,
      strokeLinejoin: "round",
      strokeLinecap: "round"
    }), data.map((d, i) => {
      const val = d[s.key] ?? 0;
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: px(i),
        cy: yScale(val),
        r: dotRadius,
        fill: color,
        style: {
          cursor: 'pointer',
          transition: 'opacity 160ms'
        },
        onMouseMove: e => handleMouse(e, [`${d[xKey]} · ${s.label}: ${val}`]),
        onMouseLeave: () => setTip(null)
      });
    }));
  })), showLegend && series.length > 1 && /*#__PURE__*/React.createElement(ChartLegend, {
    series: series
  }), /*#__PURE__*/React.createElement(Tooltip, {
    tip: tip
  }));
}

// ────────────────────────────────────────────────────────────
// PieChart
// ────────────────────────────────────────────────────────────

// Namespace export — matches the Chart.d.ts filename convention
// so the bundler resolves window.GCSDesignSystem_43c089.Chart
const Chart = {
  BarChart,
  LineChart,
  PieChart
};
function PieChart({
  data = [],
  nameKey = 'name',
  valueKey = 'value',
  size = 280,
  showLegend = true,
  colors,
  style
}) {
  const [tip, setTip] = useState(null);
  const [active, setActive] = useState(null);
  const palette = colors ?? CHART_COLORS;
  const cx = size / 2,
    cy = size / 2,
    r = size * 0.42;
  const total = data.reduce((s, d) => s + (d[valueKey] ?? 0), 0);
  let angle = -Math.PI / 2;
  const handleMouse = (e, d, pct) => setTip({
    x: e.clientX,
    y: e.clientY,
    lines: [`${d[nameKey]}: ${d[valueKey]} (${pct}%)`]
  });
  const slices = data.map((d, i) => {
    const val = d[valueKey] ?? 0;
    const slice = total ? val / total * Math.PI * 2 : 0;
    const a2 = angle + slice;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(a2);
    const y2 = cy + r * Math.sin(a2);
    const largeArc = slice > Math.PI ? 1 : 0;
    const pct = total ? (val / total * 100).toFixed(1) : '0';
    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    const color = palette[i % palette.length];
    const midAngle = angle + slice / 2;
    const result = {
      d,
      i,
      path,
      color,
      pct,
      midAngle,
      val
    };
    angle = a2;
    return result;
  });
  const legendSeries = slices.map(s => ({
    label: `${s.d[nameKey]} · ${s.pct}%`,
    color: s.color
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${size} ${size}`,
    style: {
      display: 'block',
      width: size,
      height: size,
      flexShrink: 0,
      maxWidth: '100%'
    }
  }, slices.map(s => /*#__PURE__*/React.createElement("path", {
    key: s.i,
    d: s.path,
    fill: s.color,
    stroke: "var(--card, #fff)",
    strokeWidth: 1.5,
    style: {
      cursor: 'pointer',
      transition: 'opacity 160ms',
      opacity: active !== null && active !== s.i ? 0.6 : 1,
      transform: active === s.i ? `translate(${Math.cos(s.midAngle) * 6}px, ${Math.sin(s.midAngle) * 6}px)` : 'none'
    },
    onMouseMove: e => {
      handleMouse(e, s.d, s.pct);
      setActive(s.i);
    },
    onMouseLeave: () => {
      setTip(null);
      setActive(null);
    }
  }))), showLegend && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, slices.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      flexShrink: 0,
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans, "Heebo", sans-serif)',
      fontSize: '13px',
      color: 'var(--foreground)'
    }
  }, s.d[nameKey], " \xB7 ", s.pct, "%")))), /*#__PURE__*/React.createElement(Tooltip, {
    tip: tip
  }));
}
Object.assign(__ds_scope, { BarChart, LineChart, Chart, PieChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chart.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT_MAP = {
  filled: 'Material Icons',
  outlined: 'Material Icons Outlined',
  round: 'Material Icons Round',
  sharp: 'Material Icons Sharp',
  'two-tone': 'Material Icons Two Tone'
};
const Icon = Object.assign(function Icon({
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
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    "aria-label": ariaLabel,
    role: ariaLabel ? 'img' : undefined,
    "aria-hidden": ariaLabel ? undefined : true,
    style: {
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
      ...styleProp
    }
  }, rest), name);
}, {
  VARIANTS: ['filled', 'outlined', 'round', 'sharp', 'two-tone']
});
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const {
  useState
} = React;
const VARIANTS = {
  default: {
    bg: 'var(--muted)',
    color: 'var(--foreground)',
    border: 'none'
  },
  primary: {
    bg: 'var(--primary)',
    color: '#fff',
    border: 'none'
  },
  outline: {
    bg: 'transparent',
    color: 'var(--muted-foreground)',
    border: '1px solid var(--border)'
  },
  filled: {
    bg: 'var(--foreground)',
    color: 'var(--background)',
    border: 'none'
  },
  success: {
    bg: 'hsl(142 60% 18%)',
    color: 'hsl(142 72% 72%)',
    border: 'none'
  },
  warning: {
    bg: 'hsl(38 80% 18%)',
    color: 'hsl(38 95% 68%)',
    border: 'none'
  }
};
const SIZES = {
  sm: {
    fontSize: '10px',
    height: '20px',
    padding: '0 7px',
    gap: '4px',
    iconSize: '10px'
  },
  md: {
    fontSize: '11px',
    height: '24px',
    padding: '0 9px',
    gap: '5px',
    iconSize: '12px'
  }
};
function Tag({
  variant = 'default',
  size = 'md',
  dismissible = false,
  onDismiss,
  icon,
  children,
  style: styleProp
}) {
  const [hoverX, setHoverX] = useState(false);
  const v = VARIANTS[variant] ?? VARIANTS.default;
  const s = SIZES[size] ?? SIZES.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...styleProp
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: s.iconSize
    }
  }, icon), children, dismissible && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    onMouseEnter: () => setHoverX(true),
    onMouseLeave: () => setHoverX(false),
    style: {
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
      lineHeight: 1
    },
    "aria-label": "Remove"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2L8 8M8 2L2 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// uploads/ds-base.js
try { (() => {
// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '../..';
  for (const p of ["tokens/colors.css", "tokens/typography.css", "tokens/spacing.css", "tokens/shadows.css", "tokens/motion.css", "styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/ds-base.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.Chart = __ds_scope.Chart;

__ds_ns.PieChart = __ds_scope.PieChart;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

})();
