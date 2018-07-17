'use strict';

// 1. Generate a random number between min/max
// 2. Multipy rando by avgSales

function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var pike = {
  name: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 54,
  avgSales: 3.4,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  calculateCustomers: function() {
    // 1. Iterate thru hours
    // 2. For each hour, run rando generator
    // 3. Push to customersPerHour

    // for (var i = 0; i < pike.hours.length; i++) {}
    for(var hour of pike.hours) {
      var rando = generateRandom(pike.minCustomers, pike.maxCustomers);
      pike.customersPerHour.push(rando);
    }
    return pike.customersPerHour;  // Unnecessary - for demo only
  },
  calculateSales: function() {
    pike.calculateCustomers();

    for (var numCustomers of pike.customersPerHour) {
      var cookies = Math.ceil(pike.avgSales * numCustomers);
      pike.cookiesPerHour.push(cookies);
      pike.dailyTotal += cookies;
    }
    return pike.cookiesPerHour; // Unnecessary - for demo only
  },
  render: function() {
    pike.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = pike.name;
    ulEl.appendChild(h2El);

    for (var idx in pike.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = pike.hours[idx] + ': ' + pike.cookiesPerHour[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + pike.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};


// Finally; Run render() for each store we create!
var stores = [pike, ];
for (var store of stores) {
  store.render();
}
