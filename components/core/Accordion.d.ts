import React from 'react';

/**
 * GCS collapsible content panels. Supports single-open (accordion) and
 * multi-open modes. Each item has a title trigger and optional body content.
 *
 * @startingPoint section="Components" subtitle="Accordion — default and multi-open" viewport="700x380"
 */
export interface AccordionItem {
  /** Trigger label shown in the header row */
  title: string;
  /** Body content revealed when the item is open */
  content?: React.ReactNode;
}

export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** When true, multiple items can be open simultaneously */
  multiOpen?: boolean;
  style?: React.CSSProperties;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
