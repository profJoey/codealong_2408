// function addNumbers(a, b) {
//     return a + b;
//   }

// const result = addNumbers(2, 3); 

// console.log(result);

let history = [];

function addNumbers() {
    // Get the first input element with id 'num1'
    const num1Element = document.getElementById('num1');
    // Get the value from the input element (as a string)
    const num1Value = num1Element.value;
    // Convert the string value to a floating-point number
    const num1 = parseFloat(num1Value);

    // Get the second input element with id 'num2'
    const num2Element = document.getElementById('num2');
    // Get the value from the input element (as a string)
    const num2Value = num2Element.value;
    // Convert the string value to a floating-point number
    const num2 = parseFloat(num2Value);

    // Add the two numbers together
    const result = num1 + num2;

    // Display the result by updating the content of the <span> with id 'result'
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;

    const calculation = `${num1} - ${num2} = ${result}`;
    history.push(calculation);

    updateHistory();

  }

  function subtractNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    document.getElementById('result').textContent = result;

    const calculation = `${num1} - ${num2} = ${result}`;
    history.push(calculation);

    updateHistory();    

  }

  function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    document.getElementById('result').textContent = result;

    const calculation = `${num1} * ${num2} = ${result}`;
    history.push(calculation);

    updateHistory();

  }

  function divideNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
      const result = num1 / num2;
      document.getElementById('result').textContent = result;
    } else {
      document.getElementById('result').textContent = 'Error: Division by 0';
    }

    const calculation = `${num1} / ${num2} = ${result}`;
    history.push(calculation);

    updateHistory();

  }

  function updateHistory() {
    // Get the history container
    const historyElement = document.getElementById('history');

    // Clear previous history content
    historyElement.innerHTML = '';

    // Add each calculation in the history array as a new list item
    history.forEach(function(item) {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      historyElement.appendChild(listItem);
    });
  }