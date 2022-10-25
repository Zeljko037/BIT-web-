// var a = 6;
// var result = '';

// switch (a) {
//     case 1:
//         result = 'ponedeljak';
//         break;
//     case 2:
//         result = 'utorak';
//         break;
//     case 3:
//         result = 'sreda';
//         break;
//     case 4:
//         result = 'cetvrtak';
//         break;
//     case 5:
//         result = 'petak'
//         break;
//     case 6:
//         result = 'subota'
//         break;
//     case 7:
//         result = 'nedelja'
//         break;
//     default: 
//         result = 'rezultat mora da bude izmedju 1 i 7'
//         break;
// }
// console.log(result)

// 3.
// var a = 6;
// var result = '';
// switch(a){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     result = 'it\'s a weekday'
//     break;
//     default:
//     result = 'it\'s a weekend'
// }
// console.log(result);

// 4.

// var a = 12;
// var result = '';

// switch(a){
//     case 1:
//         result = 'januar';
//         break;
//     case 2:
//         result = 'februar';
//         break;
//     case 3:
//         result = 'mart';
//         break;
//     case 4:
//         result = 'april';
//         break;
//     case 5:
//         result = 'maj';
//         break;
//     case 6:
//         result = 'jun';
//         break;
//     case 7:
//         result = 'jul';
//         break;
//     case 8:
//         result = 'avgust';
//         break;
//     case 9:
//         result = 'septembar';
//         break;
//     case 10:
//         result = 'oktobar';
//         break;
//     case 11:
//         result = 'novembar';
//         break;
//     case 12:
//         result = 'decembar';
//         break;
//     default:
//         result = 'mora biti izmedu 1 i 12';
//         break;
// }
// console.log(result);

// 5.

// var a = 1111;
// var result = '';

// switch(a){
//     case 3:
//     case 4:
//     case 5:
//     result = 'prolece';
//     break;
//     case 6:
//     case 7:
//     case 8:
//     result = 'leto';
//     break;
//     case 9:
//     case 10:
//     case 11:
//     result = 'jesen';
//     break;
//     case 12:
//     case 1:
//     case 2:
//     result = 'zima';
//     break;
//     default:
//     result= 'unos mora biti izmedju 1 i 12'
// }
// console.log(result);

// 6.

// var a ='F';
// var result ='';

// switch(a){
//     case 'A':
//         result = 'Good job'
//         break;
//     case 'B':
//         result = 'Pretty good'
//         break;
//     case 'C':
//         result = 'Passed'
//         break;
//     case 'E':
//         result = 'Not so good'
//         break;
//     case 'F':
//         result = 'Failed'
//         break;
//     default:
//         result = 'Unknown grade'
//         break;
        
// }
// console.log(result);

// 7.
// var a = 'Rijeka'
// var result = '';

// switch(a){
//     case 'Boston':
//     case 'New York':
//     case 'Santa Cruz':
//     case 'San Diego':
//     case 'San Francisco':
//     case 'Chicago':
//     result = 'USA';
//     break;
//     case 'Zagreb':
//     case 'Rijeka':
//     case 'Split':
//     case 'Zadar':   
//     result = 'Hrvatska';
//     break;
//     case 'Pirot':
//     case 'Sombor':
//     case 'Cacak':
//     result = 'Srbija';
//     break;
//     case 'Skoplje':
//     case 'Tetvo':
//     result= 'Makedonija';
//     break;
//     case 'Sofija':
//     result= 'Bugarska';
//     break;

// }
// console.log(result);

// 8.

var a = 3;
var b = 0;
var c ='/'
var result = '';

switch (c){
    case '+':
        result = a+b;
        break;
    case '-':
        result = a-b;
        break;
    case '/':
        if(b == 0){
            result = 'nije deljivo sa nulom'
        }
        else{ result = a/b;}
        break;
    case '*':
        result = a*b;
        break;
    default:
        result= 'nije deljivo sa nulom';
        break;
}
console.log(result);