// LOGGING OUTPUT
console.log('Hello World');

// let, const
let age: number = 30; // Specify type as number

// let can be re-assigned, const can not
 age = 32;
 //age='donia'

// DATA TYPES - String, Number, Boolean, null, undefined
const userName: string = 'Brad'; // Renamed to avoid conflict fom name to userName
const rating: number = 3.5; // Specify type as number
const isCool: boolean = true; // Specify type as boolean
let zer: undefined; // Specify type as undefined

// Check type
console.log(typeof zer);

// STRINGS

// Concatenation
//console.log('My name is ' + userName + ' and I am ' + age);
// Template literal (better)
//console.log(`My name is ${userName} and I am ${age}`);

// String methods & properties
const s: string = 'Hello World'; // Specify type as string
let val: any; // Using 'any' for dynamic type; could be more specific based on use

// Get length
val = s.length;
console.log(val)
// Change case
val = s.toUpperCase();
console.log(val)
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');

// ARRAYS - Store multiple values in a variable
const numbers: number[] = [1, 2, 3, 4, 5]; // Specify type as array of numbers
const fruits: string[] = ['apples', 'oranges', 'pears', 'grapes']; // Specify type as array of strings

// Get one value - Arrays start at 0
console.log("fruits : ", fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// // Get index
//console.log(fruits.indexOf('oranges'));

// OBJECT LITERALS
interface Address {
  street: string;
  city: string;
  state: string;
}

interface Person {
  firstName: string;
  age: number;
  hobbies: string[];
  address: Address;
  email?: string; // Optional property
}
const person: Person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
};

// Get single value
//console.log(person.name);

// Get array value
//console.log(person.hobbies[1]);

// Get embedded object
//console.log(person.address.city);

// Add property
person.email = 'jdoe@gmail.com';
console.log("person object", person);

// Array of objects
interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// Get specific object value
console.log(todos[1].text);

// LOOPS

// For
let sum: number = 0;
for (let i: number = 0; i <= 10; i++) {
  //console.log(`For Loop Number: ${i}`);
  sum = sum + i;
}

// While
let j: number = 0;
while (j <= 10) {
  //console.log(`While Loop Number: ${j}`);
  j++;
}

// Loop Through Arrays
// For Loop
for (let i: number = 0; i < todos.length; i++) {
  let todo: Todo = todos[i];
  //console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for (let todo of todos) {
  //console.log(todo.text);
}

// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function (todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map
const arr: number[] = [1, 2, 3, 4]; // Specify type as array of numbers
let result: number[] = arr.map(num => num + 1);
result = arr.map(num => {
  return num + 1;
});
result = arr.map(function (num) {
  return num + 1;
});
console.log(result);

// filter 
let evenArray: number[] = arr.filter(num => num % 2 == 0);
// reduce 
let sumArray: number[] = arr.reduce((acc: number[], num :number) => {
  if (num % 2 == 0)
    acc.push(num);
  return acc;
}, []);
console.log(sumArray);

// Remove duplicates
let removeDup: number[] = arr.filter((num, index, array) => array.indexOf(num) === index);

// CONDITIONALS

// Simple If/Else Statement
const x: number = 30;

if (x === 10) {
  console.log('x is 10');
} else if (x > 10) {
  //console.log('x is greater than 10');
} else {
  //console.log('x is less than 10')
}

// Switch
const color: string = 'blue'; // Specify type as string

switch (color) {
  case 'red': console.log('color is red'); break;
  case 'blue': console.log('color is blue'); break;
  default: console.log('color is not red or blue');
}

// Ternary operator / Shorthand if
const z: number = color === 'red' ? 10 : 20;

// FUNCTIONS
function greet1(greeting: string = 'Hello', name?: string): string { // Specify parameter types and return type
  if (!name) {
    return greeting;
  } else {
    return `${greeting} ${name}`;
  }
}

// ARROW FUNCTIONS
const greet = (greeting: string = 'Hello', name: string = 'There'): string => `${greeting} ${name}`;
//console.log(greet('Hi'));

var oo= { 
  firstName:"Tom", 
  lastName:"Hanks" 
}; 
//access the object values 
console.log(oo.firstName) 
console.log(oo.lastName)


// let age :number= 25;
// function updateAge(): void {
//    age = 25 + 5; // fixed to avoid redeclaration of `age` in the same scope
// }
// updateAge();
// const output: string = false || [] ? "Invalid" : "Correct";
// console.log("The Input Type is", output);
// function isPrime(num: number): boolean {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
//}
//console.log(isPrime(7)); // Expected output: true