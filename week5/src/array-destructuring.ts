// #1 Variable swapping
export const fruits = ['apple', 'banana'];
export const a1 = fruits[0];
export const b1 = fruits[1];

// Currently, I would get the following:
console.log(a1); // 'apple'
console.log(b1); // 'banana'

// deconstruct here
export const [a, b] = fruits;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
export const [a3, b3, ...others] = food;

// expected result:
console.log(a3); // 'apple'
console.log(b3); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
export const strings = ['hello', 'taylor'];

// construct statement here
export const [greeting, name] = strings; 
export const tostring1 = greeting.toString();
export const tostring2 = name.toString();

// expected result: 'hello, taylor!'
console.log((tostring1) + (" ") + (tostring2) + ('!'));