/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

// var a = [5,-4.2, 3, 6, -7, 9];
// var b = 4;
// var result =''
// switch(b) {
//     case 5 :
//     case -4.2 :
//     case 3 :
//     case 6 :
//     case -7 :
//     case 9 :
//     result = 'yes';
//     break;
//     default:
//     result = 'No'
//     break;


// }
// console.log(result)

// for(var i =0;i<a.length;i++){
//     result = a[i];
//     if(b == result){
//         result = 'yes'
//     }
//     else{result = 'No'}
// }
// console.log(result);

/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

// var a = [-3, 11, 5, 3.4, -8];
// var b = '';
// for(var i =0;i<a.length;i++){
//     b = a[i];
//     if(b>0){
//       b= b*2  
//     }
//     console.log(b);
// }

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3       */

// var a = [4, 2, 2, -1, 6];
// var b=0;
// var c=10;
// for(var i =0;i<a.length;i++){
//     b =a[i];
//     if(c>b){
//         c=b
//     }

// }
// console.log(c + 'i njegov index je ' + i);

/*ne znam kako da prikazem Index !!!!!!*/

/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/


// nemam resenje


/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

// var a = [3, 11, -5, -3, 2];
// var b = 0;

// for(var i=0;i<a.length;i++){
//     if(a[i]>0){
        
//         b +=a[i];
//     }
  
// }
// console.log(b);


/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

var a = [2, 4, -2, 7, -2, 4, 2];
var b='';

for(var i=0;i<a.length;i++){
b+= a[i]
}

console.log(b);

// iz nekog razloga petlja u kontra smeru mi ne radi



/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

//  nemam resenje zadatka

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

// var a = [[4, 5, 6, 2], [3, 8, 11, 9]];
// for(var i= 0;i<=a.length;i++){
//     for(var j=0;j<a[i].length;j++){
//         console.log(a[i][j]);
//         }
//  }


/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8]*/

// var a = [4, 6, 2, 8, 2, 2];
// for(var i=0;i<a.length;i++){
//   if(a[i] == 2){
//     delete a[i]
//   }
//     }
//     console.log(a);
    //koliko sam razumeo na predavanju ne mozemo da sklonimo prazna mesta.

/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

// var a = [2, -2, 33, 12, 5, 8];
// var e = 78;
// var p = 3;
// for(var i=0;i<a.length;i++){
//     if(p>a.length){
//         console.log('ERROR. Postion is bigger than length')
//     }
//     a[p]=e;

// }
// console.log(a);



