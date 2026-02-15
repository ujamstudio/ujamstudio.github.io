---
title: Collections Framework
subject: Computer Science / Java / Fundamental
order: 2
---

## Overview

The Java Collections Framework provides data structures and algorithms for storing and manipulating groups of objects.

## Core Interfaces

| Interface | Ordered | Duplicates | Key-Value |
|-----------|---------|------------|-----------|
| `List`    | Yes     | Yes        | No        |
| `Set`     | No      | No         | No        |
| `Map`     | No      | Keys: No   | Yes       |
| `Queue`   | FIFO    | Yes        | No        |

## Common Implementations

```java
List<String> list = new ArrayList<>();
Set<String> set = new HashSet<>();
Map<String, Integer> map = new HashMap<>();
Queue<String> queue = new LinkedList<>();
```

## When to Use What

- **ArrayList** — fast random access, most common choice
- **LinkedList** — frequent insertions/deletions in the middle
- **HashSet** — unique elements, no order needed
- **TreeSet** — unique elements, sorted
- **HashMap** — key-value lookup, most common choice
- **TreeMap** — key-value lookup, sorted by key
