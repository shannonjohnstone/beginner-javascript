// // querySelector selects the first match it finds
// const firstMatchedPTag = document.querySelector("p")

// /* querySelector selects all matches found
//  * This will return a NodeList of elements
//  * NodeLists is a array like collection of data
//  * NodeLists can be iterated over uses forEach or converted into a really array using Array.from
// */
// const allPTags = document.querySelectorAll("p")
// console.log(allPTags)

// /* querySelector allows you to select items inside already selected items
// */
// const item = document.querySelector(".item")
// const pTagInItem = item.querySelector("p")
// console.log(pTagInItem)

// const heading = document.querySelector("h2")

// heading.innerHTML - returns or sets HTML within an element
// heading.innerText - returns or  sets text with an element, this is CSS aware
// heading.textContent - returns or sets text content of an element, it is not CSS aware and will return all decedents
// insertAdjacentText - will insert text into an element or node

const niceImage = document.querySelector(".nice")

function toggleRound() {
  niceImage.classList.toggle('round')
}

console.log(niceImage.attributes, "niceImage.attributes")
niceImage.addEventListener('click', toggleRound)