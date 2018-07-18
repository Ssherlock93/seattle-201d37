'use strict';

var tblEl;
var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'];

function Store(name, min, max, avg) {
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgSales = avg;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;

  allStores.push(this);
}

Store.prototype.generateRandom = function() {
  return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
}

Store.prototype.calculateCustomers = function() {
  for (var hour of hours) {
    var rando = this.generateRandom();
    this.customersPerHour.push(rando);
  }
}

Store.prototype.calculateSales = function() {
  this.calculateCustomers();

  for (var numCustomers of this.customersPerHour) {
    var cookies = Math.ceil(this.avgSales * numCustomers);
    this.cookiesPerHour.push(cookies);
    this.dailyTotal += cookies;
  }
}

Store.prototype.render = function() {
  this.calculateSales();

  // Store Row
  var trStoreEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.name;
  trStoreEl.appendChild(tdNameEl);

  for (var idx in hours) {
    var tdDataEl = document.createElement('td');
    tdDataEl.textContent = this.cookiesPerHour[idx];
    trStoreEl.appendChild(tdDataEl);
  }

  var tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.dailyTotal;
  trStoreEl.appendChild(tdTotalEl);

  tblEl.appendChild(trStoreEl);
}

function createTable() {
  // Header row
  tblEl = document.createElement('table');
  var trHeaderEl = document.createElement('tr');
  var thBlankEl = document.createElement('th');
  thBlankEl.textContent = 'Store Name';
  trHeaderEl.appendChild(thBlankEl);

  for (var idx = 0; idx < hours.length; idx++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[idx];
    trHeaderEl.appendChild(thEl);
  }

  var thTotalEl = document.createElement('th');
  thTotalEl.textContent = 'Daily Total';
  trHeaderEl.appendChild(thTotalEl);

  tblEl.appendChild(trHeaderEl);

  document.getElementById('main-content').appendChild(tblEl);
}

// Create Stores
new Store('Pike Place', 53, 72, 4.4);
new Store('Alki', 23, 33, 1.2);
new Store('Bellevue', 43, 48, 2.3);
new Store('Buckley', 12, 23, 3.4);

// Create table
createTable();

// Finally; Run render() for each store we create!
for (var store of allStores) {
  store.render();
}
// for (var i = 0; i < allStores.length; i++) {
//   allStores[i].render();
// }
