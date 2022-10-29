//1. Write a program that calculates the maximum of two given numbers.
var result = par(2, 3)

function par(a, b) {
    var c = a + b


    return c
}

console.log(result);

// 2. Write a program that checks if a given number is odd.

var result = parni(10)

function parni(a) {
    if (a % 2 == 0) {
        c = 'broj je paran'

        return c;
    }
}

console.log(result);

//3. Write a program that checks if a given number is a three digit long number.

var broj = check(33424)

function check(a) {

    var b = a.toString()
    console.log(b);
    var c = 0;

    for (var i = 0; i < b.length; i++) {
        c = b[i]

        console.log(c)
        if (c == 3) {
            c = 'trocifren je broj'
        }
        else {
            c = 'nije trocifren broj'
        }


        return c
    }
}

console.log(broj);

var broj = check(334)

function check(a) {
    if (a > 99 && a < 1000) {
        var c = 'trecifren je broj'
    }
    else { c = 'nije trocifren broj' }

    return c;
}

console.log(broj);

//4. Write a program that calculates an arithmetic mean of four numbers.

//7. Write a program that calculates a number of digits of a given number.


function string(a) {

    var string = a.toString();

    var rez = 0;

    for (var i = 0; i < string.length; i++) {
        var num = Number(string[i]);
        rez += num
    }
    return rez;
}

var b = string(83332);
console.log(b);

//8. Write a program that calculates a number of appearances of a given number in a given
//array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3




function brojevi(b,e) {
    var sum = 0;
    for (var i = 0; i < b.length; i++) {

        if (b[i] == e) {
            sum++
        }
    }
    return sum;
}
var a = brojevi([2, 4, 7, 8, 7, 7, 1], 7)

console.log(a);


//9. Write a program that calculates the sum of odd elements of a given array.

function parni(a){
    var sum= 0;
    for(var i = 0; i<a.length;i++){
        
        if(a[i] % 2 == 0){
            sum+=a[i];
            
        }
    }
    return sum;
}

var b = parni([1,3,5,7,9,11,12,15,16])

console.log(b);


//10. Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.

var ad = slova('Abrakadabra')


function slova(a){
    var calc=0;
    for(var i = 0; i<a.length;i++){
        if(a[i] === 'a' || a[i]== 'A'){
            calc ++
        }
    }
    return calc;
}

console.log(ad);

//11. Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc.

function sum(a,b){
    var prikaz = ''
    for(var i = 0;i<b;i++ ){
     prikaz +=a;
    }
    return prikaz;
}

var niz = sum('abc', 4)

console.log(niz)










