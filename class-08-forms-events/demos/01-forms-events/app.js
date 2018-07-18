'use strict';

var allDogs = [];

function Dog(name, color, breed, nickName) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nick = nickName;

  allDogs.push(this)
}

Dog.prototype.bark = function() {
  console.log(this.name);
}


new Dog('Demi', 'black and white', 'border collie');
new Dog('Izzy', 'brown', 'pit bull', 'pork chop');
new Dog('Chief', 'black', 'bernese mtn dog', 'cheeze');
new Dog('Zina', 'brown', 'german shephard');
new Dog('Pepper', 'black, white, brown', 'cattle dog', 'pep');



// EVENT LISTENERS

var pClickEl = document.getElementById('p-click');
// Syntax // pClickEl.addEventListener('event', callbackFunction)

// 1. Anon function as callback
// pClickEl.addEventListener('click', function() {
//   console.log('Clicked!');
// })

// 2. Defined named function
function clicked() {
  console.log('Clicked!');
}

pClickEl.addEventListener('click', clicked);


// Form Data
var formEl = document.getElementById('main-form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log(allDogs.length);

  var name = event.target.name.value;
  var color = event.target.color.value;
  var breed = event.target.breed.value;
  var nickName = event.target.nick.value;

  new Dog(name, color, breed, nickName);
  console.log(allDogs);
})

