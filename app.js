// Chapter# 1 : Alert

// Q#1 
// alert("Welcome to my website")

// // Q#2 
// alert("Error! Please enter a valid password.")

// // Q#3
// alert("Welcome to JS land...\nHappy Coding!")

// Q#4

// alert("Welcome to JS Land...")
// alert("Happy Coding!")



// Q#5
// alert("Hello... I can run JS through my web browser's console");

// Q#6
// Practical, we can palce script file in html any where 


// Chapter# 2:  VARIABLES FOR STRINGS

// Q#1
// var username;


// Q#2
// var userName = "Waqar Ali";


// Q#3
// a) 
// var message;
// // b)
// message = "“Hello World”"
// // c)
// alert(message)


// // Q#4
// var userName = "Waqar Ali";
// var age = 19;
// var course = "Modern web application and development"

// alert("Name ==> " + userName)
// alert("Age ==> " + age)
// alert("Course ==> " +course)

// // Q#5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// // Q#6
// var email = "waqar@gamil.com"
// alert("My email address is " + email)


// Q#7
// var book = "“A smarter way to learn JavaScript”"
// alert("I am trying to learn from the Book " + book)


// Q#8 
// document.write("Yah! I can write HTML content through JavaScript")


// // Q#9
// var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(str)



// Chapter# 3: VARIABLES FOR NUMBERS

// Q#1
// var age = 19;
// alert(age)

// // Q#2
// var times = 11;
// alert("You have visited this site" + times + "times")

// // Q#3
// var birthYear = 2006;
// document.write("My birth year is " + birthYear)
// alert("Data type of my ddeclare variable is " + typeof (birthYear))



// // Q#4
// var visitorName = "Asad";
// var productTitle = "T-shorts";
// var Quantity = 7;
// document.write(visitorName + " Ordered " + Quantity + productTitle + "on daraz")


// Chapter# 4 VARIABLE NAMES: LEGAL & ILLEGAL


// Q#1
// var x = 10, y = 20, z = 30;


// Or use array destructuring (ES6+):
// var [x, y, z] = [2, 3, 4];




// Q#2
// legal
// var _name = "ali";     // ✅ starts with _
// var my2age = 22;       // ✅ letters followed by number
// var num_2 = 2;         // ✅ letters and underscore
// var $name = "khan";    // ✅ $ is allowed
// var myName = "khan";   // ✅ standard camelCase


// var myName = "Waqar";
// var age123 = 25;
// var _score = 100;
// var $salary = 5000;
// var user1 = "Ali";


// Illegal
// var my age = 22
// var age-my = 22
// var 2meer = "khan" 
// var #name = "ali"
// var for = 99



// var 1name = "Ali";       // starts with a number ❌
// var my-name = "Waqar";   // hyphen not allowed ❌
// var var = 10;            // reserved keyword ❌
// var @money = 100;        // special character ❌
// var first name = "Ali";  // space not allowed ❌

// Q#3
// document.write("<b>“Rules for naming JS variables”</b> <br>")

// document.write("Variable names can only contain <strong>letters, numbers, $, and _</strong>.<br>For example: <strong>$my_1stVariable</strong> <br>")
// document.write("Variables must begin with a <strong>letter, $ or _</strong>.<br>For example: <strong>$name, _name, or name</strong> <br>")
// document.write("Variable names are case <strong>sensitive</strong> <br>")

// document.write("Variable names should not be JS <strong>keywords</strong>. <br>")




// Chapter#5: MATH EXPRESSIONS
// Q#1
// var num1 = +prompt(("Enter num1: "))
// var num2 = +prompt(("Enter num2: "))
// var result = num1 + num2
// document.write("Sum of " +num1 +  " and " + num2 + " is " + result + "<br>")

// // Q#2
// var result1 = num1 - num2
// document.write("Subtraction of " +num1 +  " and " + num2 + " is " + result1 + "<br>")


// var result2 = num1 / num2
// document.write("division of " +num1 +  " and " + num2 + " is " + result2 + "<br>")


// var result3 = num1 * num2
// document.write("Subrtraction of " +num1 +  " and " + num2 + " is " + result3 + "<br>")


// var result4 = num1 % num2
// document.write("Modules of " +num1 +  " and " + num2 + " is " + result4 + "<br>")


// Q#3
// var num;
// document.write("Value after variable declaration is:" + num + "<br>")

// c
// num = 4;
// document.write("Initial value: " + num + ". <br>")

// // e 
// ++num
// document.write("Value after increment is:" + num + '. <br>')

// // g 
// num += 7
// document.write("Value after addition is:" + num + '. <br>')


// // i 
// --num
// document.write("Value after decrement is:" + num + '. <br>')

