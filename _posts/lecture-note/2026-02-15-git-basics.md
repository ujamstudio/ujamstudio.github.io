---
title: "Git Basics: Branching and Merging"
category: Lecture Note
summary: Core concepts of Git branching, merging strategies, and when to use rebase vs merge.
---

## Branching

A branch is a lightweight pointer to a commit. Creating a branch is instant and cheap.

```bash
git branch feature/login
git checkout feature/login
# or shorthand
git checkout -b feature/login
```

## Merging vs Rebasing

| | Merge | Rebase |
|---|---|---|
| History | Preserves all commits | Linear history |
| Use when | Collaborating on shared branch | Cleaning up local commits |

## Key Takeaways

- Branch early, branch often
- Use `merge` for shared branches, `rebase` for local cleanup
- Always pull before pushing to avoid conflicts
