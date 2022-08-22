// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  } 
};
Person.prototype.poop = function (){
  this.stomach = [];
}
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const branden = new Person('Branden', 30);
console.log(branden.toString());
branden.eat('pizza');
console.log(branden.stomach);
branden.poop();
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
};
Car.prototype.drive = function(distance){
  const driveableMiles = this.tank * this.milesPerGallon;
  console.log('How far can i go bro?', driveableMiles);
  if(distance <= driveableMiles){
    this.tank = this.tank - (distance / this.milesPerGallon);
    this.odometer = this.odometer + distance;
  } else{
    this.odometer = this.odometer + driveableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}
// const mazda = new Car('Miata', 41);
// // console.log(mazda);
// mazda.fill(15);
// console.log(mazda.fill(15));
// mazda.drive(700);
// console.log(mazda.drive(700));

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name,age,favoriteToy) {
Person.call(this, name, age);
this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}!`;
}
const anna = new Baby('Anna', '1 Month', 'Rattle Snakes');
anna.play();
console.log(anna);
console.log(anna.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - when none of the other bindings apply... this will return in the browser windo
  2. implicit Binding - left of the dot is when functions are initialized with objects
  3. new bindings - when a function is created this points to the newly created object...
  4. explicit - .call or .apply or .bind ( pass arguments one by one and it initialized immediately... passes arguments through an array and (also?) immediately invokes the functions.... pass arguments one by one, but it does not initialize the functions immediately, rather can be used later.)
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
