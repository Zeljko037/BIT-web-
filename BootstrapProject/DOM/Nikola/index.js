// var html = document.documentElement;
// console.log(html.hasChildNodes());
// console.log(html.childNodes)
// var body = html.childNodes[3];
// console.log(body);
// console.log(body.parentNode);

//console.log(document.getElementById('closer'));
//console.log(document.querySelector('#closer'));
//console.log(document.querySelector('section img'))
//console.log(document.querySelectorAll('section img'))
//console.log(document.querySelectorAll('p'))
//console.log(document.querySelector('p'))

//console.log(document.getElementsByTagName('p')) // ova metoda vraca niz
// console.log(document.getElementsByClassName('opener'))

//var section = document.querySelector('section');
// // console.log(section);
// // console.log(section.childNodes);
//for(var i = 0; i< section.childNodes.length;i++) {
    //var child = section.childNodes[i];
    // console.log(child.parentNode);
   // console.log(child.previousElementSibling);
    //console.log(child.nextElementSibling);
    //console.log(child.tagName)
//}



//textContent ili innetHTML

//za dodavanje novih



var firstParagraph = document.querySelector('p');
 firstParagraph.textContent = 'Second paragraph'
// console.log(firstParagraph);
var someText = 'Danas sam bio u Sarenici'
var stvori = document.createElement('p')
 var textNode = document.createTextNode(someText);
 stvori.appendChild(textNode);
firstParagraph.appendChild(stvori);

var selektor = document.querySelector('p')
var someText = 'jel radi sad?';
var listItem = document.createElement('p');
var text  = document.createTextNode(someText);
listItem.appendChild(text);
selektor.appendChild(listItem);
// nista u zivotu nisam teze ukucao

///////////// append radi kao push. gura na kraj 

// var p1 = document.createElement('p')
// var textNode1 = document.createTextNode('Ugasili su Ziku');
// p1.appendChild(textNode1);
// firstParagraph.replaceChild(p1, p);


var noviP = document.createElement('p');
var noviNode = document.createTextNode('radi radi. Kapiras ubilo se');
noviP.appendChild(noviNode);
selektor.replaceChild(noviP, listItem);

var img = document.querySelector('#second-image');
// var section = img.parentNode;
// section.removeChild(img);

if (img.hasAttribute('alt')) {
    img.setAttribute('alt', 'Second image description')
}

// img.removeAttribute('alt');
console.log(img.className);
img.classList.add('section-image-2')
console.log(img.classList);
 img.classList.remove('section-image');
img.classList.toggle('section-image-2')
// console.log(img.classList);


