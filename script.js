// creating global intially for num1 

var selectedInput = "num1"; 


    // https://www.geeksforgeeks.org/javascript-number-parsefloat-method/ 
    // entering the values with clicking numbers in calculator getting in only first num1 val textbox
    // then i checked from chatgpt used for reference for differentiating the values of num1 and num2
    // then i learned and created switchinput function in my js
    // i learned much from this after connecting the html and js for num1 and num2.
    function addToInput(number) {
      var input = document.getElementById(selectedInput);
      input.value += number;
    }
    // regular operators
    function add() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 + num2;
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    function subtract() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 - num2;
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    function multiply() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 * num2;
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    function divide() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 / num2;
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    // scientific operators
    // we use inbuild functions or methods like sqrt. 

    function squareRoot() {
      var num = parseFloat(document.getElementById(selectedInput).value);
      var result = Math.sqrt(num);
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    function sine() {
      var num = parseFloat(document.getElementById(selectedInput).value);
      var result = Math.sin(num);
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    function cosine() {
      var num = parseFloat(document.getElementById(selectedInput).value);
      var result = Math.cos(num);
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    function tangent() {
      var num = parseFloat(document.getElementById(selectedInput).value);
      var result = Math.tan(num);
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    function power() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = Math.pow(num1, num2);
      document.getElementById("result").innerHTML = "Result: " + result;
    }

    // when we switch from num 1 to num 2 we need this for changing of entering the values
    function switchInput(input) {
      selectedInput = input;
    }