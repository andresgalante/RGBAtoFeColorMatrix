// Discover what the value on the input is
// Divide that value by 255.
// Make the number with 2 decimals

function parseInput(id) {
  var element = document.getElementById(id);
  var value = element.value / 255;
  value = Math.round(value*100) / 100;
  return value;
}

function getInputValue(id) {
  var element = document.getElementById(id);
  var value = element.value / 255;
  value = Math.round(value*100) / 100;
  return inputvalue;
}

// Apply the value to the color matrix preview.

function rgbValues() {
  var rValue = parseInput('rValue');
  var gValue = parseInput('gValue');
  var bValue = parseInput('bValue');
  var aValue = document.getElementById('aValue').value;

  document.getElementById("rMatrix").innerText = rValue;
  document.getElementById("gMatrix").innerHTML = gValue;
  document.getElementById("bMatrix").innerHTML = bValue;
  document.getElementById("aMatrix").innerHTML = aValue;

  return [rValue, gValue, bValue, aValue];
}

// Refresh the image with the new Matrix

function buildMatrix(rgba) {
  var matrix = '';
  matrix = matrix + `${rgba[0]} 0 0 0 0 `;
  matrix = matrix + `0 ${rgba[1]} 0 0 0 `;
  matrix = matrix + `0 0 ${rgba[2]} 0 0 `;
  matrix = matrix + `0 0 0 ${rgba[3]} 0 `;
  return matrix;
}

var feColorMatrix = document.querySelector('feColorMatrix');

window.onchange = function changeValue(){
  var rgba = rgbValues();
  var matrix = buildMatrix(rgba);
  console.log(rgba);
  console.log(matrix);
  feColorMatrix.setAttribute('values', matrix);
  document.getElementById('selectedColor').style.backgroundColor = 'rgba(' + document.getElementById('rValue').value + ',' + document.getElementById('gValue').value + ',' + document.getElementById('bValue').value + ',' + document.getElementById('aValue').value + ')';
}

// TODO: Create a js library.

// document.getElementsByTagName("feColorMatrix")[0].getAttribute("type");
