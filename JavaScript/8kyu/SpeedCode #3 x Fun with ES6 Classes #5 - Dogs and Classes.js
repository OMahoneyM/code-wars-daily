// Description:
// --------------------------------------
// Objective

// Preloaded for you is a class Dog:
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

// You are then given a working class Labrador as your initial code.

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

// Shorten it so that it meets the strict character count requirements for this Kata.

// Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D


// Solution:
// --------------------------------------
class Labrador extends Dog{
    constructor(name, age, gender, master) {
        super(name, age, gender, "Labrador", "Large", master, true)
    }
}

var edward = new Labrador("Edward", 3, "Male", "Emma")
console.log(edward.name)
console.log(edward.age)
console.log(edward.gender)
console.log(edward.species)
console.log(edward.legs)
console.log(edward.size)
console.log(edward.master)
console.log(edward.loyal)