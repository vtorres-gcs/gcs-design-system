User identity thumbnail with photo or initials fallback.

```jsx
// With photo
<Avatar src="/avatars/james.jpg" name="James Martin" size="md" />

// Initials fallback (deterministic color per name)
<Avatar name="Sophie Lefebvre" size="lg" />

// Square (for advisor cards, etc.)
<Avatar name="David Chen" size="xl" shape="square" />

// Size scale
<Avatar name="AM" size="xs" />
<Avatar name="AM" size="sm" />
<Avatar name="AM" size="md" />   // default
<Avatar name="AM" size="lg" />
<Avatar name="AM" size="xl" />
```

Color is deterministically derived from `name` — the same name always produces the same
colour across renders and sessions. All colours use Night Blue palette shades.
