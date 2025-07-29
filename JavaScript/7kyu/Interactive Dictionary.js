// Description:
// --------------------------------------
// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana

// Good luck and happy coding!


// Solution:
// --------------------------------------
class Dictionary {
  constructor() {
    this.map = new Map()
  }
  
  newEntry(key, value) {
    this.map.set(key, value)
  }
  
  look(key) {
    return this.map.get(key) || `Can't find entry for ${key}`
  }
}

let d = new Dictionary()
d.newEntry("Apple", "A fruit")

console.log(d.look("Apple"))
console.log(d.look("Car"))


// Alt Solution:
// --------------------------------------
class Dictionary {
  constructor() {
    this.map = {}
  }
  
  newEntry(key, value) {
    this.map[key] = value
  }
  
  look(key) {
    return this.map[key] || `Can't find entry for ${key}`
  }
}

let e = new Dictionary()
e.newEntry("Apple", "A fruit")

console.log(e.look("Apple"))
console.log(e.look("Car"))