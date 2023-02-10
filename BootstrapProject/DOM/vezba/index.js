console.log('message')

var message = document.getElementById('message');

message.innerHTML = 'Hello java script world';

var html = document.documentElement;
console.log(html.hasChildNodes());
console.log(html.childNodes)
var body = html.childNodes[1];
console.log(body);
console.log(body.parentNode);