# Unexpected NaN Result Due to Improper Undefined Handling

This code demonstrates a common JavaScript error where undefined values are not explicitly handled, leading to unexpected NaN (Not a Number) results. The function `foo` attempts to add two numbers, but if either input (`a` or `b`) is undefined, it produces NaN instead of a more controlled response like null or an error.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a solution that addresses the issue by explicitly checking for undefined values and handling them appropriately.

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the unexpected NaN behavior.
4. Run `node bugSolution.js` to see how the issue is resolved.

## Solution
The improved code in `bugSolution.js` checks if either `a` or `b` is undefined, and returns null in such cases. This ensures more predictable behavior and prevents unexpected NaN results.