//Custom function
function calculateTip() {
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  //validation
  if(billAmount === "" || serviceQuality === 0) {
    return window.alert("Kérlek add meg a szükséges adatokat a kalkuláció elkészítéséhez!")
  }

  //check to see if this input is empty or less than or equal to 1
  if(numPeople === "" || numPeople <= 1) {
    numPeople === 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //calculation
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total);

  //display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls the custom function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
