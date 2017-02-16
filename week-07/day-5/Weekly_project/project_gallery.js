var images = [
  "url(./img/starter.jpg)",
  "url(./img/cic2.jpg)",
  "url(./img/cic3.jpg)",
]

var rightbutton = document.querySelector(".right_button")
var leftbutton = document.querySelector(".left_button")

var img = document.querySelector('.picture')

var i = 0
img.style.backgroundImage = images[i]

function right_direction(){
  i++
  if (images.length > i) {
    img.style.backgroundImage = images[i]
  } else {
    img.style.backgroundImage = images[0]
    i = 0;
  }
}

function left_direction(){
  i--
  if ( i < 0) {
    i = images.length - 1;


    //   } else {
    // img.style.backgroundImage = images[i]


  }
      img.style.backgroundImage = images[i]
}

rightbutton.addEventListener("click", right_direction)
leftbutton.addEventListener("click", left_direction)
