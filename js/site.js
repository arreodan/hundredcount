// get the start and end values from the page
// entry point of our application 
function getValues() {
  let startValue = document.getElementById("startValue").value; // startValue = "0"
  let endValue = document.getElementById("endValue").value; // startValue = "100"

  let startNumber = parseInt(startValue); //startNumber = 0
  let endNumber = parseInt(endValue); // startNumber = 100

  let numberArray = generateNumbers(startNumber, endNumber);
  displayNumbers(numberArray)
}

// generate the range of numbers to display
// Business/logic function
function generateNumbers(start, end) {

  let basketOfNumbers = [];

  for (let number = start; number <= end; number = number + 1) {
    basketOfNumbers.push(number); //[0, 1, 2, 3, ..., 100]
  }

  return basketOfNumbers;

}

// placing the generated numbers on the page and bolding the even numbers
// view function
function displayNumbers(numbers){
  // start = 10, end = 15
  // numbers = [10, 11, 12, 13, 14, 15]
  // numbers.length = 6 

  let results = '';

  for (let index = 0; index < numbers.length; index = index + 1){
    let currentNumber = numbers[index];

    results = results + `<tr><td>${currentNumber}</td></tr>`;
  }

  let tableBody = document.getElementById('results')
  tableBody.innerHTML = results;
}

    