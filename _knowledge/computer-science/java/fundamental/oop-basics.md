---
title: OOP Basics
subject: Computer Science / Java / Fundamental
order: 1
---

## Four Pillars of OOP

### 1. Encapsulation
Bundling data and methods that operate on that data within a single class, restricting direct access.

```java
public class Account {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}
```

### 2. Inheritance
A class can inherit fields and methods from another class.

```java
public class Animal {
    public void eat() { System.out.println("eating"); }
}

public class Dog extends Animal {
    public void bark() { System.out.println("woof"); }
}
```

### 3. Polymorphism
Objects of different classes can be treated as objects of a common superclass.

### 4. Abstraction
Hiding complex implementation details and showing only the necessary features.
