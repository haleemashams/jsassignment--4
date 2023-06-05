document.write("<h1>FUNCTIONS</h1>");
document.write("<h4> ANSWER NO:01</h4>");

function adds(){
    let today=new Date();
    alert(today);
    document.write(today);
}
adds();
document.write("<br> <hr>")
////////////////////////////////////////////////////////////////
document.write("<h4> ANSWER NO:02</h4>");

function name(){
    let fname=prompt("Enter your first name");
    let lname=prompt("Enter your last name");
    let full=fname+lname;
    document.write("<b>Hello!</b>"+full);
}
name();
document.write("<br> <hr>")
//////////////////////////////////////////
document.write("<h4> ANSWER NO:03</h4>");
function num(){
    let fnum=parseInt( prompt("Enter your first number"));
    let lnum=parseInt( prompt("Enter your second number"));
    let add=fnum+lnum;
    document.write("<b>The additional value of Num 01 :</b>",fnum ," <b>and Num 02 :</b>",lnum," <b>is :</b> ",add);
}
num();
document.write("<br> <hr>")

////////////////////////////////////////////////////////////////////////
/////calculator//////////////////////////
document.write("<h4> ANSWER NO:04</h4>");



const operter = prompt("Enter Operetor (either +, -, * or /):");
const number1 = parseFloat(prompt("Enter 1st value"));
const number2 = parseFloat(prompt("Enter 2nd value"));

function add() {
    let sum = number1 + number2;
    return sum
}
function sub() {
    let min = number1 - number2;
    return min
}
function mul() {
    let multiply = number1 * number2;
    return multiply;
}
function div() {
    let divide = number1 / number2;
    return divide;
}
let val = 0;

if (operter == "+") {
    val = add(number1, number2);
}
else if (operter == "-") {
    val = sub(number1, number2);
}
else if (operter == "*") {
    val = mul(number1, number2)
}
else if (operter == "/") {
    val = div(number1, number2);
}

document.write("<bvalue 01:</b> " + number1 + " <b>value 02:</b> " + number2 + " <b>RESULT: </b>" + val);
document.write("<br> <hr>")

/////////////////////////////////////////////////////////////////////////////////////
document.write("<h4> ANSWER NO:05</h4>");

function squareNumber(number) {
    var result = number * number;
    return result;
  }
  
  // Example usage
  var number = parseInt(prompt("Enter any number"));
  var squared = squareNumber(number);
  document.write("<br><b>The square of </b>" + number + "<b> is:</b> " + squared);
document.write(" <hr>")

  /////////////////////////////////////////////////////////////
document.write("<h4> ANSWER NO:06</h4>");

  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      var result = 1;
      for (var i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  // Example usage
  var number = parseInt(prompt("Enter any number "));
  var factorialResult = factorial(number);
  document.write("<b>The factorial of </b>" + number + "<b> is:</b> " + factorialResult);
document.write("<br> <hr>")

  ///////////////////////////////////////////////////////////////
  document.write("<h4> ANSWER NO:07</h4>");

  function displayCounting() {
   let start = parseInt(prompt("Enter the start number:"));
    let end = parseInt(prompt("Enter the end number:"));
  
    if (!isNaN(start) && !isNaN(end)) {
      if (start <= end) {
        for (var i = start; i <= end; i++) {
          document.write(i + "<br>");
        }
      } else {
        for (var i = start; i >= end; i--) {
          document.write(i + "<br>");
        }
      }
    } else {
      document.write("Invalid input. Please enter valid numbers.");
    }
  }
    displayCounting();
//////////////////////////////////////////////////////////////////////////
document.write("<h4> ANSWER NO:08</h4>");

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
  
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
  
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  
  // Example usage
  var baseLength = parseInt(prompt("Enter base Length num"));
  var perpendicularLength = parseInt(prompt("Enter perpendicular Length num"));
  var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
document.write("The hypotenuse length is: " + hypotenuseLength);
document.write("<br> <hr>")
////////////////////////////////////////////////////////////////
document.write("<h4> ANSWER NO:09</h4>");

function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
  }

  var width = parseInt(prompt("enter the area of rectangular width"));
  var height = parseInt(prompt("enter the height of the area of rectangular"));
  var area2 = calculateRectangleArea(width, height);
  document.write("The area of the rectangle is: " + area2);  


//////////////////////////////////////////////////////////////
document.write("<h3> ANSWER NO:10</h3>");
  function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
  }
  
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area);
  }
  var radius = prompt("enter the radius",'');
calcCircumference(radius);
calcArea(radius);
document.write("<br> <hr>")

