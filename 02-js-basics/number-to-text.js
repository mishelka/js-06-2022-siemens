//Test on inputs 234 and 2132
//const numberToTest = "234";
numberToText(13534);

//TODO: Fix main function
function numberToText(num) {
    let number = +num;

    if(number >= 1000) {
        writeNumber(number % 1000);
        writeNumber(1000);
        number %= 1000;
    }

    if(number >= 100) {
        writeNumber(number / 100);
        writeNumber(100);
        number %= 100;
    }

    if(number <= 20) {
        writeNumber(number);
    } else if(number < 100) {
        writeNumber(number / 10 * 10);
        if(number % 10 == 0){
            writeNumber(number % 10);
        }
    }
}

function writeNumber(number){
    switch(number){
        case 1: console.log("one"); break;
        case 2: console.log("two"); break;
        case 3: console.log("three"); break;
        case 4: console.log("four"); break;
        case 5: console.log("five"); break;
        case 6: console.log("six"); break;
        case 7: console.log("seven"); break;
        case 8: console.log("eight"); break;
        case 9: console.log("nine"); break;
        case 10: console.log("ten"); break;
        case 11: console.log("eleven"); break;
        case 12: console.log("twelve"); break;
        case 13: console.log("thirteen"); break;
        case 14: console.log("fourteen"); break;
        case 15: console.log("fifteen"); break;
        case 16: console.log("sixteen"); break;
        case 17: console.log("seventeen"); break;
        case 18: console.log("eighteen"); break;
        case 19: console.log("nineteen"); break;
        case 20: console.log("twenty"); break;
        case 30: console.log("thirty"); break;
        case 40: console.log("forty"); break;
        case 50: console.log("fifty"); break;
        case 60: console.log("sixty"); break;
        case 70: console.log("seventy"); break;
        case 80: console.log("eighty"); break;
        case 90: console.log("ninety"); break;
        case 100: console.log("hundred "); break;
        case 1000: console.log("thousand "); break;
    }
}