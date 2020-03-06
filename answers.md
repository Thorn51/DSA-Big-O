# What is the Big O Notation & Why?

## 1. What is the Big O for this?

1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

**Big O Notation, Why?**

- O(1) -> The time to complete this algorithm does not change based on the size of input. No matter if we are shouting at 15 people or 10,000 people (assuming a megaphone), the number of operations does not change.

2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

**Big O Notation, Why?**

- O(n) -> The time to complete this algorithm increases in a linear fashion as we increase the number of inputs. We need to perform an operation on every input.

## 2. Even or odd

What is the Big O of the following algorithm? Explain your answer

```
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}
```

### Big O Notation, Why?

O(1) -> Arithmetic operations are constant time. No matter the size of the input there is only one operation performed on the input.

## 3. Are you here?

What is the Big O of the following algorithm? Explain your answer

```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

### Big O Notation, Why?

O(n^2) -> The outer for loop is O(n), and the inner for loop is O(n). Together they create a notation of O(n^2). As inputs increase the time complexity is polynomial.

## 4. Doubler

What is the Big O of the following algorithm? Explain your answer

```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

O(n) -> Each item in the array is having one operation performed on it. This causes the amount of time to complete the operations to grow in a linear fashion over the number of values in the array.

### Big O Notation, Why?

## 5. Naive search

What is the Big O of the following algorithm? Explain your answer

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

### Big O Notation, Why?

## 6. Creating pairs:

What is the Big O of the following algorithm? Explain your answer

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

### Big O Notation, Why?

## 7. Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

## 8. An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

### Big O Notation, Why?

## 9. Random element

What is the Big O of the following algorithm? Explain your answer

```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

### Big O Notation, Why?

## 10. What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```
function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
```

### Big O Notation, Why?

## 11. Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

- There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
- The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk.

![Tower of Hanoi](/tower_of_hanoi.PNG)

- Derive an algorithm to solve the Tower of Hanoi puzzle.
- Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
- If you are given 5 disks, how do the rods look like after 7 recursive calls?
- How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
- What is the runtime of your algorithm?

## 12. Iterative version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

## 13. Recursive Big O

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

## 14. Iterative Big O

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
