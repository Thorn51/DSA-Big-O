# Thinkful - Data Structures & Algorithms

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

## Drills

The GitHub page has examples and drills from the Thinkful DSA module on Big-O.

After opening the page, open the developer tools. The examples and drills have corresponding functions. Call those functions in the console to see the results.

There is a note section under each to indicate which functions to call.

**Available Data**
There are a number of values and arrays available to test various examples and drills.

Values of Various Sizes

- Small Value -> `let smallValue = 2`
- Large Value -> `let largeValue = 2000`
- Extra Large Value -> `let extraLargeValue = 200000`

Arrays of Various Sizes

- `arrayThree` -> Sorted array with values 1-3
- `arrayTen` -> Sorted array with values 1-10
- `arrayOneHundred` -> You guessed it, sorted array with values 1-100
