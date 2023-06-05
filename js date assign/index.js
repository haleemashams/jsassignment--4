document.write("<h1> DATE METHODS</h1>");
document.write("<h3> ANSWER NO:01</h3>");

let rightNow = new Date();
document.write(rightNow)
document.write('<hr></hr>')
////////////////////////////////////////////////////

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const m = new Date();
let monWord = month[m.getMonth()];
alert("Current Month is: "+monWord)

///////////////////////////////////////////////////

const days = ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"];

const d = new Date();
let dayWord = days[d.getDay()];
alert("Today is: "+dayWord)
//////////////////////////////////////////////////////

const y = new Date();
let yday = y.getDay();
if (yday === 0 || yday === 6) {
  alert("It's Fun day");
} else {
 alert("It's not Fun day");
}
////////////////////////////////////////////////////////////////////////

const x = new Date();
let xMonth = x.getMonth();
if (xMonth <16) {
  alert("“First fifteen days of the month")
  } else  {
    alert("“Last fifteen days of the month")}
    /////////////////////////////////////////////////////////////
document.write("<h3> ANSWER NO:06</h3>");

    let currentDay = new Date();
    document.write("<b>Current Day is: </b>"+currentDay +"<br>")

    let millisec = new Date();

//    let currMills =millisec.getMilliseconds();
   document.write("<b>Elapsed Millisec since: </b>"+millisec+"<br>")
    let minutes = new Date(100);

//    let currMinut =minutes.getMinutes();
   document.write("<b>Elapsed Minutes since: </b>"+minutes +"<br>")

////////////////////////////////////////////////////////////////////////////

const dt=new Date();
let hour=dt.getHours
let hours= hour>=12?"PM":"AM";
alert("It is: "+hours) 
document.write('<hr></hr>')

////////////////////////////////////////////////////////////////////////////////
document.write("<h3> ANSWER NO:08</h3>");

let newDate=new Date("2020-12-31");
document.write("Last Date: ",newDate)

document.write('<hr></hr>')
///////////////////////////////////////////////////////

const startingDate = new Date('June 18, 2015');

const currentDate = new Date();

const millisecondsPassed = currentDate - startingDate;

const daysPassed = Math.floor(millisecondsPassed / (1000 * 60 * 60 * 24));

alert(`Number of days passed since 1st Ramadan: ${daysPassed}`);
/////////////////////////////////////////////////////////////////////
document.write("<h3> ANSWER NO:10</h3>");

let right = new Date();
document.write(right ,"<br>")
let currtime=new Date();
let currentHour=currtime.getHours();
 currtime.setHours(currentHour-1)
document.write("1 hour ago: "+currtime ,"<hr>");
/////////////////////////////////////////////////////
document.write("<h3> ANSWER NO:11</h3>");


let year = new Date();
document.write("current year",year ,"<br>")
let curryear=new Date();
let currentyear=curryear.getFullYear();
 curryear.setFullYear(currentyear-100)
document.write("<b>100 years back :</b>"+curryear ,"<hr>");
////////////////////////////////////////////////////////
document.write("<h3> ANSWER NO:12</h3>");

let age=prompt("Enter your age")
document.write("<b>your age is:</b> ", age ,"<br>")
let currentye=new  Date().getFullYear()
let birthyear=(currentye-age);

document.write("<b>your birth year is:</b> ", birthyear ,"<br>")
document.write("<br> <hr>")

/////////////////////////////////////////////////////
document.write("<h3> ANSWER NO:13</h3>");

let  customerName=prompt('Customer Name:');
let currentMonth=prompt('Current Month:', );
let numberOfUnits=parseInt(prompt('Number of Units:',)); 
let chargesPerUnit=parseInt(prompt('Charges per Unit:', )) ;
let latePaymentSurcharge=parseInt( prompt('Late Payment Surcharge:', ));




let NetAmountPayable  = (numberOfUnits *  chargesPerUnit)
let GrossAmountPayable= (  NetAmountPayable + latePaymentSurcharge)
let DueDate = (new Date(currentMonth + " 1, " + birthyear)).toDateString();
document.write("<b>Customer Name:</b> ", customerName ,"<br>")
document.write("<b>Current Month:</b> ", currentMonth ,"<br>")
document.write("<b>Number of Units:</b> ", numberOfUnits ,"<br>")
document.write("<b>Charges per Unit:</b> ", chargesPerUnit ,"<br>")
document.write("<b>Net Amount Payable (within Due Date):</b> ", NetAmountPayable ,"<br>")
document.write("<b>Gross Amount Payable (after Due Date):</b> ", GrossAmountPayable ,"<br>")
document.write("<b>Due Date:</b> ", DueDate ,"<br>")
document.write("<br> <hr>")



