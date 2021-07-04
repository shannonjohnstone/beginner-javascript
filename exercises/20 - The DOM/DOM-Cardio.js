// Make a div
const myDiv = `<div class="wrapper"></div>`
// add a class of wrapper to it

// put it into the body

// make an unordered list

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const myList = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
`

const divFragment = document.createRange().createContextualFragment(myDiv)
const divWrapper = divFragment.querySelector('.wrapper')
divWrapper.insertAdjacentHTML("afterbegin", myList)

document.body.append(divFragment)
// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const myImage = `
  <img src="https://picsum.photos/500" width="250" class="cute" alt="Cute puppy" />
`
divWrapper.insertAdjacentHTML("afterbegin", myImage)

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myParagraphs = `
  <div class="paragraphsDiv">
    <p>One paragraph</p>
    <p>Two paragraph</p>
  </div>
`
const ul = document.querySelector("ul")
ul.insertAdjacentHTML('afterbegin', myParagraphs)

// add a class to the second paragraph called warning
// remove the first paragraph
const pTagDiv = document.querySelector('.paragraphsDiv')
pTagDiv.children[1].classList.add("warning")
pTagDiv.children[0].remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard({ name, age, height }) {
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete">Delete</button>
    </div>
  `
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDivTemplate = `<div class="cards"></div>`
// Have that function make 4 cards
const playerData = [
  { name: "Tom", age: 29, height: "180cm" }, 
  { name: "Tom", age: 29, height: "180cm" }, 
  { name: "Tom", age: 29, height: "180cm" }, 
  { name: "Tom", age: 29, height: "180cm" }
]

const playerCards = playerData.map(generatePlayerCard)
const cardsDivFragment = document.createRange().createContextualFragment(cardsDivTemplate)
const cardsDiv = cardsDivFragment.querySelector('.cards')

cardsDiv.insertAdjacentHTML('afterbegin', playerCards)
document.body.prepend(cardsDiv)
const deleteButtons = document.querySelectorAll('.delete')

deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => event.currentTarget.parentElement.remove())
})
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
