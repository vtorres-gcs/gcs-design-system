import React, { useState, useRef, useEffect } from 'react';

// ============================================================
// GCS Design System — Chart Components
// BarChart · LineChart · PieChart
// Uses design token CSS variables from colors.css
// ============================================================

const SVG_NS = 'http://www.w3.org/2000/svg';

// Shared color palette from GCS tokens
const CHART_COLORS = [
  'var(--night-blue-400)',
  'var(--electric-blue-400)',
  'var(--night-blue-200)',
  'var(--electric-blue-50)',
  'var(--night-blue-100)',
];

// Shared axis/grid styles
const AXIS_STYLE = {
  fontFamily: 'var(--font-sans, "Heebo", sans-serif)',
  fontSize: '12px',
  fill: 'var(--muted-foreground)',
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
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => Math.round(step * i));
  return { yMax, ticks };
}

// ────────────────────────────────────────────────────────────
// Shared Axes renderer (React)
// ────────────────────────────────────────────────────────────

function Axes({ data, ticks, yMax, M, W, H, xKey }) {
  const innerW = W - M.left - M.right;
  const innerH = H - M.top - M.bottom;
  const yScale = v => M.top + innerH - (v / yMax) * innerH;
  const band = innerW / data.length;

  return (
    <g>
      {ticks.map(v => {
        const y = yScale(v);
        return (
          <g key={v}>
            <line
              x1={M.left} x2={M.left + innerW}
              y1={y} y2={y}
              stroke="var(--border)"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            <text
              x={M.left - 10} y={y + 4}
              textAnchor="end"
              style={AXIS_STYLE}
            >{v}</text>
          </g>
        );
      })}
      <line
        x1={M.left} x2={M.left + innerW}
        y1={M.top + innerH} y2={M.top + innerH}
        stroke="var(--border)" strokeWidth={1}
      />
      {data.map((d, i) => {
        const cx = M.left + band * i + band / 2;
        return (
          <text
            key={i} x={cx} y={M.top + innerH + 20}
            textAnchor="middle"
            style={AXIS_STYLE}
          >{d[xKey]}</text>
        );
      })}
    </g>
  );
}

// ────────────────────────────────────────────────────────────
// Legend
// ────────────────────────────────────────────────────────────

