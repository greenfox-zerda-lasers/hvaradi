'use strict'

function itsaclosure(myName) {
  var intro = "Who knows what closure is? ";

  function whoisit() {
    return intro + myName;
  }
  return whoisit();
};

console.log(itsaclosure('Me'));
