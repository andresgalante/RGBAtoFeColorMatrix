
window.onchange = function changeValue(){
  //get our new values
  var r = document.getElementById('rValue').value;
  var g = document.getElementById('gValue').value;
  var b = document.getElementById('bValue').value;
  var a = document.getElementById('aValue').value;

  //call our rgbaMatrix instance method to set new values
  var rgbaMatrix = document.querySelector('rgba-matrix');
  rgbaMatrix.setMatrix(r,g,b,a);

  // Apply the value to the color matrix preview.
  setValues(rgbaMatrix);
  document.getElementById('selectedColor').style.backgroundColor = 'rgba(' + document.getElementById('rValue').value + ',' + document.getElementById('gValue').value + ',' + document.getElementById('bValue').value + ',' + document.getElementById('aValue').value + ')';
};

function setValues(rgbaMatrix) {
  document.getElementById("rMatrix").innerText = rgbaMatrix.r;
  document.getElementById("gMatrix").innerHTML = rgbaMatrix.g;
  document.getElementById("bMatrix").innerHTML = rgbaMatrix.b;
  document.getElementById("aMatrix").innerHTML = rgbaMatrix.a;
}

// TODO: Create a js library.

// document.getElementsByTagName("feColorMatrix")[0].getAttribute("type");
