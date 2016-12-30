//Custom function
function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value/100;

  //validation
  if(weight === "" || height === "") {
    return window.alert("Kérlek add meg a szükséges adatokat a kalkuláció elkészítéséhez!")
  }

  //calculation
  var index = weight /  height / height;
  index = Math.round(index);

  //display result in number
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = index;

  //display meaning of the result
  if(index < 16) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "Súlyos soványág";

  } else if(index >= 16 && index < 17) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "Mérsékelt soványság";

  } else if(index >= 17 && index < 18.5) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "Enyhe soványság";

  } else if(index >= 18.5 && index < 25) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "Normál testsúly";

  } else if(index >= 25 && index < 30) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "Túlsúlyos";

  } else if(index >= 30 && index < 35) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "I. fokú elhízás";

  } else if(index >= 35 && index < 40) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "II. fokú elhízás";

  } else if(index >= 40) {
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "III. fokú (súlyos) elhízás";
  }
}

//Hide the result on load
document.getElementById("result").style.display = "none";
document.getElementById("meaning").style.display = "none";

//Clicking the button calls the custom function
document.getElementById("calculate").onclick = function() {
  calculateBMI();
};
