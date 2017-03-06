document.getElementById("btn").addEventListener("click", randomizer);

function randomizer() {
  var crazy = randomCrazy[Math.floor(Math.random() * randomCrazy.length)];

  document.getElementById("crazyContainer").style.display = "block";
  document.getElementById("crazyContainer").innerHTML = crazy;
  console.log(crazy)
}

var randomCrazy = [
  'Ask someone you dont know to be your friend.',
  'Call tech support. Tell them you have to pee.',
  'Tape a roll of toilet paper to one of your shoes.',
  'Call tech support and tell them you are lonely.',
  'Pretend you are yelling at your mother on the phone.',
  'Hug someone you don\'t know.',
  'Race someone you don\'t know down the hallway. Yell, "I win".'
]
