"use strict";

let a = 4;
const b = 5;
let c; //= undefined
let d = null;
console.log(c, d);


//...
let x = 5;
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

let i = 4; //5
let j = 3; //2
// i++; //i, i = i + 1;
// ++i; //i = i + 1; i

// console.log(i++ + ++j); //8
   //j + (4   + 5 - 3   - 2)
j += i++ + i - j-- - j; //7
console.log(j);

const t = true, f = false, tt = true, ff = false;

console.log(!(t || tt));

console.log(j < 6 ? 'large' : 'small');

console.log(typeof j, typeof person, typeof array, typeof t, typeof s3);

const theDay = 2;
switch (theDay) {
  case 1: case 2:
    document.write("Again work!!!"); break;
  case 5:
    document.write("Finally Friday"); break;
  case 6:
    document.write("Super Saturday"); break;
  case 0:
    document.write("Sleepy Sunday"); break;
  default:
    document.write("I'm looking forward to this weekend!");
}

i = 0; //3
while (i < 3) { //2? 3?
  document.write("*"); //***
  i++;
}

i = 0; //4
do { //4?
  document.write("*"); //****
} while (i++ < 3);

       //6
for (let i = 0; i < 5; i = i + 2) { //2? 3?
  document.write("*"); //***
}

console.log(">>>>BEGIN FOR OF");
console.log(array);
for(let v of array) {
  console.log(v);
}
console.log(">>>>BEGIN FOR IN");
for(let i in array) {
  console.log(`[${i}]: ${array[i]}`);
}
console.log(">>>>END");