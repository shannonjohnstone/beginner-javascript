console.log("creating with strings script works!")

const item = document.querySelector('.item')

const src = "https://picsum.photos/500";
const desc = "Cute pup";

const myHTML = `
  <div class="wrapper">
    <h2>Cute pup!</h2>
    <img src="${src}" alt="${desc}" />
  </div>
`

item.innerHTML = `
  <div><h1>Hey, how are you!</h1></div>
`
/**
 * html strings are not turned into actually accessible HTML DOM elements until its rendered into the DOM
 * document.createRange().createContextualFragment allows for string to be turned into accessible HTML before its inserted into the DOM
 */
const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.append(myFragment)