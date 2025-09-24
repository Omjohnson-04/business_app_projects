// SEPTEMBER 03, 2025

// let bring variable into existence
//let revenue = 5000;
//revenue = revenue +1500;

//let dollar = 0;
//dollar += 3;

// java is case-sensitive;

//camelCase is functions, varaible

//let total = 100 + 50 * 2; // 200
//let total = (100 +50) * 2; // 300

/* ATTRIBUTES
someString = " henlo "
.length gives length of string
.slice() --> .slice(2,5) --> someString.slice(2,5) --> " enl "
.trim() --> someString.trim() --> "henlo" 
.toUpperCase() --> someString.toUpperCase() --> " HENLO "
.includes() --> someString.include("e") --> true
.replace() --> someString.replace("n", "l") --> " hello "
someString.replace("n","l").trim().toUpperCase() --> "HELLO"
console.log("\"Hello"\ Jim") --> ("Hello" Jim)
*/

/* ADDING VALUE TO STRING
let name = "Carl"
let book = Dungeon Crawler
console.log(`A good book is \" ${name} ${job},`)
A good book is " Carl Dungeon Crawler
*/

/* UNDEFINED/NULL LET
let userEmail; //undefined
let lastLogin = null: //null
let lastLogin = true (lowercase, boolean)
*/

/* CONDITIONAL TRUE/FALSE
&& - both true - "AND"
|| -     or    - "at least one true"
!  -    NOT    - "reverses value"

if (orderComplete && paymentRecieved) {
    console.log("Ship the order") 
}
*/

/* LOOSE/STRICT EQUIVALENTS
==  --> 1 == "1"; true   (loose)
=== --> 1 === "1"; false (strict)
*/

/* FALSEY/ TRUTHY VALUES
false, 0, "", null, undefined, Na, N, -0
everythig else = truthy

if (!email) --> "if theres no email..."
let discount = userInput || 0.05; --> "let discount be user input or 5% discount"
*/


// SEPTEMBER 08 2025 ARRAYS

// ARRAYS (same as Python lists)
/*

- Arrays indexed from 0
["Laptop", "Phone", "Tablet"]
[   0    ,    1   ,    2    ]

- Nested Arrays (Array inside an array)
namesArray = [["Owen", "Amelia"], ["Will", "Stephen"], ["Carsen", "Max"]]
             [[       0        ]  [       1         ]  [       2       ]]
namesArray[0][1] = "Amelia"

- Array Methods
arr = [1,2,3,4,5,6]

arr.push(10) -> adds 10 to end -> [1,2,3,4,5,6,10]

my_pop = arr.pop() -> grabs the last item from array and takes it out of array => 10
console.log(arr) -> now list doesnt have last item -> [1,2,3,4,5,6]

my_shift = arr.shift()
console.log(my_shift) -> remove from start -> [2,3,4,5,6]

arr.unshift -> Add to start
arr.length -> Number of items

arr.forEach(   
    console.log(element);    -> loops through each item
) 

.reduce() -> combine into one value -> [1200, 1350, 1500, 2000] -> (0 + 1200 = 1200, 1200 + 1350 = 2550, 2550 + 1500 = 4050, 4050 + 2000 = 6050)
arr.reduce((sum, v) => sum + v, 0);

let sales = [23345, 453, 24755, 8554, 33456]
avg = sales.reduce((total_sales, sale) => total_sales + sale,0 ) sale/sales.length);

.map() -> makes a new array of a function
.filter() uses function to take items out based on that conditions

- Javascript Objects
{Key : Value}
example:
let customer = {
    name: "Alice",
    job: "Street-poet"
    salary: false,
    debt: true,
}

console.log(customer.name) -> Alice
console.log(customer["name"]) -> Alice

console.log('
    Name: ${customer.name}
    Job: ${customer.job}
)
*/


/* SEPTEMBER 15, 2025
The "if" statement
- Same as python basically

if (revenue > 100000) {
    console.log(revenue);
} else {
    console.log("Not available.");
}


COMPLEX CONDITIONS
- if $$ (and)
    - if (cartTotal > 100 && cartTotal < 200) {
    console.log(cartTotals)};

- if || (or)
    - if (cartTotal > 100 || cartTotal < 200) {
    console.log(cartTotals)};

- if ! (not)
    - if (cartTotal ! (100 || 200) {
    console.log(cartTotals)};


CHAINED IF...ELSE IF
- Starts from the tp and works way to bottom
    - If anything becomes true, it stops checking if else statements

if (orderTotal >= 600) {
    console.log("Platinum: 20% off");
}   else if (orderTotal >= 500) {
    console.log("Diamond: 15% off");
}   else if (orderTotal >= 400) {
    console.log("Gold: 10% off");
}

SWITCH STATEMENTS
- Cleaner than long if else statements

switch (departmentCode) {
    case "HR":
        console.log("redirect to HR Portal");
        break;
    case "IT":
        console.log("redirecting to IT portal")
        break;
    case "FINANCE":
        console.log("redirecting to FINANCE portal");
}

WHILE LOOPS
- Runs until condition is false

let countDown = 10;
while (countDown > 0) {
    console.log("T-minus " + count_down);
    count_down--;
}
-- = minus one from variable


FOR LOOPS
- sameish as python

let prices = [1.0, 2.0, 3.0, 4.0, 5.0]
for (let index = 0; index < prices.length; index++) {
    if (prices[index] < 3.1) {
        console.log("This is a cheap price");
    }
}


FOR-OF LOOPS
- same thing as .forEach()


FOR-IN LOOPS
- Loops through keys of an object
- "If key is 'url', console log 'url'."

for (const key in product) {
    const element = product[key];
    console.log(`${key}: ${element}`);
}

*/




/* --FUNCTIONS-- SEPTEMBER 22nd 2025
--Declaring a function--
 - Decleration is the function
  - Calling a function is calling it to do it's job
function greetUser() {
    console.log("Welcome to our business dashboard")
 }


--Returning--
function calcTotalPrice(price, taxRate) {
    return price + (price * taxRate);
} 
 - Used in tax / finance
 - Automated reporting
 - Data transformations

 --Parameters--
  - f(x)
  - Functions accept inputs (parameters
  - Types: strings, numbers, objects, arrays, even functions
function funMath(a, b, fun) {
    return fun(a, b);
}

--Side Effects--
 - Changes outside state (In this case it changes userCount)
let userCount = 0

function addUser(username) {
    userCount++;
    console.log(`Welcome ${username}. There are now ${userCount} users.`)
}

addUser("Bob")
addUser("Bobby")

--Functions as Arguments--
 - Enables modular and dynamic logic


--Quick Logic--
const name = () => {};
const multiply = (x, y) => {x * y};

--Higher Order Functions--
 - Functions that take or return other functions
*/