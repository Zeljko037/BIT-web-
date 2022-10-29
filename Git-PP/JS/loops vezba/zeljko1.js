// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

var a = 15;

for (var i = 0; i <= a; i++) {
    if (i % 2 == 0) {
        console.log(i + ' je paran broj')
    }
    else {
        console.log(i + ' je neparn broj')
    }
}

// Write a program to sum the multiples of 3 and 5 under 1000.

var a = 1000;
var sum = 0;

for (var i = 0; i < a; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);

// Write a program to compute the sum and product of an array of integers.

var a = [1, 2, 3, 4, 5, 6];
var b = 0;
var c = 1;
for (var i = 0; i < a.length; i++) {
    b += a[i];
    c *= a[i];
}
console.log(b);
console.log(c);

// Write a program that prints the elements of the following array.

var array = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        console.log(" " + array[i][j]);
    }
}

//Write a program that outputs the sum of squares of the first 20 numbers.

sum = 0;
for (var i = 0; i <= 20; i++) {
    sum += i * i;
}
console.log(sum);

//Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.


var student = [
    ['Marko', 80],
    ['Pera', 77],
    ['Mika', 88],
    ['Raka', 95],
    ['Majk', 68]
];
var ukupno = 0;
var prosek = 0;


for (var i = 0; i < student.length; i++) {
    ukupno += student[i][1]
}
console.log(ukupno);
prosek = ukupno / student.length
console.log('prosecna ocena je ' + prosek);

if (prosek < 60) {
    console.log('ocena je F');

}
else if (prosek < 70) {
    console.log('ocena je D');
}
else if (prosek < 80) {
    console.log('ocena je C');
}
else if (prosek < 90) {
    console.log('ocena je B');
}
else if (prosek < 100) {
    console.log('ocena je A');
}

// Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

for(var i = 0;i<=100;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizbuzz');
    }
    else if(i% 3==0){
        console.log('fizz')
    }
    else if(i % 5 == 0){
        console.log('buzz')
    }
    else{console.log(i)}
}
