
/*Create a page that contains navigation (ul element)
Navigation should contain odd number of elements
Select the first element of the list and give it a bottom border
Select all list elements and transform their text to uppercase
Select active element of the list and change its font color
Find the middle one and change its background color*/

$(document).ready(function(){

    console.log('Hello World')

    $('li:first').addClass('design')
    $('li').css('text-transform', 'uppercase');
    $('li:active').css('background-color', 'red');
    $('li:nth-child(3)').css('background-color','orange');
  });