// RGBA 255, 255, 255, 1

// Matrix
// 1 0 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0

// 1- Discover what the value on the input is.
// 2- Divide that value by 255.
// 3- Make the number with 2 decimals
// 3- Apply the value to the color matrix.
// 4- Refresh the image with the new Matrix
// 5- Create a js library.

  window.onchange = function changeValue(){
    var rValue = document.getElementById("rValue").value / 255;
    document.getElementById("rMatrix").innerHTML = rValue;

    var gValue = document.getElementById("gValue").value / 255;
    document.getElementById("gMatrix").innerHTML = gValue;

    var bValue = document.getElementById("bValue").value / 255;
    document.getElementById("bMatrix").innerHTML = bValue;

    var aValue = document.getElementById("aValue").value;
    document.getElementById("aMatrix").innerHTML = aValue;
  }

document.getElementsByTagName("feColorMatrix").setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0")

document.querySelector("feColorMatrix").
