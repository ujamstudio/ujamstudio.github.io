---
title: "Fixing \"CNAME already taken\" on GitHub Pages"
category: Troubleshooting
summary: Ran into this error while setting up a custom domain. Here's what caused it and how I resolved it.
---

## Problem

When trying to set a custom domain in the GitHub Pages settings, I got the following error:

```
The CNAME `example.com` is already taken.
```

## Cause

This happens when another GitHub repository (even one you own) already has a `CNAME` file pointing to the same domain.

## Solution

1. Search your other repos for a `CNAME` file with that domain
2. Delete the old `CNAME` file or update it
3. Wait a few minutes, then retry setting the custom domain

## Takeaway

Always check existing repos before assigning a custom domain. GitHub enforces one-to-one mapping between domains and repositories.