// var result = num % 5
// document.write("Output : “The remainder is : " + result + '. <br>')


// Q#4
// var oneTicketPrice = 600
// var tickets = 5
// document.write("Total cost to buy " + tickets + " tickets to a movie is " + tickets * oneTicketPrice + "PKR <br>")



// Q#5
// var table = 5;
// document.write("Table of " + table + "<br>")
// document.write(table + " X 1 = " + table * 1 + "<br>")
// document.write(table + " X 2 = " + table * 2 + "<br>")
// document.write(table + " X 3 = " + table * 3 + "<br>")
// document.write(table + " X 4 = " + table * 4 + "<br>")
// document.write(table + " X 5 = " + table * 5 + "<br>")
// document.write(table + " X 6 = " + table * 6 + "<br>")
// document.write(table + " X 7 = " + table * 7 + "<br>")
// document.write(table + " X 8 = " + table * 8 + "<br>")
// document.write(table + " X 9 = " + table * 9 + "<br>")
// document.write(table + " X 10 = " + table * 10 + "<br>")



// Q#6
// var celsius = 25;
// var fahrenheit_convert = ((celsius * 9/5) + 32)
// document.write(celsius + "ºC is " +fahrenheit_convert + "ºF <br>")

// fahrenheit = 70;
// var celsiusConvert = ((fahrenheit - 32) * 5/9)
// document.write(fahrenheit + "ºF is " +celsiusConvert + "ºC <br>")



// Q#7
// a)
// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var quantityOfItem1 = 3;
// var quantityOfItem2 = 7;
// var shipingCharges = 100;
// var result = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shipingCharges

// document.write("<h2>Shopping Cart</h2> <br>")
// document.write("Price of item 1 is " + priceOfItem1 + "<br>")
// document.write("Quantity of item 1 is " + quantityOfItem1 + "<br>")

// document.write("Price of item 2 is " + priceOfItem2 + "<br>")
// document.write("Quantity of item 2 is " + quantityOfItem2 + "<br>")

// document.write("Shopping Charges " + shipingCharges + "<br> <br>")

// document.write("Total cost of your order is  " + result + "<br>")



// Q#8
// var totalMarks = 1100;
// var obtainMarks = 777;
// var percentage = obtainMarks / totalMarks * 100
// document.write("<h2> Marks Sheet </h2> <br>")
// document.write(" Total marks: " + totalMarks + "<br>")
// document.write(" Obtained marks: " + obtainMarks +"<br>")
// document.write(" Percentage: " + percentage + "<br>")


// Q#9
// var usDollar1 = 104.80
// var saudiRiyal1 = 28
// var pakistaniCurrency = 10 * usDollar1
// var pakistaniCurrency1 = 25 * saudiRiyal1
// var totalCurrency = pakistaniCurrency + pakistaniCurrency1
// document.write("Total Currency in PKR: " +totalCurrency)
// Or 
// var totalCurrency = (10 * 104.80) + (25 * 28);
// alert(totalCurrency);
// Or 
// var usDollar1 = 104.80;
// var saudiRiyal1 = 28;

// var totalCurrency = (10 * usDollar1) + (25 * saudiRiyal1);
// alert(totalCurrency);

// Q#10
// var num = 7
// var calculation = ((num + 5) * 10) / 2;
// alert(calculation) 

// Q#11
// var currentYear = 2025;
// var birthYear = 2006;

// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;                      

// document.write("<h2>Age Calculator</h2> <br>")
// document.write("Current Year: " + currentYear + "<br>")
// document.write("Birth Year: " + birthYear + "<br>")
// document.write("They are either " + age2 + " or " + age1 + " years old <br>");


// Q#12
// var radius = 20;               // Store radius
// var pi = 3.142;               // Value of π

// document.write("Radius of a circle: " + radius)
// var circumference = 2 * pi * radius;
// document.write("The circumference is " + circumference + "<br>");


// var area = pi * radius * radius;  // or pi * Math.pow(radius, 2)
// document.write("The area is " + area);


// Q#13
// A 
// var favouriteSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountSnack = 3;

// var yearsRemaining = maxAge - currentAge;
// var totalNeeded = yearsRemaining * 365 * amountSnack;  // Use amountSnack, not amountPerDay

// document.write("<h2>Lifetime Supply Calculator</h2>");
// document.write("Favorite Snack: " + favouriteSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount Per Day: " + amountSnack + "<br><br>");
// document.write("You will need " + totalNeeded + " " + favouriteSnack + " to last you until the ripe old age of " + maxAge + ". <br>");


//Chapter # 6: MATH EXPRESSIONS

// Q#1
// var a = 10;
// document.write("<h2>Result :</h2> <br>")
// document.write("The value of a is: " + a + "<br>")
// document.write("----------------------------------- <br>")

