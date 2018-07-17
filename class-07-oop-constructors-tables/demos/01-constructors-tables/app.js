'use strict';

var allDogs = [];

function Dog(name, color, breed, nickName) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nick = nickName;

  // Avoid defining instance methods inside the constructor
  // this.bark = function() {
  //   console.log(this.name);
  // }

  allDogs.push(this)
}

Dog.prototype.bark = function() {
  console.log(this.name);
}

// new keyword does a few things... most importantly
// 1. {} (creates a new object literal)
// 2. assigns context to `this`

// console.log(demi) => Dog {
//   name: 'Demi',
//   color: 'black and white',
//   breed: 'border collie',
//   nick: undefined,
// }

new Dog('Demi', 'black and white', 'border collie');
new Dog('Izzy', 'brown', 'pit bull', 'pork chop');
new Dog('Chief', 'black', 'bernese mtn dog', 'cheeze');
new Dog('Zina', 'brown', 'german shephard');
new Dog('Pepper', 'black, white, brown', 'cattle dog', 'pep');


// Create the document
