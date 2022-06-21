class Person {
  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return 'Person called ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, age, title) {
    super(name, age);
    this.title = title;
  }
  describe() {
    return super.describe() +
      ' (' + this.title + ')';}
}

const p1 = new Person("Jan", 16);
const p2 = { name: "Juraj", age: 22 };
const p3 = new Person("Miro");
console.log(p1, p2, p3);
console.log(p1.describe());

const e1 = new Employee("Michal", 28, "engineer");
console.log(e1);
console.log(e1.describe());

class Door {
  constructor(opened = false) {
    this.opened = opened;
  }

  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
}

const door = new Door();
door.open();
console.log(door.opened ? "opened" : "closed");

console.log(e1 instanceof Employee);
console.log(e1 instanceof Person);
console.log(e1 instanceof Object);
console.log(p1 instanceof Employee);

new Door().open();

const persons = [p1, p3, e1];
console.log(persons.length);

for(let i = 0; i < persons.length; i++) {
  console.log(persons[i].describe());
}

for(let person of persons) {
  console.log(person.describe());
}

for(let p in persons) {
  console.log(persons[p].describe());
}

persons.forEach(p => console.log(p.describe()));

console.log("removing employee Michal");
persons.pop();
persons.forEach(p => console.log(p.describe()));
persons.forEach(function(p) {
  console.log(p.describe());
});
console.log("adding employee Michal");
persons.push(e1);
persons.forEach(p => console.log(p.describe()));

const arr = [1, 4, 6, 8];
const arr2 = [4, 6, 7];
console.log(arr.join('-'));
console.log(arr.concat(arr2));
console.log([...arr, ...arr2, ...persons]);

console.log(persons.filter(p => 'M'.localeCompare(p.name.charAt(0)) === 0));
console.log(persons.filter(function(p) {
  return 'M'.localeCompare(p.name.charAt(0)) === 0;
}));
console.log("FILTER: ", persons.filter(p => p.age >= 18 && p.age <= 30));
console.log("NAJDENA:", persons.find(p => p.age >= 18 && p.age <= 30));

console.log(persons.map(p => p.name));
console.log(persons.map(p => p.age));

console.log(persons.every(p => p.age >= 18));
console.log(persons.some(p => 'M'.localeCompare(p.name.charAt(0)) === 0));

console.log(Array.from(arr));
console.log(arr.reduce((total, value) => total + value));