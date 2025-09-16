// simple.ts

// A function with type annotations
function add(a: number, b: number): number {
  return a + b;
}

// Subtraction function
function subtract(a: number, b: number): number {
  return a - b;
}

// Variables with types
let x: number = 10;
let y: number = 20;

// Call the functions
console.log("Sum:", add(x, y));
console.log("Difference:", subtract(x, y));

// Example of string type
let message: string = "Hello TypeScript!";
console.log(message);

// Example of array type
let numbers: number[] = [1, 2, 3, 4];
console.log("Numbers:", numbers);
