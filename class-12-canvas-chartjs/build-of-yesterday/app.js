'use strict';

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts = [];
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var container = document.getElementById('container');
var totalClicks = 0;

function Product(name) {
  this.name = name;

  // this.path = 'img/' + name + '.jpg';
  this.path = `img/${name}.jpg`;

  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

// this loop creates all of my Product instances
for (var i = 0; i < productNames.length; i++) {
  new Product(productNames[i]);
}

function rando() {
  return Math.floor(Math.random() * allProducts.length);
}

function threeRandomImages() {
  var randomIndexes = [];

  randomIndexes[0] = (rando());
  randomIndexes[1] = (rando());

  while (randomIndexes[0] === randomIndexes[1]) {
    randomIndexes[1] = rando();
    console.log('duplicate prevented');
  }

  randomIndexes[2] = rando();

  while (randomIndexes[2] === randomIndexes[0] || randomIndexes[2] === randomIndexes[1]) {
    randomIndexes[2] = rando();
    console.log('duplicate checker #2 caught a dupe')
  }

  // console.log(randomIndexes);

  left.src = allProducts[randomIndexes[0]].path;
  center.src = allProducts[randomIndexes[1]].path;
  right.src = allProducts[randomIndexes[2]].path;
  left.title = allProducts[randomIndexes[0]].name;
  center.title = allProducts[randomIndexes[1]].name;
  right.title = allProducts[randomIndexes[2]].name;
  allProducts[randomIndexes[0]].views++;
  allProducts[randomIndexes[1]].views++;
  allProducts[randomIndexes[2]].views++;
}

function handleClick(event) {
  // captures and chastizes a click not on an image
  if (event.target.id === 'container') {
    return alert('Click on images, please!!!!');
  }

  console.log(event.target.title);
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.title === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }

  totalClicks++;
  console.log(totalClicks, 'total clicks');

  if (totalClicks > 4) {
    alert('You are out of clicks, yo.');
    container.removeEventListener('click', handleClick);
    // show results
  }

  // console.log(event.target, 'was clicked');
  threeRandomImages();

}

threeRandomImages();
container.addEventListener('click', handleClick);
