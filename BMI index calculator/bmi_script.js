// window.addEventListener("keydown")

var meaning = document.getElementById("meaning");

//Custom function
function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value/100;
  var man = document.getElementById("man").checked;
  var woman = document.getElementById("woman").checked;
  var gender = document.querySelector('input[name="gender"]:checked').value;

  //validation
  if(weight === "" || height === "") {
    return window.alert("Kérlek add meg a szükséges adatokat a kalkuláció elkészítéséhez!")
  }

  //calculation expanded by gender
  var index = 0;

    if (gender == "Férfi") {
      index = (weight - 7) / height / height;
    } else {
      index = weight /  height / height;
    }

    index = Math.round(index);

  //display result in number
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = index;

  //display meaning of the result
  if(index < 16) {
    meaning.style.display = "block";
    meaning.innerHTML = "Súlyos soványág";

  } else if(index >= 16 && index < 17) {
    meaning.style.display = "block";
    meaning.innerHTML = "Mérsékelt soványság";

  } else if(index >= 17 && index < 18.5) {
    meaning.style.display = "block";
    meaning.innerHTML = "Enyhe soványság";

  } else if(index >= 18.5 && index < 25) {
    meaning.style.display = "block";
    meaning.innerHTML = "Normál testsúly";

  } else if(index >= 25 && index < 30) {
    meaning.style.display = "block";
    meaning.innerHTML = "Túlsúlyos";

  } else if(index >= 30 && index < 35) {
    meaning.style.display = "block";
    meaning.innerHTML = "I. fokú elhízás";

  } else if(index >= 35 && index < 40) {
    meaning.style.display = "block";
    meaning.innerHTML = "II. fokú elhízás";

  } else if(index >= 40) {
    meaning.style.display = "block";
    meaning.innerHTML = "III. fokú (súlyos) elhízás";
  }
}

//Hide the result on load
document.getElementById("result").style.display = "none";
document.getElementById("meaning").style.display = "none";

//Clicking the button calls the custom function
// document.getElementById("calculate").onclick = function() {
//   calculateBMI();
// };

document.getElementById("calculate").addEventListener("click", calculateBMI);
