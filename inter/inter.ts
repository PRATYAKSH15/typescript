// calculator.ts

// Addition
function add(a: number, b: number): number {
  return a + b;
}

// Subtraction
function subtract(a: number, b: number): number {
  return a - b;
}

// Multiplication
function multiply(a: number, b: number): number {
  return a * b;
}

// Division (with check for divide by zero)
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

// Example usage
let x: number = 20;
let y: number = 10;

console.log("Calculator Results:");
console.log(`${x} + ${y} =`, add(x, y));
console.log(`${x} - ${y} =`, subtract(x, y));
console.log(`${x} * ${y} =`, multiply(x, y));
console.log(`${x} / ${y} =`, divide(x, y));
