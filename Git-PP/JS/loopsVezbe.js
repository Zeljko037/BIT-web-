// for (var x = 0; x <= 10; x++) {
//     console.log(x * x);
//     }

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
//    number is odd or even, and display a message to the screen.

// for(var i =0; i<=15;i++){
//     if(i % 2 == 0){
//         console.log('broj: ' + i + ' je paran')
//     }
//     else{console.log('broj: ' + i + ' nije paran')}
// }

// var i = 0;

// while(i<15){
//     if(i % 2 == 0){
//         console.log('broj: ' + i + ' je paran')
//     }
//     else{console.log('broj: ' + i + ' nije paran')}

// i++
// }

// 2. Write a program to sum the multiples of 3 and 5 under 1000.
// var a = 1000;
// var sum = 0;
// for(var i = 0; i<a;i++){
//     if(i % 3 == 0 && i % 5 == 0 ){
//         sum += i;

//     }
//     console.log(sum);

// }


// 3. Write a program to compute the sum and product of an array of integers.

// var nizovi = [1,2,3,4,5,6,7,8,9];
// var sum = 0;

// for(var i =0;i<nizovi.length;i++){
// sum +=nizovi[i]

// }
// console.log(sum);

// 5. Write a program that prints the elements of the following array.

// var a = [

//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
//     ];

//     for(var i= 0;i<=a.length;i++){
//             for(var j=0;j<a[i].length;j++){
//                 console.log(a[i][j]);
//             }
//     }

// 6. Write a program that outputs the sum of squares of the first 20 numbers.

// var broj = 20;
// var prikaz = 0;
// for(var i=0;i<=broj;i++){
//     prikaz += i*i;
// }
// console.log(prikaz);

//7. Write a program that computes average marks of the following students. Then use this
//   average to determine the corresponding grade.

// var a = 80;
// var b = 77;
// var c = 88;
// var d = 95;
// var e = 68;
// var avr = (a+b+c+d+e)/5;
// if(avr == 100){
//     console.log('ocena proseka je A')    
// }
// else if(avr >90 && avr <100){
//     console.log('ocena je B')
// }
// else if(avr >80 && avr <=90){
//     console.log('ocena je C')
// }
// else if(avr >70 && avr <=80){
//     console.log('ocena je D')
// }
// else{console.log('ocena je E')}

// console.log(avr);


/*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).*/
// var a =''
// for(var i=1;i<100;i++){
//     a = i;
//     if(a % 5 == 0 && a % 3 == 0){
//        a = 'fizzbuzz';
//     }
//     else if(a % 3 == 0){
//         a = 'fizz';
//     }
//     else if(a % 5 == 0 && a % 3 !== 0){
//         a = 'buzz';
//     }
 
//     console.log(a);
// }