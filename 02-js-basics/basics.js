"use strict";

let a = 4;
const b = 5;
let c; //= undefined
let d = null;
console.log(c, d);


//...
let j = 5;
let s1 = 'ab\"\'c';
let s2 = "abc";
let s3 = `
  <h1>${s1}</h1>
  <button>Click me!</button>
  <div>
    Toto je divko hehe.
  </div>
  `;
const s4 = "34";
const bool1 = true;
const bool2 = false;
const inf = Infinity;
console.log(inf);
console.log(Number.parseInt(s3));
console.log(Number.parseInt(s4));
console.log(4 * s4);
console.log(4 + s4); //konkatenacia, ak je aspon jeden string
console.log(4 + Number.parseInt(s4)); //ak vsetky argumenty cisla, potom matematicke plus
const s10 = "abc";

// console.log("" === undefined);
// console.log("" == null);
// console.log(0 == undefined);
// console.log(0 === undefined);
console.log(s2.localeCompare(s10));
console.log('RightArrow'.localeCompare(s10));

//polia a objekty
const person = {
  firstName: "Michaela",
  lastName: "Bacikova",
  age: 30
};
const array = [1, 2, 3, 4];

console.log(person, array);

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.age);

console.log(array[3]);

array[100] = 'jahoda';
console.log(array);
person.id = "SP189432";
console.log(person);

delete array[3];
delete person.age;

console.log(array, person);

array['abc'] = 'pes';
array.push('macka');
array.push(true);
array.push(false);
array.push(person);
console.log(array);
console.log(array[104].firstName);
//console.log(array.104.firstname); //no!
console.log(array['abc']);
console.log(array.abc); //lebo index abc je string
