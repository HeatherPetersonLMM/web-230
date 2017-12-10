var programHeader = require('../header.js'); 

// start program

/*
    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.
*/ 
x = "Heather" + " ";
y = "Peterson";
today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
var num = 27;
n = num.toFixed(1);

// function 
function fullName(x,y) {
    return x + y;
}

function dateWriter(today) {
    if (dd<10) {
        dd = '0' + dd
      }
      
      if (mm<10) {
        mm = '0' + mm
      }
      
      today = yyyy + '-' + mm + '-' + dd;
      var date = today;

 }

function formatNumber(num,n) {
    return num + n;

}

function convertToInt() {

}

function convertToFloat() {

}


// output 
console.log("Hello my name is" + " " + fullName(x,y) + "!"); 
console.log("Today's date is" + " " + today.toDateString() + " " + "and the current temperature is" + " " + formatNumber(num,n));
console.log(programHeader);
console.log("\n");

// end program 