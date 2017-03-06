document.getElementById("btn").addEventListener("click", randomizer);

function randomizer() {
  var crazy = randomCrazy[Math.floor(Math.random() * randomCrazy.length)];

  document.getElementById("crazyContainer").style.display = "block";
  document.getElementById("crazyContainer").innerHTML = crazy;
  console.log(crazy)
}

var randomCrazy = [
  'Menj oda egy idegenhez és kérd meg, hogy legyen a barátod.',
  'Hívd fel az IT támogatást. Oszd meg velük, hogy pisilned kell.',
  'Ragassz egy darab WC papírt valamelyik cipőtalpadra.'
  'Hívd fel az IT támogatást és mondd el nekik, hogy magányos vagy.',
  'Játszd el, hogy anyáddal üvöltözöl telefonon.',
  'Ölelj meg egy ismeretlent. Aztán állj tovább.',
  'Versenyezz a lépcsőn lefelé egy idegennel. Utána üvöltsd felé, hogy "győztem!".'
]
