'use strict'

let elBody = document.getElementById('myBody')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

let firstAndPike = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookiesPerCust: 6.3,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil((Math.random() * (this.maxCust - this.minCust)) + this.minCust)
    return Math.round(randomNumber * this.cookiesPerCust)
  }
}

let SeaTacAirport = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  cookiesPerCust: 1.2,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil((Math.random() * (this.maxCust - this.minCust)) + this.minCust)
    return Math.round(randomNumber * this.cookiesPerCust)
  }
}

let SeattleCenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  cookiesPerCust: 3.7,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil((Math.random() * (this.maxCust - this.minCust)) + this.minCust)
    return Math.round(randomNumber * this.cookiesPerCust)
  }
}

let CapitolHill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  cookiesPerCust: 2.3,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil((Math.random() * (this.maxCust - this.minCust)) + this.minCust)
    return Math.round(randomNumber * this.cookiesPerCust)
  }
}

let Alki = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  cookiesPerCust: 4.6,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil((Math.random() * (this.maxCust - this.minCust)) + this.minCust)
    return Math.round(randomNumber * this.cookiesPerCust)
  }
}

let elFirstAndPikeTitle = document.createElement('h2')
elBody.appendChild(elFirstAndPikeTitle)
elFirstAndPikeTitle.innerText = firstAndPike.storeName

let elListFirstAndPike = document.createElement('ul')
elBody.appendChild(elListFirstAndPike)

for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of cookies', firstAndPike.cookiesSoldPerHour())
  let elListItem = document.createElement('li')
  elListFirstAndPike.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + firstAndPike.cookiesSoldPerHour()

}

let elSeaTacAirportTitle = document.createElement('h2')
elBody.appendChild(elSeaTacAirportTitle)
elSeaTacAirportTitle.innerText = SeaTacAirport.storeName

let elListSeaTac = document.createElement('ul')
elBody.appendChild(elListSeaTac)

for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of cookies', SeaTacAirport.cookiesSoldPerHour())
  let elListItem = document.createElement('li')
  elListSeaTac.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + SeaTacAirport.cookiesSoldPerHour()

}
let elSeattleCenterTitle = document.createElement('h2')
elBody.appendChild(elSeattleCenterTitle)
elSeattleCenterTitle.innerText = SeattleCenter.storeName

let elListSeattleCenter = document.createElement('ul')
elBody.appendChild(elListSeattleCenter)

for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of cookies', SeattleCenter.cookiesSoldPerHour())
  let elListItem = document.createElement('li')
  elListSeattleCenter.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + SeattleCenter.cookiesSoldPerHour()

}
let elCapitolHillTitle = document.createElement('h2')
elBody.appendChild(elCapitolHillTitle)
elCapitolHillTitle.innerText = CapitolHill.storeName

let elListCapitolHill = document.createElement('ul')
elBody.appendChild(elListCapitolHill)

for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of cookies', CapitolHill.cookiesSoldPerHour())
  let elListItem = document.createElement('li')
  elListCapitolHill.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + CapitolHill.cookiesSoldPerHour()

}
let elAlkiTitle = document.createElement('h2')
elBody.appendChild(elAlkiTitle)
elAlkiTitle.innerText = Alki.storeName

let elListAlki = document.createElement('ul')
elBody.appendChild(elListAlki)

for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of cookies', Alki.cookiesSoldPerHour())
  let elListItem = document.createElement('li')
  elListAlki.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + Alki.cookiesSoldPerHour()

}