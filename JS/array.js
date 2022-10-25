var a = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
console.log(a[5], a[9], a[0]);

var b =['monday','tuesday', 'wensday', 'thursday', 'friday', 'saturday', 'sunday']
console.log(b[6]);

var c = [2, -5, 1, -4, -11];
var d = []
console.log(c[1], c[3], c[4]);

if(c[0]<0){
    console.log('2')
}
if(c[1]<0){
    console.log('-5')
}
if(c[2]<0){
    console.log('1')
}
if(c[3]<0){
    console.log('-4')
}
if(c[4]<0){
    console.log('-11')
}

if(c[0]<0){
    console.log('2')
}

var d = [5, 15, -5, 20, 12, 18,
    72, 14, 9];

if(d[0] % 3 ==0){
    console.log('5')
}
if(d[1] % 3 ==0){
    console.log('15')
}
if(d[2] % 3 ==0){
    console.log('-5')
}
if(d[3] % 3 ==0){
    console.log('20')
}
if(d[4] % 3 ==0){
    console.log('12')
}
if(d[5] % 3 ==0){
    console.log('18')
}
if(d[6] % 3 ==0){
    console.log('72')
}
if(d[7] % 3 ==0){
    console.log('14')
}
if(d[8] % 3 ==0){
    console.log('9')
}


var t = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
    10, 26, 7]]

    console.log(t[2]);
    console.log(t[1][2]);


    //nikola predavanja. push i delete

    var a = [];
console.log(a);
a = [1, 2, 3];
console.log(a);
console.log(a[1]);
var lenght = a.length;
console.log(lenght);
a[2] = 5;
console.log(a);
a[3] = 6;
console.log(a);
a.push(4);
console.log(a);
a[10] = 11;
console.log(a);
delete a[3];
console.log(a);
a.pop();
console.log(a);
var b = [3, 4, 5]
delete b[2];
console.log(b);
b.pop();
console.log(b);
a[3] = b;
console.log(a);
console.log(a[3][0]);
var c = 'Peti element';
console.log(c[3]);