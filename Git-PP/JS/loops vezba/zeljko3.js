// Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var a = 10
var b = 0;
for (var i = 0; i <= a; i++) {
    b += i
}

console.log(b)

// Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.

var a = 2;
var b = 1;

for (var i = 0; i < 3; i++) {
    b *= i;
}

console.log(b);

// Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.

var a = 5;
var rez = 1;

for (var i = a; i > 0; i--) {
    rez *= i;
}
console.log(rez);

// Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

var a = 5;
var b = '';

for (var i = 1; i <= a * 2; i++) {
    if (i % 2 === 0) {
        if (i < a * 2) {
            b += i + ','
        }
        else if (i == a * 2) {
            b += i + ','
        }
    }
}
console.log('The even numbers are', b)


// Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".
var num = 232
var result = 0;


// result = num%10
// console.log(result);
// num=Math.floor(num/10)
// console.log(num);
// result+=num%10
// num=Math.floor(num/10)
// result+=num
// console.log(result);

for(var i = 0; i<10;i++){

    if(num>0){
        var m = num%10
 
        num=Math.floor(num/10)

        result+=m

    }
}
console.log(result);

var a = 832;

var string = a.toString();

var rez = 0;

for(var i = 0; i<string.length;i++){
    var num = Number( string[i]);
    rez +=num
}
console.log(rez);

//Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

var word = "Eclip542se";
var sumLetters = word.length;



for(var i = 0; i<=sumLetters;i++){
    if(word[i]=='1' ||
    word[i]=='2' ||
    word[i]=='3' ||
    word[i]=='4' ||
    word[i]=='5' ||
    word[i]=='6' ||
    word[i]=='7' ||
    word[i]=='8' ||
    word[i]=='9'

    ){
        sumLetters--;
    }
}
console.log(sumLetters)