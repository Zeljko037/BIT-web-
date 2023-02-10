/*● Create chat room page containing
○ Input field for writing message
○ Button for sending message
○ Area for showing sent messages
● After the Send button is clicked, the message from the input field is moved to the
area with all other messages*/

function logSubmit(event) {
    var firstCHat = document.getElementById('first');
    if(firstCHat.value){
        var p1 = document.createElement('p')
        var textNode1 = document.createTextNode(firstCHat.value);
        p1.appendChild(textNode1);
        var mainParagraph = document.getElementById('textChat');
        mainParagraph.appendChild(p1);
        firstCHat.value = '';
    }
  }
  
  