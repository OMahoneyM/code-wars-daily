// Description:
// --------------------------------------
// In Fun with ES6 Classes #3 - Cuboids, Cubes and Getters, we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed. However, in the previouos exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number of possibilities to the dimensions of the cuboid.

// However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

// Task
// Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

// No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax and features to complete this Kata.

// Articles of Interest
// Below are some articles of interest that may help you complete this Kata:

//     Setters - Mozilla Developer
//     What are getters and setters? - Stack Overflow
//     ES6 Classes Intro (includes section on getters and setters)

  
// Solution:
// --------------------------------------
class Cube {
    constructor(length){
      this.length = length
    }
    
    get surfaceArea(){
      return 6 * this.length ** 2;
    }
    set surfaceArea(newArea){
      this.length = Math.sqrt(newArea / 6)
    }
    
    get volume(){
      return this.length ** 3
    }
    set volume(vol){
      this.length = Math.cbrt(vol)
    }
}

let cube1 = new Cube(1)
console.log(cube1.length, 1)
console.log(cube1.volume, 1)
console.log(cube1.surfaceArea, 6)
cube1.length = 2
console.log(cube1.length, 2)
console.log(cube1.volume, 8)
console.log(cube1.surfaceArea, 24)
