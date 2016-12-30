//Custom function
function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value/100;

  //validation
  if(weight === "" || height === 0) {
    return window.alert("Kérlek add meg a szükséges adatokat a kalkuláció elkészítéséhez!")
  }

  //calculation
  var index = weight /  height / height;
  index = Math.round(index);

  //display result
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = index;

  if(index < 16) {
    // var seriousSkinny = "Súlyos soványság"
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = "Súlyos soványág";
  } else if(index >= 16 && index < 17) {
    var skinny = "Mérsékelt soványság"
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = skinny;
  } else if(index >= 17 && index < 18.5) {
    var mildSkinny = "Enyhe soványság"
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = mildSkinny;
  } else if(index >= 18.5 && index < 25) {
    var normal = "Normál testsúly"
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = normal;
  } else if(index >= 25 && index < 30) {
    var overweight = "Túlsúlyos"
    document.getElementById("meaning").style.display = "block";
    document.getElementById("meaning").innerHTML = overweight;
  }
}

//Hide the result on load
document.getElementById("result").style.display = "none";
document.getElementById("meaning").style.display = "none";

//Clicking the button calls the custom function
document.getElementById("calculate").onclick = function() {
  calculateBMI();
};
