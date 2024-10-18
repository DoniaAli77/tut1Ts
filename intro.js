// LOGGING OUTPUT
console.log('Hello World');
// let, const
var age = 30; // Specify type as number
// let can be re-assigned, const can not
age = 32;
// DATA TYPES - String, Number, Boolean, null, undefined
var userName = 'Brad'; // Renamed to avoid conflict fom name to userName
var rating = 3.5; // Specify type as number
var isCool = true; // Specify type as boolean
var zer; // Specify type as undefined
// Check type
console.log(typeof zer);
// STRINGS
// Concatenation
//console.log('My name is ' + userName + ' and I am ' + age);
// Template literal (better)
//console.log(`My name is ${userName} and I am ${age}`);
// String methods & properties
var s = 'Hello World'; // Specify type as string
var val; // Using 'any' for dynamic type; could be more specific based on use
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');
// ARRAYS - Store multiple values in a variable
var numbers = [1, 2, 3, 4, 5]; // Specify type as array of numbers
var fruits = ['apples', 'oranges', 'pears', 'grapes']; // Specify type as array of strings
// Get one value - Arrays start at 0
console.log("fruits : ", fruits[1]);
// Add value
fruits[4] = 'blueberries';
// Add value using push()
fruits.push('strawberries');
var person = {
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
var todos = [
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
var sum = 0;
for (var i = 0; i <= 10; i++) {
    //console.log(`For Loop Number: ${i}`);
    sum = sum + i;
}
// While
var j = 0;
while (j <= 10) {
    //console.log(`While Loop Number: ${j}`);
    j++;
}
// Loop Through Arrays
// For Loop
for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    //console.log(` Todo ${i + 1}: ${todos[i].text}`);
}
// For...of Loop
for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
    var todo = todos_1[_i];
    //console.log(todo.text);
}
// HIGH ORDER ARRAY METHODS (show prototype)
// forEach() - Loops through array
todos.forEach(function (todo, i, myTodos) {
    console.log("".concat(i + 1, ": ").concat(todo.text));
    console.log(myTodos);
});
// map
var arr = [1, 2, 3, 4]; // Specify type as array of numbers
var result = arr.map(function (num) { return num + 1; });
result = arr.map(function (num) {
    return num + 1;
});
result = arr.map(function (num) {
    return num + 1;
});
console.log(result);
// filter 
var evenArray = arr.filter(function (num) { return num % 2 == 0; });
// reduce 
var sumArray = arr.reduce(function (acc, num) {
    if (num % 2 == 0)
        acc.push(num);
    return acc;
}, []);
console.log(sumArray);
// Remove duplicates
var removeDup = arr.filter(function (num, index, array) { return array.indexOf(num) === index; });
// CONDITIONALS
// Simple If/Else Statement
var x = 30;
if (x === 10) {
    console.log('x is 10');
}
else if (x > 10) {
    //console.log('x is greater than 10');
}
else {
    //console.log('x is less than 10')
}
// Switch
var color = 'blue'; // Specify type as string
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default: console.log('color is not red or blue');
}
// Ternary operator / Shorthand if
var z = color === 'red' ? 10 : 20;
// FUNCTIONS
function greet1(greeting, name) {
    if (greeting === void 0) { greeting = 'Hello'; }
    if (!name) {
        return greeting;
    }
    else {
        return "".concat(greeting, " ").concat(name);
    }
}
// ARROW FUNCTIONS
var greet = function (greeting, name) {
    if (greeting === void 0) { greeting = 'Hello'; }
    if (name === void 0) { name = 'There'; }
    return "".concat(greeting, " ").concat(name);
};
//console.log(greet('Hi'));
var oo = {
    firstName: "Tom",
    lastName: "Hanks"
};
//access the object values 
console.log(oo.firstName);
console.log(oo.lastName);
