// querySelector selects the first match it finds
const firstMatchedPTag = document.querySelector("p")

/* querySelector selects all matches found
 * This will return a NodeList of elements
 * NodeLists is a array like collection of data
 * NodeLists can be iterated over uses forEach or converted into a really array using Array.from
*/
const allPTags = document.querySelectorAll("p")
console.log(allPTags)

/* querySelector allows you to select items inside already selected items
*/
const item = document.querySelector(".item")
const pTagInItem = item.querySelector("p")
console.log(pTagInItem)