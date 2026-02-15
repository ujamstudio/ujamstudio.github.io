---
title: Linked List
subject: Computer Science / Data Structures
order: 1
---

## What is a Linked List?

A linear data structure where each element (node) contains data and a reference to the next node.

## Types

- **Singly Linked List** — each node points to the next
- **Doubly Linked List** — each node points to both next and previous
- **Circular Linked List** — last node points back to the first

## Time Complexity

| Operation     | Array  | Linked List |
|---------------|--------|-------------|
| Access by index | O(1) | O(n)        |
| Insert at head  | O(n) | O(1)        |
| Insert at tail  | O(1) | O(1)*       |
| Search          | O(n) | O(n)        |

*O(1) if tail pointer is maintained.

## Simple Implementation

```java
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
```
