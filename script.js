// when the button named click me is clicked, the html calls the function, textButton, and it changes the text
function textButton() {
  document.getElementById("sentence").innerHTML = 'after button'
}

// when the button, click to see the kitten is clicked, the html calls the function, kittenButton, and the javascript code changes the image
function kittenButton() {
  document.getElementById("image").src = './images/kitten.jfif'
}

// when the button, change background is clicked, the html calls the function, backgroundButton, and the javascript code that is in the function, backgroundButton, changes the background color
function backgroundButton() {
  document.getElementById("background").style.backgroundColor = 'powderblue'
}

// when the button, make the date appear, is clicked, the html calls the function, time, from the javascript and the date appears
function time() {
  document.getElementById("appear").innerHTML = Date()
}

//code for index2.html
// when the button named change font and more, is clicked, the function is called and the javascript code that is inside the function changes the colour, font and size of the text
function font() {
  document.getElementById("text").style.color = 'blue'
  document.getElementById("text").style.fontFamily = 'cursive,charcoal,sans-serif'
  document.getElementById("text").style.fontSize = '200%'
}