function ChartLegend({ series }) {
  return (
    <div style={{
      display: 'flex', gap: '20px', flexWrap: 'wrap',
      marginTop: '12px', paddingLeft: '0',
    }}>
      {series.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: 10, height: 10, flexShrink: 0,
            background: s.color ?? CHART_COLORS[i % CHART_COLORS.length],
          }} />
          <span style={{
            fontFamily: 'var(--font-sans, "Heebo", sans-serif)',
            fontSize: '13px',
            color: 'var(--foreground)',
          }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Tooltip
// ────────────────────────────────────────────────────────────

function Tooltip({ tip }) {
  if (!tip) return null;
  return (
    <div style={{
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
      boxShadow: '0 2px 8px rgba(0,0,0,.18)',
    }}>
      {tip.lines.map((l, i) => <div key={i}>{l}</div>)}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// BarChart
// ────────────────────────────────────────────────────────────

export function BarChart({
  data = [],
  series = [],
  xKey = 'name',
  width = 800,
  height = 320,
  tickCount = 5,
  showLegend = true,
  gap = 4,
  groupPadding = 12,
  style,
}) {
  const [tip, setTip] = useState(null);
  const M = { top: 16, right: 16, bottom: 40, left: 52 };
  const innerW = width - M.left - M.right;
  const innerH = height - M.top - M.bottom;
  const keys = series.map(s => s.key);
  const { yMax, ticks } = useTicks(data, keys, tickCount);
  const yScale = v => M.top + innerH - (v / yMax) * innerH;
  const band = innerW / data.length;
  const barW = Math.max(4, (band - groupPadding * 2 - gap * (series.length - 1)) / series.length);

  const handleMouse = (e, lines) => setTip({ x: e.clientX, y: e.clientY, lines });

  return (
    <div style={style}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}>
        <Axes data={data} ticks={ticks} yMax={yMax} M={M} W={width} H={height} xKey={xKey} />
        {data.map((d, i) => {
          const groupX = M.left + band * i + groupPadding;
          return series.map((s, si) => {
            const val = d[s.key] ?? 0;
            const y = yScale(val);
            const h = M.top + innerH - y;
            const color = s.color ?? CHART_COLORS[si % CHART_COLORS.length];
            return (
              <rect
                key={`${i}-${si}`}
                x={groupX + si * (barW + gap)} y={y}
                width={barW} height={h}
                fill={color}
                style={{ cursor: 'pointer', transition: 'opacity 160ms' }}
                onMouseMove={e => handleMouse(e, [`${d[xKey]} · ${s.label}: ${val}`])}
                onMouseLeave={() => setTip(null)}
              />
            );
          });
        })}
      </svg>
      {showLegend && series.length > 1 && <ChartLegend series={series} />}
      <Tooltip tip={tip} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// LineChart
// ────────────────────────────────────────────────────────────

export function LineChart({
  data = [],
  series = [],
  xKey = 'name',
  width = 800,
  height = 320,
  tickCount = 5,
  showLegend = true,
  dotRadius = 4,
  style,
}) {
  const [tip, setTip] = useState(null);
  const M = { top: 16, right: 16, bottom: 40, left: 52 };
  const innerW = width - M.left - M.right;
  const innerH = height - M.top - M.bottom;
  const keys = series.map(s => s.key);
  const { yMax, ticks } = useTicks(data, keys, tickCount);
  const yScale = v => M.top + innerH - (v / yMax) * innerH;
  const band = innerW / data.length;
  const px = i => M.left + band * i + band / 2;

  const handleMouse = (e, lines) => setTip({ x: e.clientX, y: e.clientY, lines });

  return (
    <div style={style}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}>
        <Axes data={data} ticks={ticks} yMax={yMax} M={M} W={width} H={height} xKey={xKey} />
        {series.map((s, si) => {
          const color = s.color ?? CHART_COLORS[si % CHART_COLORS.length];
          const points = data.map((d, i) => `${px(i)},${yScale(d[s.key] ?? 0)}`).join(' ');
          return (
            <g key={si}>
              <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {data.map((d, i) => {
                const val = d[s.key] ?? 0;
                return (
                  <circle
                    key={i}
                    cx={px(i)} cy={yScale(val)} r={dotRadius}
                    fill={color}
                    style={{ cursor: 'pointer', transition: 'opacity 160ms' }}
                    onMouseMove={e => handleMouse(e, [`${d[xKey]} · ${s.label}: ${val}`])}
                    onMouseLeave={() => setTip(null)}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
      {showLegend && series.length > 1 && <ChartLegend series={series} />}
      <Tooltip tip={tip} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// PieChart
// ────────────────────────────────────────────────────────────

// Namespace export — matches the Chart.d.ts filename convention
// so the bundler resolves window.GCSDesignSystem_43c089.Chart
export const Chart = { BarChart, LineChart, PieChart };

export function PieChart({
  data = [],
  nameKey = 'name',
  valueKey = 'value',
  size = 280,
  showLegend = true,
  colors,
  style,
}) {
  const [tip, setTip] = useState(null);
  const [active, setActive] = useState(null);
  const palette = colors ?? CHART_COLORS;
  const cx = size / 2, cy = size / 2, r = size * 0.42;
  const total = data.reduce((s, d) => s + (d[valueKey] ?? 0), 0);
  let angle = -Math.PI / 2;

  const handleMouse = (e, d, pct) => setTip({ x: e.clientX, y: e.clientY, lines: [`${d[nameKey]}: ${d[valueKey]} (${pct}%)`] });

  const slices = data.map((d, i) => {
    const val = d[valueKey] ?? 0;
    const slice = total ? (val / total) * Math.PI * 2 : 0;
    const a2 = angle + slice;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(a2);
    const y2 = cy + r * Math.sin(a2);
    const largeArc = slice > Math.PI ? 1 : 0;
    const pct = total ? ((val / total) * 100).toFixed(1) : '0';
    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    const color = palette[i % palette.length];
    const midAngle = angle + slice / 2;
    const result = { d, i, path, color, pct, midAngle, val };
    angle = a2;
    return result;
  });

  const legendSeries = slices.map(s => ({
    label: `${s.d[nameKey]} · ${s.pct}%`,
    color: s.color,
  }));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', ...style }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{ display: 'block', width: size, height: size, flexShrink: 0, maxWidth: '100%' }}
      >
        {slices.map(s => (
          <path
            key={s.i}
            d={s.path}
            fill={s.color}
            stroke="var(--card, #fff)"
            strokeWidth={1.5}
            style={{
              cursor: 'pointer',
              transition: 'opacity 160ms',
              opacity: active !== null && active !== s.i ? 0.6 : 1,
              transform: active === s.i ? `translate(${Math.cos(s.midAngle) * 6}px, ${Math.sin(s.midAngle) * 6}px)` : 'none',
            }}
            onMouseMove={e => { handleMouse(e, s.d, s.pct); setActive(s.i); }}
            onMouseLeave={() => { setTip(null); setActive(null); }}
          />
        ))}
      </svg>
      {showLegend && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {slices.map(s => (
            <li key={s.i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: 10, height: 10, flexShrink: 0, background: s.color }} />
              <span style={{
                fontFamily: 'var(--font-sans, "Heebo", sans-serif)',
                fontSize: '13px',
                color: 'var(--foreground)',
              }}>{s.d[nameKey]} · {s.pct}%</span>
            </li>
          ))}
        </ul>
      )}
      <Tooltip tip={tip} />
    </div>
  );
}
