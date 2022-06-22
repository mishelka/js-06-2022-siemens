const str = "TOto je nejaky dlhy retazec";
console.log(str.substring(5, str.length));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.split(' '));
console.log(str.includes('k') || str.includes('K'));

const d1 = new Date();
const d2 = new Date(2015, 4, 12);
console.log(d1.getTime() < d2.getTime());