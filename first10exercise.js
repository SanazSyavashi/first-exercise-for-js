// 1
//Write a JavaScript program to display the current day and time
var today = new Date();
var day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
let todayName = `today is ${dayList[day]}`
console.log(todayName);
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let prepand = (hour > 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;
if ((hour === 0) && (prepand === "AM") && (min === 0) && (sec === 0)) {
    prepand = "MidNight";
} else if ((hour === 12) && (prepand === "PM") && (min === 0) && (sec === 0)) {
    prepand = 'Noon'
}
let currentTime = `current time is : ${hour} ${prepand} : ${min} minute : ${sec} secend!`;
console.log(currentTime)
    //2
    //Write a JavaScript program to print the contents of the current window.
function printCurrentWindow() {
    window.print();
}
//3
//Write a JavaScript program to get the current date mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
if (dd < 10) {
    dd = `0${dd}`
}
if (mm < 10) {
    mm = `0${dd}`
}
let todayDateType1 = `${mm}-${dd}-${yyyy}`;
let todayDateType2 = `${mm}/${dd}/${yyyy}`;
let todayDateType3 = `${dd}-${mm}-${yyyy}`;
let todayDateType4 = `${dd}/${mm}/${yyyy}`;
console.log(todayDateType1);
console.log(todayDateType2);
console.log(todayDateType3);
console.log(todayDateType4);
//4
//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
function rotate(inputString) {
    let inputStringArr = inputString.split("");
    let endingLater = inputStringArr[inputStringArr.length] - 1;
    inputStringArr.pop();
    inputStringArr.unshift(endingLater);
    return inputStringArr.join("");
}
//5
//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function determineLeapYear(inputYear) {
    if ((inputYear % 4 === 0) && (inputYear % 100 !== 0)) {
        return true;
    } else if (inputYear % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
//6
//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
let resultArr = []
for (let year = 2014; year < 2050; year++) {
    let day = new Date(year, 0, 1);
    if (day.getDay() === 0) {
        resultArr.push(year)
    }
}
//7
//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
function play(inputNum) {
    let randomNum = Math.floor(Math.random() * 10);
    if (inputNum === randomNum) {
        console.log("Good Work");
    } else {
        let result = `sorry the number was ${randomNum}`;
        console.log(result);
    }
}
//8
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
function fToC(inputF) {
    return (inputF - 32) * 5 / 9;
}
let cToF = function(inputC) {
        return inputC * 9 / 5 + 32;
    }
    //9
    //Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function defference(inputNum) {
    let sub = Math.abs(inputNum - 13);
    if (sub > 13) {
        return 2 * sub;
    }
    return sub;
}
//10
//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function computeSum(inputNum1, inputNum2) {
    if (inputNum1 === inputNum2) {
        return (inputNum1 + inputNum2) * 3
    }
    return inputNum1 + inputNum2;
}
//11
//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19
function computeDefference(inputNum) {
    if (inputNum > 19) {
        return (inputNum - 19) * 3;
    }
    return 19 - inputNum;
}
//12
// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
function checkGivenNum(num1, num2) {
    if ((num1 === 50) || (num2 === 50) || (num1 + num2 === 50)) {
        return true;
    }
    return false;
}
//13
//Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string
function addPy(inputString) {
    let firstsilab = inputString.slice(0, 2);
    if (firstsilab === "py") {
        return inputString;
    }
    return `Py${inputString}`;
}
//14
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function removeCharAtPosition(inputString, inputPosition) {
    return inputString.substring(0, inputPosition) + inputString.substring(inputPosition + 1);
}
//15
//Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
function createNewStringFromInputString(inputString) {
    var result = inputString.charAt(inputString.length - 1) + inputString.substring(1, inputString.length - 1) + inputString.charAt(0);
    return result;
}
//16
//Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
function front_back(inputString) {
    let firstChar = inputString.charAt(0);
    let result = `${firstChar}${inputString}${firstChar}`
    return result;
}
//17
//Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
function test3_7(inputNum) {
    if ((inputNum % 3 === 0) || (inputNum % 7 === 0)) {
        return true;
    }
    return false;
}
//18
//Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more
function front_back3(inputString) {
    if (inputString.length >= 3) {
        let last3Char = inputString.substring(inputString.length - 3);
        let result = `${last3Char}${inputString}${last3Char}`;
        return result;
    }
    return "Wrong input!"
}
//19
// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function start_spec_str(inputString) {
    if (inputString.length < 4) {
        return false;
    }
    let first4Char = inputString.slice(0, 4);
    if (first4Char === "Java") {
        return true;
    }
    return false;
}
//20
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    }
    return false;
}
