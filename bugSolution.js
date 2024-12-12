function foo(a, b) {
  if (a === undefined || b === undefined) {
    return null; // Handle undefined values gracefully
  } else if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(undefined, 2)); // Output: null
console.log(foo(1, undefined)); // Output: null