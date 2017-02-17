'use strict';

var firstNumber = document.querySelector('#firstNumber');
var secondNumber = document.querySelector('#secondNumber');
var button = document.querySelector('button');
var result = document.querySelector('#result');


button.addEventListener('click', function () {
  result.innerText ="";
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/sum');
  xhr.setRequestHeader('Content-Type', 'application/json');
  var numbersFromUser = {
    "first": firstNumber.value,
    "second": secondNumber.value
  };

//elküldi az adatokat a szervernek
  xhr.send(JSON.stringify(numbersFromUser));

//megjeleníti az elküldött resultot az oldalon, ha a servernek sikerült visszaküldenie az adatot
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      // var result2 = document.createElement('li');
      // result2.innerText = xhr.responseText; //responsetext = az a text amit a szerver visszaküld
      // result.appendChild(result2);
      getData()
    }
  }
  firstNumber.value ="";
  secondNumber.value ="";
})

function getData(){
   var httpRequest = new XMLHttpRequest();
   httpRequest.open('GET', 'http://localhost:3000/getall', true);
   httpRequest.send(null);
   httpRequest.onreadystatechange = function () {
     if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
           var all_sum = JSON.parse(httpRequest.responseText);
           console.log(all_sum);
           all_sum.forEach(function(item){
             result.innerHTML += '<li>' + item.No1 + ' + ' + item.No2 + ' = ' + item.Result + '</li>';
           });
          //  loading.classList.add('hide');
         } else {
           alert('There was a problem with the request.');
         }
       }
   }
}

//get request indítása
// function getall(){
//       var req = new XMLHttpRequest();
//       req.open('GET', 'http://localhost:3000/getall');
//       // req.setRequestHeader("Content-Type", "application/json")
//       req.send();
//       req.onreadystatechange = function () {
//   if(req.readyState === XMLHttpRequest.DONE) {
//     console.log(req.response);
//     // var resultshit = JSON.parse(req.response);
//     // console.log(resultshit);
