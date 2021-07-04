console.log("Etch a sketch works!")

const getElement = (selector) => document.querySelector(selector)
const getRandomNumber = (max) => Math.floor(Math.random() * max);
const seRandomHsl = () => `hsl(${Math.random() * 360}, 100%, 50%)`;

// find and select elements
const canvas = getElement("#etch-a-sketch")
const shakeButton = getElement(".shake")

// setup canvas
const canvasContext = canvas.getContext("2d");
canvasContext.lineJoin = "round";
canvasContext.lineCap = "round";
canvasContext.lineWidth = 40;
canvasContext.strokeStyle = seRandomHsl();

const { width, height } = canvas
let x = getRandomNumber(width)
let y = getRandomNumber(height)

// draw functions
const draw = (key) => {
  const MOVEMENT_AMOUNT = 50;

  canvasContext.beginPath();
  canvasContext.moveTo(x, y);
  
  switch (key) {
    case "ArrowUp": {
      y -= MOVEMENT_AMOUNT;
      break;
    }
    case "ArrowRight": {
      x += MOVEMENT_AMOUNT;
      break;
    }
    case "ArrowDown": {
      y += MOVEMENT_AMOUNT;
      break;
    }
    case "ArrowLeft": {
      x -= MOVEMENT_AMOUNT;
      break;
    }
    default:
      break;
  }
  
  canvasContext.strokeStyle = seRandomHsl();
  canvasContext.lineTo(x, y);
  canvasContext.stroke();
}

draw() // draw initial starting point

// handlers
const handleKey = (e) => {
  const { key } = e

  if (key?.includes("Arrow")) {
    e.preventDefault(); // prevent window scrolling
    draw(key)
  }
}

// clear/shake 
const clearCanvas = () => {
  canvas.classList.add("shake");
  canvasContext.clearRect(0, 0, width, height);
  canvas.addEventListener("animationend", () => {
    canvas.classList.remove("shake")
    draw();
  }, { once: true }) // setting once: true tells the event handler to remove itself once its finished
}

// handle arrow keys
window.addEventListener('keydown', handleKey)
shakeButton.addEventListener("click", clearCanvas)

/**
 * Notes
 * 
 * For the most part everything in this exercise standard already knew about JS
 * 
 * animationEnd - Knew about "animationEnd" but never had a reason to use it
 * once: true - Knew about "once end" but never had a reason to use it
 */