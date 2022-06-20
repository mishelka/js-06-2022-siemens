/*
  TODO: Expected output from the program for size = 10
             *
            ***
           *****
          *******
         *********
        ***********
       *************
      ***************
     *****************
    *******************
*/
const size = 10;

function printTriangle() {
    const number = prompt("Enter size", 10);
    const parsed = Number.parseInt(number);
    if(!isNaN(parsed)) {
      let i = 0;
      let str = '';
      while (i < parsed) {
        str = getChars(size - i - 1, ' ');
        str += getChars(2 * (i + 1), '*');
        console.log(str);
      }
    } else {
      console.log("Sorry that's not a number");
    }
}

function getChars(length, character) {
	let str = '';
	
	for(let i = 0; i < length; i++) {
		str += character;
	}
	
	return str;
}