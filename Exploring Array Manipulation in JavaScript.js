// Task 1
let fruits = ['apples', 'banana', 'orange'];

fruits.pop();
fruits.push("pear");

console.log("Fruits post push and pop:", fruits);

// Task 2
let nums = [3, 1, 5, 2, 4];
nums.sort();

console.log("Numbers after sort:", nums);

// Task 3
nums = [3, 1, 5, 2, 4];

let mapped = nums.map((x) => { return x * 2 });
console.log("Doubled numbers:", mapped);

let filtered = nums.filter((x) => { return x % 2 == 0 });
console.log("Even numbers:", filtered);

let reduced = nums.reduce((x, y) => { return x + y });
console.log("Sum of all numbers:", reduced);
