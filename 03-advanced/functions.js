sum(4, 5);

function sum(x, y) {
  return x + y;
}

sum(4, 5);
//sum2(4, 5); //ne!

const sum2 = function (x, y) {
  return x + y;
}

sum2(4, 5);
//sum3(4, 5); //ne!
const sum3 = (x, y) => x + y;

const result = sum3(4, 5);

const greetMe = function (name) {
  if(!name) {
    return;
  }
  return "Hello " + name;
}

const greetMe2 = name => {
  console.log("Jahodka " + name);
  //no return => returns undefined
}
console.log(greetMe2("Miska"));

let x = 3;
function changeX(x) {
  x = 10;
}
changeX(x);

console.log(x);

const car = { brand: 'Toyota', manufactureDate: 2020 };
//toto je kopia REFERENCIE na TEN ISTY OBJEKT
const car2 = car;
//toto je kopia objektu, nova referencia:
//const car2 = {...car};//Object.create(car);
//{...abc} - toto je "object desctructuring"
//[...abc] - "array desctructuring"
function changeCar(car) {
  car.brand = 'BMW';
}
changeCar(car2);
console.log(car);

const a = 45;

{
  let a = 667;
}

function walk(walkingStyle) {
  walkingStyle();
}

function walkAsADog() {
  console.log("walking as a dog");
}

function walkAsACat() {
  console.log("walking as a cat");
}

walk(walkAsADog);
walk(walkAsACat);

const defaultParamsExample = (c, a=400, b=20) => a + b + c;

console.log(defaultParamsExample(10));
console.log(defaultParamsExample(10, 5));
console.log(defaultParamsExample(10, 5, 7));

