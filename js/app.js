'use strict'

//find the elements in our html that match the corresponding id using the method document.getElementById
let elStoreTable = document.getElementById('store-table')
let elForm = document.getElementById('store-form')

//declare a variable and assign it the value of an array that will contain all our store hours as strings
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let stores = []

//declare a new varable and assign the value of an constructor function which will return a new object
let CookieStore = function(name, min, max, cookies) {
  this.storeName = name
  this.maxCust = max
  this.minCust = min
  this.cookiesPerCust = cookies
  this.cookiesArray = []
}

//create a prototype method on our wizardschool constructor that will return a random number between the min and max students multiply that by number of spells cast per student
CookieStore.prototype.cookiesSoldPerHour = function(){
  let randomNumber = Math.ceil((Math.random() * (this.maxCust - this.minCust)) + this.minCust)
  return Math.round(randomNumber * this.cookiesPerCust)
}

let firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3)
let SeaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2)
let SeattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7)
let CapitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3)
let Alki = new CookieStore('Alki', 2, 16, 4.6)

//adds new values to the end of the array
stores.push(firstAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki)

//create a new row for our header that will contain our column titles
let elHeader = document.createElement('tr')
elStoreTable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'Store Name'
//loop through our hours array and display each hour as a table header element
for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

let elTotalHead = document.createElement('th')
elHeader.appendChild(elTotalHead)
elTotalHead.innerText = 'Daily Location Total'

CookieStore.prototype.dailyLocationTotal = function() {
  let elRow = document.createElement('tr')
  elStoreTable.appendChild(elRow)
  let elTh = document.createElement('th')
  elRow.appendChild(elTh)
  elTh.innerText = this.storeName
  let counter = 0
  for(let i = 0; i < hours.length; i++){
    let cookiesByLocationPerDay = this.cookiesSoldPerHour()
    let elTd = document.createElement('td')
    elRow.appendChild(elTd)
    elTd.innerText = cookiesByLocationPerDay
    counter+= cookiesByLocationPerDay
    this.cookiesArray.push(cookiesByLocationPerDay)
  }
  let elTotal = document.createElement('td')
  elRow.appendChild(elTotal)
  elTotal.innerText = counter
}

for(let j = 0; j < stores.length; j++) {
  stores[j].dailyLocationTotal()
}

let dailyHourTotal = function() {
  let elRow = document.createElement('tr')
  elStoreTable.appendChild(elRow)
  let elFoot = document.createElement('th')
  elRow.appendChild(elFoot)
  elFoot.innerText = 'Total Per Hour'
  let TotalCounter = 0
  for(let j = 0; j < hours.length; j++) {
    let counter = 0
    for(let i = 0; i < stores.length; i++){
      TotalCounter+= stores[i].cookiesArray[j]
      counter+= stores[i].cookiesArray[j]
    }
    let elTd2 = document.createElement('td')
    elRow.appendChild(elTd2)
    elTd2.innerText = counter
  }
  let elTotal = document.createElement('td')
  elRow.appendChild(elTotal)
  elTotal.innerText = TotalCounter
}

dailyHourTotal()

let elNameOfStore = elForm.nameOfStore
let elMinCust = elForm.minCust
let elMaxCust = elForm.maxCust
let elCookiesPerCust = elForm.cookiesPerCust

//create an event listener that will listen for a submit event and create a new instance of our constructor function using the values collected from our form
elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let newStore = new CookieStore(elNameOfStore.value, elMinCust.value, elMaxCust.value, elCookiesPerCust.value)
  stores.push(newStore)
  //invoke our rendernewschool method on our new school to generate a new row on our table.
  newStore.dailyLocationTotal()
})