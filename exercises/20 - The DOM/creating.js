console.log('creating script working!')

const myDiv = document.createElement('div')
const myParagraph = document.createElement('p')
const myImage = document.createElement('img')

myParagraph.textContent = "I am a P"
myParagraph.classList.add('special')
myImage.src = "https://picsum.photos/500"

myDiv.append(myParagraph)
myDiv.append(myImage)
document.body.append(myDiv)
document.body.insertAdjacentElement("afterBegin", myDiv)

const unorderedList = document.createElement('ul')
const listItemThree = document.createElement('li')
listItemThree.textContent = "Three"
unorderedList.append(listItemThree)

const listItemOne = document.createElement('li')
listItemOne.textContent = "One"
unorderedList.insertAdjacentElement("afterBegin", listItemOne)

const listItemTwo = document.createElement('li')
listItemTwo.textContent = "Two"
listItemOne.append(listItemTwo)

const listItemFour = document.createElement('li')
listItemFour.textContent = "Four"
listItemThree.append(listItemFour)

const listItemFive = document.createElement('li')
listItemFive.textContent = "Five"
unorderedList.insertAdjacentElement("beforeEnd", listItemFive)

document.body.insertAdjacentElement("afterBegin", unorderedList)