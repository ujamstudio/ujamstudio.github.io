---
title: "TIL: CSS :has() Selector"
category: TIL
summary: The parent selector we always wanted is finally here.
---

## What is `:has()`?

The `:has()` pseudo-class lets you style a parent element based on its children.

```css
/* Style a card only if it contains an image */
.card:has(img) {
    grid-column: span 2;
}

/* Style a label when its input is focused */
label:has(+ input:focus) {
    color: blue;
}
```

## Browser Support

Supported in all major browsers as of 2024. Safe to use in production.
