'use strict';

// var hours = ['', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];
var hours = ['6AM', '7AM', '8AM'];
var allStore = [];
var tblEl = document.getElementById('hour-row');

function Sales(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHour = [];
  this.dailyTotal = 0;

  allStore.push(this);
  nukeTotalRow();
  this.rowOthers();
  createTotalRow();
}

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

Sales.prototype.cookies = function() {
  for (var i = 0; i < hours.length; i++) {
    var customer = getRandomIntInclusive(this.min, this.max);
    var cookienum = parseInt(customer * this.avg);
    this.cookiesPerHour.push(cookienum);
    this.dailyTotal += cookienum;
  }
};

function rowFirst (){
  var row = document.getElementById('hour-row');
  var trEl = document.createElement('tr');

  var tdBlankEl = document.createElement('td');
  tdBlankEl.textContent = '';
  trEl.appendChild(tdBlankEl);

  for (var i in hours) {
    var tdEl = document.createElement('th');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
    row.appendChild(trEl);
  }

  var tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = 'Total';
  trEl.appendChild(tdTotalEl);
}
rowFirst();

Sales.prototype.rowOthers = function() {
  this.cookies(); // Generate the cookiesPerHour

  var trSalesEl = document.createElement('tr');

  var tdNameEle = document.createElement('td');
  tdNameEle.textContent = this.name;
  trSalesEl.appendChild(tdNameEle);

  // loop through cookiesPerHour, and add tds
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var tdCookiesEle = document.createElement('td');
    tdCookiesEle.textContent = this.cookiesPerHour[i];
    trSalesEl.appendChild(tdCookiesEle);
  }

  var tdTotalEle = document.createElement('td');
  tdTotalEle.textContent = this.dailyTotal;
  trSalesEl.appendChild(tdTotalEle);

  tblEl.appendChild(trSalesEl);
};


function createTotalRow() {
  var trTotalEl = document.createElement('tr');
  trTotalEl.id = 'total-row';

  var tdFirstEle = document.createElement('td');
  tdFirstEle.textContent = 'Totals';
  trTotalEl.appendChild(tdFirstEle);

  var grandTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    var total = 0;

    for (var j = 0; j < allStore.length; j++) {
      total += allStore[j].cookiesPerHour[i];
    }
    var tdDataEle = document.createElement('td');
    tdDataEle.textContent = total;
    trTotalEl.appendChild(tdDataEle);

    grandTotal += total;
  }

  var tdGrandtotalEle = document.createElement('td');
  tdGrandtotalEle.textContent = grandTotal;
  trTotalEl.appendChild(tdGrandtotalEle);

  tblEl.appendChild(trTotalEl);
}

function nukeTotalRow() {
  var totalRow = document.getElementById('total-row');
  if (totalRow) {
    totalRow.remove();
  }
}

// Form Data

var formEl = document.getElementById('main-form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  new Sales(name, min, max, avg);
});

new Sales('1st&Pike', '23', '65', '6.3');
new Sales('SeaTac', '3', '24', '1.2');
new Sales('Seattle', '11', '38', '3.7');
new Sales('Capitol', '20', '38', '2.3');
new Sales('Alki', '2', '16', '4.6');
