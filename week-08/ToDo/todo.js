function init() {
  getItems (createList)
  var button = document.querySelector("button")
  button.addEventListener("click", createTodoItem);
}

init ()



// function show_list() {
//   var input = document.getElementById('add');
//   putIntoList(input.value);
//   input.value= ""
// }

function createList(todos) {
  todos.forEach (function(item){
    createListItem(item.text)
  })
}

function createListItem(text) {
  var listelement = document.createElement("li")
  listelement.textContent = text
  var trash = document.createElement("i")
  var checkbox = document.createElement("i")
  checkbox.className = "ion-ios-checkmark-outline"
  trash.className = "ion-ios-trash-outline"
  listelement.appendChild(trash)
  listelement.appendChild(checkbox)
  var parent_list = document.querySelector("ul")
  parent_list.appendChild(listelement)
  trash.addEventListener("click", deleteIt);
  //
  // var checkbox2 = document.createElement("i")
  // checkbox2.className = "ion-ios-checkmark"
  checkbox.addEventListener("click", checkIt);
}

function deleteIt(event) {
  var main = document.querySelector("ul")
  main.removeChild(event.target.parentElement)
}

function checkIt(event) {
  event.target.classList = "ion-ios-checkmark"
  var modTextColor = document.querySelector("li")

  // event.target.className = "ion-ios-checkmark-outline"
}

function getItems(readyFunction) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://mysterious-dusk-8248.herokuapp.com/todos', true);
  httpRequest.send(null);
  httpRequest.onreadystatechange = function (){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      readyFunction(JSON.parse(httpRequest.response))
    }
  };
}

//updateItem(id, readyFunction)
//deleteItem(id, readyFunction)
//createItem(data, readyFunction) (kihagyható)

// dokumentáció
