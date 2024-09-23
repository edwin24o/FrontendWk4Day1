//  UNDERSTANDING DATA TYPES IN JS

// Task 1 - declaring the variables

let studentName;
let studentAge;
let studentGrade;
let studentAttendanceStatus;

// Task 2 - adding sample values

studentName = 'Edwin Olivares'
studentAge = 28;
studentGrade = 'C'
studentAttendanceStatus = false;

// Task 3 - Display info using console.log

console.log(studentName)
console.log(studentAge)
console.log(studentGrade)
console.log(studentAttendanceStatus)

console.log(studentName + ' is ' + studentAge + ' years old.' + ' and has ' + studentGrade + ' grade. His classmates say he is here and that is clearly ' + studentAttendanceStatus + '...')


// adding divider
console.log('-------------------------------------------------------------------------')

// EXPLORING JS OPERATORS

// Task 1 - declare variable

let number1;
let number2;

// Task 2 - assigning sample values

number1 = 13;
number2 = 26;

// Task 3: Perform arithmetic operations
console.log("Sum:", number1 + number2);
console.log("Difference:", number1 - number2);
console.log("Product:", number1 * number2);
console.log("Quotient:", number1 / number2);

// Task 4: Explore assignment operators

number1 -=3;
number2 +=4;

console.log("Updated number1:", number1);
console.log("Updated number2:", number2);

// Task 5: Use comparison operators

console.log("Is num1 equal to num2?", number1 === number2);
console.log("Is num1 greater than num2?", number1 > number2);
console.log("Is num1 not equal to num2?", number1 !== number2);

// Task 6: Apply logical operators

let isPositive = number1 > 0 && number2 > 0;
let isEven = number1 % 2 === 0 || number2 % 2 === 0;

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);