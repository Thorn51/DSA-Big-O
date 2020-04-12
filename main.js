console.log("Big O Notation");

//test values
let smallValue = 2;
let largeValue = 2000;
let extraLargeValue = 200000;

//test arrays
let arrayThree = [1, 2, 3];
let arrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayOneHundred = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
];
let duplicatesThree = [1, 2, 2];
let duplicatesTen = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10];
let duplicatesOneHundred = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  99,
];

// Example
function sumArray(array) {
  let sum = 0,
    ticks = 1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    ticks++;
  }
  return { result: sum, ticks };
}

// Example constant time O(1)

function getRandomItem(array) {
  let ticks = 0;
  // Get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return {
    result: item,
    ticks: ticks,
  };
}

// Example logarithmic time O(log(n))

function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
     because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }

  let lowIndex = 0,
    highIndex = arr.length;

  while (highIndex > lowIndex) {
    // Find midpoint
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    /* If `midIndex` element is greater than `n`, that means all elements
         to the right of `midIndex` are also greater than `n`, so
         we only need to focus on elements to the left of `midIndex`.
         We set `highIndex` to the current value of `midIndex` so next time
         through the loop, we'll only look at the left half */
    if (arr[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    } else if (arr[midIndex + 1] < n) {
      /* If the element to the right of `midIndex` is less than `n`, then we
         know that we need to check the items to the right of `midIndex`, so
         we set `lowIndex` to the current value of `midIndex`, so that next
         time through the loop we only look at the right side */
      lowIndex = midIndex;
      ticks++;
    } else {
      /* Otherwise, if the element to the right of `midIndex` is greater
         than or equal to `n`, we know that the item at `midIndex` is the last
         item that's less than `n`, so we return `midIndex +  1` to get the total
         number of items that are less than `n` */
      ticks++;
      return {
        result: midIndex + 1,
        ticks: ticks,
      };
    }
  }
}

// Example linear time O(n)
function findMin(array) {
  let min = array[0],
    ticks = 1;
  for (let i = 1; i < array.length; i++) {
    ticks++;
    if (array[i] < min) {
      min = array[i];
    }
  }
  return {
    result: min,
    ticks: ticks,
  };
}

// Example polynomial time O(n^k)
function hasDuplicates(array) {
  let ticks = 0,
    result = false;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    for (let j = 0; j < array.length; j++) {
      ticks++;
      if (array[i] === array[j] && i !== j) {
        result = true;
      }
    }
  }
  return {
    result: result,
    ticks: ticks,
  };
}

// Example exponential time O(2^n)
function countTriangle(layers) {
  let ticks = 1;
  let count = 0; // the number of dots we've counted so far
  let layer = 0; // the current layer we're on
  let lastLayer = 1; // the number of dots we counted in the previous layer
  while (layer < layers) {
    ticks++;
    let newLayer = 0; // the number of dots we've counted so far in the current layer
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
      newLayer += 2;
    }
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks: ticks,
  };
}

// Exercise 2 -> Even or Odd

function isEven(value) {
  let ticks = 0;
  let result = null;

  if (value % 2 == 0) {
    ticks++;
    result = true;
  } else {
    ticks++;
    result = false;
  }
  return {
    result: result,
    ticks: ticks,
  };
}

//Exercise 3 -> Are you Here

let testArray = [5, 8, 3, 2, 1];
let testArray2 = [4, 7, 9, 10, 1];

let largerArray = [5, 8, 3, 2, 1, 15, 18, 20, 24, 28];
let largerArray2 = [4, 7, 9, 10, 13, 17, 16, 19, 23, 28];

function areYouHere(arr1, arr2) {
  let ticks = 0;
  let result = null;
  for (let i = 0; i < arr1.length; i++) {
    ticks++;
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      ticks++;
      const el2 = arr2[j];
      if (el1 === el2) result = true;
    }
  }
  result = false;

  return {
    array1Length: arr1.length,
    array2Length: arr2.length,
    result,
    ticks,
  };
}

//Exercise 4 -> Doubler
function doubleArrayValues(array) {
  let ticks = 0;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    array[i] *= 2;
  }
  return { array, ticks };
}

//Exercise 5 -> Naive Search
function naiveSearch(array, item) {
  let ticks = 0;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    if (array[i] === item) {
      return { matchIndex: i, ticks };
    }
  }
  return { matchIndex: "Not in array", ticks };
}

//Exercise 6 -> Creating pairs
function createPairs(arr) {
  let ticks = 0;
  for (let i = 0; i < arr.length; i++) {
    ticks++;
    for (let j = i + 1; j < arr.length; j++) {
      ticks++;
      console.log(arr[i] + ", " + arr[j]);
    }
  }
  return { ticks };
}

//Exercise 7 -> Complete the sequence
function compute(num) {
  let ticks = 0;
  let result = [];
  for (let i = 1; i <= num; i++) {
    ticks++;
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return { result, ticks };
}