// ++a
// document.write("The value of ++a is: " + a + "<br>")
// document.write("Now the value of a is: " + a + "<br>")


// document.write("The value of a++ is: " + a + "<br>")
// a++
// document.write("Now the value of a is: " + a + "<br>")

// --a
// document.write("The value of --a is: " + a + "<br>")
// document.write("Now the value of a is: " + a + "<br>")

// document.write("The value of a-- is: " + a + "<br>")
// a--
// document.write("Now the value of a is: " + a + "<br>")


// Q#2
// var a = 2;
// var b = 1;
// document.write("The value of b is " + b + "<br>")
// document.write("The value of a is " + a + "<br>")
// var result = --a - --b + ++b + b--;
// document.write("The value of  --a - --b + ++b + b-- is ==> " + result + "<br>")

// Q#3
// var userInput = prompt("Enter your name:  ")
// alert("Welcome, " + userInput)


// Q#4
// var table = +prompt("Enter a number: ", 5)
// document.write("The table of " + table + "<br>")
// document.write(table + " x 1 = " + table * 1 + "<br>")
// document.write(table + " x 2 = " + table * 2 + "<br>")
// document.write(table + " x 3 = " + table * 3 + "<br>")
// document.write(table + " x 4 = " + table * 4 + "<br>")
// document.write(table + " x 5 = " + table * 5 + "<br>")
// document.write(table + " x 6 = " + table * 6 + "<br>")
// document.write(table + " x 7 = " + table * 7 + "<br>")
// document.write(table + " x 8 = " + table * 8 + "<br>")
// document.write(table + " x 9 = " + table * 9 + "<br>")
// document.write(table + " x 10 = " + table * 10 + "<br>")


// Q#5
// a) Three subjects
// var sub1 = prompt("Enter the subject 1: ");
// var sub2 = prompt("Enter the subject 2: ");
// var sub3 = prompt("Enter the subject 3: ");

// // b) Total per subject
// var totalPerSub = 100;

// // Marks
// var mark1 = +prompt("Enter the subject 1 marks: ");
// var mark2 = +prompt("Enter the subject 2 marks: ");
// var mark3 = +prompt("Enter the subject 3 marks: ");

// // Individual percentages
// var perc1 = (mark1 / totalPerSub) * 100;
// var perc2 = (mark2 / totalPerSub) * 100;
// var perc3 = (mark3 / totalPerSub) * 100;

// // Totals
// var totalMarks = totalPerSub * 3;
// var obtainedMarks = mark1 + mark2 + mark3;
// var overallPerc = (obtainedMarks / totalMarks) * 100;

// // Output
// document.write("<h2>Subject Total Marks Obtained Marks Percentage</h2>");
// document.write("<table border='1' cellspacing='0' cellpadding='5'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

// document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + mark1 + "</td><td>" + Math.round(perc1) + "%</td></tr>");
// document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + mark2 + "</td><td>" + Math.round(perc2) + "%</td></tr>");
// document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + mark3 + "</td><td>" + Math.round(perc3) + "%</td></tr>");

// document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th><th>" + Math.round(overallPerc) + "%</th></tr>");
// document.write("</table>");



// Chapter# 7 USER INPUT & CONDITIONAL STATEMENT
// Q#1 
// var cityName = prompt("Enter a city name: ").toLowerCase()
// if (cityName === "karachi"){
//     alert("Welcome to city of lights")
// }

// var gender = prompt("Enter your gender: ").toLowerCase()
// if(gender === "male") {
//     alert("Good morning Sir")
// } else if (gender === "female"){
//     alert("Good Morning Ma'am")
// } else("Enter the correct gender(male or female)")

// var signalColors = prompt("Enter the signal color name: ").toLowerCase()
// if(signalColors === "red"){
//     alert("Must Stop")
// } else if(signalColors === "yellow"){
//     alert("Ready to move")
// } else if(signalColors === "green"){
//     alert("Move now")
// } else{
//     alert("Enter the correct color(red, yellow, and green")
// }

// // Q#4
// var remainigFuel = +prompt("Enter the remainingfuel: ")
// if(remainigFuel === 0.25 ){
//     alert("Please refill the fuel in your car")
// }


// Q#5
// var sub1 = +prompt("Enter the marks of subject 1");
// var sub2 = +prompt("Enter the marks of subject 2");
// var sub3 = +prompt("Enter the marks of subject 3");
// var totalMarks = +prompt("Enter the total marks: ")
// var obtainedMarks = sub1 + sub2 + sub3;
// var percentage = (obtainedMarks / totalMarks) * 100;
// var grade;
// var remarks;
// if(percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent"
// } else if (percentage >= 70){
//     grade = "A"
//     remarks = "Good"
// } else if (percentage >= 60){
//     grade = "B"
//     remarks = "You need to improve"
// } else if (percentage < 60){
//     grade = "fail"
//     remarks = "Sorry"
// }

