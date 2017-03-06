function colorClock(){

  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milli = date.getMilliseconds();

   if (seconds <= 9) {
    seconds = '0' + seconds;
  }

    if (minutes <= 9){
    minutes = '0' + minutes;
  }

  if (hours <= 9) {
    hours = '0' + hours;
  }

  var clockFace= hours + ':' + minutes + ':' + seconds;

  console.log(clockFace);

  var hexColor= '#' + hours + minutes + seconds;

  document.getElementById('clock').innerHTML = clockFace;
  document.body.style.background = hexColor;

  setTimeout(function() {colorClock()}, 1000);
}
colorClock();
