'use strict'

let elBody = document.getElementById('myBody')
let elStoreTable = document.getElementById('store-table')
elBody.appendChild(elStoreTable)

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let stores = []

//declare a new variable and assign the value of a constructor function which will return a new object
let CookieStore = function(name, min, max, cookies) {
  this.storeName = name
  this.minCust = min
  this.maxCust = max
  this.cookiesPerCust = cookies
  this.cookieArray = []
}

CookieStore.prototype.cookiesSoldPerHour = function(){
  let randomNumber = Math.ceil((Math.random() * (this.maxCust - this.minCust)) + this.minCust)
  return Math.round(randomNumber * this.cookiesPerCust)
}

//create a new instance of this function (WizardSchool object constructor)
let firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3)
let SeaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2)
let SeattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7)
let CapitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3)
let Alki = new CookieStore('Alki', 2, 16, 4.6)

//adds new values to the end of the array
stores.push(firstAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki)

let elHeader = document.createElement('tr')
elStoreTable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

let elTotalHead = document.createElement('th')
elHeader.appendChild(elTotalHead)
elTotalHead.innerText = 'Daily Location Total'
//create a new row and append it to our table
for(let j = 0; j < stores.length; j++) {
  let elRow = document.createElement('tr')
  elStoreTable.appendChild(elRow)
  let elTh = document.createElement('th')
  elRow.appendChild(elTh)
  elTh.innerText = stores[j].storeName
  let counter = 0
  for(let i = 0; i < hours.length; i++){
    let cookiesByLocationPerDay = stores[j].cookiesSoldPerHour()
    let elTd = document.createElement('td')
    elRow.appendChild(elTd)
    elTd.innerText = cookiesByLocationPerDay
    counter+= cookiesByLocationPerDay
    stores[j].cookieArray.push(cookiesByLocationPerDay)
  }
  let elTotal = document.createElement('td')
  elRow.appendChild(elTotal)
  elTotal.innerText = counter
  console.log(stores[j].cookieArray)
}
//Stretch goal is work in progress
// let elRow = document.createElement('tr')
// elStoreTable.appendChild(elRow)
// let elFoot = document.createElement('th')
// elRow.appendChild(elFoot)
// elFoot.innerText = 'Total'
// for(let j = 0; j < hours.length; j++) {
//   let elRow = document.createElement('tr')
//   elStoreTable.appendChild(elRow)
//   let elTh = document.createElement('th')
//   elRow.appendChild(elTh)
//   elTh.innerText = stores[j].storeName
//   let counter = 0
//   for(let i = 0; i < stores.length; i++){
//     let cookiesByLocationPerDay = stores[j].cookiesSoldPerHour()
//     let elTd = document.createElement('td')
//     elRow.appendChild(elTd)
//     elTd.innerText = cookiesByLocationPerDay
//     counter+= cookiesByLocationPerDay
//     stores[j].cookieArray.push(cookiesByLocationPerDay)
//   }
//   let elTotal = document.createElement('td')
//   elRow.appendChild(elTotal)
//   elTotal.innerText = counter
//   console.log(stores[j].cookieArray)
// }