// document.write("<h2>Marks Sheet</h2>" + "<br>")
// document.write("Total marks :", totalMarks + "<br>")
// document.write("Marks obtained :", obtainedMarks + "<br>")
// document.write("Percentage :", percentage + "<br>")
// document.write("Grade:", grade + "<br>")
// document.write("Remarks :", remarks + "<br>")


// Q#7
// var secretNum = 7;
// var userNum = +prompt("Enter a number (1–10): ")
// if(userNum === secretNum){
//     alert("Bingo! Correct answer.")
// } else if(userNum + 1 === secretNum || userNum - 1 === secretNum){
//     alert("Close enough to the correct answer.")
// }  else {
//     alert("Sorry, try again!");
// }

// Q#8
// var numberCheck = +prompt("Enter a number: ")
// // if(numberCheck % 2 === 0){
// if(numberCheck % 2 !== 1){
//     alert("The Number " + numberCheck + " is even!" )
// } else{
//     alert("The number " + numberCheck + " is odd!")
// }

// Q#10
// var temp = +prompt("Enter the temperature to know about weather: ")
// if(temp > 40){
//     alert("It is too hot outside")
// } else if(temp > 30){
//     alert("The Weather today is Normal")
// } else if(temp > 20){
//     alert("Today's Weather is cool.")
// } else if(temp > 10){
//     alert("OMG! Toady's weather is so Cool.")
// } else{
//     alert("It is out of range of cooling..")
// }


// Q#11
// var userNum1 = +prompt("Enter the first num: ")
// var userNum2 = +prompt("Enter the second num: ")
// var selectOperation = prompt("Select operation (-, +, * , /, %)")
// var result;

// if(selectOperation === "+"){
//     result = userNum1 + userNum2
// } else if(selectOperation === "-"){
//     result = userNum1 - userNum2
// } else if (selectOperation === "*"){
//     result = userNum1 * userNum2
// } else if (selectOperation === "/"){
//     if(userNum2 === 0){
//         alert("Cannot divide by zero!");
//         } else{
//         result = userNum1 / userNum2
//     }
// }  else if (selectOperation === "%"){
//     if(userNum2 === 0){
//         alert("Cannot take modulus with zero!")
//     } else{
//         result = userNum1 % userNum2;
//     } 
// } else{
//     alert("Invalid operation selected!")
// }
// if(result !== undefined){
//     alert("Result is: "+ result)
// }


// Chapter # 8
// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// Q#1
// var character = prompt("Enter a character: ")
// var ascii = character.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57){
//     alert("You entered a Number.")
// } else if (ascii >= 65 && ascii <= 90){
//     alert("You entered an uppercase letter.")
// } else if (ascii >= 97 && ascii <= 122) {
//       alert("You entered a Lowercase Letter");
// } else {
//       alert("This is neither a number nor an English letter.");
// }
/*
Explanation

charCodeAt(0) → gives ASCII value of first character.

Numbers: 48–57 (0–9)

Uppercase letters: 65–90 (A–Z)

Lowercase letters: 97–122 (a–z)
 */


// Q#2
// var num1 = +prompt("Enter first integer:");
// var num2 = +prompt("Enter second integer:");

// if(num1 > num2){
//     alert("The larger number is: " + num1 )
// } else if(num2 > num1){
//     length("The larger number is: " + num2)
// } else {
//     alert("Both numbers are equal: " + num1)
// }

// Q#3
// var numberChecking = +prompt("Enter a number: ")
// if(numberChecking > 0){
//     alert("The number "+ numberChecking +" is postive")
// } else if(numberChecking < 0){
//     alert("The number "+ numberChecking +" is negative ")
// } else{
//     alert("The number is zero")
// }

// Q#4
// var character = prompt("Enter a character: ").toLowerCase()
// // var vowels = ["a", "e", "i", "o", "u"];

// // if (vowels.includes(character)) { 
// // or 
// // if("aeiou".includes(character)){
// // or 
// if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
//     alert(true)
// } else{
//     alert(false)
// }


// Q#5
// var password = "admin";
// var userPassword = prompt("Enter password: ")
// if(!userPassword){
//     alert("Please enter your password")
// } else  if(userPassword === password){
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password")
// }

// Q#6
var greeting;
var hour = 13;
if(hour < 18){
    greeting = "Good day"
} else {
    greeting("Good evening")
}
alert(greeting)

// or 
// var hour = 13;
// var greeting = hour < 18 ? "Good day" : "Good evening";
// console.log(greeting);