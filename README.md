# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in JavaScript related to type coercion within conditional statements. The function `foo` intends to handle `null`, negative numbers, and positive numbers differently, but due to JavaScript's loose typing, it produces unexpected results for certain string inputs.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version.  The solution focuses on strict equality checks to prevent unintended type coercion.