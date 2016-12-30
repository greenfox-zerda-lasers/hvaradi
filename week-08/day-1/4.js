// Create a constructor for creating Aircrafts,
// and one for creating Carriers,
// based on the specification in the python exam: https://github.com/greenfox-academy/zerda-exam-python-retake

function Aircraft(type) {
  this.type = type;
  if (this.type === 'F16') {
    this.base_damage = 30;
  }
  if (this.type === 'F35') {
    this.base_damage = 50;
  }
  this.ammo = 0;
}

Aircraft.prototype.fight = function() {
  return this.ammo * this.base_damage
  this.ammo == 0;
}

Aircraft.prototype.refill = function(ammo) {
  if (this.type === 'F16') {
    if (this.ammo + ammo <= 8) {
      this.ammo += ammo;
    }
  }
  if (this.type === 'F35') {
    if (this.ammo + ammo <= 12) {
      this.ammo += ammo;
    }
  }
}


var first_aircraft = new Aircraft('F16');
console.log(first_aircraft.ammo);
first_aircraft.refill(8);
console.log(first_aircraft.ammo);
console.log(first_aircraft.fight());
// console.log(first_aircraft.base_damage);
