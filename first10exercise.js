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