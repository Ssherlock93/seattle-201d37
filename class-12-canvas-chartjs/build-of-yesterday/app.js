'use strict';

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts = [];
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var container = document.getElementById('container');

function Product(name) {
  this.name = name;

  // this.path = 'img/' + name + '.jpg';
  this.path = `img/${name}.jpg`;

  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

for (var i = 0; i < productNames.length; i++) {
  new Product(productNames[i]);
}

function rando() {
  return Math.floor(Math.random() * allProducts.length);
}

function threeRandomImages() {
  // For each of the empty <img> tags, assign a random .src attribute
  left.src = allProducts[rando()].path;
  center.src = allProducts[rando()].path;
  right.src = allProducts[rando()].path;
}

function handleClick(event) {
  console.log(event.target.id, 'was clicked');
  threeRandomImages();

}

threeRandomImages();
container.addEventListener('click', handleClick);
