function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
    document.getElementById("xpos").innerHTML = x;
    document.getElementById("ypos").innerHTML = y;
  
    var image = document.getElementById("myImage");
    image.style.display = '';
    image.style.position = 'absolute';
    image.style.left = x + 'px';
    image.style.top = y + 'px';
  }