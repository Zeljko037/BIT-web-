// 1. 1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.

// var zbir = 0;
// var number =10
// for( var i=0;i<=number;i++){
//     zbir += i
// }
// console.log(zbir);

// // 2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
// var num= 4
// var cube= 0;
//primer 1
// for(var i =0;i<num;i++){
// cube = i;
// console.log('kubni broj od ' + cube + ' jednak je ' + (cube * cube * cube ));
// }
//primer 2
// for(var i =0;i<num;i++){
//     cube = i*i*i;
//     console.log('kubni broj od ' + i + ' jednak je ' + (cube));
// }


// 3. Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.

// var a  = 10;
// var zbir = 1;
// for(var i = 1;i<=a;i++){
//     zbir *= i;
    
// }
// console.log(zbir);

// 4. Write a code to display the n terms of even natural number and their sum.
//    Example:
//    Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".


// var broj = 10;
// var prikaz = 0;
// for(var i = 1;i<broj;i++){
//     if(i % 2 == 0 ){
//         prikaz = i;
//         console.log('The even number is :' + prikaz);
//     }
// }

//5.Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".

// var broj = 232;

// var a = broj.toString();
// var sum = 0;
// for(var i=0;i<a.length;i++){
//     var num = parseInt(a[i], 10)
//     sum+=num;
// }
// console.log(sum);

// var b = (broj-(broj % 100))/100;
// console.log(b)
// var c = broj - 100
// var d = (c-(c % 10))/10
// console.log(d)
// var e = broj % 10
// console.log(e)

// var sum = b+d+e;
// console.log(sum);

// puca na sve brojeve iznad     199 !!!

// var broj  =123;
// sum = 0;
// while(broj){
//     sum = broj % 10;
//     sum += Math.floor(broj%10);
    
// }
// console.log(sum);

// 6. Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

var rec ='eclip542se'
var count = ''
var sum = 0;

for(var i = 0;i<rec.length;i++){
    count = rec[i];
    if(count == 1 || ' ){
        sum++
    }
    console.log(sum)
}


