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

const p1 = new Person("Jan", 22);
const p2 = { name: "Jan", age: 22 };
const p3 = new Person("Jan");
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