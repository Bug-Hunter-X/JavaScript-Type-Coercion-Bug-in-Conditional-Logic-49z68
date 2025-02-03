function foo(x) {
  if (x === null) {
    return 0;
  } else if (typeof x === 'number' && x < 0) {
    return -1;
  } else if (typeof x === 'number' && x >=0) {
    return 1;
  } else {
    return 'invalid input';
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(0));   // Output: 1
console.log(foo(1));   // Output: 1
console.log(foo('-1')); // Output: 'invalid input'
console.log(foo('abc'));// Output: 'invalid input' 