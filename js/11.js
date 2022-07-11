var kilometersElement = document.getElementById('standart-number');
var milesElement = document.getElementById('roman-number');
function solution(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split('');
  var sum = 0,
    i;

  for (i = 0; i < numbers.length; i++) {
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  }

  return sum;
}

var submitButton = document.getElementById('convertButton');

if (submitButton.addEventListener) {
  submitButton.addEventListener('click', convert, false);
  window.addEventListener(
    'load',
    function () {
      document.getElementById('mValue').value = ''; // clear last miles value on reload
      document.getElementById('kValue').innerHTML = ''; // clear previous results on reload
    },
    false
  );
} else if (submitButton.attachEvent) {
  submitButton.attachEvent('onclick', convert);

  window.attachEvent('onload', function () {
    document.getElementById('mValue').value = ''; // clear last miles value on reload
    document.getElementById('kValue').innerHTML = ''; // clear previous results on reload
  });
}
