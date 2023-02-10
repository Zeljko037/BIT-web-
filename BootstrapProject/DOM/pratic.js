// var html = document.documentElement;
// console.log(html.hasChildNodes());
// console.log(html.childNodes)
// var body = html.childNodes[3];
// console.log(body);
// console.log(body.parentNode);

// console.log(document.getElementById('closer'));
// console.log(document.querySelector('#closer'));
// console.log(document.querySelector('section img'))
// console.log(document.querySelectorAll('section img'))
// console.log(document.querySelectorAll('p'))
// console.log(document.querySelector('p'))

// console.log(document.getElementsByTagName('p'))
// console.log(document.getElementsByClassName('opener'))

// var section = document.querySelector('section');
// // console.log(section);
// // console.log(section.childNodes);
// for(var i = 0; i< section.childNodes.length;i++) {
//     var child = section.childNodes[i];
//     console.log(child.parentNode);
//     console.log(child.previousElementSibling);
//     console.log(child.nextElementSibling);
//     // console.log(child.tagName)
// }

// var firstParagraph = document.querySelector('p');
// firstParagraph.textContent = 'Second paragraph'
// console.log(firstParagraph);
// var someText = 'Danas sam bio u Sarenici'
// var p = document.createElement('p')
// var textNode = document.createTextNode(someText);
// p.appendChild(textNode);
// firstParagraph.appendChild(p);
// var p1 = document.createElement('p')
// var textNode1 = document.createTextNode('Ugasili su Ziku');
// p1.appendChild(textNode1);
// firstParagraph.replaceChild(p1, p);

// var img = document.querySelector('#second-image');
// // var section = img.parentNode;
// // section.removeChild(img);

// if (img.hasAttribute('alt')) {
//     img.setAttribute('alt', 'Second image description')
// }

// // img.removeAttribute('alt');
// console.log(img.className);
// img.classList.add('section-image-2')
// console.log(img.classList);
// img.classList.remove('section-image');
// img.classList.toggle('section-image-2')
// console.log(img.classList);
// Footer



/*Create two unordered lists on the page.
Create a function that selects the second list and applies a class that sets some
background color to it.*/

function sec() {
//console.log(document.querySelectorAll('ul'));
var target = document.querySelectorAll('ul');
var second = target[1];
second.classList.add('secondDiv');

}
sec()
/*Create a second function that, when triggered, selects all &lt;li&gt; elements on the
page.
The function also sets a class that sets some bg color to every &lt;li&gt; element.*/



function hitLi() {
    var liTarget = document.querySelectorAll('li')
    for(var i = 0; i< liTarget.length;i++) {
    liTarget[i].classList.add('liBackground');
    continue;
    }
   

}
hitLi();


/*Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the
text to uppercase.*/
 


function upper() {
    var target = document.querySelectorAll('ul');
    var last = target[target.length-1];
    last.classList.add('uppercase');
    var target2 = document.getElementsByClassName('uppercase');
var li = target2.document.querySelector('li');
var liOne = li[0];
liOne.classList.remove('uppercase');
liOne.classList.add('uppercase2');

//var lastUl = document.getElementsByClassName('uppercase');
    //var firstLi = lastUl[0];
    //firstLi.classList.remove("uppercase");
   // firstLi.classList.add('uppercase2');

  
}
upper()

