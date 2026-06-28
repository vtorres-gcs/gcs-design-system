Compact label chip for filters, selections, and categorisation.

```jsx
// Static label tags
<Tag variant="primary">Portugal</Tag>
<Tag variant="default">Citizenship by Investment</Tag>
<Tag variant="outline">Europe</Tag>

// Dismissible selection chip
<Tag dismissible onDismiss={() => removeCountry('pt')}>Portugal</Tag>

// With icon
<Tag icon={<GlobeIcon size={12} />} variant="primary">EU Programs</Tag>

// Status-coloured
<Tag variant="success">Documents Verified</Tag>
<Tag variant="warning">Action Required</Tag>

// Size
<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>  // default
```

Use `variant="filled"` (Night Blue) for selected/active state in a filter row.
`borderRadius` is `var(--radius)` = 0 by default — consistent with the sharp-corner brand language.
