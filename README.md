# Week 08: Functions

- Functions are one of the fundamental building blocks in JavaScript.
- A function is a procedure
- A set of statements that performs a task or calculates a value
- take some `input` and returns a related `output`

```javascript
function addNumbers(a, b) {
    return a + b;
  }

const result = addNumbers(2, 3); 

console.log(result);
```

## HTML

Explanation:
- `Inputs`: We’re using two input fields (num1 and num2) to let users enter numbers.
- `Output` display: A simple <span id="result"> to show the calculation result, currently set to 0.
- No JavaScript yet: We’re only focusing on the structure here

## Add

```javascript
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
  }
```

## Subtract Numbers

```javascript
  function subtractNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    document.getElementById('result').textContent = result;
  }
```

## Function Declaration, Expression and Arrow Expression

1. Function Declaration

This is the traditional way to define a function. It can be called before its definition due to hoisting.

```javascript
function subtractNumbers() {
  /*Statements go here*/
}
```

Key Features:

- Hoisting: Can be called before the function is defined in the code.
- This Binding: Has its own this context.
- Syntax: Uses the function keyword.


2. Function Expression

```javascript
const subtractNumbers = function() {
  /*Statements go here*/
};
```

Key Features:

- Not Hoisted: Cannot be called before its definition.
- This Binding: Also has its own `this` context, but the context can differ based on how the function is called.
- Syntax: Defined using the const, let, or var keywords followed by function.

### 3. Arrow Function Expression

This is a concise way to define a function using the arrow syntax.

```javascript
const subtractNumbers = () => {
  /*Statements go here*/
};
```

Key Features:
- Not Hoisted: cannot be called before its definition.
- This Binding: Does not have its own this
- Syntax: More concise, using () => {} instead of the traditional function keyword.





## Multiply Numbers

```javascript
  function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    document.getElementById('result').textContent = result;
  }
```


## Divide Numbers

```javascript
  function divideNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
      const result = num1 / num2;
      document.getElementById('result').textContent = result;
    } else {
      document.getElementById('result').textContent = 'Error: Division by 0';
    }
  }
```

Explanation:
- **Error handling**: If num2 is 0, the function shows an error message to prevent division by zero, which would cause an error.

## History

Add this as a global variable

```javascript
let history = [];
```

Create a function to present the history

```javascript
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
```

Add this to each of the calculating functions

```javascript
    const calculation = `${num1} + ${num2} = ${result}`;
    history.push(calculation);
```


