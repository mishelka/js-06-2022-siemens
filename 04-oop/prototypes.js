const genericPerson = Object.create(null); //vytvori prazdnu instanciu objektu

genericPerson.name = 'Michaela';
genericPerson.age = 38;
genericPerson.describe = function() {
  return this.name + ', ' + this.age;
}

console.log(genericPerson);
console.log(genericPerson.describe());

//inheritance
const genericEmployee = Object.create(genericPerson);
genericEmployee.name = 'Peter';
genericEmployee.age = 20;
genericEmployee.jobTitle = 'engineer';
genericEmployee.describe = function() {
  return this.name + ', ' + this.age + ', ' + this.jobTitle;
}

console.log(genericEmployee);
console.log(genericEmployee.describe());

//let's create a few more objects from the prototype
const p1 = Object.create(genericPerson);
p1.name = 'p1 - Peter';
p1.age = 25;
const e1 = Object.create(genericEmployee);
e1.name = 'e1 - Maria';
e1.age = 19;
e1.jobTitle = 'frontend developer';

//constructor functions - defines a "Class"
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p2 = new Person('p2 - Marian', 20);

Person.prototype.describe = function() {
  return this.name + ", " + this.age;
}

//inheritance
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype); //this is actual inheritance
Employee.prototype.constructor = Employee; //constructor needs to be attached to the prototype
Employee.prototype.describe = function() {
  const str = Object.getPrototypeOf(Object.getPrototypeOf(this)).describe.call(this);
  return str + ", " + this.jobTitle;
}
const e2 = new Employee('e2 - Gabika', 75, 'senior software architect');

const persons = [p1, e1, p2, e2];
persons.forEach(p => console.log(p));
persons.forEach(p => console.log(p.describe()));