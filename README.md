# Thinkful - Data Structures & Algorithms

Introduction module on data structures and algorithms including:

- Recursive Algorithms
- **Big O Notation** (current)
- Working with Arrays
- Working with Linked Lists
- Working with Stacks and Queues
- Working with Hash maps
- Working with Binary Search Trees
- Search Algorithms
- Sorting Algorithms
- Recursive Algorithms

## Big O Notation

| Big-O Notation | n = 10 | n = 100 | n = 1000  |
| -------------- | ------ | ------- | --------- |
| O(1)           | 1      | 1       | 1         |
| O(log n)       | 3      | 6       | 9         |
| O(n)           | 10     | 100     | 1000      |
| O(n^2)         | 100    | 10,000  | 1,000,000 |
| O(2^n)         | 1024   | 2^100   | 2^1000    |

### Constant Time -> O(1)

The algorithm takes the same amount of time to complete regardless of input size.

### Logarithmic Time -> O(log(n))

Next best performance to constant time. Running time grows in proportion to the logarithm of the input size. For instance, if an algorithm takes 1 second to complete with an input of size 10, when we increase our input by 10x to 100, the running time only grows to 2 seconds. When we increase the input size to 1000, the time only grows to 3 seconds.

### Linear Time -> O(n)

Run times are directly proportional to the size of the input.

### Polynomial Time -> O(n^k)

### Exponential Time -> O(2^n)

### Exercises

####
