import React from 'react';

/** A single data series for bar/line charts */
export interface ChartSeries {
  /** Key in the data object to read values from */
  key: string;
  /** Display label for legend and tooltips */
  label: string;
  /** Optional explicit color; defaults to GCS chart palette */
  color?: string;
}

/** A data row for bar/line charts */
export interface ChartDataRow {
  [key: string]: string | number;
}

/** A data row for pie charts */
export interface PieDataRow {
  [key: string]: string | number;
}

// ─────────────────────────────────────────────
// BarChart
// ─────────────────────────────────────────────

export interface BarChartProps {
  /** Array of data rows */
  data: ChartDataRow[];
  /** Series definitions — each becomes a bar group */
  series: ChartSeries[];
  /** Key in data used for X-axis labels */
  xKey?: string;
  /** Internal SVG viewBox width (default 800) */
  width?: number;
  /** Internal SVG viewBox height (default 320) */
  height?: number;
  /** Number of Y-axis grid lines (default 5) */
  tickCount?: number;
  /** Show legend below chart (default true) */
  showLegend?: boolean;
  /** Gap in px between bars in a group (default 4) */
  gap?: number;
  /** Horizontal padding on each side of a bar group (default 12) */
  groupPadding?: number;
  style?: React.CSSProperties;
}

export declare function BarChart(props: BarChartProps): JSX.Element;

// ─────────────────────────────────────────────
// LineChart
// ─────────────────────────────────────────────

export interface LineChartProps {
  /** Array of data rows */
  data: ChartDataRow[];
  /** Series definitions — each becomes a line */
  series: ChartSeries[];
  /** Key in data used for X-axis labels */
  xKey?: string;
  /** Internal SVG viewBox width (default 800) */
  width?: number;
  /** Internal SVG viewBox height (default 320) */
  height?: number;
  /** Number of Y-axis grid lines (default 5) */
  tickCount?: number;
  /** Show legend below chart (default true) */
  showLegend?: boolean;
  /** Radius of data point dots (default 4) */
  dotRadius?: number;
  style?: React.CSSProperties;
}

export declare function LineChart(props: LineChartProps): JSX.Element;

// ─────────────────────────────────────────────
// PieChart
// ─────────────────────────────────────────────

export interface PieChartProps {
  /** Array of data rows */
  data: PieDataRow[];
  /** Key in data for slice labels */
  nameKey?: string;
  /** Key in data for slice values */
  valueKey?: string;
  /** SVG canvas size in px — chart is always square (default 280) */
  size?: number;
  /** Show legend to the right of the pie (default true) */
  showLegend?: boolean;
  /** Custom color array; falls back to GCS chart palette */
  colors?: string[];
  style?: React.CSSProperties;
}

export declare function PieChart(props: PieChartProps): JSX.Element;
